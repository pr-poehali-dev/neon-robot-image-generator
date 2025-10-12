import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface StatisticsCardProps {
  title: string;
  value: number | string | null;
  loading?: boolean;
}

export const StatisticsCard = ({ 
  title, 
  value,
  loading
}: StatisticsCardProps) => {
  return (
    <div className="backdrop-blur-xl bg-white/[0.02] rounded-xl border border-white/5 px-4 py-3 transition-all duration-200">
      <h4 className="text-[10px] font-light tracking-wider text-white/40 uppercase mb-1">{title}</h4>
      {loading || value === null ? (
        <Skeleton className="h-7 w-16 bg-white/5 rounded" />
      ) : (
        <p className="text-2xl font-light text-white/90 tracking-tight">
          {value}
        </p>
      )}
    </div>
  );
};