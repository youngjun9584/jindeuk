'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const newsItems = [
  {
    id: 1,
    title: '2024년 설 연휴 운영 안내',
    date: '2024.02.01',
    category: '공지',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 2,
    title: '2024년 상반기 경력직 채용 공고',
    date: '2024.01.28',
    category: '채용',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
    gradient: 'from-green-400 to-green-600',
  },
  {
    id: 3,
    title: '건설안전대상 수상 소식',
    date: '2024.01.25',
    category: '수상',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80',
    gradient: 'from-emerald-400 to-emerald-600',
  },
  {
    id: 4,
    title: '○○ 아파트 신축공사 착공식 개최',
    date: '2024.01.15',
    category: '사업',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    id: 5,
    title: '품질경영 우수기업 선정',
    date: '2024.01.10',
    category: '수상',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    gradient: 'from-orange-400 to-orange-600',
  },
]

export default function NewsSection() {
  return (
    <section id="news" className="py-20 md:py-32 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            새로운 소식
          </h2>
          <p className="text-lg text-gray-600">
            진덕건설의 최신 소식과 다양한 프로젝트 정보를 확인하세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${news.image})` }}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                    {news.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" href="/customer/notices">
            전체 소식 보기
          </Button>
        </div>
      </Container>
    </section>
  )
}
