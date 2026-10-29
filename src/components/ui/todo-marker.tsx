import React from "react";

interface TodoMarkerProps {
  label: string;
  className?: string;
}

export function TodoMarker({ label, className = "" }: TodoMarkerProps) {
  // If in development, render prominently highlighted
  if (process.env.NODE_ENV !== "production") {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-0.5 my-0.5 rounded text-xs font-mono font-medium bg-[#FFF3C4] dark:bg-[#3D3200] text-[#7A5B00] dark:text-[#FFDF70] border border-[#E6C64D] dark:border-[#735E00] ${className}`}
        title="Owner action required: replace with verified data"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#E6A700] animate-pulse" />
        <span>{label}</span>
      </span>
    );
  }

  // Fallback for safety (though check-todos blocks production builds)
  return null;
}
