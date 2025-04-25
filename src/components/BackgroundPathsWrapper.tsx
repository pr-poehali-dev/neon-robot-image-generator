
import { ReactNode } from "react";
import { BackgroundPaths } from "./ui/background-paths";

interface BackgroundPathsWrapperProps {
  children: ReactNode;
  title?: string;
}

export default function BackgroundPathsWrapper({ 
  children, 
  title = "SKRT.POEHALI" 
}: BackgroundPathsWrapperProps) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <BackgroundPaths title={title} />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
