import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "./ui/button";
import { format, parseISO, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DateRange, useRangeStats } from '@/hooks/useRangeStats';
import Icon from './ui/icon';
import { useIsMobile } from '@/hooks/use-mobile';

// Функция для расчета стоимости с учётом изменения цены с 29 декабря 2025
const getPriceForDate = (dateString: string): number => {
  const date = new Date(dateString);
  const priceChangeDate = new Date('2025-12-29');
  return date >= priceChangeDate ? 0.004 : 0.00225;
};

// Компонент для отображения всплывающей подсказки при наведении на график
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    try {
      const date = parseISO(label);
      const formattedDate = format(date, 'd MMMM', { locale: ru });
      const requestCount = payload[0].value;
      const pricePerRequest = getPriceForDate(label);
      const cost = (requestCount * pricePerRequest).toFixed(2);
      return (
        <div className="bg-gray-900/95 border border-white/30 p-3 rounded-xl shadow-2xl backdrop-blur-sm">
          <p className="text-white/70 text-sm font-medium">{formattedDate}</p>
          <p className="font-semibold text-white text-base mt-1">{`${requestCount} запросов`}</p>
          <p className="font-semibold text-emerald-400 text-base">${cost}</p>
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

  // Расчет стоимости на основе количества запросов с учётом динамической цены
  const calculateTotalCost = () => {
    if (!data || data.length === 0) return { total: '0.00', oldPrice: 0, newPrice: 0 };
    
    let oldPriceCount = 0;
    let newPriceCount = 0;
    
    const total = data.reduce((sum, item) => {
      const pricePerRequest = getPriceForDate(item.date);
      if (pricePerRequest === 0.00225) {
        oldPriceCount += item.count;
      } else {
        newPriceCount += item.count;
      }
      return sum + (item.count * pricePerRequest);
    }, 0);
    
    return { 
      total: total.toFixed(2), 
      oldPrice: oldPriceCount, 
      newPrice: newPriceCount 
    };
  };
  
  const { total: totalCost, oldPrice: oldPriceCount, newPrice: newPriceCount } = calculateTotalCost();

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
    <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 pointer-events-none" />
      <div className="relative p-4 md:p-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-3 md:space-y-0 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setRange('current_month')}
              className={`px-4 py-2 rounded-xl text-sm font-light transition-all duration-200 ${
                range === 'current_month'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              Текущий месяц
            </button>
            <button
              onClick={() => setRange('previous_month')}
              className={`px-4 py-2 rounded-xl text-sm font-light transition-all duration-200 ${
                range === 'previous_month'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              Предыдущий месяц
            </button>
          </div>
          {!isMobile && (
            <button
              onClick={exportToCSV}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-sm font-light transition-all duration-200 flex items-center gap-2"
            >
              <Icon name="FileText" className="h-4 w-4" />
              Экспорт .csv
            </button>
          )}
        </div>
      </div>
      <div className="relative px-4 md:px-5 pb-4 flex-1 flex flex-col">
        {loading ? (
          <div className="h-72 flex items-center justify-center">
            <Icon name="Loader2" className="animate-spin h-8 w-8 text-emerald-400" />
          </div>
        ) : error ? (
          <div className="h-72 flex items-center justify-center text-red-300/80">
            {error}
          </div>
        ) : (
          <>
            <div className="w-full" style={{ height: '280px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={chartData} 
                  margin={{ 
                    top: 20, 
                    right: isMobile ? 10 : 30, 
                    left: isMobile ? 5 : 20, 
                    bottom: 20 
                  }}
                  barCategoryGap={isMobile ? "10%" : "15%"}
                  barGap={0}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    tickFormatter={formatXAxis} 
                    stroke="rgba(255,255,255,0.2)"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: isMobile ? 10 : 12 }} 
                    interval={getTickInterval()}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                    tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.2)"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: isMobile ? 10 : 12 }} 
                    allowDecimals={false}
                    width={isMobile ? 25 : 40}
                  />
                  <Tooltip 
                    content={<CustomTooltip />} 
                    cursor={{ fill: 'rgba(255,255,255,0.05)', opacity: 0.8 }} 
                  />
                  <Bar 
                    dataKey="count" 
                    fill="url(#barGradient)"
                    radius={[8, 8, 0, 0]} 
                    animationDuration={500}
                    name="Запросы"
                    maxBarSize={isMobile ? 40 : 60}
                  />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="rgb(5, 150, 105)" stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl border border-white/20 p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm md:text-base font-light text-white/50 uppercase tracking-wider">Общая сумма</div>
                  <div className="text-3xl md:text-5xl font-light text-emerald-400 mt-1 tracking-tight">${totalCost}</div>
                  <div className="flex flex-col gap-1 mt-2">
                    {oldPriceCount > 0 && (
                      <div className="text-xs md:text-sm text-white/40 font-light">
                        {oldPriceCount.toLocaleString()} запросов × $0.00225
                      </div>
                    )}
                    {newPriceCount > 0 && (
                      <div className="text-xs md:text-sm text-white/40 font-light">
                        {newPriceCount.toLocaleString()} запросов × $0.004
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-4xl md:text-6xl text-emerald-400/30 font-extralight">$</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}