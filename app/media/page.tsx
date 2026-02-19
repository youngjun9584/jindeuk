import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

const newsItems = [
  {
    id: 1,
    title: '진덕건설, 강남 재건축 사업 수주',
    date: '2026.02.10',
    category: '보도자료',
    excerpt: '서울 강남구 재건축 사업을 수주하며, 1,200세대 규모의 주거단지를 건설합니다.',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 2,
    title: '베트남 하노이 오피스빌딩 프로젝트 착공',
    date: '2026.02.05',
    category: '보도자료',
    excerpt: '베트남 하노이에 30층 규모의 프리미엄 오피스빌딩 건설을 시작합니다.',
    gradient: 'from-green-400 to-green-600',
  },
  {
    id: 3,
    title: '친환경 건축 기술 개발로 녹색건축 인증 획득',
    date: '2026.01.28',
    category: '뉴스레터',
    excerpt: '자체 개발한 친환경 건축 기술이 최우수 등급 녹색건축 인증을 받았습니다.',
    gradient: 'from-emerald-400 to-emerald-600',
  },
  {
    id: 4,
    title: 'BIM 기반 스마트 건설 시스템 도입',
    date: '2026.01.20',
    category: '미디어',
    excerpt: 'Building Information Modeling 기술을 전 현장에 도입하여 시공 품질을 혁신합니다.',
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    id: 5,
    title: '2025년 안전대상 수상',
    date: '2026.01.15',
    category: '보도자료',
    excerpt: '체계적인 안전관리로 고용노동부 주관 안전대상을 수상했습니다.',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    id: 6,
    title: 'UAE 두바이 산업단지 프로젝트 계약 체결',
    date: '2026.01.10',
    category: '보도자료',
    excerpt: 'UAE 두바이에 대규모 산업단지 조성 프로젝트 계약을 체결했습니다.',
    gradient: 'from-amber-400 to-amber-600',
  },
]

export default function MediaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">홍보센터</h1>
            <p className="text-xl text-gray-200">
              진덕건설의 최신 소식과 다양한 프로젝트 정보를 확인해보세요
            </p>
          </div>
        </Container>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b">
        <Container>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold">
              전체
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200">
              보도자료
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200">
              뉴스레터
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200">
              미디어
            </button>
          </div>
        </Container>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <div key={news.id} className="group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  {/* Image */}
                  <div className={`relative h-56 bg-gradient-to-br ${news.gradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{news.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-300 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-semibold">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-300 hover:bg-gray-50">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-300 hover:bg-gray-50">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-300 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
