import { AppData, NavLink, SocialLink } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Apps', href: '#apps' },
  { label: 'Story', href: '#story' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const apps: AppData[] = [
  {
    id: 'tuff',
    name: 'Tuff',
    tagline: 'Your Intelligent Workout Planner',
    description:
      'AI-powered workout planning that adapts to your goals, schedule, and progress. Designed for a buttery-smooth training experience.',
    status: 'available',
    statusLabel: 'On the App Store',
    features: ['AI Programming', 'Progress Tracking', 'Apple Health', 'Custom Routines'],
    featureColors: ['blue', 'green', 'red', 'orange'],
    accentColor: '#4ade80',
    icon: '/images/tuff-icon.png',
    appStoreUrl: '#',
  },
  {
    id: 'anjo',
    name: 'Anjo',
    tagline: 'AI-Powered Note Taking',
    description:
      'Capture your thoughts and let AI organize, summarize, and connect them. Voice-to-text, smart tagging, and beautiful markdown rendering.',
    status: 'available',
    statusLabel: 'On the App Store',
    features: ['Voice Notes', 'AI Summaries', 'Smart Tags', 'Markdown'],
    featureColors: ['orange', 'blue', 'yellow', 'green'],
    accentColor: '#60a5fa',
    icon: '/images/anjo-icon.png',
    appStoreUrl: '#',
  },
  {
    id: 'orision',
    name: 'Orision',
    tagline: 'A Thoughtful Prayer Journal',
    description:
      'A serene space for daily prayers, reflections, and gratitude. Track your spiritual journey with gentle reminders and beautiful journaling.',
    status: 'available',
    statusLabel: 'On the App Store',
    features: ['Daily Prompts', 'Gratitude Log', 'Reminders', 'Private & Secure'],
    featureColors: ['yellow', 'green', 'orange', 'blue'],
    accentColor: '#a78bfa',
    icon: '/images/orision-icon.png',
    appStoreUrl: '#',
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
