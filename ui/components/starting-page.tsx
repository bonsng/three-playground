"use client";
import { useState } from "react";

export default function StartingPage() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    if (closing) return;
    setClosing(true);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-10 bg-muted transition-colors flex flex-col pt-56 items-center hover:cursor-pointer animate__animated ${
        closing && "animate__fadeOut animate__faster"
      }`}
      onClick={handleClose}
      onAnimationEnd={() => {
        if (closing) {
          setVisible(false);
        }
      }}
    >
      <div>
        <h1 className="font-title-bebas animate__animated animate__fadeInDown text-9xl mb-10">
          3D Playground
        </h1>
        <p className="font-sans animate__animated animate__fadeInDown animate__delay-1s text-2xl">
          Welcome to 3D Playground.
          <br />
          Explore Three.js features built with React Three Fiber,
          <br />
          with a focus on implementation details and performance insights.
          <br />
        </p>
      </div>
      <p className="font-sans fixed bottom-1/3 animate-slow-blink">
        click to explore
      </p>
    </div>
  );
}
