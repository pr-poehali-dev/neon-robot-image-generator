
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "./ui/button";
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DateRange, StatsDataItem, useRangeStats } from '@/hooks/useRangeStats';
import Icon from './ui/icon';

// Компонент для отображения всплывающей подсказки при наведении на график
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    try {
      const date = parseISO(label);
      const formattedDate = format(date, 'd MMMM', { locale: ru });
      return (
        <div className="bg-gray-900 p-3 border border-gray-700 rounded-md shadow-lg">
          <p className="text-gray-400">{formattedDate}</p>
          <p className="font-semibold text-white">{`${payload[0].value} запросов`}</p>
        </div>
      );
    } catch (e) {
      return null;
    }
  }

  return null;
};

export function UsageChart() {
  const { 
    data, 
    loading, 
    error, 
    totalCount, 
    range, 
    setRange 
  } = useRangeStats();

  // Форматирование данных для отображения на графике
  const chartData = data.map(item => ({
    ...item,
    name: item.date // Для оси X
  }));

  // Функция для определения активной кнопки
  const isActiveButton = (buttonRange: DateRange) => {
    return buttonRange === range ? 'bg-primary text-white' : 'bg-secondary text-foreground';
  };

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
    <Card className="p-6 bg-gray-900 border-gray-800 text-white mt-8">
      <CardHeader className="p-0 pb-5">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold">Использование API</CardTitle>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              className={isActiveButton('current_month')}
              onClick={() => setRange('current_month')}
            >
              Текущий месяц
            </Button>
            <Button 
              variant="ghost" 
              className={isActiveButton('previous_month')}
              onClick={() => setRange('previous_month')}
            >
              Предыдущий месяц
            </Button>
            <Button variant="ghost" className="text-foreground">
              <Icon name="FileText" className="mr-2 h-4 w-4" />
              Export .csv
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="mb-2 text-xl">Использование</div>
        
        {loading ? (
          <div className="h-72 flex items-center justify-center">
            <Icon name="Loader2" className="animate-spin h-8 w-8 text-primary" />
          </div>
        ) : error ? (
          <div className="h-72 flex items-center justify-center text-red-400">
            {error}
          </div>
        ) : (
          <>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    tickFormatter={formatXAxis} 
                    stroke="#666"
                    tick={{ fill: '#999' }} 
                  />
                  <YAxis 
                    stroke="#666"
                    tick={{ fill: '#999' }} 
                    allowDecimals={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="count" 
                    fill="#cae865" 
                    radius={[4, 4, 0, 0]} 
                    animationDuration={300}
                    name="Запросы"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <Card className="mt-5 bg-gray-900 border border-gray-700">
              <CardContent className="p-5 flex justify-between items-center">
                <div>
                  <div className="text-lg font-medium text-gray-400">Общая сумма запросов</div>
                  <div className="text-4xl font-bold text-[#cae865]">{totalCount}</div>
                </div>
                <div className="text-5xl text-[#cae865]">$</div>
              </CardContent>
            </Card>
          </>
        )}
      </CardContent>
    </Card>
  );
}
