import React from "react";
import { Meteors } from "./ui/meteors";

const BackgroundPathsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Космический фон */}
      <div 
        className="fixed inset-0" 
        style={{ 
          background: "radial-gradient(ellipse at center, #0f1729 0%, #050a14 50%, #000000 100%)"
        }} 
      />
      
      {/* Meteors эффект на всю высоту */}
      <div className="fixed inset-0 pointer-events-none">
        <Meteors number={40} />
      </div>
      
      {/* Контент поверх фона */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPathsWrapper;