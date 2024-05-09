"use client";
import React, { useState } from "react";
import { ModelPage } from "@/components/ModelPage";

export default function DemocriteModelPage() {
  return (
    <ModelPage
      title="Le modèle de Thomson"
      description="Il fait la découverte d’une petite particule, l’électron, qui lui aide à modifier le modèle de Dalton.
      Thomson fait des expériences et trouve que le rayon cathodique est formé de particules plus petites qu’un atome et qu’elles sont chargées négativement.
      Il appelle cette nouvelle particule l’électron.
      Grâce à ses expériences, Thomson a trouvé que l’atome n’était pas indivisible.
      En effet, il trouve qu’il est constitué en partie d’électrons.
      Donc en 1904, il propose un nouveau modèle atomique.
      "
      color="yellow"
      modelURL="models/thomson.glb"
      pageIndex={0}
    ></ModelPage>
  );
}
