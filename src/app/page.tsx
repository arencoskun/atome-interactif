"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useState } from "react";
import CustomDirectionalLight from "@/components/CustomDirectionalLight";
import Camera from "@/components/Camera";
import { Model } from "@/components/Model";
import { ModelPage } from "@/components/ModelPage";

export default function RutherfordBohrModelPage() {
  return (
    <ModelPage
      title="Le modèle de Rutherford-Bohr"
      description="Ils trouvent que:<br/><br/>
      • L’atome contient un espace presque vide avec un noyau dense qui contient les protons.<br/><br/>
      • Les électrons circulent autour du noyau de l’atome sur les couches électroniques.<br/><br/>
      • Il peut y avoir plus d’un électron dans une couche électronique.<br/><br/>
      • Un atome neutre contient autant d’électrons que de protons."
      color="red"
      modelURL="models/dalton.glb"
      pageIndex={0}
    ></ModelPage>
  );
}
