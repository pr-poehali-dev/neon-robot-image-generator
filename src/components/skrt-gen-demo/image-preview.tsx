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
      className="aspect-square w-full rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-[#252535] cursor-pointer transition-transform hover:scale-[1.02] flex items-center justify-center"
      onClick={imageUrl ? openImageInNewTab : undefined}
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-full w-full">
          <Loader2 className="h-12 w-12 animate-spin text-white/70" />
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
          src="https://h.uguu.se/sWQRLidf.png" 
          alt="Placeholder" 
          className="w-full h-full object-cover" 
        />
      )}
    </div>
  );
};

export default ImagePreview;