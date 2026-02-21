import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '시공능력 - 진덕건설',
  description: '진덕건설 시공능력평가',
}

export default function CapabilityPage() {
  const rankings = [
    { year: '2024', rank: '85위', score: '3,250억원', change: '+5' },
    { year: '2023', rank: '90위', score: '2,980억원', change: '+8' },
    { year: '2022', rank: '98위', score: '2,720억원', change: '+12' },
    { year: '2021', rank: '110위', score: '2,450억원', change: '+15' },
  ]

  const categories = [
    {
      category: '토목공사업',
      rank: '68위',
      score: '1,850억원',
      description: '도로, 교량, 터널 등 토목 분야 시공실적',
    },
    {
      category: '건축공사업',
      rank: '92위',
      score: '1,150억원',
      description: '건축물 신축 및 리모델링 실적',
    },
    {
      category: '플랜트공사업',
      rank: '105위',
      score: '250억원',
      description: '환경 및 산업 플랜트 시공실적',
    },
  ]

  const strengths = [
    {
      title: '전문 기술력',
      description: '다양한 공종의 시공 경험과 전문 기술 인력 보유',
      icon: '⚙️',
    },
    {
      title: '품질 관리',
      description: '체계적인 품질관리 시스템으로 최상의 결과물 제공',
      icon: '✓',
    },
    {
      title: '안전 경영',
      description: '무재해 현장 운영을 통한 안전한 건설 환경 구축',
      icon: '🛡️',
    },
    {
      title: '신속한 시공',
      description: '효율적인 공정 관리로 납기 준수율 99% 달성',
      icon: '⚡',
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <Container>
            <h1 className="text-4xl font-bold mb-4">시공능력</h1>
            <p className="text-lg text-blue-100">진덕건설의 시공능력평가 순위 및 실적</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">종합 시공능력평가 순위</h2>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-blue-600 text-white">
                        <tr>
                          <th className="px-6 py-4 text-center">평가년도</th>
                          <th className="px-6 py-4 text-center">순위</th>
                          <th className="px-6 py-4 text-center">평가액</th>
                          <th className="px-6 py-4 text-center">순위 변동</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {rankings.map((ranking, index) => (
                          <tr key={ranking.year} className={`hover:bg-gray-50 ${index === 0 ? 'bg-blue-50' : ''}`}>
                            <td className="px-6 py-4 text-center font-medium">{ranking.year}</td>
                            <td className="px-6 py-4 text-center">
                              <span className={`text-2xl font-bold ${index === 0 ? 'text-blue-600' : 'text-gray-900'}`}>
                                {ranking.rank}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center font-bold">{ranking.score}</td>
                            <td className="px-6 py-4 text-center">
                              <span className="inline-flex items-center text-green-600 font-bold">
                                ▲ {ranking.change}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">* 대한건설협회 시공능력평가 기준</p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">업종별 시공능력</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {categories.map((cat) => (
                    <div key={cat.category} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.category}</h3>
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">순위</span>
                          <span className="text-2xl font-bold text-blue-600">{cat.rank}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">평가액</span>
                          <span className="text-lg font-bold text-gray-900">{cat.score}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">{cat.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">진덕건설의 경쟁력</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {strengths.map((strength) => (
                    <div key={strength.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{strength.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{strength.title}</h3>
                      <p className="text-gray-700">{strength.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">시공실적 주요 지표</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600 mb-2">200+</p>
                    <p className="text-gray-700">누적 프로젝트</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600 mb-2">99%</p>
                    <p className="text-gray-700">납기 준수율</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
                    <p className="text-gray-700">고객 만족도</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600 mb-2">0건</p>
                    <p className="text-gray-700">중대재해 (2023)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">지속적인 성장</h3>
                <p className="text-gray-700 leading-relaxed">
                  진덕건설은 최근 4년간 시공능력평가 순위를 40계단 상승시키며 
                  빠른 성장세를 보이고 있습니다. 이는 우수한 시공품질과 안전관리, 
                  그리고 고객 만족을 위한 전 임직원의 노력이 만들어낸 결과입니다. 
                  앞으로도 진덕건설은 지속적인 기술 개발과 품질 향상을 통해 
                  건설업계를 선도하는 기업으로 성장하겠습니다.
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
