"use client";
import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { pages } from "@/util/pages";

export default function MainPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">
        « De tout temps l’Homme s’est posé la question : mais de quoi est constituée la matière ? »
      </h1>
      <p className="text-xl mb-8 text-center">
        Découvrez l'histoire de l'atome de manière interactive.
      </p>
      <Button extraclassname="bg-blue-500 hover:bg-blue-700" onClick={() => {
        router.push(pages[0]);
      }}>
        Commencer
      </Button>
      <div className="absolute bottom-0 w-full text-center pb-4">
        <a href="https://github.com/arencoskun/atome-interactif" className="text-sm text-blue-500 hover:underline">
          Vérifier le code source
        </a>
    </div>
    </div>
  );
}
