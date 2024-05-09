import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { DirectionalLight } from "three";

export default function CustomDirectionalLight({ x, y, z }: { x: number, y: number, z: number}) {
  const { scene } = useThree();
  const light = useRef(new DirectionalLight(0xffffff, 1));

  useEffect(() => {
    // 0 20 -20
    light.current.position.set(x, y, z);
    light.current.castShadow = false;
    scene.add(light.current);

    return () => {
      scene.remove(light.current);
    };
  }, [scene]);

  useFrame(() => {
    light.current.position.set(x, y, z);
  });

  return null;
}
