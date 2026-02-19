import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">회사소개</h1>
            <p className="text-xl text-gray-300">
              혁신과 신뢰로 더 나은 미래 공간을 창조합니다
            </p>
          </div>
        </Container>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">인사말</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                안녕하십니까, 진덕건설 대표이사입니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                진덕건설은 30년 전통의 대한민국 대표 종합건설 기업으로, 
                최고의 품질과 안전을 최우선으로 하며 고객의 신뢰를 얻고 있습니다.
                앞으로도 혁신적인 기술과 완벽한 시공으로 고객 만족을 실현하겠습니다.
              </p>
            </div>
            <div className="h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">비전 & 미션</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vision</h3>
                  <p className="text-gray-600">최고의 품질로 미래 공간을 창조하는 글로벌 건설 기업</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mission</h3>
                  <p className="text-gray-600">
                    고객에게 안전하고 쾌적한 공간을 제공하며,
                    첨단 기술과 혁신으로 건설의 새로운 기준을 제시합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Core Values</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 품질 우선 (Quality First)</li>
                    <li>• 안전 경영 (Safety Management)</li>
                    <li>• 기술 혁신 (Innovation)</li>
                    <li>• 고객 만족 (Customer Satisfaction)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">연혁</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-2xl font-bold text-blue-600">2026</div>
                <div className="flex-1">
                  <p className="text-gray-600">베트남 하노이 오피스빌딩 착공</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-2xl font-bold text-blue-600">2024</div>
                <div className="flex-1">
                  <p className="text-gray-600">UAE 두바이 현지 법인 설립</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-2xl font-bold text-blue-600">2020</div>
                <div className="flex-1">
                  <p className="text-gray-600">친환경 건축 기술 연구소 설립</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-2xl font-bold text-blue-600">2015</div>
                <div className="flex-1">
                  <p className="text-gray-600">종합건설업 면허 취득</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-2xl font-bold text-blue-600">1995</div>
                <div className="flex-1">
                  <p className="text-gray-600">진덕건설 설립</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">오시는 길</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>주소:</strong> 서울특별시 강남구 테헤란로 123</p>
                <p><strong>전화:</strong> 02-1234-5678</p>
                <p><strong>팩스:</strong> 02-1234-5679</p>
                <p><strong>이메일:</strong> info@jinduk.com</p>
              </div>
              <div className="mt-6 h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">지도 영역</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">CI/BI</h2>
              <div className="space-y-6">
                <div className="p-8 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="JINDUK Logo" 
                    className="h-24 w-auto"
                  />
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <p className="text-gray-600 text-sm">
                    진덕건설의 CI는 신뢰와 혁신, 그리고 지속 가능한 발전을 상징합니다.
                    블루 컬러는 전문성과 안정감을 표현하며, 
                    역동적인 디자인은 현대적이고 미래지향적인 기업 이미지를 담고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
