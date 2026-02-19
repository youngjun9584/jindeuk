import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

const businesses = [
  {
    id: 1,
    title: '건축사업',
    subtitle: 'BUILDING CONSTRUCTION',
    description: '아파트, 오피스텔, 상업시설 등\n다양한 건축 프로젝트를 성공적으로 수행하며\n최고의 품질과 안전을 보장합니다.',
    features: ['아파트', '오피스텔', '상업시설', '주거단지', '공공건축', '리모델링'],
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    title: '토목사업',
    subtitle: 'CIVIL ENGINEERING',
    description: '도로, 교량, 터널 등\n사회 기반 시설 건설을 통해\n국가 발전에 기여합니다.',
    features: ['도로공사', '교량건설', '터널시공', '항만공사', '철도건설', '하천정비'],
    gradient: 'from-green-500 to-green-700',
  },
  {
    id: 3,
    title: '플랜트사업',
    subtitle: 'PLANT CONSTRUCTION',
    description: '산업 플랜트 설계 및 시공\n첨단 기술력으로 산업 발전을\n선도합니다.',
    features: ['발전소', '정수시설', '폐기물처리', '산업플랜트', '환경시설'],
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    id: 4,
    title: '해외사업',
    subtitle: 'OVERSEAS PROJECT',
    description: '동남아, 중동 등 전 세계를 무대로\n글로벌 건설 프로젝트를 수행하며\n대한민국 건설의 위상을 높입니다.',
    features: ['베트남', 'UAE', '사우디', '싱가포르'],
    gradient: 'from-amber-500 to-amber-700',
  },
]

export default function BusinessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">사업분야</h1>
            <p className="text-xl text-gray-200">
              진덕건설은 다양한 분야에서 최고의 기술력과 품질을 자랑합니다
            </p>
          </div>
        </Container>
      </section>

      {/* Business Cards */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {businesses.map((business) => (
              <div key={business.id} className="group cursor-pointer">
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${business.gradient}`} />
                  
                  <div className="relative h-full flex flex-col justify-between p-10 text-white">
                    <div>
                      <h2 className="text-4xl font-bold mb-3">{business.title}</h2>
                      <p className="text-xl opacity-90 mb-8">{business.subtitle}</p>
                      <p className="text-lg leading-relaxed whitespace-pre-line">
                        {business.description}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {business.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 text-sm bg-white/20 backdrop-blur-sm rounded-full"
                          >
                            #{feature}
                          </span>
                        ))}
                      </div>
                      <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        자세히 보기
                      </button>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
