import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '재무정보 - 진덕건설',
  description: '진덕건설 재무정보',
}

export default function FinancePage() {
  const financialData = [
    {
      year: '2023',
      revenue: '1,250',
      operatingProfit: '135',
      netProfit: '98',
      totalAssets: '850',
      debt: '320',
      equity: '530',
    },
    {
      year: '2022',
      revenue: '1,080',
      operatingProfit: '115',
      netProfit: '82',
      totalAssets: '720',
      debt: '280',
      equity: '440',
    },
    {
      year: '2021',
      revenue: '920',
      operatingProfit: '95',
      netProfit: '68',
      totalAssets: '620',
      debt: '250',
      equity: '370',
    },
  ]

  const businessMetrics = [
    { label: '매출액 성장률', value: '15.7%', trend: 'up' },
    { label: '영업이익률', value: '10.8%', trend: 'up' },
    { label: '부채비율', value: '60.4%', trend: 'down' },
    { label: '자기자본비율', value: '62.4%', trend: 'up' },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[132px]">
        <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=1920&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          <Container className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">재무정보</h1>
            <p className="text-lg text-blue-100">진덕건설의 재무 현황을 투명하게 공개합니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">주요 경영지표 (2023년 기준)</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {businessMetrics.map((metric) => (
                    <div key={metric.label} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                      <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                      <p className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</p>
                      <div className="flex items-center justify-center">
                        {metric.trend === 'up' ? (
                          <span className="text-green-600 text-sm flex items-center">
                            ▲ 전년 대비 증가
                          </span>
                        ) : (
                          <span className="text-blue-600 text-sm flex items-center">
                            ▼ 전년 대비 개선
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">연도별 재무현황</h2>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-blue-600 text-white">
                        <tr>
                          <th className="px-6 py-4 text-left">구분</th>
                          {financialData.map((data) => (
                            <th key={data.year} className="px-6 py-4 text-right">{data.year}년</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">매출액</td>
                          {financialData.map((data) => (
                            <td key={data.year} className="px-6 py-4 text-right">{data.revenue}억원</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">영업이익</td>
                          {financialData.map((data) => (
                            <td key={data.year} className="px-6 py-4 text-right">{data.operatingProfit}억원</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">당기순이익</td>
                          {financialData.map((data) => (
                            <td key={data.year} className="px-6 py-4 text-right">{data.netProfit}억원</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-gray-50 bg-blue-50">
                          <td className="px-6 py-4 font-medium text-gray-900">총자산</td>
                          {financialData.map((data) => (
                            <td key={data.year} className="px-6 py-4 text-right font-bold">{data.totalAssets}억원</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">부채총계</td>
                          {financialData.map((data) => (
                            <td key={data.year} className="px-6 py-4 text-right">{data.debt}억원</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">자본총계</td>
                          {financialData.map((data) => (
                            <td key={data.year} className="px-6 py-4 text-right">{data.equity}억원</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">* 단위: 억원</p>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">재무 안정성</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>
                      <strong>지속적인 성장:</strong> 최근 3년간 매출액과 영업이익이 꾸준히 증가하며 
                      안정적인 성장세를 보이고 있습니다.
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>
                      <strong>건전한 재무구조:</strong> 부채비율 60.4%, 자기자본비율 62.4%로 
                      안정적인 재무구조를 유지하고 있습니다.
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>
                      <strong>수익성 개선:</strong> 영업이익률 10.8%로 업계 평균을 상회하는 
                      우수한 수익성을 나타내고 있습니다.
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>
                      <strong>투명 경영:</strong> 외부 회계법인의 정기 감사를 통해 
                      투명한 재무 정보를 공개하고 있습니다.
                    </span>
                  </p>
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
