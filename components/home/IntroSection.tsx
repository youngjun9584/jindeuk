'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function IntroSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            혁신과 신뢰로<br />
            더 나은 미래 공간을 창조합니다.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            진덕건설
          </p>
          <Button variant="outline" size="lg" href="#business">
            View More
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
