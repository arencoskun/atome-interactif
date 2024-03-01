import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { PerspectiveCamera } from "three";

export default function Camera() {
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
