import React from "react";

const BackgroundPathsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Базовый черный фон */}
      <div className="fixed inset-0 bg-black" />
      
      {/* Множественные космические градиенты */}
      <div 
        className="fixed inset-0" 
        style={{ 
          background: `
            radial-gradient(circle at 20% 30%, rgba(15, 35, 70, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(20, 40, 80, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 40% 70%, rgba(10, 25, 50, 0.35) 0%, transparent 45%),
            radial-gradient(circle at 90% 80%, rgba(15, 30, 60, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 10% 90%, rgba(12, 28, 55, 0.35) 0%, transparent 50%)
          `
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