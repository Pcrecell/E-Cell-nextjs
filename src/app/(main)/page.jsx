// src/app/page.tsx
import HeroSection from '@/components/home/hero-section/HeroSection'
import StatisticsSection from '@/components/home/statistics/StatisticsSection'
import TrustedByCompaniesApp from '@/components/home/trusted-companies/TrustedByCompaniesApp'
import Highlights from '@/components/home/highlights/Highlights'
import PastSpeakers from '@/components/home/past-speakers/PastSpeakers'
import InitiativeReveal from '@/components/home/initiatives/InitiativeReveal'
import TestimonialSection from '@/components/home/testimonial/TestimonialSection'
import TeamLeadsSection from '@/components/home/liaison-officers/TeamLeadsSection'
import ManagingBody from '@/components/home/managing-body/ManagingBody'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatisticsSection />
      <InitiativeReveal />
      <ManagingBody />
      <TeamLeadsSection />
      <TrustedByCompaniesApp />
      <Highlights />
      <PastSpeakers />
      <TestimonialSection />
    </main>
  )
}