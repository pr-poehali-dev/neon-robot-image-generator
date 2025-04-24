interface GenerationIndicatorProps {
  isGenerating: boolean;
}

export const GenerationIndicator = ({ isGenerating }: GenerationIndicatorProps) => {
  return (
    <div className="flex items-center justify-center">
      {isGenerating ? (
        <span className="inline-block h-4 w-4 rounded-full bg-green-500 animate-pulse"></span>
      ) : (
        <span className="inline-block h-4 w-4 rounded-full bg-gray-500"></span>
      )}
    </div>
  );
};
