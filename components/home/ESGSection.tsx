'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const esgItems = [
  {
    id: 1,
    title: 'Environment',
    subtitle: '환경',
    description: '환경경영과 안전·보건경영을 통해 기업의 건강,\n사회의 건강, 그리고 지구의 건강을 지킵니다.',
    gradient: 'from-green-500 to-emerald-600',
    icon: '🌱',
  },
  {
    id: 2,
    title: 'Social',
    subtitle: '사회',
    description: '사회의 일원으로서 고객, 임직원,\n지역사회에 대한 사회적 책임을 다합니다.',
    gradient: 'from-blue-500 to-cyan-600',
    icon: '👥',
  },
  {
    id: 3,
    title: 'Governance',
    subtitle: '지배구조',
    description: '책임경영과 윤리경영을 통해 주주 및\n이해관계자의 권익 보호에 최선을 다합니다.',
    gradient: 'from-purple-500 to-indigo-600',
    icon: '⚖️',
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
            Trust promise
          </h2>
          <p className="text-lg text-gray-600">
            진덕건설은 지속가능경영을 위해 ESG 전략을 수립하여 실천해나가고 있습니다.
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
                {/* Background Image Placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                
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
