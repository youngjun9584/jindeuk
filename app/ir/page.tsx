import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export default function IRPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">IR</h1>
            <p className="text-xl text-gray-300">
              투명한 경영 정보 공개를 통해 투자자와 소통합니다
            </p>
          </div>
        </Container>
      </section>

      {/* IR Menu */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">재무정보</h3>
              <p className="text-gray-600 text-sm">연간/분기 재무제표 및 경영실적</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">공시정보</h3>
              <p className="text-gray-600 text-sm">전자공시 및 공정공시</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">주가정보</h3>
              <p className="text-gray-600 text-sm">실시간 주가 및 차트</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">전자공고</h3>
              <p className="text-gray-600 text-sm">공고사항 및 주요 고지</p>
            </div>
          </div>

          {/* Financial Highlights */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">재무 하이라이트</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-2xl">
                <p className="text-sm text-gray-600 mb-2">2025년 매출액</p>
                <p className="text-4xl font-bold text-blue-600 mb-1">5,200억원</p>
                <p className="text-sm text-green-600">↑ 18.5% 전년 대비</p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-2xl">
                <p className="text-sm text-gray-600 mb-2">2025년 영업이익</p>
                <p className="text-4xl font-bold text-blue-600 mb-1">420억원</p>
                <p className="text-sm text-green-600">↑ 24.2% 전년 대비</p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-2xl">
                <p className="text-sm text-gray-600 mb-2">2025년 당기순이익</p>
                <p className="text-4xl font-bold text-blue-600 mb-1">280억원</p>
                <p className="text-sm text-green-600">↑ 21.7% 전년 대비</p>
              </div>
            </div>
          </div>

          {/* Project Portfolio */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">주요 프로젝트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">강남 재건축 프로젝트</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">진행중</span>
                </div>
                <p className="text-gray-600 mb-2">서울 강남구 | 주거시설 1,200세대</p>
                <p className="text-sm text-gray-500">예상 준공: 2027년 12월</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">하노이 오피스빌딩</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">착공</span>
                </div>
                <p className="text-gray-600 mb-2">베트남 하노이 | 업무시설 30층</p>
                <p className="text-sm text-gray-500">예상 준공: 2028년 6월</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">부산 신항 교량</h3>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">설계</span>
                </div>
                <p className="text-gray-600 mb-2">부산광역시 | 총 연장 2.8km</p>
                <p className="text-sm text-gray-500">예상 착공: 2026년 하반기</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">두바이 산업단지</h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">계약</span>
                </div>
                <p className="text-gray-600 mb-2">UAE 두바이 | 산업시설 단지</p>
                <p className="text-sm text-gray-500">예상 착공: 2027년 상반기</p>
              </div>
            </div>
          </div>

          {/* Recent Announcements */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">최근 공시</h2>
            <div className="space-y-4">
              {[
                { date: '2026.02.10', title: '2025년 4분기 실적 발표', type: '실적공시' },
                { date: '2026.02.05', title: '베트남 하노이 프로젝트 착공', type: '주요사항보고' },
                { date: '2026.01.25', title: 'UAE 두바이 프로젝트 계약 체결', type: '수주공시' },
                { date: '2026.01.15', title: '정기 주주총회 소집 공고', type: '공고' },
                { date: '2025.12.28', title: '2025년 연간 경영실적 보고', type: '실적공시' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-gray-500 font-mono">{item.date}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {item.type}
                    </span>
                    <span className="text-gray-900 font-medium">{item.title}</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
