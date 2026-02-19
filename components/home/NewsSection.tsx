'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const newsItems = [
  {
    id: 1,
    title: '진덕건설, 강남 재건축 사업 수주',
    date: '2026.02.10',
    image: true,
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 2,
    title: '베트남 하노이 오피스빌딩 프로젝트 착공',
    date: '2026.02.05',
    image: true,
    gradient: 'from-green-400 to-green-600',
  },
  {
    id: 3,
    title: '친환경 건축 기술 개발로 녹색건축 인증 획득',
    date: '2026.01.28',
    image: false,
    gradient: 'from-emerald-400 to-emerald-600',
  },
  {
    id: 4,
    title: 'BIM 기반 스마트 건설 시스템 도입',
    date: '2026.01.20',
    image: true,
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    id: 5,
    title: '2025년 안전대상 수상',
    date: '2026.01.15',
    image: true,
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
            News
          </h2>
          <p className="text-lg text-gray-600">
            최신 소식과 다양한 프로젝트 소식을 확인해보세요.
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
                {/* Image Placeholder */}
                <div className={`relative h-48 bg-gradient-to-br ${news.gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* View More Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                    View More
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
          <Button variant="outline" size="lg" href="/media">
            View More
          </Button>
        </div>
      </Container>
    </section>
  )
}
