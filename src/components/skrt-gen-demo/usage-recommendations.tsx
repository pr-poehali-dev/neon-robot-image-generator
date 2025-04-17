import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const UsageRecommendations = () => {
  return (
    <div className="mt-4 rounded-lg bg-blue-950/30 p-4 border border-blue-800/50">
      <div className="flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="text-sm font-medium text-blue-300 mb-1">Рекомендации по использованию</h4>
          <ul className="text-xs text-blue-200 space-y-1.5 list-disc pl-4">
            <li>Используйте короткие, но конкретные запросы на английском языке</li>
            <li>Добавляйте стилевые слова: neon, cyberpunk, realistic, cartoon</li>
            <li>При ошибках генерации попробуйте изменить ключевые слова</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsageRecommendations;