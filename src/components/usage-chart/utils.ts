
import { format, parseISO, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DateRange, StatsDataItem } from '@/hooks/useRangeStats';
import { ChartDataItem } from './types';

/**
 * Создает полный набор данных со всеми днями месяца
 */
export const generateFullMonthData = (data: StatsDataItem[], range: DateRange): ChartDataItem[] => {
  if (!data || data.length === 0) return [];

  // Определяем начало и конец месяца в зависимости от выбранного диапазона
  const today = new Date();
  const monthStart = range === 'current_month' 
    ? startOfMonth(today)
    : startOfMonth(new Date(today.getFullYear(), today.getMonth() - 1, 1));
  
  const monthEnd = range === 'current_month'
    ? endOfMonth(today) // Изменено: всегда получаем конец месяца, а не текущую дату
    : endOfMonth(new Date(today.getFullYear(), today.getMonth() - 1, 1));

  // Получаем все дни в выбранном месяце
  const allDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Преобразуем в формат для графика
  return allDays.map(day => {
    const dateString = format(day, 'yyyy-MM-dd');
    const existingData = data.find(d => d.date === dateString);
    
    return {
      name: dateString,
      count: existingData ? existingData.count : 0
    };
  });
};

/**
 * Экспортирует данные в CSV-файл
 */
export const exportToCSV = (data: StatsDataItem[], range: DateRange): void => {
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

/**
 * Рассчитывает стоимость на основе количества запросов
 */
export const calculateTotalCost = (totalCount: number): string => {
  return (totalCount * 0.0025).toFixed(2);
};
