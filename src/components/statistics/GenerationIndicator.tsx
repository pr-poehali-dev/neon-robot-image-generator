import { HealthData } from "./types";

interface GenerationIndicatorProps {
  healthData: HealthData | null;
}

export const GenerationIndicator = ({ healthData }: GenerationIndicatorProps) => {
  const isGenerating = healthData?.gpu_server?.queue?.is_generating;
  
  return (
    <div className="flex items-center justify-center gap-2">
      {isGenerating ? (
        <>
          <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>Идет генерация</span>
        </>
      ) : (
        <>
          <span className="inline-block h-2 w-2 rounded-full bg-gray-500"></span>
          <span>Генерация неактивна</span>
        </>
      )}
    </div>
  );
};
