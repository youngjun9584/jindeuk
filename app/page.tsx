import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSlider from '@/components/home/HeroSlider'
import Container from '@/components/ui/Container'

export default function Home() {
  const businessAreas = [
    { title: '토목공사', icon: '🏗️', description: '도로, 교량, 터널 등 인프라 구축', link: '/business/services#civil' },
    { title: '건축공사', icon: '🏢', description: '주거, 상업, 업무시설 건축', link: '/business/services#building' },
    { title: '플랜트공사', icon: '⚙️', description: '산업 설비 및 환경 플랜트', link: '/business/services#plant' },
    { title: '기초공사', icon: '🔨', description: '흙막이, 파일 등 기초 시공', link: '/business/services#foundation' },
  ]

  const stats = [
    { number: '200+', label: '프로젝트', icon: '📊' },
    { number: '160+', label: '기술 인력', icon: '👷' },
    { number: '180+', label: '보유 장비', icon: '🚜' },
    { number: '99%', label: '납기준수율', icon: '✓' },
  ]

  const projects = [
    {
      title: '○○ 아파트 신축공사',
      location: '서울 강남구',
      status: '진행중',
      progress: 45,
      image: '/placeholder-project.jpg',
    },
    {
      title: '△△ 도로 확장공사',
      location: '경기 성남시',
      status: '진행중',
      progress: 70,
      image: '/placeholder-project.jpg',
    },
    {
      title: '□□ 터널 건설공사',
      location: '강원 춘천시',
      status: '완료',
      progress: 100,
      image: '/placeholder-project.jpg',
    },
  ]

  const news = [
    { date: '2024.02.01', category: '공지', title: '2024년 설 연휴 운영 안내' },
    { date: '2024.01.28', category: '채용', title: '2024년 상반기 경력직 채용 공고' },
    { date: '2024.01.25', category: '수상', title: '건설안전대상 수상 소식' },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />

      {/* 회사 소개 섹션 */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">진덕건설을 소개합니다</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              진덕건설은 <span className="font-bold text-blue-600">신뢰와 혁신</span>을 바탕으로<br />
              최고의 품질과 안전을 추구하는 <span className="font-bold text-blue-600">종합건설기업</span>입니다.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/company/ceo" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                회사소개
              </Link>
              <Link href="/business" className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                사업영역
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 사업영역 */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">주요 사업영역</h2>
          <p className="text-gray-600 text-center mb-12">진덕건설의 전문 시공 분야</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessAreas.map((area) => (
              <Link
                key={area.title}
                href={area.link}
                className="group bg-white p-8 rounded-lg hover:shadow-xl transition-all border border-gray-200 hover:border-blue-400"
              >
                <div className="text-6xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/business/services" className="text-blue-600 font-bold hover:underline">
              전체 사업 보기 →
            </Link>
          </div>
        </Container>
      </section>

      {/* 주요 지표 */}
      <section className="py-20 bg-blue-600 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 주요 프로젝트 */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">주요 프로젝트</h2>
          <p className="text-gray-600 text-center mb-12">진덕건설의 시공 현장</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">현장 사진</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      project.status === '진행중' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.location}</p>
                  {project.status === '진행중' && (
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>진행률</span>
                        <span className="font-bold text-blue-600">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/business/ongoing" className="text-blue-600 font-bold hover:underline">
              전체 프로젝트 보기 →
            </Link>
          </div>
        </Container>
      </section>

      {/* 기술 및 품질 */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">기술 및 품질</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/technology/engineers" className="bg-white p-8 rounded-lg hover:shadow-xl transition-all border border-gray-200 hover:border-blue-400 text-center">
              <div className="text-6xl mb-4">👷</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">160+</h3>
              <p className="text-gray-600">기술 인력</p>
            </Link>
            <Link href="/technology/equipment" className="bg-white p-8 rounded-lg hover:shadow-xl transition-all border border-gray-200 hover:border-blue-400 text-center">
              <div className="text-6xl mb-4">🚜</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">180+</h3>
              <p className="text-gray-600">보유 장비</p>
            </Link>
            <Link href="/technology/patents" className="bg-white p-8 rounded-lg hover:shadow-xl transition-all border border-gray-200 hover:border-blue-400 text-center">
              <div className="text-6xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">특허 및 신기술</h3>
              <p className="text-gray-600">기술 혁신</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* 공지사항 */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-gray-900">공지사항</h2>
            <Link href="/customer/notices" className="text-blue-600 font-bold hover:underline">
              더보기 →
            </Link>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {news.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-6 hover:bg-gray-50 transition-colors border-b last:border-b-0 border-gray-200">
                <span className="text-gray-600 text-sm min-w-[100px]">{item.date}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full whitespace-nowrap">
                  {item.category}
                </span>
                <span className="text-gray-900 flex-1">{item.title}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
