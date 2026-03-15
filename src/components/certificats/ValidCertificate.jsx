import { useState } from 'react'

function formatDate(timestamp) {
  if (!timestamp) return '—'
  // Firestore timestamp has seconds property
  const date = timestamp.seconds
    ? new Date(timestamp.seconds * 1000)
    : new Date(timestamp)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function ValidCertificate({ certificate }) {
  const [copied, setCopied] = useState(false)

  const brandColor = certificate.brandColor || '#2563EB'

  const handleCopy = () => {
    navigator.clipboard.writeText(certificate.matricule)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-4 py-12">
      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 blur-[120px] pointer-events-none"
        style={{ backgroundColor: brandColor }}
      />

      <div className="relative w-full max-w-lg space-y-4">

        {/* ── VERIFIED BADGE ── */}
        <div className="flex justify-center">
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest border"
            style={{
              backgroundColor: `${brandColor}15`,
              borderColor: `${brandColor}30`,
              color: brandColor,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            CERTIFICAT VÉRIFIÉ
          </div>
        </div>

        {/* ── MAIN CARD ── */}
        <div className="bg-[#0D0D14] border border-[#1F2937] rounded-3xl overflow-hidden">

          {/* Top accent bar */}
          <div className="h-1 w-full" style={{ backgroundColor: brandColor }} />

          {/* Header */}
          <div className="px-8 pt-8 pb-6 border-b border-[#1F2937]">
            <div className="flex items-start justify-between gap-4">
              <div>
                {/* EduTrack logo */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: brandColor }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <span className="text-[#6B7280] text-xs font-mono tracking-wider">EduTrack</span>
                </div>

                <h1
                  className="text-3xl font-bold text-white leading-tight mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {certificate.learnerName}
                </h1>
                <p className="text-[#6B7280] text-sm">a complété avec succès</p>
              </div>

              {/* Seal */}
              <div
                className="shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: `${brandColor}40`, backgroundColor: `${brandColor}10` }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="1.5">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
            </div>
          </div>

          {/* Formation title */}
          <div className="px-8 py-6 border-b border-[#1F2937]">
            <p className="text-[#4B5563] text-xs font-mono uppercase tracking-widest mb-2">
              Formation
            </p>
            <h2
              className="text-xl font-semibold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {certificate.formationTitle}
            </h2>
            <p className="text-[#6B7280] text-sm mt-1">
              Dispensée par <span className="text-[#9CA3AF] font-medium">{certificate.trainerName}</span>
            </p>
          </div>

          {/* Details grid */}
          <div className="px-8 py-6 grid grid-cols-2 gap-4 border-b border-[#1F2937]">
            <DetailItem
              label="Date d'émission"
              value={formatDate(certificate.issuedAt)}
            />
            <DetailItem
              label="Statut"
              value="Valide"
              valueStyle={{ color: '#10B981' }}
            />
          </div>

          {/* Matricule */}
          <div className="px-8 py-5">
            <p className="text-[#4B5563] text-xs font-mono uppercase tracking-widest mb-3">
              Matricule de vérification
            </p>
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-between gap-3 bg-[#111118] border border-[#1F2937] hover:border-[#374151] rounded-xl px-4 py-3 transition-colors group"
            >
              <span className="font-mono text-sm text-white tracking-widest">
                {certificate.matricule}
              </span>
              <span className="text-[#4B5563] group-hover:text-[#6B7280] transition-colors shrink-0">
                {copied ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>

        {/* ── DOWNLOAD BUTTON ── */}
        {certificate.certificateUrl && (
          <a
            href={certificate.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: brandColor }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Télécharger le certificat PDF
          </a>
        )}

        {/* Footer */}
        <p className="text-center text-[#374151] text-xs">
          Vérifié par le système de certification{' '}
          <span className="text-[#4B5563] font-medium">EduTrack</span>{' '}
          · {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}

function DetailItem({ label, value, valueStyle = {} }) {
  return (
    <div>
      <p className="text-[#4B5563] text-xs font-mono uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="text-[#E5E7EB] text-sm font-medium" style={valueStyle}>
        {value}
      </p>
    </div>
  )
}
