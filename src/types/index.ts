export type AppStatus = 'available' | 'coming-soon' | 'in-development'
export type StatusColor = 'green' | 'blue' | 'yellow' | 'orange' | 'red'

export interface AppData {
  id: string
  name: string
  tagline: string
  description: string
  status: AppStatus
  statusLabel: string
  features: string[]
  featureColors: StatusColor[]
  accentColor: string
  icon: string
  appStoreUrl: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  url: string
}
