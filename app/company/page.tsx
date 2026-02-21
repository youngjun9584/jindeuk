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
    { title: 'CEO 인사말', href: '/company/ceo', description: '대표이사의 인사말을 확인하세요' },
    { title: '경영이념', href: '/company/philosophy', description: '진덕건설의 경영이념과 비전' },
    { title: '연혁', href: '/company/history', description: '진덕건설의 성장 과정' },
    { title: '조직도', href: '/company/organization', description: '조직 구조 및 부서 안내' },
    { title: '안전보건방침', href: '/company/safety', description: '안전을 최우선으로 하는 경영방침' },
    { title: '관계회사', href: '/company/partners', description: '함께하는 파트너사' },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <Container>
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
                  className="group block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </h2>
                  <p className="text-gray-600">{section.description}</p>
                  <div className="mt-4 text-blue-600 font-medium flex items-center">
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
