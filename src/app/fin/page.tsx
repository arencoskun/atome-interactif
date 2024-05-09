"use client";
import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function FinishPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">
        Merci!
      </h1>
      <h1 className="text-3xl font-bold mb-4">
        Bibliographie
      </h1>
      <p className="text-xl mb-8">
        L’histoire de l’atome (chap S2 - 3ème Sc. Phys) - Collège Les Nénuphars. Collège Les Nénuphars. 10/12/2023. <a href="https://clg-nenuphars-breval.ac-versailles.fr/spip.php?article309" className="text-blue-500 hover:underline">https://clg-nenuphars-breval.ac-versailles.fr/spip.php?article309</a>
      </p>
      <p className="text-xl mb-8">
        L’histoire du modèle atomique | Secondaire | Alloprof. Alloprof. 10/12/2023. <a href="https://www.alloprof.qc.ca/fr/eleves/bv/sciences/l-histoire-du-modele-atomique-s1109" className="text-blue-500 hover:underline">https://www.alloprof.qc.ca/fr/eleves/bv/sciences/l-histoire-du-modele-atomique-s1109</a>
      </p>
      <Button extraclassname="bg-blue-500 hover:bg-blue-700" onClick={() => {
        router.push("/");
      }}>Recommence</Button>
    </div>
  );
}
