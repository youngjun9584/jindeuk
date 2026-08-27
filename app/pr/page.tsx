import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '홍보센터 - 진덕건설',
  description: '진덕건설 홍보자료 및 정보',
}

export default function PRPage() {
  const sections = [
    { 
      title: '수상내역', 
      href: '/pr/awards', 
      description: '진덕건설이 받은 각종 수상 내역',
      number: '01',
    },
    { 
      title: '인증서', 
      href: '/pr/certificates', 
      description: 'ISO 인증 및 각종 보유 인증서',
      number: '02',
    },
    { 
      title: '재무정보', 
      href: '/pr/finance', 
      description: '재무제표 및 경영 정보',
      number: '03',
    },
    { 
      title: '시공능력', 
      href: '/pr/capability', 
      description: '시공능력평가 순위 및 실적',
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
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=1920&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          <Container className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">홍보센터</h1>
            <p className="text-lg text-blue-100">진덕건설의 다양한 정보를 확인하세요</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group block relative bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 hover:shadow-xl transition-all"
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
