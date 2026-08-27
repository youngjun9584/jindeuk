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
      <div className="pt-[132px] bg-primary/5 border-b border-primary/10">
        <p className="text-center text-sm text-primary py-2.5 px-4">
          📢 진덕건설 홈페이지가 새 단장 중입니다. 일부 콘텐츠는 순차적으로 업데이트될 예정입니다.
        </p>
      </div>
      <HeroSlider />
      <IntroSection />
      <BusinessCards />
      <SpecialFieldGrid />
      <BrandValueTabs />
      <GlobalSubsidiary />
      <ESGSection />
      <PartnersMarquee />
      <NewsSection />
      <Footer />
    </main>
  )
}
