/**
 * API-клиент для взаимодействия с сервисом генерации изображений
 */
export const generateImageAPI = async (
  prompt: string,
  apiKey: string,
): Promise<string> => {
  const response = await fetch("https://skrt.arnld.ai/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Auth": apiKey,
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error(
        "Превышен лимит запросов. Пожалуйста, подождите и попробуйте снова.",
      );
    } else if (response.status === 405) {
      throw new Error(
        "Метод не разрешен. Проверьте настройки CORS на сервере.",
      );
    }
    throw new Error(`Ошибка: ${response.status}`);
  }

  const data = await response.json();
  return data.imageURL;
};

/**
 * Утилитарная функция для генерации случайного промпта
 */
export const generateRandomPromptText = (): string => {
  const nouns = [
    "astronaut",
    "cat",
    "robot",
    "dragon",
    "wizard",
    "landscape",
    "cityscape",
    "forest",
    "ocean",
    "portrait",
  ];
  const styles = [
    "neon",
    "low‑poly",
    "oil painting",
    "watercolor",
    "photorealistic",
  ];

  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomLetters = Array(4)
    .fill(0)
    .map(() => String.fromCharCode(97 + Math.floor(Math.random() * 26)))
    .join("");

  return `${randomStyle} ${randomNoun} ${randomLetters}`;
};
