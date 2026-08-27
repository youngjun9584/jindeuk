import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '특허 및 신기술 - 진덕건설',
  description: '진덕건설 보유 특허 및 신기술',
}

export default function PatentsPage() {
  const patents = [
    {
      title: '친환경 지반 보강 공법',
      registrationNo: '10-2023-0012345',
      registrationDate: '2023.05.15',
      description: '환경 오염을 최소화한 새로운 지반 보강 기술',
      field: '토목',
    },
    {
      title: '고강도 콘크리트 타설 시스템',
      registrationNo: '10-2023-0023456',
      registrationDate: '2023.08.22',
      description: '초고층 건축물을 위한 고강도 콘크리트 시공 기술',
      field: '건축',
    },
    {
      title: '스마트 안전 관리 시스템',
      registrationNo: '10-2022-0034567',
      registrationDate: '2022.11.10',
      description: 'IoT 기술을 활용한 건설 현장 안전 관리 시스템',
      field: '안전',
    },
    {
      title: '터널 굴착 자동화 장치',
      registrationNo: '10-2022-0045678',
      registrationDate: '2022.07.30',
      description: '터널 굴착 작업의 안전성과 효율성을 높인 자동화 기술',
      field: '토목',
    },
    {
      title: '건설 폐기물 재활용 공법',
      registrationNo: '10-2021-0056789',
      registrationDate: '2021.12.05',
      description: '건설 폐기물을 재활용한 친환경 시공 기술',
      field: '환경',
    },
  ]

  const technologies = [
    {
      title: '신기술 인증 제898호',
      name: 'Earth Anchor 복합 지반 보강 공법',
      organization: '국토교통부',
      date: '2023.03',
      description: '기존 공법 대비 시공 기간 30% 단축 및 비용 20% 절감',
    },
    {
      title: '신기술 인증 제845호',
      name: '무진동 항타 공법',
      organization: '국토교통부',
      date: '2022.09',
      description: '도심지 공사의 진동 및 소음을 최소화한 친환경 공법',
    },
    {
      title: '녹색기술 인증',
      name: '저탄소 콘크리트 제조 기술',
      organization: '환경부',
      date: '2022.06',
      description: 'CO2 배출량을 40% 감축한 친환경 콘크리트 기술',
    },
  ]

  const research = [
    {
      title: '스마트 건설 기술 개발',
      description: 'AI 및 빅데이터를 활용한 건설 현장 최적화',
      status: '진행중',
      duration: '2023.01 ~ 2025.12',
    },
    {
      title: '친환경 건축 자재 연구',
      description: '재활용 소재를 활용한 건축 자재 개발',
      status: '진행중',
      duration: '2023.06 ~ 2024.12',
    },
    {
      title: '3D 프린팅 건축 기술',
      description: '3D 프린팅을 활용한 혁신적인 건축 공법',
      status: '계획',
      duration: '2024.01 ~ 2026.12',
    },
  ]

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
            <h1 className="text-4xl font-bold mb-4">특허 및 신기술</h1>
            <p className="text-lg text-blue-100">진덕건설의 기술 혁신 성과</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">보유 특허</h2>
                <div className="space-y-6">
                  {patents.map((patent, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-bold text-gray-900">{patent.title}</h3>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                              {patent.field}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-3">{patent.description}</p>
                          <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-gray-600">
                            <span>등록번호: {patent.registrationNo}</span>
                            <span className="hidden md:inline">|</span>
                            <span>등록일: {patent.registrationDate}</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-5xl">💡</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">신기술 인증</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="text-4xl mb-3">🏆</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.title}</h3>
                      <p className="font-medium text-green-700 mb-3">{tech.name}</p>
                      <p className="text-sm text-gray-700 mb-3">{tech.description}</p>
                      <div className="text-sm text-gray-600">
                        <p>{tech.organization}</p>
                        <p>{tech.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">연구개발 과제</h2>
                <div className="space-y-4">
                  {research.map((project, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                            <span
                              className={`px-3 py-1 text-sm rounded-full ${
                                project.status === '진행중'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-2">{project.description}</p>
                          <p className="text-sm text-gray-600">기간: {project.duration}</p>
                        </div>
                        <div className="flex-shrink-0 text-4xl">🔬</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">기술 개발 방향</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">친환경 기술</h4>
                    <p className="text-gray-700 text-sm">
                      탄소 중립을 실현하기 위한 친환경 건설 기술 개발에 
                      지속적으로 투자하고 있습니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">스마트 건설</h4>
                    <p className="text-gray-700 text-sm">
                      AI, IoT, 빅데이터 등 첨단 ICT 기술을 건설 현장에 
                      적용하여 생산성을 향상시킵니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">안전 기술</h4>
                    <p className="text-gray-700 text-sm">
                      건설 현장의 안전성을 높이기 위한 다양한 
                      안전 관리 기술을 개발하고 있습니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">시공 효율화</h4>
                    <p className="text-gray-700 text-sm">
                      공기 단축과 원가 절감을 위한 혁신적인 
                      시공 기술을 지속적으로 연구합니다.
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
