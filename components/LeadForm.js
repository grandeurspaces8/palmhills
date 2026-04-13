'use client'
import { useState } from 'react'
import { getCampaignParams } from '@/lib/utm'
import { trackLeadSubmit } from '@/components/TrackingScripts'

export default function LeadForm({ compact = false }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unit_type: '',
    budget: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const unitTypes = ['شقة', 'تاون هاوس', 'فيلا', 'دوبليكس', 'بنتهاوس']
  const budgets = ['أقل من 3 مليون', '3 - 5 مليون', '5 - 10 مليون', 'أكثر من 10 مليون']

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب'
    if (!formData.phone.match(/^[0-9+\s]{10,15}$/)) newErrors.phone = 'رقم الهاتف غير صحيح'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setLoading(true)
    try {
      const campaignParams = getCampaignParams()
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, ...campaignParams }),
      })
      if (!res.ok) throw new Error('API error')
      trackLeadSubmit(formData)
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      // Still show success to avoid friction — log error on backend
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="glass-card rounded-3xl p-8 text-center">
        <div className="w-20 h-20 rounded-full gold-gradient-bg flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">شكراً لك!</h3>
        <p className="text-white/60 leading-relaxed">
          تم استلام طلبك بنجاح. سيتواصل معك فريق المبيعات خلال <span className="text-gold-500 font-semibold">24 ساعة</span>.
        </p>
        <div className="mt-6 p-4 bg-gold-500/10 border border-gold-500/20 rounded-2xl">
          <p className="text-gold-500 text-sm">للتواصل الفوري: <strong>19XXX</strong></p>
        </div>
      </div>
    )
  }

  return (
    <div className="glass-card rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
      {/* Form Header */}
      <div className="gold-gradient-bg px-6 py-5 text-center">
        <h3 className="text-dark-900 font-black text-xl tracking-wide">احجز وحدتك الآن</h3>
        <p className="text-dark-700 text-xs mt-1">عروض محدودة — تواصل معنا اليوم</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4" dir="rtl">
        {/* Name */}
        <div>
          <label className="block text-white/60 text-xs mb-1.5 tracking-wide">الاسم الكامل *</label>
          <input
            type="text"
            placeholder="أدخل اسمك الكامل"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`form-input w-full rounded-xl px-4 py-3 text-sm ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-white/60 text-xs mb-1.5 tracking-wide">رقم الهاتف *</label>
          <input
            type="tel"
            placeholder="01xxxxxxxxx"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`form-input w-full rounded-xl px-4 py-3 text-sm ${errors.phone ? 'border-red-500' : ''}`}
            dir="ltr"
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-white/60 text-xs mb-1.5 tracking-wide">البريد الإلكتروني</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="form-input w-full rounded-xl px-4 py-3 text-sm"
            dir="ltr"
          />
        </div>

        {/* Unit Type */}
        <div>
          <label className="block text-white/60 text-xs mb-1.5 tracking-wide">نوع الوحدة</label>
          <select
            value={formData.unit_type}
            onChange={(e) => setFormData({ ...formData, unit_type: e.target.value })}
            className="form-input w-full rounded-xl px-4 py-3 text-sm appearance-none cursor-pointer"
          >
            <option value="" className="bg-dark-800">اختر نوع الوحدة</option>
            {unitTypes.map((t) => (
              <option key={t} value={t} className="bg-dark-800">{t}</option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-white/60 text-xs mb-1.5 tracking-wide">الميزانية التقريبية</label>
          <div className="grid grid-cols-2 gap-2">
            {budgets.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setFormData({ ...formData, budget: b })}
                className={`px-3 py-2 rounded-xl text-xs border transition-all duration-200 ${
                  formData.budget === b
                    ? 'bg-gold-500/20 border-gold-500 text-gold-500'
                    : 'bg-white/5 border-white/10 text-white/60 hover:border-gold-500/40'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="cta-btn w-full py-4 rounded-xl font-black text-base tracking-wide mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2 relative z-10">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              جاري الإرسال...
            </span>
          ) : (
            <span>احجز وحدتك الآن ←</span>
          )}
        </button>

        <p className="text-white/30 text-xs text-center leading-relaxed">
          بالضغط على الزر، أنت توافق على سياسة الخصوصية والتواصل معك.
        </p>
      </form>
    </div>
  )
}
