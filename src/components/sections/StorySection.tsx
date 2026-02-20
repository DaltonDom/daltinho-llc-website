'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll'

function BentoCard({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <FadeInOnScroll delay={delay}>
      <div
        className={`rounded-2xl bg-surface-800 border border-surface-600 p-6 md:p-8 transition-all duration-300 hover:border-surface-400 hover:-translate-y-0.5 h-full ${className}`}
      >
        {children}
      </div>
    </FadeInOnScroll>
  )
}

export function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-6">
        <SectionHeading title="Our Story" subtitle="Why We Exist" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Mission — wide card */}
          <BentoCard className="md:col-span-2 relative overflow-hidden" delay={0}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              <span className="text-xs font-mono uppercase tracking-wider text-accent-400">
                Mission
              </span>
            </div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mb-3">
              Why We Build
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-xl">
              We started Daltinho because we believe software deserves to be crafted, not just
              shipped. Too many products feel like afterthoughts — rushed, generic, stitched
              together from templates. We exist to prove that small teams can build tools and
              experiences that feel genuinely intentional.
            </p>
          </BentoCard>

          {/* Stat — apps shipped */}
          <BentoCard className="flex flex-col items-center justify-center text-center" delay={0.1}>
            <span className="text-6xl md:text-7xl font-heading font-bold text-accent-400 mb-2">
              7+
            </span>
            <span className="text-sm font-mono text-text-secondary uppercase tracking-wider">
              Products Shipped
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-dot-green dot-pulse mt-3" />
          </BentoCard>

          {/* Value — SwiftUI Native */}
          <BentoCard delay={0.15}>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-700 border border-surface-600 px-2.5 py-1 text-xs font-mono text-text-secondary mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-dot-blue" />
              Modern Stack
            </div>
            <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
              The Right Tool for the Job
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              We pick the best technology for each project — Swift for native iOS, Next.js
              for web, Python for AI and automation. No one-size-fits-all frameworks. Just
              the right stack for the job.
            </p>
          </BentoCard>

          {/* Founder quote — wide card */}
          <BentoCard className="md:col-span-2 border-l-2 border-l-accent-700 bg-surface-700" delay={0.2}>
            <p className="text-lg md:text-xl text-text-primary leading-relaxed italic mb-4">
              &ldquo;I wanted to build a studio where every pixel matters. Where we&apos;d rather
              delay a launch than ship something that doesn&apos;t feel right. That&apos;s the
              standard we hold ourselves to.&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent-700 flex items-center justify-center text-xs font-heading font-bold text-surface-950">
                D
              </div>
              <div>
                <span className="text-sm font-medium text-text-primary block">Dalton Domenighi</span>
                <span className="text-xs text-text-tertiary">Founder</span>
              </div>
            </div>
          </BentoCard>

          {/* Approach — wide card */}
          <BentoCard className="md:col-span-2 relative overflow-hidden" delay={0.25}>
            {/* Subtle dot grid decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 dot-grid opacity-[0.06] pointer-events-none" />
            <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-700 border border-surface-600 px-2.5 py-1 text-xs font-mono text-text-secondary mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-dot-orange" />
              Process
            </div>
            <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
              Design-First Development
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
              Every project starts with design, not code. We prototype interactions, nail the
              typography, and obsess over spacing before writing a single line of code. The
              result is software that feels intentional from the first interaction.
            </p>
          </BentoCard>

          {/* Stat — 100% SwiftUI */}
          <BentoCard className="flex flex-col items-center justify-center text-center" delay={0.3}>
            <span className="text-5xl md:text-6xl font-heading font-bold text-text-primary mb-1">
              100<span className="text-accent-400">%</span>
            </span>
            <span className="text-sm font-mono text-text-secondary uppercase tracking-wider">
              In-House
            </span>
            <span className="text-xs text-text-tertiary mt-1">Designed &amp; built by us.</span>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
