"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const fields = [
  {
    id: 1,
    title: "단지조성공",
    description: "택지 개발 및 산업단지 조성 전문",
    gradient: "from-blue-600 to-blue-900",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80",
  },
  {
    id: 2,
    title: "건축토공",
    description: "터파기, 성토, 정지 등 건축 토공 전문",
    gradient: "from-slate-700 to-blue-950",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    id: 3,
    title: "흙막이가시설공",
    description: "안전한 굴착을 위한 흙막이 및 가시설 시공",
    gradient: "from-blue-800 to-slate-800",
    image:
      "https://images.unsplash.com/photo-1590496793907-4127ce8c5533?w=600&q=80",
  },
  {
    id: 4,
    title: "보링그라우팅공",
    description: "지반 조사 및 보강을 위한 보링·그라우팅",
    gradient: "from-blue-500 to-blue-800",
    image:
      "https://images.unsplash.com/photo-1572981779307-52e0489b3663?w=600&q=80",
  },
  {
    id: 5,
    title: "구조물공",
    description: "교량, 터널 등 각종 콘크리트 구조물 시공",
    gradient: "from-blue-600 to-blue-900",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 6,
    title: "상하수도공",
    description: "상수도 및 하수도 관로 설치 전문",
    gradient: "from-slate-700 to-blue-950",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
  },
  {
    id: 7,
    title: "포장공",
    description: "아스팔트 및 콘크리트 포장 시공",
    gradient: "from-blue-800 to-slate-800",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
  {
    id: 8,
    title: "기초공사",
    description: "파일, 현장타설말뚝 등 건축물 기초 시공",
    gradient: "from-blue-500 to-blue-800",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
  },
];

export default function SpecialFieldGrid() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.25em] text-primary mb-4 uppercase">
            Special Field
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            전문 시공 분야
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            진덕건설만의 기술과 품질이 적용된
            <br />
            다양한 전문 공종 시공 능력을 보유하고 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[320px] rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${field.image})` }}
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${field.gradient} opacity-75`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {field.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {field.description}
                  </p>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
