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
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
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
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={1}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={entry.color}
              filter="url(#glow)"
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
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-3 rounded-2xl shadow-2xl">
                  <p className={`font-light ${getColorClass(payload[0].name)}`}>
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