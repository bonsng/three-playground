"use client";

import { Box, CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MainPageExperience from "../three-components/main-page-experience";
import ScrollIndicator from "./scroll-indicator";

export default function MainPage3D() {
  return (
    <div className="w-full h-full" id="3d-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 18 }}>
        <ambientLight intensity={Math.PI / 2} />
        {/* <Box position={[0, 0, 0]} scale={0.15} /> */}
        <MainPageExperience />
        {/* <CameraControls /> */}
      </Canvas>
      <ScrollIndicator />
    </div>
  );
}
