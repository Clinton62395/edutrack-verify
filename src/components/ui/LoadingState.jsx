export default function LoadingState() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
      <div className="text-center space-y-4">
        {/* Animated logo */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 rounded-2xl border-2 border-[#2563EB]/30 animate-ping" />
          <div className="relative w-16 h-16 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/40 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
        </div>
        <p className="text-[#6B7280] text-sm font-mono tracking-wider">
          VÉRIFICATION EN COURS...
        </p>
      </div>
    </div>
  )
}
