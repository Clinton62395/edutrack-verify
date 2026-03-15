import VerifyPage from "./pages/VerifyPage";

export default function App() {
  // Simple routing based on pathname
  const path = window.location.pathname;
  const match = path.match(/^\/verify\/(.+)$/);
  const matricule = match ? match[1] : null;

  if (!matricule) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B7280] font-mono text-sm">URL invalide</p>
          <p className="text-[#374151] text-xs mt-2">
            Format attendu : /verify/EDU-2026-XXXXXX
          </p>
        </div>
      </div>
    );
  }

  return <VerifyPage matricule={matricule} />;
}
