import { Skeleton } from "@/components/ui/skeleton";

interface StatisticsCardProps {
  title: string;
  value: number | string | null;
  color: string;
  isText?: boolean;
  isMobile: boolean;
}

export const StatisticsCard = ({ 
  title, 
  value, 
  color,
  isText = false,
  isMobile 
}: StatisticsCardProps) => {
  return (
    <div className="bg-gray-900 p-3 rounded-lg border border-gray-800 flex flex-col items-center justify-center">
      <h4 className="text-xs text-gray-400 mb-1">{title}</h4>
      
      {value === null ? (
        <Skeleton className="h-6 w-16 bg-gray-800" />
      ) : (
        <p className={`text-${isMobile ? 'lg' : 'xl'} font-semibold ${color}`}>
          {value}
        </p>
      )}
    </div>
  );
};
