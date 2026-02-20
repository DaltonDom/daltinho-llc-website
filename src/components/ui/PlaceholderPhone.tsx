interface PlaceholderPhoneProps {
  appName: string
  accentColor: string
}

export function PlaceholderPhone({ appName, accentColor }: PlaceholderPhoneProps) {
  return (
    <div className="relative w-[180px] h-[380px] md:w-[200px] md:h-[420px] rounded-[2.2rem] border-2 border-surface-500 bg-surface-800 overflow-hidden shrink-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      {/* Dynamic island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-surface-950 rounded-full z-10" />

      {/* Screen content — gradient fill */}
      <div
        className="absolute inset-[3px] rounded-[2rem] flex flex-col items-center justify-center gap-3 overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${accentColor}18 0%, ${accentColor}08 40%, #1a171400 100%)`,
        }}
      >
        {/* Decorative elements */}
        <div
          className="w-12 h-12 rounded-2xl opacity-30"
          style={{ backgroundColor: accentColor }}
        />
        <span className="font-heading font-bold text-base text-text-secondary">{appName}</span>
        <span className="text-[10px] font-mono text-text-tertiary tracking-wider uppercase">
          Screenshot
        </span>

        {/* Decorative lines */}
        <div className="mt-4 w-3/4 flex flex-col gap-2">
          <div className="h-2 rounded-full bg-surface-600 w-full" />
          <div className="h-2 rounded-full bg-surface-600 w-4/5" />
          <div className="h-2 rounded-full bg-surface-600 w-3/5" />
        </div>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-surface-500 rounded-full" />
    </div>
  )
}
