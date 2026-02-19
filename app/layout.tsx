import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '진덕건설 - JINDUK',
  description: '혁신과 신뢰로 더 나은 미래 공간을 창조합니다',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  )
}
