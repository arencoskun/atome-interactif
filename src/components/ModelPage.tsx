import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useState } from "react";
import CustomDirectionalLight from "@/components/CustomDirectionalLight";
import Camera from "@/components/Camera";
import { Model } from "@/components/Model";
import Button from "./Button";

export function ModelPage({
  title,
  description,
  modelURL,
  color,
}: {
  title: string;
  description: string;
  modelURL: string;
  color: string;
  pageIndex: number;
}) {
  const [autoRotate, setAutoRotate] = useState<boolean>(false);
  type ColorVariantsType = {
    [key: string]: [string, string];
  };
  const colorVariants: ColorVariantsType = {
    green: ["bg-green-600", "bg-green-950"],
    red: ["bg-red-600", "bg-red-950"],
    blue: ["bg-blue-600", "bg-blue-950"],
    purple: ["bg-purple-600", "bg-purple-950"],
    yellow: ["bg-yellow-600", "bg-yellow-950"],
    gray: ["bg-gray-600", "bg-gray-950"]
  };
  return (
    <div className="flex flex-col h-screen bg-gray-300">
      <p
        className={`text-center py-8 ${colorVariants[color][0]} text-white text-3xl`}
      >
        {title}
      </p>

      <div className="flex flex-col md:flex-row flex-grow overflow-auto">
        <main className="flex-grow">
          <Canvas className="w-full h-full" shadows={true}>
            <Camera />
            <CustomDirectionalLight x={0} y={20} z={-20} />
            <CustomDirectionalLight x={0} y={-20} z={-20} />
            <CustomDirectionalLight x={0} y={20} z={20} />
            <CustomDirectionalLight x={0} y={-20} z={20} />
            <Model url={modelURL} />
            <OrbitControls autoRotate={autoRotate} />
          </Canvas>
        </main>
        <aside className="w-1/4 bg-gray-200 p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-7">
            <p className="text-3xl">{title}</p>
            <p
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
          <div className="mt-auto">
            <div className="flex flex-row space-x-4 md:pb-14 align-middle">
              <input
                type="checkbox"
                onChange={(e) => setAutoRotate(e.currentTarget.checked)}
              ></input>
              <p>Faire tourner le modèle</p>
            </div>
          </div>
        </aside>

        <Button
          extraclassname={`
            absolute bottom-3 right-4 w-30 h-10 ${colorVariants[color][0]} hover:${colorVariants[color][1]}
          `}
        >
          Continuer
        </Button>
      </div>
    </div>
  );
}
