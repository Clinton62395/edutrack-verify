export default function InvalidCertificate({ matricule }) {
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-6">
      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-md w-full text-center space-y-6">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Certificat Invalide
          </h1>
          <p className="text-[#6B7280] text-sm leading-relaxed">
            Aucun certificat ne correspond au matricule
          </p>
          {matricule && (
            <p className="mt-2 font-mono text-red-400/80 text-sm bg-red-500/5 border border-red-500/10 rounded-lg px-4 py-2 inline-block">
              {matricule}
            </p>
          )}
        </div>

        {/* Warning card */}
        <div className="bg-[#111118] border border-[#1F2937] rounded-2xl p-5 text-left space-y-3">
          <p className="text-[#9CA3AF] text-xs font-mono uppercase tracking-wider">
            Raisons possibles
          </p>
          {[
            'Le matricule a été saisi incorrectement',
            'Ce certificat n\'a pas été émis par EduTrack',
            'Le certificat a été révoqué',
          ].map((reason, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#374151] mt-1.5 shrink-0" />
              <p className="text-[#6B7280] text-sm">{reason}</p>
            </div>
          ))}
        </div>

        {/* EduTrack branding */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="w-6 h-6 rounded-md bg-[#2563EB] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <span className="text-[#4B5563] text-xs">
            Système de vérification <span className="text-[#6B7280] font-medium">EduTrack</span>
          </span>
        </div>
      </div>
    </div>
  )
}
