import { useEffect, useState } from "react";
import InvalidCertificate from "../components/certificats/InvalidCertificate";
import ValidCertificate from "../components/certificats/ValidCertificate";
import LoadingState from "../components/ui/LoadingState";
import { getCertificateByMatricule } from "../components/services/firebase";

export default function VerifyPage({ matricule }) {
  const [state, setState] = useState("loading"); // 'loading' | 'valid' | 'invalid' | 'error'
  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    if (!matricule) {
      setState("invalid");
      return;
    }

    getCertificateByMatricule(matricule.toUpperCase())
      .then((cert) => {
        if (cert) {
          setCertificate(cert);
          setState("valid");
        } else {
          setState("invalid");
        }
      })
      .catch(() => setState("error"));
  }, [matricule]);

  if (state === "loading") return <LoadingState />;
  if (state === "valid") return <ValidCertificate certificate={certificate} />;
  if (state === "invalid") return <InvalidCertificate matricule={matricule} />;

  // error
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-6">
      <div className="text-center">
        <p className="text-red-400 font-mono">Erreur de connexion</p>
        <p className="text-[#6B7280] text-sm mt-2">
          Réessayez dans quelques instants
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 border border-[#374151] text-[#9CA3AF] text-sm rounded-lg hover:border-[#6B7280] transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
