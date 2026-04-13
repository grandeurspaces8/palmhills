import { Playfair_Display, Lato } from 'next/font/google'
import TrackingScripts from '@/components/TrackingScripts'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Badya — Egypt\'s First Cognitive City | Palm Hills',
  description: 'Discover Badya by Palm Hills – a visionary new city in 6th of October. Book your unit now.',
  openGraph: {
    title: 'Badya Palm Hills',
    description: 'Egypt\'s First Cognitive City',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${playfair.variable} ${lato.variable} font-body bg-dark-900 text-white`}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}`}
            height="0" width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <TrackingScripts />
        {children}
      </body>
    </html>
  )
}
