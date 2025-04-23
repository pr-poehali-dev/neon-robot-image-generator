import { HealthData } from "./types";

interface GenerationIndicatorProps {
  healthData: HealthData | null;
}

export const GenerationIndicator = ({ healthData }: GenerationIndicatorProps) => {
  if (!healthData?.gpu_server?.queue?.is_generating) {
    return null;
  }
  
  return (
    <span className="inline-flex items-center">
      <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
      Сейчас идет генерация
    </span>
  );
};
