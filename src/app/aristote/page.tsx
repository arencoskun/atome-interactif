"use client";
import React, { useState } from "react";
import { ModelPage } from "@/components/ModelPage";

export default function DemocriteModelPage() {
  return (
    <ModelPage
      title="Le modèle de Aristote"
      description="Selon lui, la matière doit remplir l’espace qu’elle occupe. Il a pensé qu’il n’y avait pas d’espaces vides dans la matière."
      color="purple"
      modelURL="models/aristote.glb"
      pageIndex={0}
    ></ModelPage>
  );
}
