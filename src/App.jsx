import VerifyPage from "./pages/VerifyPage";
import HomePage from "./pages/HomePage";

export default function App() {
  // Simple routing based on pathname
  const path = window.location.pathname;

  // /verify/:matricule → page de vérification
  const match = path.match(/^\/verify\/(.+)$/);
  if (match) {
    return <VerifyPage matricule={match[1]} />;
  }

  // / → page d'accueil avec saisie manuelle
  return <HomePage />;
}
