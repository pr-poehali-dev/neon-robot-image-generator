import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className={`p-4 ${isMobile ? 'text-center' : ''}`}>
        <h4 className="text-xs text-gray-400 mb-1">{title}</h4>
        {value === null ? (
          <Skeleton className="h-6 w-16 bg-gray-800" />
        ) : (
          <p className={`text-xl font-semibold ${color}`}>
            {value}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
