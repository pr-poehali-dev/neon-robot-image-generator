export interface HealthData {
  status: string;
  upload_queue_size: number;
  uptime: number;
  today_stats: {
    success: number;
    failed: number;
    ratelimited?: number; // Добавлено поле для учета рейтлимитов
    total: number;
  };
  prev_month_stats: {
    success: number;
    failed: number;
    total: number;
  };
  gpu_server: {
    status: string;
    queue: {
      status: string;
      model_loaded: boolean;
      queue_size: number;
      max_queue_size: number;
      is_generating: boolean;
    }
  }
}

export type ChartDataItem = {
  name: string;
  value: number;
  color: string;
};
