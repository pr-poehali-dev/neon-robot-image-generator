import { useState, useEffect } from "react";
import { addDays, format, startOfMonth, endOfMonth, subMonths } from "date-fns";
import { ru } from "date-fns/locale";

export interface StatsDataItem {
  date: string;
  count: number;
}

export interface StatsResponse {
  success: boolean;
  start_date: string;
  end_date: string;
  data: StatsDataItem[];
}

export type DateRange = "current_month" | "previous_month";

export function useRangeStats(initialRange: DateRange = "current_month") {
  const [range, setRange] = useState<DateRange>(initialRange);
  const [data, setData] = useState<StatsDataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const today = new Date();
        let startDate: Date;
        let endDate: Date;

        if (range === "current_month") {
          startDate = startOfMonth(today);
          endDate = today;
        } else {
          // previous month
          const prevMonth = subMonths(today, 1);
          startDate = startOfMonth(prevMonth);
          endDate = endOfMonth(prevMonth);
        }

        const formattedStartDate = format(startDate, "yyyy-MM-dd");
        const formattedEndDate = format(endDate, "yyyy-MM-dd");

        const response = await fetch(
          `https://skrt.arnld.ai/stats/range?start_date=${formattedStartDate}&end_date=${formattedEndDate}`,
        );

        if (!response.ok) {
          throw new Error("Не удалось загрузить статистику");
        }

        const result: StatsResponse = await response.json();

        if (result.success) {
          setData(result.data);

          // Вычисляем общую сумму
          const sum = result.data.reduce((acc, item) => acc + item.count, 0);
          setTotalCount(sum);
        } else {
          throw new Error("Ошибка при получении данных");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [range]);

  return {
    data,
    loading,
    error,
    totalCount,
    range,
    setRange,
  };
}
