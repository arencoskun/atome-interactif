"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useState } from "react";
import CustomDirectionalLight from "@/components/CustomDirectionalLight";
import Camera from "@/components/Camera";
import { Model } from "@/components/Model";
import { ModelPage } from "@/components/ModelPage";

export default function DemocriteModelPage() {
  return (
    <ModelPage
      title="Le modèle de Democrite"
      description="Ce philosophe a proposé que la matière était constituée de
                   particules très petites et indivisibles. Toutes les substances
                   contenaient ces particules. Il avait pensé qu'il y avait un espace
                   vide entre ces particules."
      color="green"
      modelURL="models/democrite_final.glb"
      pageIndex={0}
    ></ModelPage>
  );
}
