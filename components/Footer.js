export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-gold-500/15 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center">
              <span className="text-black font-black text-sm">PH</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none">BADYA</div>
              <div className="text-xs text-gold-500 tracking-[0.2em]">Palm Hills</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-gold-500 transition-colors">سياسة الخصوصية</a>
            <span>|</span>
            <a href="#" className="hover:text-gold-500 transition-colors">الشروط والأحكام</a>
            <span>|</span>
            <a href="#" className="hover:text-gold-500 transition-colors">اتصل بنا</a>
          </div>

          {/* Copyright */}
          <div className="text-white/30 text-xs">
            © {new Date().getFullYear()} Palm Hills Developments. جميع الحقوق محفوظة.
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-white/5">
          <p className="text-white/25 text-xs text-center leading-relaxed max-w-3xl mx-auto">
            الأسعار والمعلومات المذكورة استرشادية وقابلة للتغيير. يُرجى التواصل مع فريق المبيعات للحصول على أحدث العروض والتفاصيل الدقيقة.
          </p>
        </div>
      </div>
    </footer>
  )
}
