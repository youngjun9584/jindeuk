import React from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="JINDUK" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              혁신과 신뢰로 더 나은 미래 공간을 창조합니다
            </p>
            <div className="text-xs space-y-1">
              <p>대표전화: 02-1234-5678</p>
              <p>이메일: info@jinduk.com</p>
              <p>팩스: 02-1234-5679</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">회사소개</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">인사말</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">비전 & 미션</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">연혁</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">오시는 길</Link></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-white font-semibold mb-4">사업분야</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/business" className="hover:text-white transition-colors">엘리트 학생복</Link></li>
              <li><Link href="/business" className="hover:text-white transition-colors">윌비 플레이</Link></li>
              <li><Link href="/business" className="hover:text-white transition-colors">윌비랩</Link></li>
              <li><Link href="/business" className="hover:text-white transition-colors">워크웨어</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">더 알아보기</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sustainability" className="hover:text-white transition-colors">지속가능경영</Link></li>
              <li><Link href="/ir" className="hover:text-white transition-colors">IR</Link></li>
              <li><Link href="/media" className="hover:text-white transition-colors">홍보센터</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">글로벌 네트워크</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Company Details */}
            <div className="text-xs space-y-1">
              <p>주식회사 진덕건설</p>
              <p>대표이사: 홍길동 | 사업자등록번호: 123-45-67890</p>
              <p>주소: 서울특별시 강남구 테헤란로 123</p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center justify-start md:justify-end space-x-4 text-xs">
              <Link href="/" className="hover:text-white transition-colors">개인정보처리방침</Link>
              <span>|</span>
              <Link href="/" className="hover:text-white transition-colors">이용약관</Link>
            </div>
          </div>

          <div className="mt-4 text-xs text-center md:text-left">
            <p>© 2026 JINDUK. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
