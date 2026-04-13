'use client'
import { useState } from 'react'
import LeadForm from './LeadForm'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center noise-overlay overflow-hidden"
      style={{
        background: `
          linear-gradient(to left, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.85) 100%),
          url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80') center/cover no-repeat
        `
      }}
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent z-0" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Hero Content */}
          <div className="order-2 lg:order-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
              <span className="text-gold-500 text-xs font-semibold tracking-widest uppercase">
                أول مدينة ذكية في مصر
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
              <span className="block">بادية</span>
              <span className="gold-gradient block">بالم هيلز</span>
            </h1>

            <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-6 font-light">
              مدينة أكتوبر الجديدة — 6th of October
            </p>

            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              عيش تجربة حياة استثنائية في مدينة تجمع بين التكنولوجيا والطبيعة والرفاهية،
              على مساحة <strong className="text-gold-500">3,000 فدان</strong> في قلب مصر الجديدة.
            </p>

            {/* Key highlights */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: '🏡', label: 'فيلات وشقق فاخرة' },
                { icon: '🌿', label: '40% مساحات خضراء' },
                { icon: '🎓', label: 'مدارس دولية' },
                { icon: '🏥', label: 'مستشفى ومراكز طبية' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                  <span>{item.icon}</span>
                  <span className="text-white/80 text-xs">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Trust logos */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-8 bg-white/10 rounded flex items-center justify-center">
                <span className="text-white/50 text-xs font-bold">Palm Hills</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <p className="text-white/40 text-xs">شركة رائدة منذ 1997</p>
            </div>
          </div>

          {/* Right: Lead Form */}
          <div className="order-1 lg:order-2 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <LeadForm />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <span className="text-white/30 text-xs tracking-widest">اكتشف أكثر</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold-500/50 to-transparent" />
      </div>
    </section>
  )
}
