import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSlider from '@/components/home/HeroSlider'
import IntroSection from '@/components/home/IntroSection'
import BusinessCards from '@/components/home/BusinessCards'
import BrandValueTabs from '@/components/home/BrandValueTabs'
import SpecialFieldGrid from '@/components/home/SpecialFieldGrid'
import PartnersMarquee from '@/components/home/PartnersMarquee'
import GlobalSubsidiary from '@/components/home/GlobalSubsidiary'
import ESGSection from '@/components/home/ESGSection'
import NewsSection from '@/components/home/NewsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <IntroSection />
      <BusinessCards />
      <BrandValueTabs />
      <SpecialFieldGrid />
      <PartnersMarquee />
      <GlobalSubsidiary />
      <ESGSection />
      <NewsSection />
      <Footer />
    </main>
  )
}
