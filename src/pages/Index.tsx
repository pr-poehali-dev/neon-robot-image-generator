
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SkrtGenDemo from '@/components/SkrtGenDemo';
import ApiFeatures from '@/components/ApiFeatures';
import ApiLimitsInfo from '@/components/ApiLimitsInfo';
import StatisticsPanel from '@/components/StatisticsPanel';
import BackgroundPathsWrapper from '@/components/BackgroundPathsWrapper';
import UsageChart from '@/components/usage-chart'; // Обновленный импорт

export function Index() {
  return (
    <div className="container relative mx-auto px-4 py-8">
      <BackgroundPathsWrapper />
      
      <div className="mb-12 space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Sokratic API Dashboard</h1>
        <p className="text-xl text-muted-foreground">
          Анализируйте использование API и управляйте своими ресурсами
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <SkrtGenDemo />
          </CardContent>
        </Card>

        <StatisticsPanel />
        <ApiLimitsInfo />
        
        <div className="md:col-span-2">
          <UsageChart />
        </div>
        
        <div className="md:col-span-2">
          <ApiFeatures />
        </div>
      </div>
    </div>
  );
}
