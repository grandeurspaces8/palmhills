'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-dark-900/95 backdrop-blur-xl shadow-2xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center">
            <span className="text-black font-black text-sm">PH</span>
          </div>
          <div>
            <div className="text-white font-bold text-lg leading-none tracking-wide">BADYA</div>
            <div className="text-xs text-gold-500 tracking-[0.2em] uppercase">Palm Hills</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['المشروع', 'الوحدات', 'الموقع', 'اتصل بنا'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/70 hover:text-gold-500 text-sm transition-colors duration-300 tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="cta-btn hidden md:block px-6 py-2.5 rounded-full text-sm font-bold"
        >
          <span>احجز الآن</span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
        >
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-white my-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-800/98 backdrop-blur-xl border-t border-gold-500/20 px-6 py-4">
          {['المشروع', 'الوحدات', 'الموقع', 'اتصل بنا'].map((item) => (
            <a key={item} href="#" className="block py-3 text-white/80 border-b border-white/5 text-sm">
              {item}
            </a>
          ))}
          <a href="#contact" className="cta-btn block mt-4 text-center px-6 py-3 rounded-full text-sm font-bold">
            <span>احجز الآن</span>
          </a>
        </div>
      )}
    </nav>
  )
}
