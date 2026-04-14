import React, { useState } from "react";
import {
  ShieldCheck,
  Smartphone,
  Zap,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import {  FAQItem } from "../components/ui/faq";

export default function DownloadPage() {
  const faq_Items = [
    // ── INSTALLATION ─────────────────────────────────────────────
    {
      q: "Comment installer l'APK sur mon téléphone Android ?",
      a: "Téléchargez le fichier APK via le bouton sur cette page. Si votre téléphone bloque l'installation, allez dans Paramètres → Sécurité → activez « Sources inconnues » ou « Installer des apps inconnues ». Ouvrez ensuite le fichier téléchargé et appuyez sur Installer.",
    },
    {
      q: "Où télécharger l'application ?",
      a: "Téléchargez la dernière version directement sur cette page ou via l'adresse officielle : https://edutrack-verify.vercel.app/download",
    },
    {
      q: "J'ai un problème lors de l'installation, que faire ?",
      a: "Vérifiez que votre téléphone dispose d'au moins 200 MB d'espace libre. Si l'installation échoue, désinstallez toute version précédente d'EduTrack puis réessayez. Si le problème persiste, contactez-nous à billydoumbouya5210@gmail.com.",
    },
    {
      q: "L'application fonctionne-t-elle sur iPhone (iOS) ?",
      a: "Pour l'instant, EduTrack est disponible uniquement sur Android. Une version iOS est en cours de développement et sera disponible prochainement sur l'App Store.",
    },
    {
      q: "Mon téléphone Android est-il compatible avec EduTrack ?",
      a: "EduTrack fonctionne sur tout téléphone Android version 7.0 ou supérieure. Si votre téléphone a plus de 5 ans, vérifiez la version Android dans Paramètres → À propos du téléphone.",
    },

    // ── COMPTE & CONNEXION ────────────────────────────────────────
    {
      q: "Comment créer un compte ?",
      a: "Ouvrez l'application, choisissez votre rôle (Formateur ou Apprenant), renseignez votre nom, email et mot de passe. Un email de vérification vous sera envoyé — cliquez sur le lien pour activer votre compte puis connectez-vous.",
    },
    {
      q: "J'ai oublié mon mot de passe, comment le récupérer ?",
      a: "Sur l'écran de connexion, appuyez sur « Mot de passe oublié ». Entrez votre adresse email et vous recevrez un lien de réinitialisation. Vérifiez aussi vos spams si vous ne voyez pas l'email.",
    },
    {
      q: "Puis-je changer mon rôle après inscription ?",
      a: "Non, le rôle choisi à l'inscription (Formateur ou Apprenant) est définitif. Si vous avez fait une erreur, créez un nouveau compte avec un autre email et sélectionnez le bon rôle.",
    },
    {
      q: "Puis-je avoir un compte formateur et un compte apprenant en même temps ?",
      a: "Vous pouvez créer deux comptes séparés avec deux adresses email différentes — un en tant que Formateur et un en tant qu'Apprenant. Il n'est pas possible de combiner les deux rôles dans un seul compte.",
    },

    // ── DONNÉES & SÉCURITÉ ────────────────────────────────────────
    {
      q: "L'application est-elle sécurisée ?",
      a: "Oui. EduTrack est hébergé sur des serveurs Firebase (Google) avec chiffrement SSL. Vos données sont protégées et ne sont jamais partagées avec des tiers. Le fichier APK est signé avec un certificat de développeur officiel.",
    },
    {
      q: "Mes données sont-elles perdues si je réinstalle l'application ?",
      a: "Non. Toutes vos données — progression, certificats, historique — sont sauvegardées sur nos serveurs Firebase. Il suffit de vous reconnecter avec votre email et mot de passe après réinstallation pour tout retrouver.",
    },
    {
      q: "Faut-il une connexion internet pour utiliser l'app ?",
      a: "Une connexion internet est nécessaire pour accéder aux formations, synchroniser votre progression et générer vos certificats. Les leçons en format texte peuvent être consultées hors ligne si elles ont déjà été chargées.",
    },

    // ── TARIFS ───────────────────────────────────────────────────
    {
      q: "EduTrack est-il gratuit ?",
      a: "L'application est entièrement gratuite à télécharger et à utiliser. Certaines formations peuvent être payantes selon le tarif fixé par le formateur. Dans ce cas, le paiement est arrangé directement entre le formateur et l'apprenant (Mobile Money, virement, en main propre). Le formateur partage ensuite le code d'invitation à l'apprenant après confirmation du paiement.",
    },
    {
      q: "Comment fonctionne le paiement pour les formations payantes ?",
      a: "Actuellement, le paiement se règle directement entre vous et votre formateur, selon les modalités qu'il choisit (Orange Money, MTN Mobile Money, Wave, ou autre). Une fois le paiement confirmé par le formateur, il vous transmet le code d'invitation pour accéder à la formation. Un système de paiement intégré à l'application est en cours de développement.",
    },

    // ── FORMATEURS ───────────────────────────────────────────────
    {
      q: "Je suis formateur, comment créer ma formation ?",
      a: "Connectez-vous avec votre compte Formateur, accédez à l'onglet Formations puis appuyez sur le bouton +. Créez votre formation, ajoutez vos modules, vos leçons (texte, vidéo, PDF) et configurez les quiz de chaque module.",
    },
    {
      q: "Comment inviter mes apprenants à rejoindre ma formation ?",
      a: "Chaque formation génère automatiquement un code d'invitation unique. Partagez ce code à vos apprenants par WhatsApp, SMS ou email. Ils pourront l'utiliser dans l'app pour rejoindre votre formation immédiatement.",
    },
    {
      q: "Puis-je modifier ma formation après publication ?",
      a: "Oui, vous pouvez modifier le contenu de vos leçons et quiz à tout moment. Les apprenants déjà inscrits verront automatiquement les mises à jour. Notez que les résultats de quiz déjà validés par vos apprenants ne sont pas affectés.",
    },
    {
      q: "Comment suivre la progression de mes apprenants ?",
      a: "Dans l'onglet Progression, vous voyez en temps réel le pourcentage de complétion de chaque apprenant, les leçons terminées, les résultats de quiz et les certificats générés.",
    },

    // ── APPRENANTS ───────────────────────────────────────────────
    {
      q: "Comment rejoindre une formation en tant qu'apprenant ?",
      a: "Votre formateur vous fournira un code d'invitation unique. Dans l'application, allez dans « Rejoindre une formation », saisissez le code et vous aurez immédiatement accès à tout le contenu.",
    },
    {
      q: "Que se passe-t-il si j'échoue au quiz ?",
      a: "Vous avez droit à 3 tentatives par quiz. En cas d'échec après les 3 tentatives, votre formateur en est notifié et peut vous accorder des tentatives supplémentaires. La progression vers le certificat est débloquée uniquement après avoir réussi tous les quiz.",
    },
    {
      q: "Comment obtenir mon certificat ?",
      a: "Votre certificat est généré automatiquement une fois toutes les leçons complétées et tous les quiz réussis. Il est téléchargeable directement depuis l'application et vérifiable en ligne sur https://edutrack-verify.vercel.app",
    },
    {
      q: "Mon certificat est-il vérifiable par un employeur ?",
      a: "Oui. Chaque certificat EduTrack possède un numéro de matricule unique. Toute personne peut vérifier son authenticité sur https://edutrack-verify.vercel.app en saisissant ce numéro.",
    },

    // ── GÉNÉRAL ──────────────────────────────────────────────────
    {
      q: "Quels sont les rôles disponibles dans EduTrack ?",
      a: "EduTrack propose deux rôles : Formateur (pour créer et gérer des formations, suivre les apprenants) et Apprenant (pour suivre les cours, passer les quiz et obtenir des certificats).",
    },
    {
      q: "Quels types de formations peut-on créer ou suivre sur EduTrack ?",
      a: "EduTrack s'adapte à tous les domaines : formation professionnelle, santé, éducation, management, technologie, développement personnel et bien d'autres. Tout formateur peut créer sa formation quel que soit le domaine.",
    },
    {
      q: "Comment contacter le support EduTrack ?",
      a: "Pour toute question ou assistance, écrivez-nous à billydoumbouya5210@gmail.com. Nous répondons sous 24 à 48 heures ouvrables.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white font-sans selection:bg-blue-500 pb-20">
      {/* Blobs de fond */}
      <div className="fixed top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse pointer-events-none" />
      <div className="fixed bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 pt-16 flex flex-col gap-12">
        {/* ── Carte principale ── */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            {/* Gauche */}
            <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-600/20 to-transparent flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/40 mb-6">
                <Smartphone size={32} />
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">
                L'éducation, <br />
                <span className="text-blue-400">révolutionnée.</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Prenez le contrôle de votre avenir. Gérez vos formations, suivez
                votre progression et obtenez des certificats certifiés
                directement sur votre mobile.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-blue-400" />
                  <span className="text-sm text-gray-300">
                    Synchronisation Firebase en temps réel
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-blue-400" />
                  <span className="text-sm text-gray-300">
                    Architecture Expo ultra-performante
                  </span>
                </div>
              </div>
            </div>

            {/* Droite */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-semibold mb-2">
                Prêt à commencer ?
              </h2>
              <p className="text-gray-400 mb-8">
                Version 1.0.0 (Stable) • Android APK • 143 MB
              </p>

              <a
                href="https://www.dropbox.com/scl/fi/nhqyt3ek7c5rchstvlzaj/application-0834e1f7-0f83-4e5a-b913-3a557d32835c.apk?rlkey=2ugw51rykkynn1uxaddrqui8k&st=em5s5rrd&dl=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 transition-all duration-300 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 active:scale-95"
              >
                <img
                  src="/logo.png"
                  alt="logo"
                  className="w-6 h-6 rounded group-hover:animate-bounce"
                />
                Télécharger l'APK
              </a>

              <div className="mt-8 w-full grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center">
                  <ShieldCheck size={24} className="text-green-400 mb-2" />
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">
                    Sécurité
                  </span>
                  <span className="text-xs font-medium">SSL Encrypted</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center">
                  <Zap size={24} className="text-yellow-400 mb-2" />
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">
                    Vitesse
                  </span>
                  <span className="text-xs font-medium">Native Core</span>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20 text-left">
                <span className="text-xl">⚠️</span>
                <p className="text-[11px] text-yellow-200/80 leading-tight">
                  <strong>NOTE :</strong> Pour installer l'APK en dehors du Play
                  Store, activez
                  <span className="text-yellow-400 font-bold">
                    {" "}
                    "Sources Inconnues"{" "}
                  </span>
                  dans les paramètres de sécurité de votre téléphone Android.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section FAQ ── */}
        <div className="backdrop-blur-xl bg-white/3 border border-white/8 rounded-[2rem] p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
              <HelpCircle size={20} className="text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Questions fréquentes</h2>
              <p className="text-gray-500 text-sm">
                Tout ce que vous devez savoir avant de commencer
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {faq_Items.map((item, i) => (
              <FAQItem
                key={i}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Contact bas de FAQ */}
          <div className="mt-8 p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center gap-4">
            <span className="text-2xl">💬</span>
            <div>
              <p className="text-sm font-medium text-gray-200">
                Vous ne trouvez pas de réponse ?
              </p>
              <a
                href="mailto:billydoumbouya5210@gmail.com"
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                Contactez-nous → billydoumbouya5210@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-600 text-[10px] tracking-widest uppercase">
        EduTrack Ecosystem • Guinea 2026
      </div>
    </div>
  );
}
