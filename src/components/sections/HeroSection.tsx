'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/Button'

const headline = 'We Build Beautiful Mobile Apps'
const words = headline.split(' ')

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* === Background effects layer === */}

      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-[0.035] pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-accent-500/[0.06] blur-[120px] orb-1 pointer-events-none" />
      <div className="absolute top-[50%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent-400/[0.04] blur-[140px] orb-2 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] rounded-full bg-dot-blue/[0.04] blur-[100px] orb-3 pointer-events-none" />
      <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] rounded-full bg-accent-600/[0.05] blur-[110px] orb-4 pointer-events-none" />

      {/* Radial vignette — darkens edges, focuses center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-surface-950)_80%)] pointer-events-none" />

      {/* === Content === */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 lg:px-6 text-center pt-24 pb-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-surface-800/60 backdrop-blur-sm border border-surface-600/50 px-4 py-1.5 text-xs font-mono text-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-dot-green dot-pulse" />
            SwiftUI Studio
          </span>
        </motion.div>

        {/* Headline — staggered word reveal */}
        <h1 className="font-heading font-bold text-[2.5rem] leading-[1.1] md:text-6xl lg:text-7xl text-text-primary mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="inline-block mr-[0.3em]"
            >
              {word === 'Beautiful' ? (
                <span className="text-accent-400">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-base md:text-lg text-text-secondary max-w-md mx-auto mb-10 leading-relaxed"
        >
          Daltinho LLC crafts premium SwiftUI experiences for iOS — from concept to the App Store.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#apps">View Our Apps</Button>
          <Button href="#contact" variant="secondary">
            Get in Touch
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20 md:mt-28"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="mx-auto w-5 h-8 rounded-full border border-surface-500 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-accent-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
