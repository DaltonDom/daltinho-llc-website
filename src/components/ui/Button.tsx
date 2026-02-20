import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer'

  const variants = {
    primary:
      'bg-accent-500 text-surface-950 hover:bg-accent-400 hover:shadow-[0_0_24px_rgba(34,197,94,0.25)] active:scale-[0.97]',
    secondary:
      'border border-surface-500 text-text-secondary hover:border-accent-500 hover:text-accent-400 active:scale-[0.97]',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
