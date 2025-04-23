import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface HealthData {
  status: string;
  upload_queue_size: number;
  uptime: number;
  today_stats: {
    success: number;
    failed: number;
    total: number;
  };
  prev_month_stats: {
    success: number;
    failed: number;
    total: number;
  };
  gpu_server: {
    status: string;
    queue: {
      status: string;
      model_loaded: boolean;
      queue_size: number;
      max_queue_size: number;
      is_generating: boolean;
    }
  }
}

const formatUptime = (seconds: number): string => {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
  
  return `${days}д ${hours}ч ${minutes}м`;
};

const StatisticsPanel = () => {
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const fetchHealthData = async () => {
    try {
      const response = await fetch("https://skrt.poehali.dev/health");
      if (!response.ok) {
        throw new Error("Не удалось получить данные о состоянии сервиса");
      }
      const data = await response.json();
      setHealthData(data);
      setError(null);
    } catch (err) {
      setError("Ошибка при получении статистики");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthData();
    
    const intervalId = setInterval(() => {
      fetchHealthData();
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  const pieData = healthData ? [
    { name: 'Успешно', value: healthData.today_stats?.success ?? 0, color: '#10B981' },
    { name: 'Неудачно', value: healthData.today_stats?.failed ?? 0, color: '#EF4444' },
  ] : [];

  if (error) {
    return (
      <Card className="bg-red-950 border-red-800 mb-8 text-red-200">
        <CardContent className="p-4 text-center">
          {error}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full mt-4 mb-8">
      <div className="bg-gray-950 rounded-lg p-4 shadow-md border border-gray-800">
        <h3 className="text-center text-sm font-medium text-gray-300 mb-3">
          Статистика использования сервиса
        </h3>
        
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-[1fr_2fr] gap-6'}`}>
          {/* Левая колонка с пай-чартом */}
          <div className="bg-gray-900 rounded-lg p-3 flex items-center justify-center border border-gray-800 h-48">
            {loading ? (
              <Skeleton className="h-36 w-36 rounded-full bg-gray-800" />
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
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
                    {pieData.map((entry, index) => (
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
            )}
          </div>
          
          {/* Правая колонка с карточками статистики */}
          <div className="grid grid-cols-2 gap-3">
            <StatCard 
              title="Сегодня успешно" 
              value={loading ? null : healthData?.today_stats?.success ?? 0} 
              color="text-emerald-400"
              isMobile={isMobile}
            />
            <StatCard 
              title="Сегодня всего" 
              value={loading ? null : healthData?.today_stats?.total ?? 0} 
              color="text-blue-400"
              isMobile={isMobile}
            />
            <StatCard 
              title="В очереди" 
              value={loading ? null : healthData?.gpu_server?.queue?.queue_size ?? 0} 
              color="text-amber-400"
              isMobile={isMobile}
            />
            <StatCard 
              title="Аптайм" 
              value={loading ? null : formatUptime(healthData?.uptime || 0)} 
              color="text-purple-400"
              isText
              isMobile={isMobile}
            />
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-500">
          {healthData?.gpu_server?.queue?.is_generating && 
            <span className="inline-flex items-center">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Сейчас идет генерация
            </span>
          }
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: number | string | null;
  color: string;
  isText?: boolean;
  isMobile: boolean;
}

const StatCard = ({ title, value, color, isText = false, isMobile }: StatCardProps) => {
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

export default StatisticsPanel;