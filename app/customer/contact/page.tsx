import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '찾아오시는 길 - 진덕건설',
  description: '진덕건설 위치 및 연락처',
}

export default function ContactPage() {
  const contactInfo = {
    address: '서울특별시 강남구 테헤란로 123 진덕빌딩 10층',
    tel: '02-0000-0000',
    fax: '02-0000-0001',
    email: 'info@jinduk.co.kr',
    businessHours: '평일 09:00 ~ 18:00 (주말 및 공휴일 휴무)',
  }

  const departments = [
    { name: '대표전화', number: '02-0000-0000' },
    { name: '경영관리본부', number: '02-0000-1001' },
    { name: '시공본부', number: '02-0000-1002' },
    { name: '기술연구소', number: '02-0000-1003' },
    { name: '영업본부', number: '02-0000-1004' },
    { name: '인사팀 (채용문의)', number: '02-0000-1005' },
  ]

  const transportations = [
    {
      type: '지하철',
      icon: '🚇',
      routes: [
        '2호선 강남역 3번 출구에서 도보 5분',
        '신분당선 강남역 5번 출구에서 도보 7분',
        '분당선 선릉역 2번 출구에서 도보 10분',
      ],
    },
    {
      type: '버스',
      icon: '🚌',
      routes: [
        '간선버스: 146, 301, 360, 740',
        '지선버스: 3412, 4319, 6411',
        '광역버스: 9303, 9408',
      ],
    },
    {
      type: '자가용',
      icon: '🚗',
      routes: [
        '강남대로 이용 시: 강남역 사거리에서 테헤란로 방향',
        '테헤란로 이용 시: 삼성역 방향 진행',
        '주차: 건물 지하 1~3층 (방문객 2시간 무료)',
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-[132px]">
        <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          <Container className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">찾아오시는 길</h1>
            <p className="text-lg text-blue-100">진덕건설 본사 위치 및 연락처를 안내해드립니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">오시는 길</h2>
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-6">
                  <p className="text-gray-600">지도 영역 (카카오맵 또는 네이버지도 삽입)</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                        <span className="text-2xl mr-2">📍</span>
                        주소
                      </h3>
                      <p className="text-gray-700 text-lg">{contactInfo.address}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                        <span className="text-2xl mr-2">🕒</span>
                        운영시간
                      </h3>
                      <p className="text-gray-700">{contactInfo.businessHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">대중교통 이용 안내</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {transportations.map((transport) => (
                    <div key={transport.type} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-3">{transport.icon}</span>
                        <h3 className="text-xl font-bold text-gray-900">{transport.type}</h3>
                      </div>
                      <ul className="space-y-2">
                        {transport.routes.map((route, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-700">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{route}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">연락처</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {departments.map((dept) => (
                    <div key={dept.name} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-2">{dept.name}</h3>
                      <p className="text-blue-600 font-bold text-xl">{dept.number}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📧 이메일 문의</h3>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2">이메일: <span className="font-bold">{contactInfo.email}</span></p>
                    <p className="text-sm text-gray-600">
                      업무 시간 내 문의하신 내용에 대해 24시간 이내에 답변드립니다.
                    </p>
                  </div>
                  <form className="space-y-3">
                    <input
                      type="text"
                      placeholder="제목"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="email"
                      placeholder="이메일"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <textarea
                      placeholder="문의 내용을 입력하세요"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    ></textarea>
                    <button className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                      문의하기
                    </button>
                  </form>
                </div>

                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📞 전화 문의</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-gray-900">대표전화</p>
                      <p className="text-2xl font-bold text-green-600">{contactInfo.tel}</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">팩스</p>
                      <p className="text-lg text-gray-700">{contactInfo.fax}</p>
                    </div>
                    <div className="pt-4 border-t border-green-200">
                      <p className="text-sm text-gray-700 mb-2">
                        📞 상담 가능 시간
                      </p>
                      <p className="text-gray-900 font-medium">{contactInfo.businessHours}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>긴급 문의:</strong><br />
                        공사 현장 관련 긴급 사항은 현장 소장에게 직접 연락 부탁드립니다.
                      </p>
                    </div>
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
