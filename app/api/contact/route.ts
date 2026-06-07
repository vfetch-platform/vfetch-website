export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    type: "OAuth2",
    user: process.env.SMTP_USER,
    clientId: process.env.SMTP_CLIENT_ID,
    clientSecret: process.env.SMTP_CLIENT_SECRET,
    refreshToken: process.env.SMTP_REFRESH_TOKEN,
  },
});

// In-memory rate limiter: max 5 requests per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

function escapeHtml(str: string): string {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  // CSRF: verify same-origin
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host && !origin.includes(host)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json();
  const { name, venue, email, message, website } = body;

  // Honeypot: bots fill hidden fields, humans leave them empty
  if (website) {
    return NextResponse.json({ ok: true });
  }

  // Input validation
  if (
    !name?.trim() ||
    name.length > 100 ||
    !venue?.trim() ||
    venue.length > 200 ||
    !email?.trim() ||
    email.length > 254 ||
    !EMAIL_REGEX.test(email) ||
    /[\r\n]/.test(email) ||
    !message?.trim() ||
    message.length > 5000
  ) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const safeName = escapeHtml(name.trim());
  const safeVenue = escapeHtml(venue.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replaceAll("\n", "<br/>");

  try {
    await transporter.sendMail({
      from: `"VFetch Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email.trim(),
      subject: `VFetch Demo Request - ${venue.trim()}`,
      text: `Name: ${name}\nVenue: ${venue}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#00685f;">New Demo Request via VFetch</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6d7a77;font-size:14px;">Name</td><td style="padding:8px 0;font-weight:600;">${safeName}</td></tr>
            <tr><td style="padding:8px 0;color:#6d7a77;font-size:14px;">Venue</td><td style="padding:8px 0;font-weight:600;">${safeVenue}</td></tr>
            <tr><td style="padding:8px 0;color:#6d7a77;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#00685f;">${safeEmail}</a></td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e7eeff;margin:20px 0;" />
          <p style="color:#3d4947;line-height:1.6;">${safeMessage}</p>
          <p style="font-size:12px;color:#bcc9c6;margin-top:32px;">Reply directly to this email to respond to ${safeName}.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
