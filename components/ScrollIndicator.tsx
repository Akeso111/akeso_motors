"use client";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs tracking-[0.4em] text-white/60">
          SCROLL
        </span>

        <div className="h-12 w-[1px] bg-white/40 overflow-hidden">
          <div className="h-5 w-full bg-white animate-bounce" />
        </div>
      </div>
    </div>
  );
}