import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { apps } from '@/lib/constants'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AppHero } from '@/components/app-landing/AppHero'
import { AppFeatures } from '@/components/app-landing/AppFeatures'
import { AppShowcase } from '@/components/app-landing/AppShowcase'
import { AppAbout } from '@/components/app-landing/AppAbout'
import { AppCta } from '@/components/app-landing/AppCta'

interface PageProps {
  params: Promise<{ appId: string }>
}

export async function generateStaticParams() {
  return apps.map((app) => ({ appId: app.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { appId } = await params
  const app = apps.find((a) => a.id === appId)
  if (!app) return {}

  return {
    title: `${app.name} — ${app.tagline} | Daltinho LLC`,
    description: app.description,
    openGraph: {
      title: `${app.name} — ${app.tagline}`,
      description: app.description,
    },
  }
}

export default async function AppPage({ params }: PageProps) {
  const { appId } = await params
  const app = apps.find((a) => a.id === appId)

  if (!app) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        <AppHero app={app} />
        <AppFeatures app={app} />
        <AppShowcase app={app} />
        <AppAbout app={app} />
        <AppCta app={app} />
      </main>
      <Footer />
    </>
  )
}
