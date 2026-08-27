import React from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-500 border-t border-gray-200 pt-16 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="mb-5">
              <img
                src="/logo.png"
                alt="진덕건설 JINDUK 로고"
                className="h-9 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-5 text-gray-600">
              신뢰와 혁신으로 더 나은 미래 공간을 창조합니다
            </p>
            <div className="text-xs space-y-1.5 text-gray-500">
              <p>대표전화 02-1234-5678&nbsp;&nbsp;|&nbsp;&nbsp;팩스 02-1234-5679</p>
              <p>이메일 info@jinduk.com</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-sm tracking-wide">회사소개</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/company/ceo" className="hover:text-primary transition-colors">CEO 인사말</Link></li>
              <li><Link href="/company/philosophy" className="hover:text-primary transition-colors">경영이념</Link></li>
              <li><Link href="/company/history" className="hover:text-primary transition-colors">연혁</Link></li>
              <li><Link href="/company/organization" className="hover:text-primary transition-colors">조직도</Link></li>
              <li><Link href="/company/partners" className="hover:text-primary transition-colors">관계회사</Link></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-sm tracking-wide">사업영역</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/business/services" className="hover:text-primary transition-colors">토목공사</Link></li>
              <li><Link href="/business/services" className="hover:text-primary transition-colors">건축공사</Link></li>
              <li><Link href="/business/services" className="hover:text-primary transition-colors">플랜트공사</Link></li>
              <li><Link href="/business/ongoing" className="hover:text-primary transition-colors">진행현장</Link></li>
              <li><Link href="/business/completed" className="hover:text-primary transition-colors">완료현장</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-sm tracking-wide">고객지원</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/pr" className="hover:text-primary transition-colors">홍보센터</Link></li>
              <li><Link href="/technology" className="hover:text-primary transition-colors">기술품질</Link></li>
              <li><Link href="/customer/careers" className="hover:text-primary transition-colors">채용정보</Link></li>
              <li><Link href="/customer/notices" className="hover:text-primary transition-colors">공지사항</Link></li>
              <li><Link href="/customer/contact" className="hover:text-primary transition-colors">찾아오시는 길</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Company Details */}
            <div className="text-xs space-y-1 text-gray-500">
              <p className="font-semibold text-gray-700">주식회사 진덕건설</p>
              <p>대표이사 홍길동&nbsp;&nbsp;|&nbsp;&nbsp;사업자등록번호 123-45-67890</p>
              <p>서울특별시 강남구 테헤란로 123</p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center justify-start md:justify-end space-x-4 text-xs text-gray-500">
              <Link href="/" className="hover:text-primary transition-colors">개인정보처리방침</Link>
              <span className="text-gray-300">|</span>
              <Link href="/" className="hover:text-primary transition-colors">이용약관</Link>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-400 text-center md:text-left">
            <p>© 2026 JINDUK CONSTRUCTION. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
