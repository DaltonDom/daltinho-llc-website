import { StatusColor } from '@/types'

const dotColors: Record<StatusColor, string> = {
  green: 'bg-dot-green',
  blue: 'bg-dot-blue',
  yellow: 'bg-dot-yellow',
  orange: 'bg-dot-orange',
  red: 'bg-dot-red',
}

interface BadgeProps {
  label: string
  color: StatusColor
  pulse?: boolean
}

export function Badge({ label, color, pulse }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-800 border border-surface-600 px-2.5 py-1 text-xs font-mono text-text-secondary">
      <span
        className={`inline-block w-1.5 h-1.5 rounded-full ${dotColors[color]} ${pulse ? 'dot-pulse' : ''}`}
      />
      {label}
    </span>
  )
}
