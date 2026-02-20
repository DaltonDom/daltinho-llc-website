interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-0.5 bg-accent-500" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-400">
          {title}
        </span>
      </div>
      {subtitle && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary leading-tight">
          {subtitle}
        </h2>
      )}
    </div>
  )
}
