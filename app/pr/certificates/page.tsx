import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '인증서 - 진덕건설',
  description: '진덕건설 보유 인증서',
}

export default function CertificatesPage() {
  const certificates = [
    {
      category: 'ISO 인증',
      items: [
        {
          name: 'ISO 9001',
          description: '품질경영시스템 인증',
          issueDate: '2022.03',
          validUntil: '2025.03',
          organization: '한국품질재단',
        },
        {
          name: 'ISO 14001',
          description: '환경경영시스템 인증',
          issueDate: '2022.03',
          validUntil: '2025.03',
          organization: '한국품질재단',
        },
        {
          name: 'ISO 45001',
          description: '안전보건경영시스템 인증',
          issueDate: '2022.06',
          validUntil: '2025.06',
          organization: '한국산업안전보건공단',
        },
      ],
    },
    {
      category: '안전보건 인증',
      items: [
        {
          name: 'KOSHA-MS',
          description: '안전보건경영시스템 인증',
          issueDate: '2023.01',
          validUntil: '2026.01',
          organization: '한국산업안전보건공단',
        },
        {
          name: '무재해 인증',
          description: '3배수 무재해 인증',
          issueDate: '2023.09',
          validUntil: '2024.09',
          organization: '한국산업안전보건공단',
        },
      ],
    },
    {
      category: '건설업 면허',
      items: [
        {
          name: '종합건설업 면허',
          description: '토목건축공사업',
          issueDate: '2019.05',
          validUntil: '유효',
          organization: '국토교통부',
        },
        {
          name: '전문건설업 면허',
          description: '토공사, 포장공사, 구조물해체',
          issueDate: '2018.03',
          validUntil: '유효',
          organization: '국토교통부',
        },
      ],
    },
    {
      category: '기타 인증',
      items: [
        {
          name: '벤처기업 인증',
          description: '기술혁신형 벤처기업',
          issueDate: '2023.04',
          validUntil: '2026.04',
          organization: '중소벤처기업부',
        },
        {
          name: '기업부설연구소 인정',
          description: '기술연구소 인정서',
          issueDate: '2022.07',
          validUntil: '유효',
          organization: '한국산업기술진흥협회',
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <Container>
            <h1 className="text-4xl font-bold mb-4">인증서</h1>
            <p className="text-lg text-blue-100">진덕건설이 보유한 각종 인증서입니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-6xl mx-auto">
              {certificates.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                    {category.category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((cert, index) => (
                      <div
                        key={index}
                        className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
                      >
                        <div className="w-16 h-16 mb-4 bg-blue-100 rounded-lg flex items-center justify-center text-3xl">
                          📜
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{cert.description}</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">발급기관:</span>
                            <span className="font-medium text-gray-900">{cert.organization}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">발급일:</span>
                            <span className="font-medium text-gray-900">{cert.issueDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">유효기간:</span>
                            <span className="font-medium text-gray-900">{cert.validUntil}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-16 bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">인증서의 의미</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">품질 경영</h4>
                    <p className="text-gray-700 text-sm">
                      ISO 9001 인증을 통해 체계적인 품질관리 시스템을 운영하며,
                      고객에게 최상의 품질을 제공합니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">환경 경영</h4>
                    <p className="text-gray-700 text-sm">
                      ISO 14001 인증으로 친환경 건설을 실천하며,
                      환경 보호에 앞장서고 있습니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">안전 경영</h4>
                    <p className="text-gray-700 text-sm">
                      ISO 45001, KOSHA-MS 인증을 통해 안전을 최우선으로 하는
                      경영 체계를 구축하고 있습니다.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">기술 혁신</h4>
                    <p className="text-gray-700 text-sm">
                      벤처기업 인증 및 기업부설연구소를 통해
                      끊임없는 기술 개발과 혁신을 추구합니다.
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
