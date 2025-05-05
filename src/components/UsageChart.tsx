
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "./ui/button";
import { format, parseISO, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DateRange, useRangeStats } from '@/hooks/useRangeStats';
import Icon from './ui/icon';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  const { 
    data, 
    loading, 
    error, 
    totalCount, 
    range, 
    setRange 
  } = useRangeStats();

  // Расчет стоимости на основе количества запросов
  const totalCost = (totalCount * 0.0025).toFixed(2);

  // Функция для экспорта данных в CSV
  const exportToCSV = () => {
    if (!data || data.length === 0) return;

    // Создаем заголовок CSV
    const csvHeader = 'Дата,Количество запросов\n';
    
    // Преобразуем данные в строки CSV
    const csvData = data.map(item => {
      try {
        const date = parseISO(item.date);
        const formattedDate = format(date, 'dd.MM.yyyy', { locale: ru });
        return `${formattedDate},${item.count}`;
      } catch (e) {
        return `${item.date},${item.count}`;
      }
    }).join('\n');

    // Объединяем заголовок и данные
    const csvContent = `data:text/csv;charset=utf-8,${csvHeader}${csvData}`;
    
    // Создаем ссылку для скачивания
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `api-usage-${range}-${format(new Date(), 'yyyy-MM-dd')}.csv`);
    document.body.appendChild(link);
    
    // Имитируем клик и удаляем ссылку
    link.click();
    document.body.removeChild(link);
  };

  // Создаем полный набор данных со всеми днями месяца
  const generateFullMonthData = () => {
    // Определяем начало и конец месяца в зависимости от выбранного диапазона
    const today = new Date();
    let monthStart, monthEnd;
    
    if (range === 'current_month') {
      // Для текущего месяца берем все дни от начала до конца месяца
      monthStart = startOfMonth(today);
      monthEnd = endOfMonth(today);
    } else { // previous_month
      const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      monthStart = startOfMonth(prevMonth);
      monthEnd = endOfMonth(prevMonth);
    }

    // Получаем все дни в выбранном месяце
    const allDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
    
    // Преобразуем в формат для графика, даже если нет данных
    return allDays.map(day => {
      const dateString = format(day, 'yyyy-MM-dd');
      const existingData = data?.find(d => d.date === dateString);
      
      return {
        name: dateString,
        count: existingData ? existingData.count : 0
      };
    });
  };

  // Получаем полные данные для отображения всех дней
  const chartData = generateFullMonthData();

  // Функция для определения активной кнопки
  const isActiveButton = (buttonRange: DateRange) => {
    return buttonRange === range ? 'bg-primary text-white' : 'bg-secondary text-foreground';
  };

  // Функция для форматирования подписей оси X
  const formatXAxis = (tickItem: string) => {
    try {
      const date = parseISO(tickItem);
      return format(date, 'd', { locale: ru }); // Упрощенный формат - только день
    } catch {
      return '';
    }
  };

  const chartColor = 'rgb(16, 185, 129)';

  // Определяем интервал отображения меток на оси X в зависимости от количества дней
  const getTickInterval = () => {
    const daysCount = chartData.length;
    if (isMobile) {
      // На мобильных показываем меньше меток
      if (daysCount <= 15) return 1; // Каждый второй день
      return Math.floor(daysCount / 7); // ~7 меток на всю ширину
    } else {
      // Для десктопов
      if (daysCount <= 10) return 0; // Показать все метки
      if (daysCount <= 20) return 1; // Показать каждую вторую метку
      if (daysCount <= 31) return 2; // Показать каждую третью метку
      return Math.floor(daysCount / 10); // Показать около 10 меток
    }
  };

  return (
    <Card className="w-full bg-gray-900 border-gray-800 text-white mt-2 mb-8">
      <CardHeader className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
          <CardTitle className="text-xl font-semibold">Использование API</CardTitle>
          <div className="flex flex-wrap gap-2">
            {!isMobile && (
              <Button 
                variant="ghost" 
                className="text-foreground"
                onClick={exportToCSV}
              >
                <Icon name="FileText" className="mr-2 h-4 w-4" />
                Экспорт .csv
              </Button>
            )}
            <Button 
              variant="ghost" 
              size={isMobile ? "sm" : "default"}
              className={isActiveButton('current_month')}
              onClick={() => setRange('current_month')}
            >
              Текущий месяц
            </Button>
            <Button 
              variant="ghost" 
              size={isMobile ? "sm" : "default"}
              className={isActiveButton('previous_month')}
              onClick={() => setRange('previous_month')}
            >
              Предыдущий месяц
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        {loading ? (
          <div className="h-72 flex items-center justify-center">
            <Icon name="Loader2" className="animate-spin h-8 w-8 text-[rgb(16,185,129)]" />
          </div>
        ) : error ? (
          <div className="h-72 flex items-center justify-center text-red-400">
            {error}
          </div>
        ) : (
          <>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={chartData} 
                  margin={{ 
                    top: 20, 
                    right: isMobile ? 10 : 30, 
                    left: isMobile ? 5 : 20, 
                    bottom: 20 
                  }}
                  barCategoryGap={isMobile ? 1 : 2}
                  barGap={0}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    tickFormatter={formatXAxis} 
                    stroke="#666"
                    tick={{ fill: '#999', fontSize: isMobile ? 10 : 12 }} 
                    interval={getTickInterval()}
                    axisLine={{ stroke: '#666' }}
                    tickLine={{ stroke: '#666' }}
                  />
                  <YAxis 
                    stroke="#666"
                    tick={{ fill: '#999', fontSize: isMobile ? 10 : 12 }} 
                    allowDecimals={false}
                    width={isMobile ? 25 : 40}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="count" 
                    fill={chartColor}
                    radius={[4, 4, 0, 0]} 
                    animationDuration={300}
                    name="Запросы"
                    maxBarSize={isMobile ? 10 : 20} // Уменьшаем ширину столбцов на мобильных
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <Card className="mt-5 bg-gray-900 border border-gray-700">
              <CardContent className="p-4 md:p-5 flex justify-between items-center">
                <div>
                  <div className="text-sm md:text-lg font-medium text-gray-400">Общая сумма</div>
                  <div className="text-2xl md:text-4xl font-bold text-[rgb(16,185,129)]">${totalCost}</div>
                  <div className="text-xs md:text-sm text-gray-400">{totalCount} запросов × $0.0025</div>
                </div>
                <div className="text-3xl md:text-5xl text-[rgb(16,185,129)]">$</div>
              </CardContent>
            </Card>
          </>
        )}
      </CardContent>
    </Card>
  );
}
