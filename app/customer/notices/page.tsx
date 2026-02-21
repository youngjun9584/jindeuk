import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: '공지사항 - 진덕건설',
  description: '진덕건설 소식 및 공지사항',
}

export default function NoticesPage() {
  const notices = [
    {
      id: 1,
      category: '공지',
      title: '2024년 설 연휴 운영 안내',
      date: '2024.02.01',
      views: 245,
      important: true,
    },
    {
      id: 2,
      category: '채용',
      title: '2024년 상반기 경력직 채용 공고',
      date: '2024.01.28',
      views: 892,
      important: true,
    },
    {
      id: 3,
      category: '수상',
      title: '건설안전대상 수상 소식',
      date: '2024.01.25',
      views: 456,
      important: false,
    },
    {
      id: 4,
      category: '공지',
      title: 'ISO 인증 갱신 완료 안내',
      date: '2024.01.20',
      views: 328,
      important: false,
    },
    {
      id: 5,
      category: '사업',
      title: '○○ 아파트 신축공사 착공식 개최',
      date: '2024.01.15',
      views: 567,
      important: false,
    },
    {
      id: 6,
      category: '수상',
      title: '품질경영 우수기업 선정',
      date: '2024.01.10',
      views: 412,
      important: false,
    },
    {
      id: 7,
      category: '공지',
      title: '홈페이지 리뉴얼 안내',
      date: '2024.01.05',
      views: 689,
      important: false,
    },
    {
      id: 8,
      category: '사업',
      title: '△△ 터널 공사 준공',
      date: '2023.12.28',
      views: 523,
      important: false,
    },
    {
      id: 9,
      category: '채용',
      title: '2024년 신입사원 모집 안내',
      date: '2023.12.20',
      views: 1234,
      important: false,
    },
    {
      id: 10,
      category: '공지',
      title: '2024년 신년사',
      date: '2023.12.29',
      views: 876,
      important: false,
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '공지':
        return 'bg-blue-100 text-blue-700'
      case '채용':
        return 'bg-green-100 text-green-700'
      case '수상':
        return 'bg-yellow-100 text-yellow-700'
      case '사업':
        return 'bg-purple-100 text-purple-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <Container>
            <h1 className="text-4xl font-bold mb-4">공지사항</h1>
            <p className="text-lg text-blue-100">진덕건설의 새로운 소식을 전해드립니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  총 <span className="font-bold text-blue-600">{notices.length}</span>개의 게시물
                </p>
                <div className="flex gap-2">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>전체</option>
                    <option>공지</option>
                    <option>채용</option>
                    <option>수상</option>
                    <option>사업</option>
                  </select>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="hidden md:grid md:grid-cols-12 gap-4 bg-gray-50 px-6 py-4 font-medium text-gray-700 text-sm border-b border-gray-200">
                  <div className="col-span-1">번호</div>
                  <div className="col-span-2">분류</div>
                  <div className="col-span-6">제목</div>
                  <div className="col-span-2">등록일</div>
                  <div className="col-span-1">조회</div>
                </div>

                <div className="divide-y divide-gray-200">
                  {notices.map((notice) => (
                    <div
                      key={notice.id}
                      className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        <div className="hidden md:block col-span-1">
                          {notice.important ? (
                            <span className="text-red-600 font-bold">공지</span>
                          ) : (
                            <span className="text-gray-600">{notice.id}</span>
                          )}
                        </div>

                        <div className="col-span-1 md:col-span-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(notice.category)}`}>
                            {notice.category}
                          </span>
                        </div>

                        <div className="col-span-1 md:col-span-6">
                          <h3 className={`font-medium ${notice.important ? 'text-red-600' : 'text-gray-900'}`}>
                            {notice.title}
                            {notice.important && (
                              <span className="ml-2 px-2 py-0.5 bg-red-600 text-white text-xs rounded">N</span>
                            )}
                          </h3>
                        </div>

                        <div className="col-span-1 md:col-span-2 text-sm text-gray-600">
                          {notice.date}
                        </div>

                        <div className="hidden md:block col-span-1 text-sm text-gray-600">
                          {notice.views}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    이전
                  </button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`px-4 py-2 rounded-lg ${
                        page === 1
                          ? 'bg-blue-600 text-white'
                          : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    다음
                  </button>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">📢 공지사항 알림 구독</h3>
                <p className="text-sm text-gray-700 mb-4">
                  진덕건설의 최신 소식을 이메일로 받아보세요.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="이메일 주소를 입력하세요"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    구독하기
                  </button>
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
