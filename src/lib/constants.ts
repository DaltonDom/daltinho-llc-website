import { AppData, NavLink, SocialLink } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Apps', href: '/#apps' },
  { label: 'Story', href: '/#story' },
  { label: 'About', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

export const apps: AppData[] = [
  {
    id: 'tuff',
    name: 'Tuff',
    tagline: 'Your Intelligent Workout Planner',
    description:
      'AI-powered workout planning that adapts to your goals, schedule, and progress. Designed for a buttery-smooth training experience.',
    longDescription:
      'Tuff reimagines how you plan and track your workouts. Powered by AI, it generates personalized training programs that evolve with your progress, adapting to your schedule, recovery, and goals. Whether you\'re a beginner building consistency or an experienced lifter pushing new limits, Tuff keeps your training smart, structured, and motivating.',
    philosophy:
      'We built Tuff because most fitness apps feel like spreadsheets with a coat of paint. Training should feel empowering, not overwhelming. Every screen in Tuff is designed to get you moving faster.',
    status: 'in-development',
    statusLabel: 'In Development',
    features: ['AI Programming', 'Progress Tracking', 'Apple Health', 'Custom Routines'],
    featureColors: ['blue', 'green', 'red', 'orange'],
    featureDescriptions: [
      'Intelligent workout generation that adapts to your goals, experience level, and available equipment.',
      'Visual charts and personal records that show your growth over weeks, months, and years.',
      'Seamless sync with Apple Health for calories, heart rate, and activity data.',
      'Build your own routines from scratch or customize AI-generated plans to fit your style.',
    ],
    accentColor: '#4ade80',
    icon: '/images/tuff-icon.png',
    appStoreUrl: '#',
    screenshots: [
      '/images/apps/tuff-screenshot-1.PNG',
      '/images/apps/tuff-screenshot-2.PNG',
      '/images/apps/tuff-screenshot-3.PNG',
      '/images/apps/tuff-screenshot-4.PNG',
      '/images/apps/tuff-screenshot-3.PNG',
    ],
  },
  {
    id: 'anjo',
    name: 'Anjo',
    tagline: 'AI-Powered Note Taking',
    description:
      'Capture your thoughts and let AI organize, summarize, and connect them. Voice-to-text, smart tagging, and beautiful markdown rendering.',
    longDescription:
      'Anjo is a note-taking app that thinks alongside you. Speak your thoughts and watch them transform into organized, searchable notes. AI-powered summaries distill long entries into key takeaways, while smart tagging automatically connects related ideas across your entire notebook. Beautiful markdown rendering makes everything a pleasure to read.',
    philosophy:
      'Notes shouldn\'t just store information — they should surface it when you need it. Anjo was designed to be the second brain that actually works the way your mind does.',
    status: 'available',
    statusLabel: 'On the App Store',
    features: ['Voice Notes', 'AI Summaries', 'Smart Tags', 'Markdown'],
    featureColors: ['orange', 'blue', 'yellow', 'green'],
    featureDescriptions: [
      'Speak naturally and let Anjo transcribe, format, and organize your thoughts in real time.',
      'AI-generated summaries that distill long notes into concise key points and action items.',
      'Automatic tagging that connects related notes and surfaces patterns across your entries.',
      'Rich markdown rendering with syntax highlighting, checklists, and beautiful typography.',
    ],
    accentColor: '#60a5fa',
    icon: '/images/anjo-icon.png',
    appStoreUrl: 'https://apps.apple.com/us/app/anjo-super-summary-ai/id6746391417',
    screenshots: [
      '/images/apps/anjo-screenshot-1.PNG',
      '/images/apps/anjo-screenshot-2.PNG',
      '/images/apps/anjo-screenshot-3.PNG',
      '/images/apps/anjo-screenshot-4.PNG',
      '/images/apps/anjo-screenshot-5.PNG',
    ],
  },
  {
    id: 'orision',
    name: 'Orision',
    tagline: 'A Thoughtful Prayer Journal',
    description:
      'A serene space for daily prayers, reflections, and gratitude. Track your spiritual journey with gentle reminders and beautiful journaling.',
    longDescription:
      'Orision provides a quiet, intentional space for your spiritual life. Write daily prayers, reflect on gratitude, and track your journey over time with gentle reminders that never feel intrusive. The interface is designed to feel calm and focused — no clutter, no distractions, just you and your thoughts.',
    philosophy:
      'Spiritual practice deserves the same design care as any other daily tool. Orision was created to feel like opening a beautiful journal — peaceful, private, and inviting.',
    status: 'in-development',
    statusLabel: 'In Development',
    features: ['Daily Prompts', 'Gratitude Log', 'Reminders', 'Private & Secure'],
    featureColors: ['yellow', 'green', 'orange', 'blue'],
    featureDescriptions: [
      'Thoughtful daily prompts that guide your prayers, reflections, and meditation practice.',
      'A dedicated gratitude log to record the things you\'re thankful for each day.',
      'Gentle, customizable reminders that encourage consistency without feeling pushy.',
      'All data stays on your device. No accounts, no cloud sync, no tracking — ever.',
    ],
    accentColor: '#a78bfa',
    icon: '/images/orison-icon.png',
    appStoreUrl: '#',
    screenshots: [
      '/images/apps/orison-screenshot-1.PNG',
      '/images/apps/orison-screenshot-2.PNG',
      '/images/apps/orison-screenshot-3.PNG',
      '/images/apps/orison-screenshot-4.PNG',
      '/images/apps/orison-screenshot-5.PNG',
    ],
  },
]

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/DaltonDom' },
  { platform: 'X', url: 'https://x.com/_gyouzi' },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'What types of projects do you take on?',
    answer:
      'We build mobile apps, AI-powered tools, web platforms, and automation systems. If it involves crafting great software with thoughtful design, it\'s in our wheelhouse.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope and complexity. A focused MVP typically takes 8–16 weeks from concept to launch. We prioritize shipping polished, functional products over bloated feature sets.',
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer:
      'Yes. Every product we ship comes with post-launch support for bug fixes, updates, and performance tuning. We also offer ongoing development packages for teams that want to continuously iterate.',
  },
  {
    question: 'Can you work with our existing designs or codebase?',
    answer:
      'Absolutely. We can build from your Figma files, design specs, or existing codebase. We also offer full design services if you need us to handle the UX from scratch.',
  },
  {
    question: 'What makes Daltinho different?',
    answer:
      'Obsessive polish, a design-first mindset, and a small team that cares deeply about craft. We don\'t cut corners with no-code shortcuts or generic templates. Every interaction is built with intention.',
  },
]

export const companyEmail = 'support@daltinho.com'
