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
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 my-0.5 rounded text-[11px] font-mono font-medium bg-[#FFF7D6] dark:bg-[#1E1C14] text-[#7A5B00] dark:text-[#E2C366] border border-[#E6C64D] dark:border-[#3A331D] ${className}`}
        title="Owner action required: replace with verified data"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#D49E00] dark:bg-[#E2C366] animate-pulse" />
        <span>{label}</span>
      </span>
    );
  }

  // Fallback for safety (though check-todos blocks production builds)
  return null;
}
