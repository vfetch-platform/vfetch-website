"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendlyModal({ isOpen, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Open/close the native dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Sync native Escape close back to parent state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handler = () => onClose();
    dialog.addEventListener("cancel", handler);
    return () => dialog.removeEventListener("cancel", handler);
  }, [onClose]);

  // Init Calendly widget imperatively when modal opens
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const init = () => {
      if (globalThis.window?.Calendly && containerRef.current) {
        containerRef.current.replaceChildren();
        globalThis.window.Calendly.initInlineWidget({
          url: "https://calendly.com/vfetchedi/30min?background_color=fafbfc&text_color=111827&primary_color=0d7b6c",
          parentElement: containerRef.current,
        });
      }
    };

    if (globalThis.window?.Calendly) {
      init();
    } else {
      const script = document.querySelector<HTMLScriptElement>(
        'script[src*="calendly.com/assets/external/widget.js"]'
      );
      script?.addEventListener("load", init, { once: true });
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="m-auto w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      onClose={onClose}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB]">
        <div>
          <p className="text-sm font-bold text-[#111827]">Book a Demo</p>
          <p className="text-xs text-[#6B7280]">30 minutes with the VFetch team</p>
        </div>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-8 h-8 rounded-lg text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6] transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>
      <div ref={containerRef} style={{ minWidth: 320, height: 660 }} />
    </dialog>
  );
}
