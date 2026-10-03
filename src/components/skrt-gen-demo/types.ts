export const RATIOS = ["1:1", "16:9", "9:16"] as const;
export type Ratio = typeof RATIOS[number];

export interface SkrtGenDemoProps {
  onImageGenerated?: (imageUrl: string) => void;
}

export interface GeneratorFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  apiKey: string;
  setApiKey: (apiKey: string) => void;
  ratios: Ratio[];
  toggleRatio: (ratio: Ratio) => void;
  magic: boolean;
  setMagic: (magic: boolean) => void;
  stage: "magic" | "image" | null;
  isLoading: boolean;
  onGenerateClick: () => void;
  onRandomPromptClick: () => void;
}

export interface GenResult {
  ratio: Ratio;
  url: string | null;
  loading: boolean;
  error?: string;
}

export interface ImagePreviewProps {
  results: GenResult[];
  onImageError: () => void;
  isLoading: boolean;
}

export interface HighlightItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description?: string;
}
