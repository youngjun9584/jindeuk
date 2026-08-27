"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const partners = [
  { id: 1, name: "현대건설" },
  { id: 2, name: "삼성물산" },
  { id: 3, name: "GS건설" },
  { id: 4, name: "SK에코플랜트" },
  { id: 5, name: "대림산업" },
  { id: 6, name: "롯데건설" },
  { id: 7, name: "한화건설" },
  { id: 8, name: "포스코건설" },
  { id: 9, name: "한국토지주택공사" },
  { id: 10, name: "한국도로공사" },
];

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
          <p className="text-sm font-semibold tracking-[0.25em] text-primary mb-4 uppercase">
            Our Partners
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            주요 협력사
          </h2>
          <p className="text-lg text-gray-600">
            진덕건설은 대한민국 대표 건설사들과 협력하며,
            <br />
            신뢰를 바탕으로 함께 성장하고 있습니다.
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
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex space-x-12 flex-shrink-0"
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-[180px] h-[100px] bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:shadow-lg hover:border-blue-400 transition-all"
                >
                  <span className="text-sm font-bold text-gray-800">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="/company/partners"
            className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            전체 협력사 보기
          </a>
        </div>
      </Container>
    </section>
  );
}
