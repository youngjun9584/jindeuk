import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 로고 아이콘에서 추출한 진덕건설 브랜드 남색
        primary: {
          DEFAULT: '#1B2877',
          light: '#1C43A8',
          dark: '#101A4D',
        },
        secondary: {
          DEFAULT: '#1C43A8',
          light: '#3655B4',
        },
        // 기존 페이지에서 쓰이던 Tailwind 기본 blue 팔레트를
        // 브랜드 남색 톤으로 교체 (전 페이지 강조색이 로고와 통일됨)
        blue: {
          50: '#EEF1FA',
          100: '#DCE4F6',
          200: '#B7C7EC',
          300: '#8CA3DD',
          400: '#5C77C9',
          500: '#34519F',
          600: '#1C43A8',
          700: '#1B2E82',
          800: '#182568',
          900: '#141B4D',
          950: '#0B1130',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', 'Pretendard', 'Apple SD Gothic Neo', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
export default config
