
import React from 'react';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CustomTooltipProps } from './types';

/**
 * Компонент всплывающей подсказки при наведении на график
 */
export const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
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
