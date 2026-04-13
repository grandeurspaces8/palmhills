# 🏢 Badya Palm Hills — Real Estate Campaign Landing Page
### Built with Next.js 14 · App Router · Tailwind CSS

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.local.example .env.local
# → Fill in your tracking IDs and CRM tokens

# 3. Run locally
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build && npm start
```

---

## 📁 Project Structure

```
app/
├── layout.js           # Root layout + fonts + tracking scripts
├── page.js             # Main landing page (assembles all sections)
├── globals.css         # Global styles, CSS variables, animations
└── api/
    └── leads/
        └── route.js    # POST endpoint — receives form data + UTM params

components/
├── Navbar.js           # Fixed top navbar with scroll behavior
├── HeroSection.js      # Full-screen hero with background image
├── LeadForm.js         # Lead capture form (used in Hero + Contact)
├── StatsBar.js         # Key project numbers bar
├── FeaturesSection.js  # 6-feature grid with scroll reveal
├── GallerySection.js   # Unit type tabs (شقق / تاون هاوس / فيلات)
├── LocationSection.js  # Google Maps embed + distance landmarks
├── ContactSection.js   # Contact info + lead form (second placement)
├── Footer.js           # Footer with disclaimer
├── FloatingCTA.js      # Floating WhatsApp + mobile CTA button
└── TrackingScripts.js  # GTM, GA4, Meta Pixel, TikTok Pixel

lib/
└── utm.js              # UTM parameter capture & storage utility
```

---

## 🎯 Campaign Tracking

The landing page automatically captures these URL parameters:

| Parameter | Source |
|-----------|--------|
| `utm_source` | All platforms |
| `utm_medium` | All platforms |
| `utm_campaign` | All platforms |
| `gclid` | Google Ads |
| `gbraid` | Google Ads (iOS) |
| `fbclid` | Meta Ads |
| `ttclid` | TikTok Ads |
| `aaid` | Custom (as in the original URL) |
| `ap`, `tm` | Custom campaign params |

All captured params are stored in `sessionStorage` and automatically attached to every lead form submission.

---

## 🔌 Lead Integration Options

In `app/api/leads/route.js`, uncomment your preferred integration:

### Option 1: HubSpot CRM
```env
HUBSPOT_TOKEN=your_token
```

### Option 2: Google Sheets (via Apps Script)
```env
SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/xxx/exec
```

### Option 3: Resend Email
```env
RESEND_API_KEY=re_xxx
SALES_EMAIL=sales@company.com
```

### Option 4: Supabase / PostgreSQL
```env
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_KEY=eyJ...
```

---

## 🎨 Customization

### Colors (globals.css)
```css
--gold: #c9a84c;        /* Primary accent */
--gold-light: #e8c97a;  /* Lighter gold */
--dark: #0a0a0a;        /* Background */
```

### Content (components)
- **Project name / logo** → `Navbar.js`
- **Hero headline & text** → `HeroSection.js`
- **Stats numbers** → `StatsBar.js`
- **Features list** → `FeaturesSection.js`
- **Unit types & prices** → `GallerySection.js`
- **Landmarks & map** → `LocationSection.js`
- **Phone / WhatsApp** → `ContactSection.js` + `FloatingCTA.js`

### Background Image (HeroSection.js)
Replace the Unsplash URL with your actual project render:
```js
url('/images/hero-render.jpg')
```

---

## 📊 Conversion Tracking

When a form is submitted, `trackLeadSubmit()` fires:
- ✅ Google Ads conversion event
- ✅ GA4 `generate_lead` event
- ✅ Meta Pixel `Lead` event
- ✅ TikTok `SubmitForm` event
- ✅ GTM `dataLayer` push

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npx vercel --prod
```
Add your `.env.local` variables in Vercel Dashboard → Project → Settings → Environment Variables.

### Other platforms
Any Node.js hosting that supports Next.js 14 (Railway, Render, DigitalOcean App Platform).
