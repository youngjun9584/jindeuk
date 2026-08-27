import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '장비 보유현황 - 진덕건설',
  description: '진덕건설 보유 건설 장비',
}

export default function EquipmentPage() {
  const equipment = [
    {
      category: '토공 장비',
      items: [
        { name: '굴삭기 (25톤급)', count: 12, description: '토공사 및 구조물 해체' },
        { name: '불도저 (25톤급)', count: 8, description: '터파기 및 정지작업' },
        { name: '로더 (5톤급)', count: 10, description: '골재 적재 및 운반' },
        { name: '덤프트럭 (25톤급)', count: 25, description: '토사 및 골재 운반' },
      ],
    },
    {
      category: '포장 장비',
      items: [
        { name: '아스팔트 피니셔', count: 5, description: '아스팔트 포장' },
        { name: '로드롤러', count: 8, description: '노면 다짐' },
        { name: '타이어 롤러', count: 6, description: '아스팔트 마무리 다짐' },
        { name: '아스팔트 믹서', count: 3, description: '아스팔트 혼합' },
      ],
    },
    {
      category: '기초공사 장비',
      items: [
        { name: '파일 드라이버', count: 4, description: '말뚝 항타' },
        { name: '크롤러 드릴', count: 5, description: '천공 작업' },
        { name: 'CIP 장비', count: 3, description: '현장타설말뚝' },
        { name: '어스앵커 장비', count: 4, description: '앵커 시공' },
      ],
    },
    {
      category: '기타 장비',
      items: [
        { name: '콘크리트 펌프카', count: 8, description: '콘크리트 타설' },
        { name: '타워 크레인', count: 6, description: '고층 건축물 양중' },
        { name: '지게차', count: 15, description: '자재 운반' },
        { name: '고소작업차', count: 7, description: '고소 작업' },
      ],
    },
  ]

  const totalEquipment = equipment.reduce(
    (sum, category) => sum + category.items.reduce((s, item) => s + item.count, 0),
    0
  )

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[132px]">
        <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          <Container className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">장비 보유현황</h1>
            <p className="text-lg text-blue-100">최신 건설 장비를 갖추고 있습니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 text-center">
                <div className="inline-block bg-blue-600 text-white rounded-lg px-12 py-8">
                  <p className="text-lg mb-2">총 보유 장비</p>
                  <p className="text-6xl font-bold">{totalEquipment}</p>
                  <p className="text-blue-100 mt-2">대</p>
                </div>
              </div>

              {equipment.map((category, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                    {category.category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-blue-400"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                          <span className="px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-full text-lg">
                            {item.count}대
                          </span>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">장비 관리 시스템</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <div className="text-4xl mb-3">🔧</div>
                    <h4 className="font-bold text-gray-900 mb-2">정기 점검</h4>
                    <p className="text-sm text-gray-700">
                      모든 장비는 정기적인 점검과 정비를 통해 최상의 상태를 유지합니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <div className="text-4xl mb-3">📊</div>
                    <h4 className="font-bold text-gray-900 mb-2">운영 관리</h4>
                    <p className="text-sm text-gray-700">
                      통합 관리 시스템을 통해 장비 운영 현황을 실시간으로 모니터링합니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <div className="text-4xl mb-3">🛡️</div>
                    <h4 className="font-bold text-gray-900 mb-2">안전 관리</h4>
                    <p className="text-sm text-gray-700">
                      안전 점검 및 교육을 통해 장비 사고를 사전에 예방합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">장비 투자</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  진덕건설은 시공 품질 향상과 공기 단축을 위해 
                  최신 건설 장비에 지속적으로 투자하고 있습니다. 
                  모든 장비는 정기적인 점검과 정비를 통해 최상의 상태로 관리되며, 
                  작업 효율성과 안전성을 극대화하고 있습니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  또한, 친환경 장비 도입을 확대하여 환경 보호에도 앞장서고 있으며, 
                  스마트 건설 기술이 적용된 첨단 장비를 통해 
                  건설 현장의 디지털 혁신을 이끌어가고 있습니다.
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
