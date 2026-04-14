import VerifyPage from "./pages/VerifyPage";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import DownloadPage from "./pages/DownloadPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  // Simple routing based on pathname
  const rawPath = window.location.pathname;
  const path = rawPath.replace(/\/+$/, "") || "/";

  // /verify/:matricule → page de vérification
  const match = path.match(/^\/verify\/(.+)$/);
  if (match) {
    return <VerifyPage matricule={match[1]} />;
  }

  let component;
  switch (path) {
    case "/":
      component = <HomePage />;
      break;
    case "/privacy":
      component = <PrivacyPage />;
      break;
    case "/download":
      component = <DownloadPage />;
      break;
    default:
      component = <NotFoundPage />;
  }

  return component;
}
