export default function StatsBar() {
  const stats = [
    { value: '3,000', unit: 'فدان', label: 'إجمالي المساحة' },
    { value: '100K+', unit: '', label: 'ساكن مستهدف' },
    { value: '40%', unit: '', label: 'مساحات خضراء' },
    { value: '20+', unit: 'سنة', label: 'خبرة Palm Hills' },
    { value: '٦', unit: 'أكتوبر', label: 'قلب الموقع' },
  ]

  return (
    <section className="bg-dark-800 border-y border-gold-500/15 relative overflow-hidden">
      {/* Gold line accent */}
      <div className="absolute top-0 left-0 right-0 h-px gold-gradient-bg opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card p-4 text-center rounded-2xl"
            >
              <div className="text-3xl font-black text-white leading-none">
                <span className="gold-gradient">{stat.value}</span>
                {stat.unit && (
                  <span className="text-sm text-white/50 mr-1">{stat.unit}</span>
                )}
              </div>
              <div className="text-white/50 text-xs mt-1.5 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
