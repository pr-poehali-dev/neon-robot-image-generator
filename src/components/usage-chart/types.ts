
import { TooltipProps } from 'recharts';
import { DateRange, StatsDataItem } from '@/hooks/useRangeStats';

// Типы для компонента UsageChart и его подкомпонентов

export interface ChartDataItem {
  name: string;
  count: number;
}

export interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export interface DateSelectorProps {
  range: DateRange;
  setRange: (range: DateRange) => void;
  onExport: () => void;
}

export interface UsageSummaryProps {
  totalCount: number;
  totalCost: string;
  chartColor: string;
}

export interface UsageBarChartProps {
  data: ChartDataItem[];
  chartColor: string;
}
