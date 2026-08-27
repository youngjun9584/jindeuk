"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

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
          <p className="text-sm font-semibold tracking-[0.25em] text-primary mb-4 uppercase">
            About Jinduk
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            종합적인 시공시스템 기술로
            <br />
            전문건설업계의 선두주자로 성장
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            진덕건설은 신뢰와 혁신을 바탕으로 최고의 품질과 안전을 추구하는
            종합건설기업입니다.
            <br />
            환경을 생각하는 기업, 고객에게 감동을 주는 기업으로 여러분과
            함께합니다.
          </p>
          <Button variant="outline" size="lg" href="/company">
            회사소개 보기
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
