'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { navLinks } from '@/lib/constants'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-5 inset-x-0 z-50 flex justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
        className="rounded-3xl backdrop-blur-2xl bg-surface-900/40 border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden"
      >
        {/* Top row — logo + desktop links + hamburger */}
        <div className="flex items-center gap-2 px-5 py-2.5">
          {/* Logo */}
          <a href="/" className="font-heading font-bold text-base text-text-primary tracking-tight mr-2">
            Daltinho
            <span className="text-accent-400 ml-0.5">.</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-1.5 text-sm text-text-secondary hover:text-accent-400 transition-colors duration-300 rounded-full hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[4px] w-7 h-7 justify-center items-center cursor-pointer ml-1"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-4 h-[1.5px] bg-text-primary origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-4 h-[1.5px] bg-text-primary"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-4 h-[1.5px] bg-text-primary origin-center"
            />
          </button>
        </div>

        {/* Mobile expanded links — inside the pill */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 px-4 pb-4 pt-1 border-t border-white/[0.06]">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.25 }}
                    className="px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-accent-400 hover:bg-white/[0.04] rounded-xl transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  )
}
