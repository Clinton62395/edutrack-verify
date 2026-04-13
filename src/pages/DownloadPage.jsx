import React from "react";
import {
  Download,
  ShieldCheck,
  Smartphone,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] flex items-center justify-center p-6 text-white font-sans selection:bg-blue-500">
      {/* Cercles de fond pour l'effet de profondeur */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full blur-[150px] opacity-10" />

      {/* Carte Glassmorphism Principale */}
      <div className="relative max-w-4xl w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Section Gauche : Image/Branding */}
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
              votre progression et obtenez des certificats certifiés directement
              sur votre mobile.
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

          {/* Section Droite : Actions de téléchargement */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">Prêt à commencer ?</h2>
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

            {/* Aide technique (Puissance & Sécurité) */}
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

            {/* Instruction Installation */}
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

      {/* Footer minimaliste */}
      <div className="absolute bottom-6 text-gray-600 text-[10px] tracking-widest uppercase">
        EduTrack Ecosystem • Guinea 2026
      </div>
    </div>
  );
}
