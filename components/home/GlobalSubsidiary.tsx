'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const subsidiaries = [
  {
    id: 1,
    country: 'Korea',
    countryKo: '한국',
    logo: '진덕개발',
    description: '부동산 개발 및 투자 전문 기업으로, 주거 및 상업용 부동산 개발을 통해 새로운 가치를 창출합니다.',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    country: 'Vietnam',
    countryKo: '베트남',
    logo: 'JINDUK Vietnam',
    description: '베트남 하노이에 위치한 현지 법인으로 동남아시아 건설 시장에서 빠르게 성장하고 있습니다.',
    gradient: 'from-red-600 to-red-800',
  },
  {
    id: 3,
    country: 'UAE',
    countryKo: '아랍에미리트',
    logo: 'JINDUK Middle East',
    description: 'UAE 두바이를 거점으로 중동 지역 건설 프로젝트를 수행하며 글로벌 역량을 강화하고 있습니다.',
    gradient: 'from-amber-600 to-amber-800',
  },
]

export default function GlobalSubsidiary() {
  return (
    <section id="global" className="py-20 md:py-32 bg-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GLOBAL NETWORK
          </h2>
          <p className="text-lg text-gray-300">
            진덕건설의 글로벌 네트워크<br />
            전 세계를 무대로 건설의 새로운 미래를 개척합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subsidiaries.map((sub, index) => (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sub.gradient}`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <div className="mb-4">
                      {/* Country Flag Placeholder */}
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-3" />
                      <span className="text-sm opacity-80">{sub.country}</span>
                      <h3 className="text-3xl font-bold mt-1">{sub.countryKo}</h3>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold mb-3">{sub.logo}</h4>
                    <p className="text-sm leading-relaxed opacity-90">
                      {sub.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
