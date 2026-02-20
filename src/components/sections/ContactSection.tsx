'use client'

import { companyEmail, socialLinks } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll'

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const iconMap: Record<string, () => React.JSX.Element> = {
  GitHub: GitHubIcon,
  X: XIcon,
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-6">
        <SectionHeading title="Contact" subtitle="Let's Build Something Together" />

        <FadeInOnScroll>
          <div className="rounded-2xl bg-surface-800 border border-surface-600 p-8 md:p-12 max-w-2xl relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent" />

            <p className="text-text-secondary leading-relaxed mb-8 max-w-lg">
              Have a project in mind? Want to collaborate? We&apos;d love to hear from you. Drop us a line and we&apos;ll get back to you as soon as we can.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button href={`mailto:${companyEmail}`}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Send an Email
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-6 border-t border-surface-600">
              <span className="text-xs font-mono text-text-tertiary mr-2">Find us on</span>
              {socialLinks.map((link) => {
                const Icon = iconMap[link.platform]
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-surface-700 border border-surface-600 flex items-center justify-center text-text-tertiary hover:text-accent-400 hover:border-accent-700 transition-all duration-300"
                    aria-label={link.platform}
                  >
                    {Icon ? <Icon /> : link.platform}
                  </a>
                )
              })}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
