import { Skeleton } from "@/components/ui/skeleton";

interface StatCardProps {
  title: string;
  value: number | string | null;
  color: string;
  isText?: boolean;
  isMobile: boolean;
}

export const StatisticsCard = ({ title, value, color, isText = false, isMobile }: StatCardProps) => {
  return (
    <div className="bg-gray-900 rounded-md p-3 flex flex-col items-center justify-center shadow-sm border border-gray-800">
      <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400 mb-1`}>{title}</div>
      {value === null ? (
        <Skeleton className="h-6 w-16 bg-gray-800" />
      ) : (
        <div className={`${color} ${isMobile ? 'text-lg' : 'text-xl'} font-semibold`}>
          {value}
        </div>
      )}
    </div>
  );
};
