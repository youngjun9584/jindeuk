import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '수상내역 - 진덕건설',
  description: '진덕건설 수상 내역',
}

export default function AwardsPage() {
  const awards = [
    {
      year: '2024',
      title: '건설안전 대상',
      organization: '고용노동부',
      description: '무재해 현장 운영 및 안전경영 우수성 인정',
    },
    {
      year: '2024',
      title: '품질경영 우수기업',
      organization: '국토교통부',
      description: '철저한 품질관리로 우수 건설기업 선정',
    },
    {
      year: '2023',
      title: '일자리 창출 우수기업',
      organization: '고용노동부',
      description: '지역 일자리 창출 기여 공로 인정',
    },
    {
      year: '2023',
      title: '환경경영 대상',
      organization: '환경부',
      description: '친환경 건설 기술 적용 및 환경보호 공로',
    },
    {
      year: '2023',
      title: '협력업체 상생협력 우수기업',
      organization: '중소벤처기업부',
      description: '중소 협력업체와의 상생협력 우수 사례',
    },
    {
      year: '2022',
      title: '안전보건 우수사례 우수상',
      organization: '한국산업안전보건공단',
      description: '현장 안전관리 우수사례 발표',
    },
    {
      year: '2022',
      title: '지역사회 공헌 기업',
      organization: '행정안전부',
      description: '지역사회 발전 기여 및 사회공헌 활동',
    },
    {
      year: '2021',
      title: '건설신기술 개발 표창',
      organization: '국토교통부',
      description: '건설 신기술 개발 및 실용화 공로',
    },
    {
      year: '2021',
      title: '우수 건설현장 선정',
      organization: '대한건설협회',
      description: '체계적인 현장관리 및 품질 우수성 인정',
    },
    {
      year: '2020',
      title: '모범납세자 표창',
      organization: '국세청',
      description: '성실 납세 및 모범 기업 활동',
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <Container>
            <h1 className="text-4xl font-bold mb-4">수상내역</h1>
            <p className="text-lg text-blue-100">진덕건설의 우수성을 인정받은 수상 내역입니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl">
                          🏆
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{award.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{award.organization}</p>
                          <p className="text-gray-700">{award.description}</p>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-full">
                          {award.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">수상의 의미</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  진덕건설이 받은 각종 수상은 단순한 영예를 넘어, 
                  안전, 품질, 환경, 상생협력 등 모든 분야에서 최고의 가치를 추구하는 
                  우리의 노력이 인정받은 결과입니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  앞으로도 진덕건설은 고객의 신뢰에 보답하고, 
                  대한민국 건설업계를 선도하는 기업으로 성장하기 위해 최선을 다하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
