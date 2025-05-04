
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { DateSelectorProps } from './types';
import { DateRange } from '@/hooks/useRangeStats';

/**
 * Компонент выбора периода отображения статистики
 */
export const DateSelector: React.FC<DateSelectorProps> = ({ range, setRange, onExport }) => {
  // Функция для определения активной кнопки
  const isActiveButton = (buttonRange: DateRange) => {
    return buttonRange === range ? 'bg-primary text-white' : 'bg-secondary text-foreground';
  };
  
  return (
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
      <Button 
        variant="ghost" 
        className="text-foreground"
        onClick={onExport}
      >
        <Icon name="FileText" className="mr-2 h-4 w-4" />
        Export .csv
      </Button>
    </div>
  );
};
