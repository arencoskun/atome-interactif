"use client";
import React, { useState } from "react";
import { ModelPage } from "@/components/ModelPage";

export default function RutherfordModelPage() {
  return (
    <ModelPage
      title="Le modèle de Rutherford"
      description="Rutherford pense qu’il y a beaucoup d'espaces vides dans l’atome. 
      Il pense que l’atome a un noyau dense, formé des protons. 
      Il trouve aussi qu’il y a autant d’électrons que les protons (donc il est neutre), et ils gravitent autour du noyau.
      "
      color="gray"
      modelURL="models/rutherford.glb"
      pageIndex={0}
    ></ModelPage>
  );
}
