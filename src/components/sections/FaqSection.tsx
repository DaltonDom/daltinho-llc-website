'use client'

import { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll'
import { FaqItem } from '@/components/ui/FaqItem'
import { faqItems } from '@/lib/constants'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-6">
        <SectionHeading title="FAQ" subtitle="Common Questions" />

        <FadeInOnScroll>
          <div className="max-w-3xl rounded-2xl bg-surface-800 border border-surface-600 px-6 md:px-8">
            {faqItems.map((item, i) => (
              <FaqItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
