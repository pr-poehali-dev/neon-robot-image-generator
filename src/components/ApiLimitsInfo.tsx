import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ApiLimitsInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ограничения API</CardTitle>
        <CardDescription>Важная информация о лимитах сервиса SKRT.GEN</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
            <Badge variant="outline" className="mb-2">Время генерации</Badge>
            <span className="text-2xl font-bold">2.5 секунды</span>
            <span className="text-sm text-muted-foreground">на одно изображение</span>
          </div>
          
          <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
            <Badge variant="outline" className="mb-2">Максимальная скорость</Badge>
            <span className="text-2xl font-bold">72 картинки</span>
            <span className="text-sm text-muted-foreground">в минуту</span>
          </div>
          
          <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
            <Badge variant="outline" className="mb-2">Рейт-лимит</Badge>
            <span className="text-2xl font-bold">30 картинок</span>
            <span className="text-sm text-muted-foreground">в одном запросе</span>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-yellow-800 dark:text-yellow-400">
            При превышении лимита в 30 картинок будет возвращен код 429. В этом случае рекомендуется подождать не менее 5 секунд перед повторным запросом или обратиться к резервному решению.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiLimitsInfo;