import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '연혁 - 진덕건설',
  description: '진덕건설의 성장 과정',
}

export default function HistoryPage() {
  const history = [
    {
      year: '2024',
      events: [
        '우수 건설기업 선정',
        '연간 매출 1,000억원 달성',
        '해외 프로젝트 수주',
      ],
    },
    {
      year: '2023',
      events: [
        '기술연구소 설립',
        '안전경영 대상 수상',
        '친환경 건설 기술 특허 취득',
      ],
    },
    {
      year: '2022',
      events: [
        'ISO 9001 인증 획득',
        '주요 인프라 공사 완공',
        '시공능력평가 상위 진입',
      ],
    },
    {
      year: '2021',
      events: [
        '대형 복합 건축물 시공',
        '협력업체 상생협약 체결',
        '디지털 건설 시스템 도입',
      ],
    },
    {
      year: '2020',
      events: [
        '스마트 건설 기술 개발',
        '우수 협력업체 선정',
        '지역 사회 공헌 활동 확대',
      ],
    },
    {
      year: '2019',
      events: [
        '종합건설업 면허 취득',
        '본사 사옥 확장 이전',
        '전문 건설 기술 인력 확충',
      ],
    },
    {
      year: '2018',
      events: [
        '회사 창립',
        '전문건설업 등록',
        '첫 프로젝트 수주 및 완공',
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <Container>
            <h1 className="text-4xl font-bold mb-4">연혁</h1>
            <p className="text-lg text-blue-100">진덕건설의 성장과 발전의 역사</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                
                <div className="space-y-12">
                  {history.map((item, index) => (
                    <div key={item.year} className="relative pl-20">
                      <div className="absolute left-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {item.year.slice(2)}
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.year}</h3>
                        <ul className="space-y-3">
                          {item.events.map((event, eventIndex) => (
                            <li key={eventIndex} className="flex items-start">
                              <span className="text-blue-600 mr-3">•</span>
                              <span className="text-gray-700">{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
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
