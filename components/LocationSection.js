const landmarks = [
  { icon: '✈️', name: 'مطار القاهرة الجديد', time: '35 دقيقة' },
  { icon: '🏙️', name: 'ميدان التحرير', time: '30 دقيقة' },
  { icon: '🏛️', name: 'المتحف المصري الكبير', time: '25 دقيقة' },
  { icon: '🛍️', name: 'مول العرب', time: '10 دقائق' },
  { icon: '🏥', name: '57357 مستشفى الأطفال', time: '20 دقيقة' },
  { icon: '🎓', name: 'جامعة أكتوبر', time: '5 دقائق' },
]

export default function LocationSection() {
  return (
    <section className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-semibold">الموقع</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            في <span className="gold-gradient">قلب أكتوبر</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-white/50 max-w-xl mx-auto">
            موقع استراتيجي يربطك بكل ما تحتاجه في دقائق معدودة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <div className="relative rounded-3xl overflow-hidden h-[420px] bg-dark-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55294.50!2d30.9!3d29.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145845f932c41a71%3A0xd7cbe83c3d5f0!2sSixth%20of%20October%20City!5e0!3m2!1sen!2seg!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen=""
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none border border-gold-500/20 rounded-3xl" />
            {/* Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 float-badge">
              <div className="bg-gold-500 text-black font-black text-xs px-3 py-1.5 rounded-full shadow-lg shadow-gold-500/40">
                📍 بادية
              </div>
            </div>
          </div>

          {/* Landmarks */}
          <div className="space-y-4">
            {landmarks.map((lm, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 glass-card rounded-2xl hover:border-gold-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-lg group-hover:bg-gold-500/20 transition-colors">
                    {lm.icon}
                  </div>
                  <span className="text-white/80 text-sm">{lm.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gold-500 font-bold text-sm">{lm.time}</span>
                </div>
              </div>
            ))}

            {/* Address */}
            <div className="p-4 bg-gold-500/10 border border-gold-500/25 rounded-2xl text-center mt-4">
              <p className="text-gold-500 text-sm">
                📍 طريق مصفى المحروسة، السادس من أكتوبر، الجيزة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
