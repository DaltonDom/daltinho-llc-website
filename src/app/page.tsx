import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AppsSection } from '@/components/sections/AppsSection'
import { StorySection } from '@/components/sections/StorySection'
import { AboutSection } from '@/components/sections/AboutSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AppsSection />
        <StorySection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
