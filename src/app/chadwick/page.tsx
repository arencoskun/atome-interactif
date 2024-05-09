"use client";
import React, { useState } from "react";
import { ModelPage } from "@/components/ModelPage";

export default function ChadwickModelPage() {
  return (
    <ModelPage
      title="Le modèle de Chadwick"
      description="Il découvre une nouvelle particule située dans le noyau qu’il avait appelée “les neutrons”.
      Il pense que ces particules n’ont pas de charge électrique - donc elles sont neutres. 
      Il ajoute ce qu’il a trouvé au modèle de Rutherford-Bohr, et crée le modèle atomique simplifié.
      "
      color="orange"
      modelURL="models/chadwick.glb"
      pageIndex={6}
    ></ModelPage>
  );
}
