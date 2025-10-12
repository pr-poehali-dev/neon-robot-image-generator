import { Loader2 } from "lucide-react";
import { ImagePreviewProps } from "./types";

const ImagePreview = ({ imageUrl, onImageError, isLoading }: ImagePreviewProps) => {
  const openImageInNewTab = () => {
    if (imageUrl) {
      window.open(imageUrl, '_blank');
    }
  };

  return (
    <div 
      className="relative aspect-square w-full rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 flex items-center justify-center group"
      onClick={imageUrl ? openImageInNewTab : undefined}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      {isLoading ? (
        <div className="flex items-center justify-center h-full w-full">
          <Loader2 className="h-12 w-12 animate-spin text-emerald-400" />
        </div>
      ) : imageUrl ? (
        <img 
          src={imageUrl} 
          alt="Сгенерированное изображение" 
          className="w-full h-full object-cover"
          onError={onImageError}
        />
      ) : (
        <img 
          src="https://cdn.poehali.dev/files/bb454bce-5115-4d88-ac49-93654463d839.png" 
          alt="Космонавт" 
          className="w-full h-full object-cover" 
        />
      )}
    </div>
  );
};

export default ImagePreview;