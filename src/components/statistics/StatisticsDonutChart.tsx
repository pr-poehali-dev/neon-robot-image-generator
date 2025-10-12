import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";

interface DonutChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  loading: boolean;
  isMobile: boolean;
}

export const StatisticsDonutChart = ({ data, loading, isMobile }: DonutChartProps) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Skeleton className="h-40 w-40 rounded-full bg-white/5" />
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={isMobile ? 35 : 50}
          outerRadius={isMobile ? 65 : 85}
          paddingAngle={2}
          dataKey="value"
          labelLine={false}
          label={({ percent }) => 
            percent > 0.05 ? `${(percent * 100).toFixed(0)}%` : ''
          }
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={2}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={entry.color}
            />
          ))}
        </Pie>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const getColorClass = (name: string) => {
                switch(name) {
                  case 'Успешно': return 'text-emerald-400';
                  case '429 RL': return 'text-gray-400';
                  default: return 'text-blue-400';
                }
              };
              
              return (
                <div className="bg-gray-900/95 border border-white/30 p-3 rounded-xl shadow-2xl backdrop-blur-sm">
                  <p className={`font-medium ${getColorClass(payload[0].name)}`}>
                    {`${payload[0].name}: ${payload[0].value}`}
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};