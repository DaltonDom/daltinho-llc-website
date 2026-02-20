'use client'

import { AppData } from '@/types'
import { Button } from '@/components/ui/Button'
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll'

interface AppCtaProps {
  app: AppData
}

export function AppCta({ app }: AppCtaProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-6">
        <FadeInOnScroll>
          <div className="rounded-2xl bg-surface-800 border border-surface-600 p-8 md:p-12 text-center relative overflow-hidden">
            {/* Top accent line using app color */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${app.accentColor}, transparent)`,
              }}
            />

            <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mb-3">
              Ready to try {app.name}?
            </h2>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              {app.tagline}.{' '}
              {app.status === 'available'
                ? 'Available now on the App Store.'
                : 'Coming soon to the App Store.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={app.status === 'available' ? app.appStoreUrl : undefined}>
                {app.status === 'available' ? 'Download on App Store' : 'Coming Soon'}
              </Button>
              <Button href="/" variant="secondary">
                Back to Portfolio
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
