export interface SkrtGenDemoProps {
  onImageGenerated?: (imageUrl: string) => void;
}

export interface HighlightItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description?: string;
}

export interface ImagePreviewProps {
  imageUrl: string | null;
  onImageError: () => void;
}

export interface GeneratorFormProps {
  prompt: string;
  setPrompt: (value: string) => void;
  apiKey: string;
  setApiKey: (value: string) => void;
  isLoading: boolean;
  onGenerateClick: () => void;
  onRandomPromptClick: () => void;
}
