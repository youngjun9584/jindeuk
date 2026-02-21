import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '주요사업 - 진덕건설',
  description: '진덕건설의 주요 시공 분야',
}

export default function ServicesPage() {
  const services = [
    {
      id: 'civil',
      title: '토목공사',
      icon: '🏗️',
      description: '도로, 교량, 터널 등 사회 기반 시설 구축',
      details: [
        '도로 및 포장공사',
        '교량 및 고가차도 건설',
        '터널 굴착 및 시공',
        '하천 및 항만 공사',
        '철도 및 지하철 공사',
        '단지 조성 및 택지 개발',
      ],
    },
    {
      id: 'building',
      title: '건축공사',
      icon: '🏢',
      description: '주거, 상업, 업무시설 등 다양한 건축물 시공',
      details: [
        '아파트 및 주상복합 건축',
        '오피스 빌딩 건설',
        '상업시설 및 쇼핑몰',
        '공공건축물 시공',
        '리모델링 및 증축',
        '인테리어 공사',
      ],
    },
    {
      id: 'plant',
      title: '플랜트공사',
      icon: '⚙️',
      description: '산업 설비 및 환경 플랜트 시공',
      details: [
        '환경오염 방지시설',
        '폐기물 처리시설',
        '하수 처리시설',
        '산업 플랜트 설비',
        '에너지 설비 공사',
        '기계 설비 공사',
      ],
    },
    {
      id: 'foundation',
      title: '기초공사',
      icon: '🔨',
      description: '건축물의 안정적인 기초 구축',
      details: [
        '흙막이 및 가시설 공사',
        '파일 및 현장타설말뚝',
        '지반 개량 공사',
        '보링 및 그라우팅',
        'Earth Anchor 공법',
        '지하 구조물 공사',
      ],
    },
    {
      id: 'structure',
      title: '구조물공사',
      icon: '🏛️',
      description: '각종 콘크리트 및 철골 구조물',
      details: [
        '콘크리트 구조물',
        '철골 구조물',
        '옹벽 및 석축',
        '터널 라이닝',
        '수문 및 갑문',
        '특수 구조물',
      ],
    },
    {
      id: 'utilities',
      title: '설비공사',
      icon: '🔧',
      description: '상하수도 및 각종 설비 시공',
      details: [
        '상수도 공사',
        '하수도 공사',
        '전기 설비 공사',
        '통신 설비 공사',
        '냉난방 설비',
        '소방 설비',
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <Container>
            <h1 className="text-4xl font-bold mb-4">주요사업</h1>
            <p className="text-lg text-blue-100">진덕건설의 전문 시공 분야를 소개합니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex gap-8 items-center bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow`}
                >
                  <div className="flex-shrink-0 w-full lg:w-1/3 text-center">
                    <div className="text-8xl mb-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.details.map((detail) => (
                        <div key={detail} className="flex items-start">
                          <span className="text-blue-600 mr-2">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">시공 프로세스</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {['계획', '설계', '시공', '품질관리', '준공'].map((step, index) => (
                  <div key={step} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                    <p className="font-bold text-gray-900">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
