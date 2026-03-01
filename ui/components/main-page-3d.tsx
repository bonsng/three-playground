"use client";
import { Canvas } from "@react-three/fiber";
import MainPageExperience from "../three-components/main-page-experience";
import ScrollIndicator from "./scroll-indicator";

export default function MainPage3D() {
  return (
    <div className="w-full h-full" id="3d-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 15 }}>
        <ambientLight intensity={Math.PI / 2} />
        <MainPageExperience />
      </Canvas>
      <ScrollIndicator />
    </div>
  );
}
