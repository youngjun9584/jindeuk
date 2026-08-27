import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '안전보건방침 - 진덕건설',
  description: '진덕건설 안전보건방침',
}

export default function SafetyPage() {
  const policies = [
    {
      title: '안전 최우선 원칙',
      description: '모든 작업에서 안전을 최우선으로 고려하며, 생산성보다 안전을 우선시합니다.',
      number: '01',
    },
    {
      title: '무재해 현장 구현',
      description: '철저한 안전 관리를 통해 무재해 현장을 구현하고 지속적으로 유지합니다.',
      number: '02',
    },
    {
      title: '안전교육 강화',
      description: '정기적인 안전 교육과 훈련을 통해 안전 의식을 고취합니다.',
      number: '03',
    },
    {
      title: '위험요소 사전제거',
      description: '잠재적 위험 요소를 사전에 파악하고 제거하여 사고를 예방합니다.',
      number: '04',
    },
  ]

  const safetyActivities = [
    '매일 작업 전 안전 점검 및 TBM(Tool Box Meeting) 실시',
    '주간 안전 회의를 통한 현장 안전 관리 강화',
    '월간 안전 교육 및 비상 대응 훈련',
    '분기별 안전 설비 및 장비 정밀 점검',
    '반기별 종합 안전 진단 및 개선 활동',
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[132px]">
        <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590496793907-4127ce8c5533?w=1920&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          <Container className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">안전보건방침</h1>
            <p className="text-lg text-blue-100">안전을 최우선으로 하는 진덕건설</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">안전보건 경영방침</h2>
                <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    진덕건설은 <span className="font-bold text-blue-600">안전을 모든 경영활동의 최우선 가치</span>로 삼아,
                    임직원과 협력업체 모두가 안전하게 일할 수 있는 환경을 조성하고,
                    무재해 현장을 실현하여 <span className="font-bold text-blue-600">국민의 생명과 재산을 보호</span>하는데
                    최선을 다하겠습니다.
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">안전보건 핵심가치</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {policies.map((policy) => (
                    <div key={policy.title} className="relative p-8 bg-white border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-xl transition-all">
                      <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100">
                        {policy.number}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{policy.title}</h4>
                      <p className="text-gray-700 leading-relaxed relative z-10">{policy.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">안전관리 활동</h3>
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <ul className="space-y-4">
                    {safetyActivities.map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 pt-1">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-red-900 mb-4">안전보건 실천 서약</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">•</span>
                    <span>모든 임직원은 안전 수칙을 철저히 준수합니다.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">•</span>
                    <span>위험 상황 발견 시 즉시 보고하고 조치합니다.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">•</span>
                    <span>안전 보호구를 항상 착용하고 올바르게 사용합니다.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">•</span>
                    <span>불안전한 행동과 상태를 방치하지 않습니다.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">•</span>
                    <span>안전 교육에 적극 참여하고 안전 의식을 함양합니다.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
