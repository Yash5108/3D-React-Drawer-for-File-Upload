import React from "react";
import { Canvas } from "@react-three/fiber";
import DrawerModel from "./DrawerModel";

export default function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [50, 40, 30], fov: 45 }}
      style={{
        width: "100vw",
        height: "100vh",
        background: "transparent",
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <DrawerModel textureURL="/drawer_texture.png" />
    </Canvas>
  );
}
