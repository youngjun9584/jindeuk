import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '사업영역 - 진덕건설',
  description: '진덕건설의 사업 분야 및 시공 실적',
}

export default function BusinessPage() {
  const services = [
    {
      title: '토목공사',
      description: '도로, 교량, 터널 등 인프라 구축',
      icon: '🏗️',
      href: '/business/services#civil',
    },
    {
      title: '건축공사',
      description: '주거, 상업, 업무시설 건축',
      icon: '🏢',
      href: '/business/services#building',
    },
    {
      title: '플랜트공사',
      description: '산업 설비 및 환경 플랜트',
      icon: '⚙️',
      href: '/business/services#plant',
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <Container>
            <h1 className="text-4xl font-bold mb-4">사업영역</h1>
            <p className="text-lg text-blue-100">진덕건설의 전문 시공 분야</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">주요사업</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group block bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all hover:border-blue-400"
                  >
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <div className="text-blue-600 font-medium flex items-center">
                      자세히 보기
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                href="/business/ongoing"
                className="group relative overflow-hidden rounded-lg h-80 bg-gradient-to-r from-blue-600 to-blue-700 p-8 flex flex-col justify-end hover:shadow-2xl transition-all"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-3">진행현장</h3>
                  <p className="text-blue-100 mb-4">현재 진행 중인 프로젝트</p>
                  <div className="text-white font-medium flex items-center">
                    현장 보기
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link
                href="/business/completed"
                className="group relative overflow-hidden rounded-lg h-80 bg-gradient-to-r from-green-600 to-green-700 p-8 flex flex-col justify-end hover:shadow-2xl transition-all"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-3">완료현장</h3>
                  <p className="text-green-100 mb-4">성공적으로 완료한 프로젝트</p>
                  <div className="text-white font-medium flex items-center">
                    현장 보기
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
