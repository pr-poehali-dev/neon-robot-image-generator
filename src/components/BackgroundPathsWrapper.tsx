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
          opacities={[0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0, 1.0]}
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