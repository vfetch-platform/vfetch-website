export function PhoneMockup() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D7B6C]/30 to-[#D97706]/30 rounded-[40px] blur-3xl scale-90" />

      {/* Phone frame */}
      <div className="relative w-[260px] h-[520px] bg-gray-900 rounded-[40px] shadow-2xl border-4 border-gray-700 overflow-hidden animate-float">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="w-full h-full bg-gradient-to-br from-[#0B6B5E] to-gray-900 flex flex-col">
          {/* Status bar */}
          <div className="h-8" />
          {/* App header */}
          <div className="px-4 pt-2 pb-3">
            <p className="text-gray-400 text-[10px]">Good afternoon 👋</p>
            <h2 className="text-white font-bold text-sm">Find your item</h2>
          </div>
          {/* Search bar */}
          <div className="mx-4 bg-white/10 rounded-xl px-3 py-2 flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full border border-white/40" />
            <span className="text-white/50 text-[10px]">Describe your lost item…</span>
          </div>
          {/* Result card 1 */}
          <div className="mx-4 bg-white/10 rounded-2xl p-3 mb-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#0D7B6C]/60 flex items-center justify-center text-white text-xs font-bold">
                95%
              </div>
              <div>
                <p className="text-white text-[11px] font-semibold">Black Leather Wallet</p>
                <p className="text-gray-400 text-[9px]">Found at The Crown Pub</p>
              </div>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[95%] h-full bg-gradient-to-r from-[#0D7B6C] to-[#D97706] rounded-full" />
            </div>
            <p className="text-[#89f5e7] text-[9px] mt-1">95% match confidence</p>
          </div>
          {/* Result card 2 */}
          <div className="mx-4 bg-white/10 rounded-2xl p-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#D97706]/40 flex items-center justify-center text-white text-xs font-bold">
                82%
              </div>
              <div>
                <p className="text-white text-[11px] font-semibold">iPhone 14 (Black)</p>
                <p className="text-gray-400 text-[9px]">Found at City Hotel</p>
              </div>
            </div>
          </div>
          {/* Bottom nav */}
          <div className="mt-auto mx-4 mb-4 bg-white/10 rounded-2xl px-4 py-2 flex justify-between">
            {(["🔍", "📋", "🔔", "👤"] as const).map((emoji, i) => (
              <button
                key={i}
                className={`text-base ${i === 0 ? "text-[#89f5e7]" : "text-white/40"}`}
                aria-label={["Search", "Claims", "Notifications", "Profile"][i]}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
