
import React from 'react';
import { UsageBarChart } from './UsageBarChart';
import { UsageSummary } from './UsageSummary';
import { DateSelector } from './DateSelector';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from 'lucide-react';

// Мока данных для отображения
const mockData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - 30 + i);
  return {
    name: date.toISOString().split('T')[0],
    count: Math.floor(Math.random() * 100)
  };
});

// Экспортируем компонент в том же формате, что и оригинальный UsageChart
export const UsageChart: React.FC = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-3">
        <BarChart className="h-6 w-6 text-primary" />
        <CardTitle>Статистика использования API</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <DateSelector />
          <UsageSummary 
            totalRequests={mockData.reduce((acc, item) => acc + item.count, 0)} 
            averagePerDay={Math.round(mockData.reduce((acc, item) => acc + item.count, 0) / mockData.length)} 
          />
          <UsageBarChart data={mockData} chartColor="#9b87f5" />
        </div>
      </CardContent>
    </Card>
  );
};

export default UsageChart;
