import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { DirectionalLight } from "three";

export default function CustomDirectionalLight() {
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
