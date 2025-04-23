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
    return <Skeleton className="h-36 w-36 rounded-full bg-gray-800" />;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={isMobile ? 30 : 40}
          outerRadius={isMobile ? 60 : 70}
          paddingAngle={4}
          dataKey="value"
          labelLine={false}
          label={({ name, percent }) => 
            percent > 0.05 ? `${name} ${(percent * 100).toFixed(0)}%` : ''
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-gray-800 border border-gray-700 p-2 rounded shadow-lg">
                  <p className={`text-${payload[0].name === 'Успешно' ? 'emerald' : 'red'}-400`}>
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
