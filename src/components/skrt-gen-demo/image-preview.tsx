import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { ImagePreviewProps } from "./types";

const ImagePreview = ({ imageUrl, onImageError, isLoading }: ImagePreviewProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square w-full rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-[#252535] cursor-pointer transition-transform hover:scale-[1.02] flex items-center justify-center">
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
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] w-auto h-auto max-h-[90vh] p-3 bg-background border flex items-center justify-center">
        <DialogTitle className="sr-only">Просмотр сгенерированного изображения</DialogTitle>
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt="Сгенерированное изображение" 
            className="max-w-full max-h-[80vh] object-contain rounded-lg" 
            onError={onImageError}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImagePreview;