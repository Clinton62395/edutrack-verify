import VerifyPage from "./pages/VerifyPage";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import DownloadPage from "./pages/DownloadPage";

export default function App() {
  // Simple routing based on pathname
  const rawPath = window.location.pathname;
  const path = rawPath.replace(/\/+$/, "") || "/";

  // /verify/:matricule → page de vérification
  const match = path.match(/^\/verify\/(.+)$/);
  if (match) return <VerifyPage matricule={match[1]} />;

  if (path === "/privacy") return <PrivacyPage />;

  if (path === "/download") return <DownloadPage />;

  return <HomePage />;
}
