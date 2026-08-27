import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '경영이념 - 진덕건설',
  description: '진덕건설의 경영이념과 비전',
}

export default function PhilosophyPage() {
  const values = [
    {
      title: '신뢰',
      description: '고객과의 약속을 반드시 지키며, 투명한 경영으로 신뢰를 쌓아갑니다.',
      number: '01',
    },
    {
      title: '혁신',
      description: '끊임없는 기술 개발과 창의적인 사고로 건설업계를 선도합니다.',
      number: '02',
    },
    {
      title: '안전',
      description: '안전은 모든 것에 우선합니다. 무재해 현장을 목표로 합니다.',
      number: '03',
    },
    {
      title: '품질',
      description: '최고의 품질로 고객 만족을 실현하고 영구적인 가치를 창출합니다.',
      number: '04',
    },
  ]

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
            <h1 className="text-4xl font-bold mb-4">경영이념</h1>
            <p className="text-lg text-blue-100">진덕건설의 핵심 가치와 비전</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">우리의 비전</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  혁신과 신뢰로 더 나은 미래 공간을 창조하는<br />
                  <span className="text-blue-600 font-bold">대한민국 대표 건설기업</span>
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">핵심 가치</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value) => (
                    <div key={value.title} className="relative p-8 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-xl transition-all">
                      <div className="absolute top-6 right-6 text-6xl font-bold text-gray-100">
                        {value.number}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{value.title}</h4>
                      <p className="text-gray-700 leading-relaxed relative z-10">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">경영방침</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">1.</span>
                    <span className="text-gray-700">
                      고객 중심 경영: 고객의 요구를 최우선으로 생각하며, 최상의 서비스를 제공합니다.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">2.</span>
                    <span className="text-gray-700">
                      기술 혁신: 첨단 기술 개발과 도입으로 건설 산업의 발전을 선도합니다.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">3.</span>
                    <span className="text-gray-700">
                      안전 최우선: 모든 작업 현장에서 안전 규정을 철저히 준수합니다.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">4.</span>
                    <span className="text-gray-700">
                      지속가능 경영: 환경을 보호하고 사회적 책임을 다하는 기업으로 성장합니다.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">5.</span>
                    <span className="text-gray-700">
                      상생 협력: 협력업체와 함께 성장하며 건전한 건설 생태계를 조성합니다.
                    </span>
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
