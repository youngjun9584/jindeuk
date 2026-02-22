'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'

const tabs = [
  {
    id: 'technology',
    label: 'Technology',
    title: '기술력',
    content: '진덕건설은 160명 이상의 전문 기술 인력과 180대 이상의 최신 장비를 보유하고 있습니다.\n오랜 경험과 노하우를 바탕으로 모든 프로젝트에서 최상의 기술력을 발휘하며,\n지속적인 연구개발을 통해 건설 기술의 혁신을 이끌어갑니다.',
  },
  {
    id: 'quality',
    label: 'Quality',
    title: '품질 관리',
    content: '진덕건설은 ISO 9001 품질경영시스템 인증을 통해 체계적인 품질 관리를 실천합니다.\n설계부터 시공, 준공까지 전 과정에서 엄격한 품질 기준을 적용하며,\n고객에게 최상의 품질을 제공하기 위해 최선을 다합니다.',
  },
  {
    id: 'safety',
    label: 'Safety',
    title: '안전 최우선',
    content: '진덕건설은 안전을 모든 경영활동의 최우선 가치로 삼습니다.\nKOSHA-MS 및 ISO 45001 인증을 통한 체계적인 안전관리 시스템을 운영하며,\n무재해 현장 구현을 목표로 모든 임직원이 안전하게 일할 수 있는 환경을 만듭니다.',
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
                진덕건설의<br />핵심 경쟁력
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
