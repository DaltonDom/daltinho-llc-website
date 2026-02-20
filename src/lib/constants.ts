import { AppData, NavLink, SocialLink } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Apps', href: '#apps' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const apps: AppData[] = [
  {
    id: 'tuff',
    name: 'Tuff',
    tagline: 'Your Intelligent Workout Planner',
    description:
      'AI-powered workout planning that adapts to your goals, schedule, and progress. Built with SwiftUI for a buttery-smooth training experience.',
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
  { platform: 'GitHub', url: '#' },
  { platform: 'X', url: '#' },
]

export const companyEmail = 'hello@daltinhollc.com'
