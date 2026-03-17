export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-[0.08] blur-[120px] pointer-events-none bg-[#2563EB]" />

      <div className="relative max-w-2xl mx-auto px-6 py-16">

        {/* ── HEADER ── */}
        <div className="mb-12">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 mb-10 w-fit">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <span className="text-[#6B7280] text-sm font-medium">EduTrack</span>
          </a>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 mb-6">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-[#2563EB] text-xs font-semibold tracking-wide">
              POLITIQUE DE CONFIDENTIALITÉ
            </span>
          </div>

          <h1
            className="text-4xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Vos données,<br />notre responsabilité
          </h1>
          <p className="text-[#6B7280] text-sm leading-relaxed">
            Dernière mise à jour : <span className="text-[#9CA3AF]">mars 2026</span>
          </p>
        </div>

        {/* ── SECTIONS ── */}
        <div className="space-y-8">

          <Section
            number="01"
            title="Données collectées"
            color="#2563EB"
          >
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
              EduTrack collecte uniquement les données nécessaires au bon fonctionnement de la plateforme :
            </p>
            <ul className="space-y-2">
              {[
                "Nom complet et adresse email lors de l'inscription",
                "Progression dans les formations (leçons complétées, résultats de quiz)",
                "Token de notification push pour les alertes",
                "Photo de profil (optionnelle, fournie par l'utilisateur)",
                "Données de présence aux sessions de formation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                  <span className="text-[#9CA3AF] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="02" title="Utilisation des données" color="#10B981">
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul className="space-y-2">
              {[
                "Permettre l'accès sécurisé à la plateforme",
                "Suivre votre progression pédagogique et calculer vos statistiques",
                "Envoyer des notifications relatives à vos formations",
                "Générer vos certificats de réussite officiels",
                "Permettre à votre formateur de suivre votre avancement",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 shrink-0" />
                  <span className="text-[#9CA3AF] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="03" title="Stockage et sécurité" color="#7C3AED">
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Vos données sont stockées sur <span className="text-[#E5E7EB] font-medium">Firebase</span> (Google Cloud),
              sécurisées par chiffrement SSL et des règles d'accès strictes.
              Seuls vous et votre formateur avez accès à vos données de progression.
              Aucune donnée n'est stockée en local sans chiffrement.
            </p>
          </Section>

          <Section number="04" title="Partage des données" color="#F59E0B">
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-3">
              EduTrack <span className="text-[#E5E7EB] font-semibold">ne vend ni ne partage</span> vos
              données personnelles à des tiers commerciaux.
            </p>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Vos données de progression sont uniquement partagées avec votre formateur
              dans le cadre strict de votre formation. Les certificats générés sont
              publiquement vérifiables via QR code — seuls votre nom, la formation
              et la date d'obtention sont visibles publiquement.
            </p>
          </Section>

          <Section number="05" title="Vos droits" color="#EF4444">
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
              Conformément aux bonnes pratiques de protection des données, vous pouvez à tout moment :
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: "🗑", text: "Demander la suppression de votre compte et de toutes vos données" },
                { icon: "📋", text: "Accéder à l'ensemble de vos données personnelles" },
                { icon: "✏️", text: "Corriger ou mettre à jour vos informations depuis l'application" },
                { icon: "📤", text: "Exporter votre historique de progression" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#111118] rounded-xl p-3 border border-[#1F2937]">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-[#9CA3AF] text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section number="06" title="Notifications push" color="#06B6D4">
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              EduTrack envoie des notifications push uniquement pour des événements
              liés à vos formations : code de présence, nouveau module, résultat de quiz,
              certificat disponible. Vous pouvez désactiver les notifications optionnelles
              depuis les paramètres de l'application à tout moment.
            </p>
          </Section>

          <Section number="07" title="Modifications" color="#6B7280">
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Cette politique peut être mise à jour pour refléter les évolutions
              de l'application. Les utilisateurs seront informés de tout changement
              majeur via une notification dans l'application.
            </p>
          </Section>

        </div>

        {/* ── CONTACT ── */}
        <div className="mt-12 p-6 bg-[#0D0D14] border border-[#1F2937] rounded-2xl">
          <p className="text-[#4B5563] text-xs font-mono uppercase tracking-widest mb-3">
            Contact
          </p>
          <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
            Pour toute question relative à vos données ou pour exercer vos droits,
            contactez-nous directement :
          </p>
          <a
            href="mailto:billydoumbouya5210@gmail.com"
            className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-medium hover:text-[#3B82F6] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            billydoumbouya5210@gmail.com
          </a>
        </div>

        {/* ── FOOTER ── */}
        <div className="mt-10 flex items-center justify-between">
          <p className="text-[#374151] text-xs">
            © {new Date().getFullYear()} <span className="text-[#4B5563] font-medium">EduTrack</span> — Tous droits réservés
          </p>
          <a
            href="/"
            className="text-[#4B5563] text-xs hover:text-[#6B7280] transition-colors"
          >
            ← Retour
          </a>
        </div>

      </div>
    </div>
  )
}

// ─────────────────────────────────────────
// SECTION COMPONENT
// ─────────────────────────────────────────
function Section({ number, title, color, children }) {
  return (
    <div className="bg-[#0D0D14] border border-[#1F2937] rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
          style={{ backgroundColor: `${color}18`, color }}
        >
          {number}
        </div>
        <h2 className="text-white font-semibold text-base">{title}</h2>
      </div>
      {children}
    </div>
  )
}
