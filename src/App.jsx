import VerifyPage from "./pages/VerifyPage";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";

export default function App() {
  // Simple routing based on pathname
  const path = window.location.pathname;

  // /verify/:matricule → page de vérification
  const match = path.match(/^\/verify\/(.+)$/);
  if (match) return <VerifyPage matricule={match[1]} />;

  if (path === "/privacy") return <PrivacyPage />;

  return <HomePage />;
}
