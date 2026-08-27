import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '조직도 - 진덕건설',
  description: '진덕건설 조직 구조',
}

export default function OrganizationPage() {
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
            <h1 className="text-4xl font-bold mb-4">조직도</h1>
            <p className="text-lg text-blue-100">진덕건설의 조직 구조</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="text-center mb-8">
                  <div className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg mb-4">
                    <h3 className="text-xl font-bold">대표이사</h3>
                  </div>
                </div>

                <div className="flex justify-center mb-8">
                  <div className="w-px h-12 bg-gray-300"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-4">
                      <h4 className="font-bold">경영관리본부</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">총무팀</div>
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">재무팀</div>
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">인사팀</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-4">
                      <h4 className="font-bold">시공본부</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">토목팀</div>
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">건축팀</div>
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">플랜트팀</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-4">
                      <h4 className="font-bold">기술연구소</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">기술개발팀</div>
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">품질관리팀</div>
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">안전관리팀</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mb-8">
                  <div className="w-px h-12 bg-gray-300"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-400 text-white px-6 py-3 rounded-lg mb-4">
                      <h4 className="font-bold">영업본부</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">영업1팀</div>
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">영업2팀</div>
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">해외사업팀</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-blue-400 text-white px-6 py-3 rounded-lg mb-4">
                      <h4 className="font-bold">지원본부</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">구매팀</div>
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">자재팀</div>
                      <div className="bg-gray-100 px-4 py-2 rounded text-sm">장비관리팀</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">부서별 주요 업무</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <span className="font-bold text-blue-600">경영관리본부:</span> 전사 경영 전략 수립, 재무 관리, 인사 관리
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">시공본부:</span> 공사 현장 관리, 시공 계획 수립 및 실행
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">기술연구소:</span> 신기술 개발, 품질 및 안전 관리
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">영업본부:</span> 신규 프로젝트 수주, 고객 관계 관리
                  </div>
                  <div>
                    <span className="font-bold text-blue-600">지원본부:</span> 자재 및 장비 조달, 현장 지원
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
