'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const fields = [
  {
    id: 1,
    title: '주거시설 건설',
    description: '아파트, 주상복합, 오피스텔 등 다양한 주거 공간 건설',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: '상업시설 건설',
    description: '쇼핑몰, 오피스빌딩, 호텔 등 상업용 건축물 시공',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: '교량 및 도로',
    description: '대형 교량, 고속도로, 도시 간선도로 건설',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    id: 4,
    title: '터널 공사',
    description: '산악 터널, 지하차도, 해저 터널 등 전문 터널 시공',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: '리모델링',
    description: '노후 건축물 리모델링 및 재건축 사업',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    id: 6,
    title: '해외 프로젝트',
    description: '동남아, 중동 지역 건설 프로젝트 수주 및 시공',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    id: 7,
    title: '스마트 건설',
    description: 'BIM, IoT 기반 스마트 건설 기술 적용',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 8,
    title: '친환경 건축',
    description: '제로에너지 건축물, 녹색건축 인증 프로젝트',
    gradient: 'from-teal-500 to-green-500',
  },
]

export default function SpecialFieldGrid() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Special Field
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            진덕건설은 폭넓고 다채로운 분야에서,<br />
            최고의 기술력과 품질로 고객의 꿈을 실현합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[320px] rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${field.gradient}`} />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {field.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {field.description}
                  </p>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
