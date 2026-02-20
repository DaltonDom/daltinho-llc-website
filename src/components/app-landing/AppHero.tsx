'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { AppData } from '@/types'
import { Button } from '@/components/ui/Button'
import { PlaceholderPhone } from '@/components/ui/PlaceholderPhone'

interface AppHeroProps {
  app: AppData
}

export function AppHero({ app }: AppHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Ambient glow using app accent */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-[0.07]"
        style={{ backgroundColor: app.accentColor }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-[0.05]"
        style={{ backgroundColor: app.accentColor }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Back link */}
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-text-tertiary hover:text-text-secondary transition-colors mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Portfolio
            </motion.a>

            {/* App icon + name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex items-center gap-4 mb-6 justify-center lg:justify-start"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden relative shrink-0">
                <Image
                  src={app.icon}
                  alt={`${app.name} icon`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary">
                  {app.name}
                </h1>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-xl md:text-2xl font-medium mb-4"
              style={{ color: app.accentColor }}
            >
              {app.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-base md:text-lg text-text-secondary leading-relaxed max-w-lg mb-8 mx-auto lg:mx-0"
            >
              {app.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-3"
            >
              <Button href={app.status === 'available' ? app.appStoreUrl : undefined}>
                {app.status === 'available' ? 'Download on App Store' : 'Coming Soon'}
              </Button>
              <span className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-text-tertiary sm:self-center">
                <span className={`w-1.5 h-1.5 rounded-full dot-pulse ${app.status === 'in-development' ? 'bg-dot-orange' : 'bg-dot-green'}`} />
                {app.statusLabel}
              </span>
            </motion.div>
          </div>

          {/* Phone mockups */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex items-end gap-[-20px] shrink-0"
          >
            <div className="-rotate-6 translate-y-4">
              <PlaceholderPhone
                appName={app.name}
                accentColor={app.accentColor}
                screenshot={app.screenshots?.[0]}
              />
            </div>
            <div className="rotate-3 -ml-8 z-10">
              <PlaceholderPhone
                appName={app.name}
                accentColor={app.accentColor}
                screenshot={app.screenshots?.[2]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
