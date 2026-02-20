'use client'

import { apps } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AppCard } from '@/components/ui/AppCard'
import { StaggerChildren } from '@/components/animations/StaggerChildren'

export function AppsSection() {
  return (
    <section id="apps" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-6">
        <SectionHeading title="Portfolio" subtitle="What We've Built" />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
