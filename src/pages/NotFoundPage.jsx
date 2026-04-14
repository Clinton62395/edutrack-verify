import React from "react";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white font-sans selection:bg-blue-500 flex items-center justify-center pb-20">
      {/* Blobs de fond */}
      <div className="fixed top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse pointer-events-none" />
      <div className="fixed bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="relative max-w-md mx-auto px-6 text-center">
        {/* ── Carte principale ── */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-4xl overflow-hidden shadow-2xl p-8">
          <div className="flex flex-col items-center gap-6">
            {/* Icône 404 */}
            <div className="w-24 h-24 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/40">
              <span className="text-4xl font-bold text-blue-400">404</span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight">
              Page introuvable
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
            </p>

            <div className="w-full space-y-4">
              <a
                href="/"
                className="group relative w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 rounded-xl font-bold shadow-xl shadow-blue-600/20 active:scale-95"
              >
                <Home size={20} />
                Retour à l'accueil
              </a>

              <button
                onClick={() => window.history.back()}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 rounded-xl font-medium shadow-xl"
              >
                <ArrowLeft size={20} />
                Page précédente
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-[10px] tracking-widest uppercase">
          EduTrack Ecosystem • Guinea 2026
        </div>
      </div>
    </div>
  );
}
