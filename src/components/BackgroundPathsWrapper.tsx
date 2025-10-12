import React from "react";

const BackgroundPathsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Фоновая картинка */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/files/52126ec3-4200-4407-91b0-522f2c69f2d7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      />
      
      {/* Затемняющий слой */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Контент поверх фона */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPathsWrapper;