'use client'

import { motion, AnimatePresence } from 'motion/react'

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-surface-600 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left cursor-pointer group"
      >
        <span
          className={`text-base md:text-lg font-medium transition-colors duration-300 ${
            isOpen ? 'text-accent-400' : 'text-text-primary group-hover:text-accent-400'
          }`}
        >
          {question}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-tertiary shrink-0"
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm md:text-base text-text-secondary leading-relaxed pb-5 md:pb-6 pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
