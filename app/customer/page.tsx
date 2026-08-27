import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '고객센터 - 진덕건설',
  description: '진덕건설 고객 서비스',
}

export default function CustomerPage() {
  const sections = [
    {
      title: '채용정보',
      href: '/customer/careers',
      description: '진덕건설과 함께 성장할 인재를 모집합니다',
      number: '01',
    },
    {
      title: '공지사항',
      href: '/customer/notices',
      description: '진덕건설의 새로운 소식을 확인하세요',
      number: '02',
    },
    {
      title: '찾아오시는 길',
      href: '/customer/contact',
      description: '진덕건설 본사 위치 및 연락처',
      number: '03',
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[132px]">
        <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          <Container className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">고객센터</h1>
            <p className="text-lg text-blue-100">진덕건설이 고객님을 위해 준비했습니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            <div className="mt-16 bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">문의하기</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">대표전화</h4>
                  <p className="text-blue-600 font-bold text-xl">02-0000-0000</p>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">팩스</h4>
                  <p className="text-blue-600 font-bold text-xl">02-0000-0001</p>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">이메일</h4>
                  <p className="text-blue-600 font-bold">info@jinduk.co.kr</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
