'use client'

import { motion } from 'motion/react'
import { AppData, StatusColor } from '@/types'
import { Badge } from './Badge'
import { PlaceholderPhone } from './PlaceholderPhone'
import { staggerItem } from '@/components/animations/StaggerChildren'

interface AppCardProps {
  app: AppData
}

export function AppCard({ app }: AppCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      className="group rounded-2xl bg-surface-800 border border-surface-600 p-5 md:p-6 transition-all duration-400 hover:border-surface-400 hover:shadow-[0_4px_40px_rgba(34,197,94,0.06)] hover:-translate-y-1"
    >
      {/* Header — icon + name + status */}
      <div className="flex items-start gap-3.5 mb-5">
        {/* App icon placeholder */}
        <div
          className="w-14 h-14 rounded-xl shrink-0 flex items-center justify-center text-xl font-heading font-bold text-surface-950"
          style={{ backgroundColor: app.accentColor }}
        >
          {app.name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-heading font-bold text-xl text-text-primary">
              {app.name}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-text-tertiary">
              <span className="w-1.5 h-1.5 rounded-full bg-dot-green dot-pulse" />
              {app.statusLabel}
            </span>
          </div>
          <p className="text-sm text-accent-400 font-medium">{app.tagline}</p>
        </div>
      </div>

      {/* Phone mockup */}
      <div className="flex justify-center mb-5 py-4">
        <PlaceholderPhone appName={app.name} accentColor={app.accentColor} />
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-5">
        {app.description}
      </p>

      {/* Feature badges */}
      <div className="flex flex-wrap gap-2">
        {app.features.map((feature, i) => (
          <Badge
            key={feature}
            label={feature}
            color={app.featureColors[i] as StatusColor}
          />
        ))}
      </div>

      {/* App Store link */}
      <div className="mt-5 pt-4 border-t border-surface-600">
        <a
          href={app.appStoreUrl}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors group/link"
        >
          View on App Store
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </a>
      </div>
    </motion.article>
  )
}
