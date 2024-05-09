"use client";
import React, { useState } from "react";
import { ModelPage } from "@/components/ModelPage";

export default function DaltonModelPage() {
  return (
    <ModelPage
      title="Le modèle de Dalton"
      description="Contrairement à Démocrite et Aristote, Dalton construit son modèle à partir des expériences scientifiques. Il se base sur des observations faites par les autres et lui-même pour construire son modèle d’atome.<br/><br/>
      D'après ses observations, il propose la théorie atomique:<br/><br/>
      • La matière est composée de petites particules invisibles et indivisibles appelées atomes.<br/><br/>
      • Les atomes d’un même élément sont identiques. Ils ont les mêmes propriétés et masses.<br/><br/>
      • Les atomes des éléments différents ont des propriétés et des masses différentes.<br/><br/>
      • Les atomes peuvent se combiner pour former une nouvelle substance. La molécule produite possède des propriétés différentes des atomes qui la constituent.
      "
      color="blue"
      modelURL="models/dalton.glb"
      pageIndex={2}
    ></ModelPage>
  );
}
