'use client'
import { useState } from 'react'

const units = [
  {
    type: 'شقق',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    area: '100 - 250 م²',
    price: 'من 2.5 مليون جنيه',
    badge: 'الأكثر طلباً',
    badgeColor: 'bg-gold-500 text-black',
  },
  {
    type: 'تاون هاوس',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    area: '200 - 350 م²',
    price: 'من 5 مليون جنيه',
    badge: 'عرض محدود',
    badgeColor: 'bg-red-500 text-white',
  },
  {
    type: 'فيلات',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    area: '400 - 800 م²',
    price: 'من 10 مليون جنيه',
    badge: 'بريميوم',
    badgeColor: 'bg-white/10 text-white border border-white/20',
  },
]

export default function GallerySection() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-500/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-semibold">وحداتنا</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            اختر <span className="gold-gradient">وحدتك المثالية</span>
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          {units.map((unit, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? 'gold-gradient-bg text-black shadow-lg shadow-gold-500/30'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
              }`}
            >
              {unit.type}
            </button>
          ))}
        </div>

        {/* Unit Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-auto lg:h-[480px]">
            <img
              src={units[active].image}
              alt={units[active].type}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Badge */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${units[active].badgeColor}`}>
              {units[active].badge}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-4xl font-bold text-white mb-2">{units[active].type}</h3>
              <div className="gold-divider" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center text-xl">📐</div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">المساحة</div>
                  <div className="text-white font-semibold">{units[active].area}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center text-xl">💰</div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">السعر يبدأ من</div>
                  <div className="text-gold-500 font-bold text-lg">{units[active].price}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center text-xl">📅</div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">نظام الدفع</div>
                  <div className="text-white font-semibold">مقدم 10% — تقسيط حتى 10 سنوات</div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="cta-btn block text-center py-4 rounded-2xl font-black text-base"
            >
              <span>اطلب تفاصيل هذه الوحدة</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
