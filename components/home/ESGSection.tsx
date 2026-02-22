'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const esgItems = [
  {
    id: 1,
    title: 'Technology',
    subtitle: '기술력',
    description: '160명 이상의 전문 기술 인력과\n180대 이상의 최신 장비로 최고의 기술력을 제공합니다.',
    gradient: 'from-blue-500 to-cyan-600',
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
  },
  {
    id: 2,
    title: 'Quality',
    subtitle: '품질',
    description: 'ISO 9001 인증을 통한 체계적인 품질관리로\n고객에게 최상의 시공 품질을 보장합니다.',
    gradient: 'from-green-500 to-emerald-600',
    icon: '⭐',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
  },
  {
    id: 3,
    title: 'Safety',
    subtitle: '안전',
    description: 'KOSHA-MS 인증 및 무재해 목표로\n모든 작업 현장에서 안전을 최우선으로 합니다.',
    gradient: 'from-red-500 to-orange-600',
    icon: '🛡️',
    image: 'https://images.unsplash.com/photo-1590496793907-4127ce8c5533?w=600&q=80',
  },
]

export default function ESGSection() {
  return (
    <section id="esg" className="py-20 md:py-32 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            핵심 가치
          </h2>
          <p className="text-lg text-gray-600">
            진덕건설은 기술, 품질, 안전을 최우선 가치로 삼아 최고의 건설 서비스를 제공합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {esgItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-75`} />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                  <p className="text-xl font-semibold mb-4 opacity-90">{item.subtitle}</p>
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Symbol */}
                <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
