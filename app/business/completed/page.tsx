import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '완료현장 - 진덕건설',
  description: '진덕건설 완료 시공 현장',
}

export default function CompletedProjectsPage() {
  const projects = [
    {
      name: '○○ 주상복합 아파트',
      location: '서울특별시 송파구',
      type: '건축공사',
      client: '○○건설',
      period: '2022.03 ~ 2023.12',
      scale: '지하 4층, 지상 30층',
      description: '상업시설과 주거시설이 결합된 대규모 주상복합 건축물',
    },
    {
      name: '△△ 터널 건설공사',
      location: '강원도 춘천시',
      type: '토목공사',
      client: '한국도로공사',
      period: '2021.06 ~ 2023.11',
      scale: '연장 2.3km',
      description: '산악 지형을 관통하는 양방향 터널 건설',
    },
    {
      name: '□□ 정수장 건설',
      location: '경기도 수원시',
      type: '플랜트공사',
      client: '한국수자원공사',
      period: '2021.01 ~ 2023.06',
      scale: '일일 처리용량 100,000톤',
      description: '첨단 정수 시스템을 갖춘 대규모 정수장',
    },
    {
      name: '◇◇ 물류센터 건설',
      location: '경기도 용인시',
      type: '건축공사',
      client: '○○물류',
      period: '2022.08 ~ 2023.10',
      scale: '연면적 50,000㎡',
      description: '스마트 물류시스템이 적용된 현대식 물류센터',
    },
    {
      name: '☆☆ 교량 확장공사',
      location: '대구광역시 달서구',
      type: '토목공사',
      client: '대구시설공단',
      period: '2022.01 ~ 2023.08',
      scale: '연장 600m',
      description: '기존 교량의 확장 및 보강 공사',
    },
    {
      name: '●● 문화센터 건립',
      location: '광주광역시 서구',
      type: '건축공사',
      client: '광주시청',
      period: '2021.09 ~ 2023.12',
      scale: '지하 2층, 지상 5층',
      description: '시민을 위한 복합 문화 공간',
    },
    {
      name: '■■ 산업단지 조성',
      location: '충청북도 청주시',
      type: '토목공사',
      client: '한국산업단지공단',
      period: '2020.11 ~ 2023.05',
      scale: '부지 면적 300,000㎡',
      description: '산업단지 부지 조성 및 기반시설 공사',
    },
    {
      name: '◆◆ 공장 신축공사',
      location: '울산광역시 북구',
      type: '건축공사',
      client: '○○산업',
      period: '2022.04 ~ 2023.09',
      scale: '연면적 35,000㎡',
      description: '첨단 제조 시설을 갖춘 스마트 팩토리',
    },
    {
      name: '▲▲ 하천 정비사업',
      location: '전라북도 전주시',
      type: '토목공사',
      client: '전주시청',
      period: '2021.05 ~ 2023.04',
      scale: '연장 3.5km',
      description: '하천 호안 정비 및 친수 공간 조성',
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <Container>
            <h1 className="text-4xl font-bold mb-4">완료현장</h1>
            <p className="text-lg text-green-100">성공적으로 완료한 프로젝트를 소개합니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-gray-600">총 <span className="font-bold text-green-600">{projects.length}</span>개의 프로젝트를 성공적으로 완료했습니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <span className="text-green-700 text-sm">현장 사진</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                    </div>
                    
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full mb-3">
                      {project.type}
                    </span>
                    
                    <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start text-gray-600">
                        <span className="font-medium w-16 flex-shrink-0">위치:</span>
                        <span className="flex-1">{project.location}</span>
                      </div>
                      <div className="flex items-start text-gray-600">
                        <span className="font-medium w-16 flex-shrink-0">발주처:</span>
                        <span className="flex-1">{project.client}</span>
                      </div>
                      <div className="flex items-start text-gray-600">
                        <span className="font-medium w-16 flex-shrink-0">기간:</span>
                        <span className="flex-1">{project.period}</span>
                      </div>
                      <div className="flex items-start text-gray-600">
                        <span className="font-medium w-16 flex-shrink-0">규모:</span>
                        <span className="flex-1">{project.scale}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
