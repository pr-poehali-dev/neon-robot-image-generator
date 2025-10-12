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
    <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-white/10 p-5 hover:bg-white/[0.06] transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
      <h4 className="text-xs font-light tracking-wider text-white/50 uppercase mb-2">{title}</h4>
      {loading || value === null ? (
        <Skeleton className="h-8 w-20 bg-white/5 rounded-lg" />
      ) : (
        <p className="text-3xl font-light text-white/95 tracking-tight">
          {value}
        </p>
      )}
    </div>
  );
};