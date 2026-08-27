import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '진행현장 - 진덕건설',
  description: '진덕건설 진행 중인 시공 현장',
}

export default function OngoingProjectsPage() {
  const projects = [
    {
      name: '○○ 아파트 신축공사',
      location: '서울특별시 강남구',
      type: '건축공사',
      client: '○○건설',
      period: '2024.01 ~ 2025.12',
      progress: 45,
      description: '지하 3층, 지상 25층 규모의 주거용 아파트 신축',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    },
    {
      name: '△△ 도로 확장공사',
      location: '경기도 성남시',
      type: '토목공사',
      client: '한국도로공사',
      period: '2024.03 ~ 2024.12',
      progress: 70,
      description: '왕복 4차로 도로 확장 및 포장 공사',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
    },
    {
      name: '□□ 하수처리장 건설',
      location: '충청남도 천안시',
      type: '플랜트공사',
      client: '한국수자원공사',
      period: '2023.09 ~ 2025.08',
      progress: 60,
      description: '일일 처리용량 50,000톤 규모의 하수처리시설',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
    },
    {
      name: '◇◇ 지하차도 건설공사',
      location: '부산광역시 해운대구',
      type: '토목공사',
      client: '부산시설공단',
      period: '2024.02 ~ 2025.06',
      progress: 35,
      description: '연장 1.2km의 지하차도 및 터널 공사',
      image: 'https://images.unsplash.com/photo-1572981779307-52e0489b3663?w=800&q=80',
    },
    {
      name: '☆☆ 오피스빌딩 신축',
      location: '인천광역시 연수구',
      type: '건축공사',
      client: '○○디벨롭먼트',
      period: '2024.04 ~ 2026.03',
      progress: 25,
      description: '지하 5층, 지상 20층 규모의 업무용 빌딩',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    },
    {
      name: '●● 교량 건설공사',
      location: '대전광역시 유성구',
      type: '토목공사',
      client: '한국도로공사',
      period: '2023.11 ~ 2025.10',
      progress: 55,
      description: '연장 450m의 교량 건설 및 접속도로',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[132px]">
        <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          <Container className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">진행현장</h1>
            <p className="text-lg text-blue-100">현재 진행 중인 프로젝트를 소개합니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-gray-600">총 <span className="font-bold text-blue-600">{projects.length}</span>개의 프로젝트가 진행 중입니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full whitespace-nowrap ml-2">
                        {project.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium w-20">위치:</span>
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium w-20">발주처:</span>
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium w-20">기간:</span>
                        <span>{project.period}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">진행률</span>
                        <span className="text-sm font-bold text-blue-600">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        ></div>
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
