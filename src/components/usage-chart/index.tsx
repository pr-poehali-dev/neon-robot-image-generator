
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { useRangeStats } from '@/hooks/useRangeStats';
import { DateSelector } from './DateSelector';
import { UsageSummary } from './UsageSummary';
import { UsageBarChart } from './UsageBarChart';
import { calculateTotalCost, exportToCSV, generateFullMonthData } from './utils';

/**
 * Основной компонент графика использования API
 */
export function UsageChart() {
  // Константы
  const chartColor = 'rgb(16, 185, 129)';
  
  // Получаем данные из хука
  const { 
    data, 
    loading, 
    error, 
    totalCount, 
    range, 
    setRange 
  } = useRangeStats();

  // Расчет стоимости на основе количества запросов
  const totalCost = calculateTotalCost(totalCount);

  // Получаем полные данные для отображения всех дней
  const chartData = generateFullMonthData(data, range);

  // Обработчик экспорта данных
  const handleExport = () => exportToCSV(data, range);

  return (
    <Card className="p-6 bg-gray-900 border-gray-800 text-white mt-2 mb-8">
      <CardHeader className="p-0 pb-5">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold">Использование API</CardTitle>
          <DateSelector 
            range={range} 
            setRange={setRange} 
            onExport={handleExport} 
          />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="mb-2 text-xl">Использование</div>
        
        {loading ? (
          <div className="h-72 flex items-center justify-center">
            <Icon name="Loader2" className="animate-spin h-8 w-8" style={{ color: chartColor }} />
          </div>
        ) : error ? (
          <div className="h-72 flex items-center justify-center text-red-400">
            {error}
          </div>
        ) : (
          <>
            <UsageBarChart data={chartData} chartColor={chartColor} />
            <UsageSummary totalCount={totalCount} totalCost={totalCost} chartColor={chartColor} />
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default UsageChart;
