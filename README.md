# 진덕건설 웹사이트

Next.js 14 App Router + TypeScript + Tailwind CSS로 구현한 진덕건설 공식 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **UI**: React 18

## 주요 기능

### 1. 글로벌 헤더
- 로고 및 네비게이션 메뉴 (회사소개, 사업분야, IR, Contact)
- 다국어 선택 UI (KOR/ENG/JPN/CHN)
- 전체화면 Site Map 오버레이 메뉴

### 2. Hero 섹션
- 자동 전환되는 풀스크린 슬라이더 (2개 슬라이드)
- 좌/우 네비게이션 버튼
- 페이지 인디케이터
- 애니메이션이 적용된 "scroll down" 가이드

### 3. Intro 섹션
- 회사 소개 메시지
- View More 버튼

### 4. Our Business 섹션
- 3개의 비즈니스 카드
  - 건축사업 (아파트, 오피스텔, 상업시설)
  - 토목사업 (도로, 교량, 터널)
  - 플랜트사업 (산업 플랜트, 환경시설)
- 각 카드: 타이틀, 설명, 해시태그, hover 효과

### 5. Brand Value & Vision 섹션
- 3개 탭 UI (Customer/Global/Innovation)
- 탭 전환 시 컨텐츠 애니메이션
- 브랜드 소개 영상 placeholder

### 6. Our Special Field 섹션
- 8개의 특화 분야 카드 그리드
- 반응형 레이아웃 (데스크톱 4열, 태블릿 2열, 모바일 1열)
- 각 카드: 그라데이션 배경, hover 효과

### 7. Partners 섹션
- 파트너 로고 마키 애니메이션 (무한 루프)
- 그라데이션 오버레이 효과

### 8. Global Network
- 3개 글로벌 네트워크 소개 (한국-진덕개발, 베트남-JINDUK Vietnam, UAE-JINDUK Middle East)
- 각 지역별 사업 내용 및 상세 정보

### 9. ESG (Trust promise)
- Environment, Social, Governance 3개 카드
- 지속가능경영 메시지

### 10. News
- 최신 뉴스 및 보도자료 (5개)
- 카드형 레이아웃

### 11. Footer
- 회사 정보 및 연락처
- 빠른 링크 (회사소개, 사업분야, 더 알아보기)
- 법적 링크 (개인정보처리방침, 이용약관)

## 설치 및 실행

### 1. 의존성 설치

\`\`\`bash
npm install
\`\`\`

### 2. 개발 서버 실행

\`\`\`bash
npm run dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 프로덕션 빌드

\`\`\`bash
npm run build
npm start
\`\`\`

## 프로젝트 구조

\`\`\`
source/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈 페이지
│   └── globals.css         # 전역 스타일
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # 글로벌 헤더
│   │   └── Footer.tsx      # 글로벌 푸터
│   ├── home/
│   │   ├── HeroSlider.tsx        # 히어로 슬라이더
│   │   ├── IntroSection.tsx      # 인트로 섹션
│   │   ├── BusinessCards.tsx     # 비즈니스 카드
│   │   ├── BrandValueTabs.tsx    # 브랜드 가치 탭
│   │   ├── SpecialFieldGrid.tsx  # 특화 분야 그리드
│   │   └── PartnersMarquee.tsx   # 파트너 마키
│   └── ui/
│       ├── Button.tsx      # 버튼 컴포넌트
│       └── Container.tsx   # 컨테이너 컴포넌트
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
\`\`\`

## 반응형 디자인

- **모바일**: < 768px
- **태블릿**: 768px - 1024px
- **데스크톱**: > 1024px

모든 섹션은 다양한 화면 크기에 최적화되어 있습니다.

## 애니메이션

Framer Motion을 사용한 부드러운 애니메이션:
- 페이드 인/아웃
- 슬라이드 전환
- 스크롤 트리거 애니메이션
- 호버 효과

## 접근성

- 시맨틱 HTML 사용
- ARIA 속성 적용
- 키보드 네비게이션 지원
- 적절한 색상 대비

## 🏢 회사 정보

- **회사명**: 주식회사 진덕건설 (JINDUK)
- **업종**: 종합건설업
- **사업분야**: 건축, 토목, 플랜트, 해외사업
- **설립**: 1995년
- **비전**: 최고의 품질로 미래 공간을 창조하는 글로벌 건설 기업

## 주의사항

- 이미지는 모두 placeholder(그라데이션/단색 블록)로 대체되었습니다
- 실제 이미지를 사용하려면 `public/images` 폴더에 이미지를 추가하고 컴포넌트의 경로를 수정하세요
- 영상 컨텐츠도 placeholder로 구현되어 있습니다

## 라이선스

이 프로젝트는 진덕건설 공식 웹사이트입니다.
