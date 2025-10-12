import React from "react";
import { EtheralShadow } from "./ui/etheral-shadow";

const BackgroundPathsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Etheral Shadow эффект на весь экран */}
      <div className="fixed inset-0">
        <EtheralShadow
          color="rgba(15, 23, 42, 0.8)"
          animation={{ scale: 80, speed: 60 }}
          noise={{ opacity: 0.8, scale: 1.2 }}
          sizing="fill"
          className="w-full h-full"
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