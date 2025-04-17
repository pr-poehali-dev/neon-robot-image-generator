import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, AlertCircle } from "lucide-react";

const ApiLimitsInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ограничения API</CardTitle>
        <CardDescription>Важная информация о лимитах сервиса SKRT.GEN</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center p-3 border rounded-lg bg-card/70">
            <Clock className="h-5 w-5 mr-3 text-primary" />
            <div className="flex-1">
              <div className="text-sm font-medium">Время генерации</div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold">2.5 секунды</span>
                <span className="text-xs text-muted-foreground">на одно изображение</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center p-3 border rounded-lg bg-card/70">
            <Zap className="h-5 w-5 mr-3 text-primary" />
            <div className="flex-1">
              <div className="text-sm font-medium">Максимальная скорость</div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold">72 картинки</span>
                <span className="text-xs text-muted-foreground">в минуту</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center p-3 border rounded-lg bg-card/70">
            <AlertCircle className="h-5 w-5 mr-3 text-primary" />
            <div className="flex-1">
              <div className="text-sm font-medium">Рейт-лимит</div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold">30 картинок</span>
                <span className="text-xs text-muted-foreground">в одном запросе</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-950/30 p-3 rounded-lg border border-yellow-800/50">
          <p className="text-sm text-yellow-300">
            При превышении лимита в 30 картинок будет возвращен код 429. В этом случае рекомендуется подождать не менее 5 секунд перед повторным запросом.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiLimitsInfo;