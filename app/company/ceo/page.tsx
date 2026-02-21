import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'CEO 인사말 - 진덕건설',
  description: '진덕건설 대표이사 인사말',
}

export default function CEOPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <Container>
            <h1 className="text-4xl font-bold mb-4">CEO 인사말</h1>
            <p className="text-lg text-blue-100">진덕건설을 찾아주신 여러분을 환영합니다</p>
          </Container>
        </div>

        <Container>
          <div className="py-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm">CEO 사진</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">대표이사 성명</h2>
                <p className="text-gray-600">진덕건설 대표이사</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  안녕하십니까. 진덕건설 대표이사입니다.
                </p>
                
                <p className="leading-relaxed text-gray-700 mb-6">
                  진덕건설은 건설업계에서 혁신과 신뢰를 바탕으로 고품질의 건설 서비스를 제공하며 
                  끊임없이 성장해 왔습니다. 저희는 단순히 건물을 짓는 것이 아니라, 
                  고객의 꿈과 비전을 현실로 만드는 파트너로서의 역할을 다하고자 노력하고 있습니다.
                </p>

                <p className="leading-relaxed text-gray-700 mb-6">
                  오늘날의 건설업은 단순한 시공 기술을 넘어 환경, 안전, 품질 모든 면에서 
                  최고 수준의 전문성이 요구됩니다. 진덕건설은 첨단 기술력과 풍부한 경험을 바탕으로 
                  모든 프로젝트에서 최상의 결과를 제공하기 위해 최선을 다하고 있습니다.
                </p>

                <p className="leading-relaxed text-gray-700 mb-6">
                  또한 저희는 안전을 최우선 가치로 삼아 무재해 현장을 목표로 하며, 
                  지속가능한 발전을 위해 환경친화적인 시공 방법을 적극 도입하고 있습니다.
                </p>

                <p className="leading-relaxed text-gray-700 mb-6">
                  앞으로도 진덕건설은 고객 여러분의 신뢰에 보답하고자 더욱 정진하며, 
                  대한민국 건설업계를 선도하는 기업으로 성장해 나가겠습니다.
                </p>

                <p className="leading-relaxed text-gray-700 mb-6">
                  감사합니다.
                </p>

                <div className="mt-12 text-right">
                  <p className="text-xl font-bold text-gray-900">진덕건설 대표이사</p>
                  <p className="text-2xl font-bold text-blue-600 mt-2">성명</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
