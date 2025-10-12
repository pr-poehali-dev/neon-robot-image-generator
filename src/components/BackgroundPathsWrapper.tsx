import React from "react";

const BackgroundPathsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Космический радиальный градиент */}
      <div 
        className="fixed inset-0" 
        style={{ 
          background: "radial-gradient(circle at center, #1a2840 0%, #0a1420 50%, #000000 100%)"
        }} 
      />
      
      {/* Контент поверх фона */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPathsWrapper;