"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const subsidiaries = [
  {
    id: 1,
    country: "Projects",
    countryKo: "200+",
    logo: "누적 프로젝트",
    description:
      "다양한 건설 프로젝트를 성공적으로 완수하며\n토목, 건축, 플랜트 분야에서 풍부한 경험을 축적했습니다.",
    gradient: "from-blue-600 to-blue-900",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
  },
  {
    id: 2,
    country: "On-time",
    countryKo: "99%",
    logo: "납기 준수율",
    description:
      "체계적인 공정 관리와 효율적인 시공으로\n납기를 철저히 준수하여 고객 신뢰를 확보합니다.",
    gradient: "from-slate-700 to-blue-950",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    id: 3,
    country: "Satisfaction",
    countryKo: "98%",
    logo: "고객 만족도",
    description:
      "최상의 품질과 서비스로 고객 만족을 실현하며\n장기적인 신뢰 관계를 구축하고 있습니다.",
    gradient: "from-blue-800 to-slate-900",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
];

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
          <p className="text-sm font-semibold tracking-[0.25em] text-white/60 mb-4 uppercase">
            Track Record
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            시공 실적
          </h2>
          <p className="text-lg text-gray-300">
            진덕건설의 우수한 시공 실적
            <br />
            다양한 프로젝트를 성공적으로 완수하며 신뢰를 쌓아왔습니다.
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
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${sub.image})` }}
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${sub.gradient} opacity-80`}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <div className="mb-4">
                      {/* Country Flag Placeholder */}
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-3" />
                      <span className="text-sm opacity-80">{sub.country}</span>
                      <h3 className="text-3xl font-bold mt-1">
                        {sub.countryKo}
                      </h3>
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
  );
}
