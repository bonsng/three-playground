"use client";

import { Box, CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function MainPage3D() {
  return (
    <div className="w-full h-full" id="3d-container">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <Box position={[0, 0, 0]} scale={0.15} />
        <CameraControls />
      </Canvas>
    </div>
  );
}
