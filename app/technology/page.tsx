import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '기술품질 - 진덕건설',
  description: '진덕건설의 기술력과 품질 관리',
}

export default function TechnologyPage() {
  const sections = [
    {
      title: '기술자 보유현황',
      href: '/technology/engineers',
      description: '전문 기술 인력 현황',
      number: '01',
    },
    {
      title: '장비 보유현황',
      href: '/technology/equipment',
      description: '최신 건설 장비 보유 현황',
      number: '02',
    },
    {
      title: '특허 및 신기술',
      href: '/technology/patents',
      description: '보유 특허 및 신기술 현황',
      number: '03',
    },
    {
      title: '보유면허',
      href: '/technology/licenses',
      description: '건설업 면허 및 자격',
      number: '04',
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[132px]">
        <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          <Container className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">기술품질</h1>
            <p className="text-lg text-blue-100">진덕건설의 기술력과 품질관리 체계</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group block relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 hover:shadow-xl transition-all"
                >
                  <div className="absolute top-6 right-6 text-7xl font-bold text-gray-100 group-hover:text-blue-50 transition-colors">
                    {section.number}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors relative z-10">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 mb-6 relative z-10">{section.description}</p>
                  <div className="text-blue-600 font-medium flex items-center relative z-10">
                    자세히 보기
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
