export interface SkrtGenDemoProps {
  onImageGenerated?: (imageUrl: string) => void;
}

export interface GeneratorFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  apiKey: string;
  setApiKey: (apiKey: string) => void;
  isLoading: boolean;
  onGenerateClick: () => void;
  onRandomPromptClick: () => void;
}

export interface ImagePreviewProps {
  imageUrl: string | null;
  onImageError: () => void;
  isLoading: boolean;
}

export interface HighlightItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description?: string;
}
