import { HealthData } from "./types";

type GenerationIndicatorProps = {
  healthData: HealthData | null;
};

export const GenerationIndicator = ({ healthData }: GenerationIndicatorProps) => {
  const isGenerating = healthData?.gpu_server?.queue?.is_generating;
  
  if (!healthData) return null;
  
  return (
    <div className="flex items-center justify-center gap-2">
      {isGenerating ? (
        <>
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full pulse"></span>
          <span>Генерация активна</span>
        </>
      ) : (
        <>
          <span className="inline-block w-2 h-2 bg-gray-500 rounded-full"></span>
          <span>Генерация неактивна</span>
        </>
      )}
    </div>
  );
};
