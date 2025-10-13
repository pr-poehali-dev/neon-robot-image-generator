export interface HealthData {
  status: string;
  storage_queue_size: number;
  uptime: number;
  today_stats: {
    success: number;
    failed: number;
    200: number;
    429: number;
    500: number;
    total: number;
  };
  prev_month_stats: {
    success: number;
    failed: number;
    total: number;
  };
  storage: {
    type: string;
    ttl_minutes: number;
    current_images: number;
    memory_usage_mb: number;
    redis_url: string;
  };
  gpu_server: {
    status: string;
    queue: {
      status: string;
      model_loaded: boolean;
      queue_size: number;
      max_queue_size: number;
      is_generating: boolean;
    } | null;
  }
}

export type ChartDataItem = {
  name: string;
  value: number;
  color: string;
};