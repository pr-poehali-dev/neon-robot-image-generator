
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { UsageSummaryProps } from './types';

/**
 * Компонент отображения общей суммы и статистики использования
 */
export const UsageSummary: React.FC<UsageSummaryProps> = ({ totalCount, totalCost, chartColor }) => {
  return (
    <Card className="mt-5 bg-gray-900 border border-gray-700">
      <CardContent className="p-5 flex justify-between items-center">
        <div>
          <div className="text-lg font-medium text-gray-400">Общая сумма</div>
          <div className="text-4xl font-bold" style={{ color: chartColor }}>${totalCost}</div>
          <div className="text-sm text-gray-400">{totalCount} запросов × $0.0025</div>
        </div>
        <div className="text-5xl" style={{ color: chartColor }}>$</div>
      </CardContent>
    </Card>
  );
};
