import { HighlightItemProps } from "./types";

const HighlightItem = ({ icon, title, value, description }: HighlightItemProps) => {
  return (
    <div className="flex items-center p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-300">
      <div className="mr-4 opacity-80">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-light truncate text-white/60 uppercase tracking-wider">{title}</div>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-lg sm:text-2xl font-light truncate text-white/95">{value}</span>
        </div>
        {description && (
          <div className="text-xs mt-2 text-yellow-300/80 line-clamp-2 font-light">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default HighlightItem;