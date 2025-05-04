
import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { UsageBarChartProps } from './types';
import { CustomTooltip } from './CustomTooltip';

/**
 * Компонент гистограммы использования API
 */
export const UsageBarChart: React.FC<UsageBarChartProps> = ({ data, chartColor }) => {
  // Функция для форматирования подписей оси X
  const formatXAxis = (tickItem: string) => {
    try {
      const date = parseISO(tickItem);
      return format(date, 'd/MM', { locale: ru });
    } catch {
      return '';
    }
  };

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          barCategoryGap={1}
          barGap={0}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
          <XAxis 
            dataKey="name" 
            tickFormatter={formatXAxis} 
            stroke="#666"
            tick={{ fill: '#999' }} 
            // Изменяем параметры отображения тиков на оси X
            interval={Math.ceil(data.length / 15) - 1} // Показываем примерно 15 тиков
            minTickGap={15} // Минимальный отступ между тиками
          />
          <YAxis 
            stroke="#666"
            tick={{ fill: '#999' }} 
            allowDecimals={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="count" 
            fill={chartColor}
            radius={[4, 4, 0, 0]} 
            animationDuration={300}
            name="Запросы"
            // Уменьшаем максимальную ширину столбика для лучшего отображения
            maxBarSize={15}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
