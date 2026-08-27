import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '보유면허 - 진덕건설',
  description: '진덕건설 보유 면허 및 등록 현황',
}

export default function LicensesPage() {
  const licenses = [
    {
      category: '종합건설업',
      items: [
        {
          name: '토목건축공사업',
          registrationNo: '서울-2019-00000',
          issueDate: '2019.05.20',
          authority: '국토교통부',
          description: '건설산업기본법에 따른 종합건설업 면허',
        },
      ],
    },
    {
      category: '전문건설업',
      items: [
        {
          name: '토공사업',
          registrationNo: '서울-2018-00001',
          issueDate: '2018.03.15',
          authority: '국토교통부',
          description: '터파기, 성토, 정지 등 토공사 전문',
        },
        {
          name: '포장공사업',
          registrationNo: '서울-2018-00002',
          issueDate: '2018.03.15',
          authority: '국토교통부',
          description: '아스팔트, 콘크리트 포장 전문',
        },
        {
          name: '구조물해체공사업',
          registrationNo: '서울-2019-00003',
          issueDate: '2019.08.10',
          authority: '국토교통부',
          description: '건축물 및 구조물 해체 전문',
        },
        {
          name: '보링그라우팅공사업',
          registrationNo: '서울-2020-00004',
          issueDate: '2020.02.25',
          authority: '국토교통부',
          description: '지반 조사 및 보강 전문',
        },
      ],
    },
    {
      category: '전기공사업',
      items: [
        {
          name: '일반전기공사업',
          registrationNo: '서울-2020-00005',
          issueDate: '2020.11.30',
          authority: '산업통상자원부',
          description: '전기설비 설치 및 유지보수',
        },
      ],
    },
    {
      category: '소방시설업',
      items: [
        {
          name: '소방시설설계업',
          registrationNo: '서울-2021-00006',
          issueDate: '2021.04.15',
          authority: '소방청',
          description: '소방설비 설계 및 감리',
        },
        {
          name: '소방시설공사업',
          registrationNo: '서울-2021-00007',
          issueDate: '2021.04.15',
          authority: '소방청',
          description: '소방설비 시공 및 유지관리',
        },
      ],
    },
  ]

  const registrations = [
    {
      title: '하도급 거래 적정성 심사 적격업체',
      organization: '공정거래위원회',
      validUntil: '2025.12.31',
    },
    {
      title: '부가가치세 일반과세자',
      organization: '국세청',
      validUntil: '유효',
    },
    {
      title: '산재보험 가입',
      organization: '근로복지공단',
      validUntil: '유효',
    },
    {
      title: '고용보험 가입',
      organization: '고용노동부',
      validUntil: '유효',
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
            <h1 className="text-4xl font-bold mb-4">보유면허</h1>
            <p className="text-lg text-blue-100">진덕건설의 면허 및 등록 현황</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-6xl mx-auto">
              {licenses.map((licenseCategory, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                    {licenseCategory.category}
                  </h2>
                  <div className="space-y-6">
                    {licenseCategory.items.map((license, index) => (
                      <div
                        key={index}
                        className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center text-4xl">
                              📋
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{license.name}</h3>
                            <p className="text-gray-700 mb-4">{license.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                              <div>
                                <span className="text-gray-600">등록번호:</span>
                                <p className="font-medium text-gray-900">{license.registrationNo}</p>
                              </div>
                              <div>
                                <span className="text-gray-600">발급일:</span>
                                <p className="font-medium text-gray-900">{license.issueDate}</p>
                              </div>
                              <div>
                                <span className="text-gray-600">발급기관:</span>
                                <p className="font-medium text-gray-900">{license.authority}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">기타 등록 현황</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {registrations.map((reg, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{reg.title}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">발급기관:</span>
                          <span className="font-medium text-gray-900">{reg.organization}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">유효기간:</span>
                          <span className="font-medium text-gray-900">{reg.validUntil}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">면허 관리</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-3 flex-shrink-0">✓</span>
                    <span>
                      <strong>체계적 관리:</strong> 모든 면허 및 등록증은 유효기간을 철저히 관리하여 
                      적시에 갱신하고 있습니다.
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-3 flex-shrink-0">✓</span>
                    <span>
                      <strong>법규 준수:</strong> 건설산업기본법 및 관련 법규를 엄격히 준수하며 
                      투명한 경영을 실천합니다.
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-3 flex-shrink-0">✓</span>
                    <span>
                      <strong>지속적 확대:</strong> 사업 영역 확장에 따라 필요한 면허를 
                      추가로 취득하여 사업 경쟁력을 강화합니다.
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-3 flex-shrink-0">✓</span>
                    <span>
                      <strong>전문성 강화:</strong> 각 분야별 전문 기술 인력을 확보하여 
                      면허에 상응하는 실질적인 시공 능력을 갖추고 있습니다.
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">신뢰할 수 있는 건설 파트너</h3>
                <p className="text-gray-700 leading-relaxed">
                  진덕건설은 종합건설업 및 다양한 전문건설업 면허를 보유한 
                  법적으로 검증된 건설 기업입니다. 모든 면허와 등록은 관련 법규를 
                  철저히 준수하여 취득하였으며, 지속적인 관리를 통해 유효성을 유지하고 있습니다. 
                  고객님께서는 안심하고 진덕건설에 건설 프로젝트를 맡기실 수 있습니다.
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
