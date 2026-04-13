'use client'
import { useEffect, useRef } from 'react'

const features = [
  {
    icon: '🏙️',
    title: 'مدينة ذكية متكاملة',
    desc: 'بادية هي أول مدينة إدراكية في مصر، مصممة بأحدث تقنيات الذكاء الاصطناعي لإدارة الموارد والخدمات.',
  },
  {
    icon: '🏡',
    title: 'وحدات سكنية متنوعة',
    desc: 'شقق وتاون هاوس وفيلات بتصاميم معمارية عالمية، تناسب مختلف الأذواق والميزانيات.',
  },
  {
    icon: '🛍️',
    title: 'مراكز تجارية وترفيهية',
    desc: 'مول تجاري ضخم، مطاعم ومقاهٍ عالمية، ومرافق ترفيهية لجميع أفراد العائلة.',
  },
  {
    icon: '🎓',
    title: 'مؤسسات تعليمية دولية',
    desc: 'مدارس ورياض أطفال بمناهج دولية وجامعة في قلب المدينة.',
  },
  {
    icon: '🏥',
    title: 'منظومة صحية متكاملة',
    desc: 'مستشفى ومراكز طبية ومستوصفات بأعلى المعايير للرعاية الصحية الشاملة.',
  },
  {
    icon: '⚡',
    title: 'طاقة نظيفة ومستدامة',
    desc: 'اعتماد جزئي على الطاقة الشمسية وإدارة ذكية للموارد لمستقبل أكثر استدامة.',
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-semibold">مميزات المشروع</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            لماذا <span className="gold-gradient">بادية؟</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            مشروع بادية ليس مجرد سكن — إنه أسلوب حياة متكامل يجمع بين الفخامة والتقنية والطبيعة.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-2xl p-6 hover:border-gold-500/40 transition-all duration-500 group hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-2xl mb-4 group-hover:bg-gold-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
