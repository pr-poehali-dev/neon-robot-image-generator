import React from "react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

const BackgroundPathsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Canvas Reveal Effect на весь экран */}
      <div className="fixed inset-0">
        <CanvasRevealEffect
          animationSpeed={0.3}
          containerClassName="bg-black"
          colors={[
            [30, 58, 95],
            [15, 35, 70],
          ]}
          dotSize={2}
          opacities={[0.1, 0.1, 0.15, 0.15, 0.2, 0.2, 0.25, 0.25, 0.3, 0.35]}
          showGradient={false}
        />
      </div>
      
      {/* Контент поверх фона */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPathsWrapper;