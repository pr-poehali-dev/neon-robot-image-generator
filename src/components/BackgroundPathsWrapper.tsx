import React from "react";

const BackgroundPathsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-background">
      {/* Тёмный фон с сеткой */}
      <div className="absolute inset-0 bg-background" 
           style={{ 
             background: "hsl(var(--background))",
             backgroundImage: "radial-gradient(hsla(var(--primary) / 0.15) 1px, transparent 1px)",
             backgroundSize: "40px 40px" 
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