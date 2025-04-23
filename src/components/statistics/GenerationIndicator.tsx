interface GenerationIndicatorProps {
  isGenerating: boolean;
}

export const GenerationIndicator = ({ isGenerating }: GenerationIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {isGenerating ? (
        <>
          <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>Идет генерация</span>
        </>
      ) : (
        <>
          <span className="inline-block h-2 w-2 rounded-full bg-gray-500"></span>
          <span>Генерация неактивна</span>
        </>
      )}
    </div>
  );
};
