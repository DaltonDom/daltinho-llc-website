'use client'

import { AppData } from '@/types'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll'
import { PlaceholderPhone } from '@/components/ui/PlaceholderPhone'

interface AppShowcaseProps {
  app: AppData
}

export function AppShowcase({ app }: AppShowcaseProps) {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-6">
        <SectionHeading title="Preview" subtitle="See It in Action" />

        <FadeInOnScroll>
          <div className="flex items-end justify-center gap-4 md:gap-6 py-8">
            <div className="hidden md:block -rotate-6 opacity-70 scale-90">
              <PlaceholderPhone
                appName={app.name}
                accentColor={app.accentColor}
                screenshot={app.screenshots?.[1]}
              />
            </div>
            <div className="z-10">
              <PlaceholderPhone
                appName={app.name}
                accentColor={app.accentColor}
                screenshot={app.screenshots?.[3]}
              />
            </div>
            <div className="hidden md:block rotate-6 opacity-70 scale-90">
              <PlaceholderPhone
                appName={app.name}
                accentColor={app.accentColor}
                screenshot={app.screenshots?.[4]}
              />
            </div>
          </div>
          {!app.screenshots && (
            <p className="text-center text-xs font-mono text-text-tertiary mt-6">
              App screenshots coming soon
            </p>
          )}
        </FadeInOnScroll>
      </div>
    </section>
  )
}
