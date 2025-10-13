import { useState, useEffect } from "react";
import { HealthData, ChartDataItem } from "./types";

export const useHealthData = () => {
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHealthData = async () => {
    try {
      const response = await fetch("https://skrt.arnld.ai/health");
      if (!response.ok) {
        throw new Error("Не удалось получить данные о состоянии сервиса");
      }
      const data = await response.json();
      console.log('Health data:', data);
      console.log('Today stats:', data.today_stats);
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

    // Обновляем каждые 3 секунды
    const intervalId = setInterval(() => {
      fetchHealthData();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // В API failed соответствует 429 RL
  const pieData: ChartDataItem[] = healthData
    ? [
        {
          name: "Успешно",
          value: healthData.today_stats?.success ?? 0,
          color: "#10B981",
        },
        {
          name: "429 RL",
          value: healthData.today_stats?.failed ?? 0,
          color: "#6B7280",
        },
      ]
    : [];

  return {
    healthData,
    loading,
    error,
    pieData,
  };
};

export const formatUptime = (seconds: number): string => {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor(((seconds % 86400) % 3600) / 60);

  return `${days}д ${hours}ч ${minutes}м`;
};