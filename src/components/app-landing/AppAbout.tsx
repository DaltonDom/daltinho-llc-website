'use client'

import { AppData } from '@/types'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll'
import { Badge } from '@/components/ui/Badge'
import type { StatusColor } from '@/types'

interface AppAboutProps {
  app: AppData
}

const platformBadges: { name: string; color: StatusColor }[] = [
  { name: 'iOS', color: 'blue' },
  { name: 'SwiftUI', color: 'blue' },
  { name: 'Swift', color: 'orange' },
  { name: 'Apple Health', color: 'red' },
]

export function AppAbout({ app }: AppAboutProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-6">
        <SectionHeading title="Details" subtitle={`About ${app.name}`} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl">
          <FadeInOnScroll>
            <div className="space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {app.longDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {platformBadges.map((badge) => (
                  <Badge key={badge.name} label={badge.name} color={badge.color} />
                ))}
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.15}>
            <div
              className="rounded-xl border-l-2 bg-surface-700 border border-surface-600 p-6"
              style={{ borderLeftColor: app.accentColor }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: app.accentColor }}
                />
                <span className="text-xs font-mono uppercase tracking-wider text-text-tertiary">
                  Design Philosophy
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed italic">
                &ldquo;{app.philosophy}&rdquo;
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}
