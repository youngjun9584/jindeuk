'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const businesses = [
  {
    id: 1,
    title: '건축사업',
    description: '아파트, 오피스텔, 상업시설 등\n다양한 건축 프로젝트를 성공적으로 수행하며\n최고의 품질과 안전을 보장합니다.',
    tags: ['#아파트', '#오피스텔', '#상업시설', '#주거단지', '#공공건축'],
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    title: '토목사업',
    description: '도로, 교량, 터널 등\n사회 기반 시설 건설을 통해\n국가 발전에 기여합니다.',
    tags: ['#도로', '#교량', '#터널', '#항만', '#철도'],
    gradient: 'from-green-500 to-green-700',
  },
  {
    id: 3,
    title: '플랜트사업',
    description: '산업 플랜트 설계 및 시공\n첨단 기술력으로 산업 발전을\n선도합니다.',
    tags: ['#발전소', '#정수시설', '#폐기물처리', '#산업플랜트'],
    gradient: 'from-purple-500 to-purple-700',
  },
]

export default function BusinessCards() {
  return (
    <section id="business" className="py-20 md:py-32 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Business
          </h2>
          <p className="text-lg text-gray-600">
            진덕건설은 다양한 분야에서 최고의 기술력과 품질을 자랑합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${business.gradient}`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{business.title}</h3>
                    <p className="text-sm leading-relaxed whitespace-pre-line opacity-90">
                      {business.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {business.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-white/20 backdrop-blur-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
