import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

const esgCategories = [
  {
    id: 1,
    title: 'ESG 경영',
    icon: '🎯',
    description: '환경(Environmental), 사회(Social), 지배구조(Governance)를 중심으로 지속 가능한 건설 경영을 실천합니다.',
    items: ['ESG 전략 수립', '지속가능경영보고서 발간', 'ESG 위원회 운영', 'UN SDGs 이행'],
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 2,
    title: '사회공헌',
    icon: '🤝',
    description: '지역사회와 함께 성장하며, 나눔과 배려를 실천하는 기업 시민으로서의 역할을 다합니다.',
    items: ['건설 봉사활동', '취약계층 주거 개선', '장학금 지원', '지역사회 상생 협력'],
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 3,
    title: '윤리경영',
    icon: '⚖️',
    description: '투명하고 공정한 경영을 통해 이해관계자의 신뢰를 확보하고, 기업의 사회적 책임을 다합니다.',
    items: ['윤리강령 준수', '부패방지 정책', '공정거래 준수', '내부신고 시스템'],
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    id: 4,
    title: '환경경영',
    icon: '🌱',
    description: '친환경 건설 기술과 저탄소 공법을 적용하여 지속 가능한 미래를 만들어갑니다.',
    items: ['탄소 배출 감축', '친환경 자재 사용', '폐기물 재활용', '녹색건축 인증'],
    gradient: 'from-teal-500 to-green-600',
  },
]

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-900 to-green-800 text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">지속가능경영</h1>
            <p className="text-xl text-gray-200">
              진덕건설은 ESG 전략을 통해 지속 가능한 미래를 만들어갑니다
            </p>
          </div>
        </Container>
      </section>

      {/* ESG Overview */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Environment</h3>
              <p className="text-gray-600">친환경 건설과 탄소 중립 실현</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Social</h3>
              <p className="text-gray-600">사회적 책임과 공헌 활동</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Governance</h3>
              <p className="text-gray-600">투명하고 윤리적인 경영</p>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            {esgCategories.map((category, index) => (
              <div
                key={category.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className={`h-80 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-xl`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Safety Section */}
          <div className="mt-20 p-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🛡️</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">안전경영</h2>
              <p className="text-lg text-gray-600">
                진덕건설은 안전을 최우선 가치로 삼습니다
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl">
                <p className="text-4xl font-bold text-red-600 mb-2">0</p>
                <p className="text-gray-600">무재해 목표</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <p className="text-4xl font-bold text-orange-600 mb-2">100%</p>
                <p className="text-gray-600">안전교육 이수율</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <p className="text-4xl font-bold text-blue-600 mb-2">24/7</p>
                <p className="text-gray-600">안전관리 모니터링</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
