import React from "react";
import { Canvas } from "@react-three/fiber";
import DrawerModel from "./DrawerModel";

export default function DrawerViewer() {
  return (
    <div style={{ width: "100vw", height: "100vh", background:"transparent" }}>
      <Canvas
        shadows
        camera={{ position: [20, 20, 100], fov: 50 }}
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[10, 10, 5]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Drawer Model */}
        <DrawerModel textureURL="\drawer_texture.png" />
      </Canvas>
    </div>
  );
}
