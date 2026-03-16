import { useState } from "react";

export default function HomePage() {
  const [matricule, setMatricule] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    const cleaned = matricule.trim().toUpperCase();

    if (!cleaned) {
      setError("Veuillez saisir un matricule");
      return;
    }

    // Validation format EDU-YYYY-XXXXXXX
    if (!cleaned.match(/^EDU-\d{4}-[A-Z0-9]+$/)) {
      setError("Format invalide. Exemple : EDU-2026-1KSCVQ");
      return;
    }

    window.location.href = `/verify/${cleaned}`;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleVerify();
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-6">
      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-10 blur-[120px] pointer-events-none bg-[#2563EB]" />

      <div className="relative w-full max-w-md space-y-8">
        {/* ── LOGO + TITRE ── */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-[#2563EB] flex items-center justify-center shadow-lg shadow-[#2563EB]/20">
              <img
                src="/logo.png"
                alt="logo"
                className="w-16 h-16 rounded-2xl"
              />
            </div>
          </div>

          <div>
            <h1
              className="text-3xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              EduTrack
            </h1>
            <p className="text-[#6B7280] text-sm">
              Vérification de certificats
            </p>
          </div>
        </div>

        {/* ── CARD ── */}
        <div className="bg-[#0D0D14] border border-[#1F2937] rounded-3xl p-8 space-y-6">
          <div>
            <h2 className="text-white font-semibold text-lg mb-1">
              Vérifier un certificat
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Saisissez le matricule figurant sur le certificat pour confirmer
              son authenticité.
            </p>
          </div>

          {/* Input */}
          <div className="space-y-2">
            <label className="text-[#4B5563] text-xs font-mono uppercase tracking-widest">
              Matricule
            </label>
            <input
              type="text"
              value={matricule}
              onChange={(e) => {
                setMatricule(e.target.value);
                setError("");
              }}
              onKeyDown={handleKeyDown}
              placeholder="EDU-2026-1KSCVQ"
              className="w-full bg-[#111118] border border-[#1F2937] focus:border-[#2563EB] rounded-xl px-4 py-3.5 text-white font-mono text-sm placeholder-[#374151] outline-none transition-colors"
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
            />
            {error && (
              <p className="text-red-400 text-xs flex items-center gap-1.5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            onClick={handleVerify}
            className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Vérifier le certificat
          </button>
        </div>

        {/* ── INFO ── */}
        <div className="bg-[#0D0D14] border border-[#1F2937] rounded-2xl p-4 flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#111118] border border-[#1F2937] flex items-center justify-center shrink-0 mt-0.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div>
            <p className="text-[#9CA3AF] text-xs font-medium mb-1">
              Où trouver le matricule ?
            </p>
            <p className="text-[#6B7280] text-xs leading-relaxed">
              Le matricule est imprimé sur le certificat PDF, sous le nom du
              titulaire. Il commence toujours par{" "}
              <span className="font-mono text-[#9CA3AF]">EDU-</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-[#374151] text-xs">
          Système de certification{" "}
          <span className="text-[#4B5563] font-medium">EduTrack</span> ·{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
