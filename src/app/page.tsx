"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DirectionalLight, DoubleSide, PerspectiveCamera } from "three";

type GLTFResult = GLTF & {
  nodes: {
    [name: string]: THREE.Mesh;
  };
  materials: {
    [name: string]: THREE.MeshStandardMaterial;
  };
};

function Setup() {
  const camera: PerspectiveCamera = useThree().camera as PerspectiveCamera;
  useEffect(() => {
    camera.position.z = -100;
    camera.position.y = 40;
    camera.fov = 20;
    camera.zoom = 0.2;
    camera.updateProjectionMatrix();
  }, [camera]);
  return null;
}

function CustomDirectionalLight() {
  const { scene } = useThree();
  const light = useRef(new DirectionalLight(0xffffff, 1));

  useEffect(() => {
    light.current.position.set(0, 20, -20);
    light.current.castShadow = true;
    scene.add(light.current);

    return () => {
      scene.remove(light.current);
    };
  }, [scene]);

  useFrame(() => {
    light.current.position.set(0, 20, -20);
  });

  return null;
}

function Model({ url }: { url: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const gltf = useGLTF(url) as unknown as GLTFResult;
  const material = gltf.materials["lambert2SG.001"];
  material.shadowSide = DoubleSide;
  material.transparent = true;

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 2;
    }
  }, []);

  console.log(gltf);

  return (
    <mesh
      ref={meshRef}
      geometry={gltf.nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
      material={material}
      castShadow={true}
      receiveShadow={true}
    />
  );
}

export default function ModelPage() {
  const [autoRotate, setAutoRotate] = useState<boolean>(false);

  return (
    <div className="flex flex-col h-screen bg-gray-300">
      <p className="text-center py-8 bg-green-700 text-white text-3xl">
        Le modèle de Democrite
      </p>
      <div className="flex flex-col md:flex-row flex-grow overflow-auto">
        <main className="flex-grow">
          <Canvas className="w-full h-full" shadows={true}>
            <Setup />
            <CustomDirectionalLight />
            <Model url="models/democrite_final.glb" />
            <OrbitControls autoRotate={autoRotate} />
          </Canvas>
        </main>
        <aside className="w-1/4 bg-gray-200 p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-7">
            <p className="text-3xl">Le modèle de Democrite</p>
            <p className="text-xl">
              Ce philosophe a proposé que la matière était constituée de
              particules très petites et indivisibles. Toutes les substances
              contenaient ces particules. Il avait pensé qu'il y avait un espace
              vide entre ces particules.
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex flex-row space-x-4 md:pb-12">
              <input
                type="checkbox"
                onChange={(e) => setAutoRotate(e.currentTarget.checked)}
              ></input>
              <p>Faire tourner le modèle</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
