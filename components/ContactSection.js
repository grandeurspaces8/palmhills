import LeadForm from './LeadForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-semibold">تواصل معنا</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            ابدأ رحلتك <span className="gold-gradient">معنا اليوم</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-white/50 max-w-xl mx-auto">
            فريق مبيعاتنا جاهز للإجابة على جميع استفساراتك وتقديم أفضل العروض
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="text-4xl mb-3">📞</div>
              <div className="text-white/40 text-xs mb-1">اتصل بنا</div>
              <div className="text-white font-bold text-xl">19XXX</div>
              <div className="text-white/50 text-sm mt-1">من 9 صباحاً حتى 10 مساءً</div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="text-4xl mb-3">💬</div>
              <div className="text-white/40 text-xs mb-1">واتساب</div>
              <div className="text-white font-bold text-xl">+20 1XX XXX XXXX</div>
              <div className="text-white/50 text-sm mt-1">رد سريع خلال دقائق</div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="text-4xl mb-3">🏢</div>
              <div className="text-white/40 text-xs mb-1">مكتب المبيعات</div>
              <div className="text-white font-semibold text-sm leading-relaxed">
                طريق مصفى المحروسة<br />
                السادس من أكتوبر، الجيزة
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
