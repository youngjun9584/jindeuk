import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '채용정보 - 진덕건설',
  description: '진덕건설 채용 공고',
}

export default function CareersPage() {
  const benefits = [
    { title: '경쟁력 있는 연봉', description: '업계 최고 수준의 보상 체계' },
    { title: '복리후생', description: '4대 보험, 건강검진, 경조사 지원' },
    { title: '교육 지원', description: '자격증 취득, 외부 교육 전액 지원' },
    { title: '휴가 제도', description: '연차, 하계휴가, 경조휴가' },
    { title: '성과 보상', description: '프로젝트 성과급, 우수사원 포상' },
    { title: '경력 개발', description: '체계적인 승진 체계 및 경력 개발' },
  ]

  const positions = [
    {
      title: '현장 소장',
      department: '시공본부',
      type: '경력직',
      location: '서울/경기',
      deadline: '2024.03.31',
      requirements: [
        '토목 또는 건축 관련 학과 졸업자',
        '현장 소장 경력 5년 이상',
        '토목 또는 건축 기사 자격증 소지자',
        '원활한 의사소통 및 리더십',
      ],
      preferred: [
        '대형 건설사 현장 소장 경력자',
        '안전관리 우수 경력자',
        '차량 소지자',
      ],
    },
    {
      title: '토목 기술자',
      department: '시공본부',
      type: '경력/신입',
      location: '전국',
      deadline: '2024.03.31',
      requirements: [
        '토목공학 전공자 (학사 이상)',
        '신입 또는 경력 3년 이상',
        '토목기사 또는 토목산업기사 자격증',
        '협업 및 문제해결 능력',
      ],
      preferred: [
        '도로, 교량 분야 경력자',
        'AutoCAD, Civil 3D 사용 가능자',
        '차량 소지자',
      ],
    },
    {
      title: '건축 시공 기술자',
      department: '시공본부',
      type: '경력직',
      location: '서울/경기',
      deadline: '2024.03.31',
      requirements: [
        '건축공학 전공자',
        '건축 시공 경력 3년 이상',
        '건축기사 또는 건축산업기사',
        '현장 관리 능력',
      ],
      preferred: [
        '아파트 또는 오피스 시공 경력',
        '품질관리 경험자',
        '각종 설계 도구 활용 가능자',
      ],
    },
    {
      title: '안전관리자',
      department: '기술연구소',
      type: '경력직',
      location: '전국',
      deadline: '2024.03.31',
      requirements: [
        '산업안전 또는 관련 전공자',
        '안전관리 경력 3년 이상',
        '건설안전기사 또는 산업안전기사',
        '법규 숙지 및 현장 안전관리 능력',
      ],
      preferred: [
        '대형 건설현장 안전관리 경력',
        'KOSHA-MS 심사 경험자',
        '안전교육 강사 자격',
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
            <h1 className="text-4xl font-bold mb-4">채용정보</h1>
            <p className="text-lg text-blue-100">진덕건설과 함께 미래를 만들어갈 인재를 찾습니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">인재상</h2>
                <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 mb-8">
                  <p className="text-lg text-gray-800 leading-relaxed text-center">
                    <span className="font-bold text-blue-600">도전정신</span>과 
                    <span className="font-bold text-blue-600"> 전문성</span>을 갖춘 인재,<br />
                    <span className="font-bold text-blue-600">팀워크</span>를 중시하고 
                    <span className="font-bold text-blue-600"> 책임감</span>있게 일하는 인재를 찾습니다.
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">복리후생</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">채용 공고</h2>
              </div>

              <div className="space-y-8">
                {positions.map((position, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                            {position.department}
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                            {position.type}
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                            {position.location}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <p className="text-sm text-gray-600">마감일</p>
                        <p className="text-lg font-bold text-red-600">{position.deadline}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">필수 자격요건</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                              <span className="text-blue-600 mr-2">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">우대 사항</h4>
                        <ul className="space-y-2">
                          {position.preferred.map((pref, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                              <span className="text-green-600 mr-2">+</span>
                              <span>{pref}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                      <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                        지원하기
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">채용 프로세스</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  {['서류전형', '1차 면접', '2차 면접', '최종합격'].map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className="bg-white px-6 py-4 rounded-lg border-2 border-blue-600 text-center min-w-[120px]">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{index + 1}</div>
                        <p className="font-medium text-gray-900">{step}</p>
                      </div>
                      {index < 3 && (
                        <svg className="w-8 h-8 text-blue-600 mx-2 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">지원 방법</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>이메일 지원:</strong> recruit@jinduk.co.kr</p>
                  <p><strong>제출 서류:</strong> 이력서, 자기소개서, 경력기술서 (해당자)</p>
                  <p><strong>문의:</strong> 인사팀 02-0000-0000</p>
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
