import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '기술자 보유현황 - 진덕건설',
  description: '진덕건설 기술 인력 현황',
}

export default function EngineersPage() {
  const technicians = [
    { title: '토목기사', count: 28 },
    { title: '건축기사', count: 22 },
    { title: '건설안전기사', count: 15 },
    { title: '품질관리기사', count: 12 },
    { title: '토목산업기사', count: 35 },
    { title: '건축산업기사', count: 30 },
    { title: '측량기사', count: 8 },
    { title: '건설기계기사', count: 10 },
  ]

  const managers = [
    { position: '건설사업관리기술자', count: 5 },
    { position: '건설공사안전관리자', count: 8 },
    { position: '품질관리자', count: 6 },
    { position: '환경관리자', count: 4 },
  ]

  const specialists = [
    { field: '토목 분야', personnel: 65, description: '도로, 교량, 터널 등 토목 전문 인력' },
    { field: '건축 분야', personnel: 52, description: '건축물 설계 및 시공 전문가' },
    { field: '플랜트 분야', personnel: 18, description: '환경 및 산업 플랜트 기술자' },
    { field: '안전/품질 분야', personnel: 23, description: '안전 및 품질 관리 전문 인력' },
  ]

  const totalEngineers = technicians.reduce((sum, item) => sum + item.count, 0)
  const totalManagers = managers.reduce((sum, item) => sum + item.count, 0)

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[132px]">
        <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          <Container className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">기술자 보유현황</h1>
            <p className="text-lg text-blue-100">우수한 전문 기술 인력을 보유하고 있습니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
                  <p className="text-lg mb-2">총 기술 인력</p>
                  <p className="text-5xl font-bold">{totalEngineers + totalManagers}</p>
                  <p className="text-blue-100 mt-2">명</p>
                </div>
                <div className="bg-green-600 text-white rounded-lg p-8 text-center">
                  <p className="text-lg mb-2">기술사/기사</p>
                  <p className="text-5xl font-bold">{totalEngineers}</p>
                  <p className="text-green-100 mt-2">명</p>
                </div>
                <div className="bg-purple-600 text-white rounded-lg p-8 text-center">
                  <p className="text-lg mb-2">관리자</p>
                  <p className="text-5xl font-bold">{totalManagers}</p>
                  <p className="text-purple-100 mt-2">명</p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">기술자격 보유현황</h2>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">자격증</th>
                        <th className="px-6 py-4 text-center">보유 인원</th>
                        <th className="px-6 py-4 text-center">비율</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {technicians.map((tech) => (
                        <tr key={tech.title} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">{tech.title}</td>
                          <td className="px-6 py-4 text-center">{tech.count}명</td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center">
                              <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                                <div
                                  className="bg-blue-600 h-2 rounded-full"
                                  style={{ width: `${(tech.count / totalEngineers) * 100}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600">
                                {((tech.count / totalEngineers) * 100).toFixed(1)}%
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">관리자 보유현황</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {managers.map((manager) => (
                    <div key={manager.position} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{manager.position}</h3>
                      <div className="flex items-end">
                        <span className="text-4xl font-bold text-blue-600">{manager.count}</span>
                        <span className="text-gray-600 ml-2 mb-1">명</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">분야별 인력 현황</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {specialists.map((spec) => (
                    <div key={spec.field} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{spec.field}</h3>
                      <p className="text-3xl font-bold text-blue-600 mb-3">{spec.personnel}명</p>
                      <p className="text-gray-700 text-sm">{spec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">기술 인력 관리</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>
                      <strong>지속적인 교육:</strong> 정기적인 기술 교육과 훈련을 통해 
                      전문성을 강화하고 있습니다.
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>
                      <strong>자격 취득 지원:</strong> 기술자격 취득을 위한 교육비 및 
                      응시료를 전액 지원합니다.
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>
                      <strong>경력 개발:</strong> 체계적인 경력 개발 프로그램을 통해 
                      전문가로 성장할 수 있도록 지원합니다.
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>
                      <strong>우수 인력 확보:</strong> 경쟁력 있는 처우와 근무 환경으로 
                      우수한 기술 인력을 지속적으로 확보하고 있습니다.
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
