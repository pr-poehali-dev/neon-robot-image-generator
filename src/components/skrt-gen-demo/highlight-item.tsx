import { HighlightItemProps } from "./types";

const HighlightItem = ({ icon, title, value, description }: HighlightItemProps) => {
  return (
    <div className="flex items-center p-3 rounded-lg bg-[#0d0d14] border border-[#252535]">
      <div className="mr-3">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium truncate">{title}</div>
        <div className="flex items-baseline gap-1">
          <span className="text-base sm:text-xl font-bold truncate">{value}</span>
        </div>
        {description && (
          <div className="text-xs mt-1 text-yellow-300 line-clamp-2">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default HighlightItem;