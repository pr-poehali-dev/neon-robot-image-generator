import React from "react";
import { FlickeringGrid } from "./ui/flickering-grid";

const BackgroundPathsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Темный космический градиент */}
      <div 
        className="fixed inset-0" 
        style={{ 
          background: "radial-gradient(ellipse at center, #0a1628 0%, #030912 50%, #000000 100%)"
        }} 
      />
      
      {/* Flickering Grid эффект */}
      <div className="fixed inset-0 pointer-events-none">
        <FlickeringGrid
          className="absolute inset-0 w-full h-full"
          squareSize={4}
          gridGap={6}
          color="#1e3a5f"
          maxOpacity={0.15}
          flickerChance={0.05}
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