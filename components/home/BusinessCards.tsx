'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const businesses = [
  {
    id: 1,
    title: '토목공사',
    description: '도로, 교량, 터널 등\n사회 기반 시설을 건설하며\n국가 인프라 발전에 기여합니다.',
    tags: ['#단지조성공', '#건축토공', '#흙막이가시설', '#보링그라우팅', '#구조물공'],
    gradient: 'from-blue-500 to-blue-700',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
  },
  {
    id: 2,
    title: '건축공사',
    description: '주거, 상업, 업무시설 등\n다양한 건축물을 시공하며\n최고의 품질을 제공합니다.',
    tags: ['#아파트', '#오피스빌딩', '#상업시설', '#공공건축', '#리모델링'],
    gradient: 'from-green-500 to-green-700',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    id: 3,
    title: '플랜트공사',
    description: '환경 및 산업 플랜트\n첨단 기술력으로\n지속가능한 미래를 만듭니다.',
    tags: ['#환경플랜트', '#폐기물처리', '#하수처리', '#산업설비', '#상하수도공'],
    gradient: 'from-purple-500 to-purple-700',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
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
            주요 사업영역
          </h2>
          <p className="text-lg text-gray-600">
            진덕건설은 토목, 건축, 플랜트 분야에서 전문적인 시공 서비스를 제공합니다.
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
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${business.image})` }}
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${business.gradient} opacity-80`} />
                
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
