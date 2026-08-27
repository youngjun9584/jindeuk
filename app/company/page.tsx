import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '회사소개 - 진덕건설',
  description: '진덕건설 회사소개',
}

export default function CompanyPage() {
  const sections = [
    { title: 'CEO 인사말', href: '/company/ceo', description: '대표이사의 인사말을 확인하세요', number: '01' },
    { title: '경영이념', href: '/company/philosophy', description: '진덕건설의 경영이념과 비전', number: '02' },
    { title: '연혁', href: '/company/history', description: '진덕건설의 성장 과정', number: '03' },
    { title: '조직도', href: '/company/organization', description: '조직 구조 및 부서 안내', number: '04' },
    { title: '안전보건방침', href: '/company/safety', description: '안전을 최우선으로 하는 경영방침', number: '05' },
    { title: '관계회사', href: '/company/partners', description: '함께하는 파트너사', number: '06' },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[132px]">
        <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          <Container className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">회사소개</h1>
            <p className="text-lg text-blue-100">진덕건설을 소개합니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group block p-8 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors">
                      {section.number}
                    </span>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{section.description}</p>
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
