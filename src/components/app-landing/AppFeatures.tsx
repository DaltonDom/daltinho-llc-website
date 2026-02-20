'use client'

import { motion } from 'motion/react'
import { AppData } from '@/types'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerChildren, staggerItem } from '@/components/animations/StaggerChildren'

interface AppFeaturesProps {
  app: AppData
}

const dotColors: Record<string, string> = {
  green: 'bg-dot-green',
  blue: 'bg-dot-blue',
  yellow: 'bg-dot-yellow',
  orange: 'bg-dot-orange',
  red: 'bg-dot-red',
}

export function AppFeatures({ app }: AppFeaturesProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-6">
        <SectionHeading title="Features" subtitle={`What ${app.name} Does`} />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl">
          {app.features.map((feature, i) => (
            <motion.div
              key={feature}
              variants={staggerItem}
              className="rounded-2xl bg-surface-800 border border-surface-600 p-6 md:p-7 transition-all duration-300 hover:border-surface-400 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className={`w-2 h-2 rounded-full ${dotColors[app.featureColors[i]] || 'bg-dot-green'}`} />
                <h3 className="font-heading font-semibold text-lg text-text-primary">
                  {feature}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {app.featureDescriptions[i]}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
