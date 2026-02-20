'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll'
import type { StatusColor } from '@/types'

const techStack: { name: string; color: StatusColor }[] = [
  { name: 'Swift', color: 'orange' },
  { name: 'TypeScript', color: 'blue' },
  { name: 'Claude', color: 'yellow' },
  { name: 'Next.js', color: 'green' },
  { name: 'SwiftUI', color: 'blue' },
  { name: 'Node.js', color: 'green' },
  { name: 'OpenAI', color: 'red' },
  { name: 'AWS', color: 'orange' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-6">
        <SectionHeading title="About" subtitle="The Studio Behind the Products" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Story */}
          <FadeInOnScroll>
            <div className="space-y-5">
              <p className="text-text-secondary leading-relaxed">
                Daltinho LLC is a software studio that builds products people love to use — mobile apps, AI tools, web platforms, and automation systems. We believe every piece of software deserves the same obsessive attention to detail, whether it&apos;s a consumer app or a backend pipeline.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Every product we ship is obsessively polished, from the interfaces down to the infrastructure. We focus on solving real problems with elegant, thoughtful solutions that people actually enjoy using.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Tech & philosophy */}
          <FadeInOnScroll delay={0.15}>
            <div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-5">
                Our Toolkit
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {techStack.map((tech) => (
                  <Badge key={tech.name} label={tech.name} color={tech.color} />
                ))}
              </div>

              {/* Philosophy card */}
              <div className="rounded-xl bg-surface-700 border border-surface-600 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  <span className="text-xs font-mono uppercase tracking-wider text-accent-400">
                    Philosophy
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed italic">
                  &ldquo;Ship fewer things, but ship them beautifully. A product that feels right is worth more than ten that feel rushed.&rdquo;
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}
