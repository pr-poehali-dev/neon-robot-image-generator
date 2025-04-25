import { ReactNode } from "react";

export function BackgroundPaths({ title = "Background" }: { title?: string }) {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-neutral-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full bg-grid-slate-200/70 dark:bg-grid-slate-700/20" />
      </div>
    </div>
  );
}
