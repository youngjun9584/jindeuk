'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'

const tabs = [
  {
    id: 'customer',
    label: 'Quality',
    title: '품질 우선',
    content: '진덕건설은 최고의 품질을 최우선으로 생각합니다.\n안전하고 견고한 건축물을 통해 고객의 만족과 신뢰를 얻고, 품질 경영을 통해 지속 가능한 가치를 창출합니다.',
  },
  {
    id: 'global',
    label: 'Safety',
    title: '안전 경영',
    content: '진덕건설은 안전을 가장 중요한 가치로 삼습니다. 무재해 사업장 구현을 목표로 체계적인 안전관리 시스템을 운영하며, 모든 임직원과 협력업체가 안전한 환경에서 일할 수 있도록 최선을 다합니다.',
  },
  {
    id: 'innovation',
    label: 'Innovation',
    title: '혁신과 기술',
    content: '진덕건설은 첨단 건설 기술과 혁신을 바탕으로 합니다.\nBIM, 스마트 건설 등 최신 기술을 도입하고,\n변화하는 건설 환경에 능동적으로 대응하며 지속적으로 성장합니다.',
  },
]

export default function BrandValueTabs() {
  const [activeTab, setActiveTab] = useState('customer')

  const activeContent = tabs.find(tab => tab.id === activeTab)

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title and Tabs */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                OUR Brand Value<br />& Vision
              </h2>

              <div className="space-y-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-2xl font-semibold">{tab.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeContent && (
                <motion.div
                  key={activeContent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl -z-10" />
                  
                  <div className="p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {activeContent.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                      {activeContent.content}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            No.1 Construction Company
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            우리는 안전과 지속 성장을 추구하는 기업, 진덕건설입니다.<br />
            고객에게 신뢰와 만족을 주는 최고 품질의 건축물을 제공하며,<br />
            더 나은 미래 공간을 창조합니다.
          </p>
          
          {/* Video Placeholder */}
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-sm">영상 속에 담긴 진덕건설의 브랜드 가치와 비전을 경험해보세요</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
