import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '관계회사 - 진덕건설',
  description: '진덕건설 협력업체 및 파트너사',
}

export default function PartnersPage() {
  const partners = [
    { name: '현대건설', category: '발주처' },
    { name: '삼성물산', category: '발주처' },
    { name: 'GS건설', category: '발주처' },
    { name: 'SK에코플랜트', category: '발주처' },
    { name: '대림산업', category: '발주처' },
    { name: '롯데건설', category: '발주처' },
    { name: '포스코건설', category: '발주처' },
    { name: '한화건설', category: '발주처' },
    { name: '한국토지주택공사', category: '공공기관' },
    { name: '한국도로공사', category: '공공기관' },
    { name: '한국수자원공사', category: '공공기관' },
    { name: '서울시설공단', category: '공공기관' },
  ]

  const partnersByCategory = partners.reduce((acc, partner) => {
    if (!acc[partner.category]) {
      acc[partner.category] = []
    }
    acc[partner.category].push(partner)
    return acc
  }, {} as Record<string, typeof partners>)

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[132px]">
        <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          <Container className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">관계회사</h1>
            <p className="text-lg text-blue-100">진덕건설과 함께하는 파트너</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">함께 성장하는 파트너십</h2>
                <p className="text-lg text-gray-700">
                  진덕건설은 신뢰를 바탕으로 다양한 파트너사와 협력하여<br />
                  최고의 건설 서비스를 제공합니다.
                </p>
              </div>

              {Object.entries(partnersByCategory).map(([category, categoryPartners]) => (
                <div key={category} className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categoryPartners.map((partner) => (
                      <div
                        key={partner.name}
                        className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-blue-600 text-center"
                      >
                        <p className="font-bold text-lg text-gray-900">{partner.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-16 bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">상생 협력 방침</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">공정한 거래</h4>
                    <p className="text-gray-700">
                      투명하고 공정한 거래를 통해 신뢰를 구축하고 
                      상호 발전할 수 있는 관계를 만들어갑니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">기술 협력</h4>
                    <p className="text-gray-700">
                      기술 노하우를 공유하고 함께 연구 개발하여 
                      건설 산업의 경쟁력을 높입니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">대금 지급</h4>
                    <p className="text-gray-700">
                      약속된 기간 내 대금을 지급하고 
                      협력업체의 경영 안정을 지원합니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">동반 성장</h4>
                    <p className="text-gray-700">
                      교육 지원, 경영 컨설팅 등을 통해 
                      협력업체와 함께 성장합니다.
                    </p>
                  </div>
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
