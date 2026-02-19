/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",       // 정적 export 활성화
  images: {
    unoptimized: true,   // 이미지 최적화 비활성화 (정적 호스팅용)
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
}

module.exports = nextConfig
