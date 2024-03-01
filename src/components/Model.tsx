import { GLTFResult } from "@/util/GLTFResult";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import THREE, { DoubleSide } from "three";

export function Model({ url }: { url: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const gltf = useGLTF(url) as unknown as GLTFResult;
  const material = gltf.materials["lambert2SG.001"];
  material.shadowSide = DoubleSide;

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
