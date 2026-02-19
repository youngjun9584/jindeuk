'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const partners = [
  { id: 1, name: 'Partner 1' },
  { id: 2, name: 'Partner 2' },
  { id: 3, name: 'Partner 3' },
  { id: 4, name: 'Partner 4' },
  { id: 5, name: 'Partner 5' },
  { id: 6, name: 'Partner 6' },
  { id: 7, name: 'Partner 7' },
  { id: 8, name: 'Partner 8' },
  { id: 9, name: 'Partner 9' },
  { id: 10, name: 'Partner 10' },
]

export default function PartnersMarquee() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our partners
          </h2>
          <p className="text-lg text-gray-600">
            진덕건설은 협력업체와 상생하며,<br />
            신뢰와 품질을 바탕으로 함께 성장합니다.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Content */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
              className="flex space-x-12 flex-shrink-0"
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-[160px] h-[100px] bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg" />
                    <span className="text-xs text-gray-600">{partner.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition-all duration-300">
            View More
          </button>
        </div>
      </Container>
    </section>
  )
}
