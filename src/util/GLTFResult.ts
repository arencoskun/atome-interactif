import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

export type GLTFResult = GLTF & {
  nodes: {
    [name: string]: THREE.Mesh;
  };
  materials: {
    [name: string]: THREE.MeshStandardMaterial;
  };
};
