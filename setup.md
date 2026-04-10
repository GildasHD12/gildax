# 🚀 ZayaMarket - Complete Setup Guide

## Quick Start (5 minutes)

```bash
# 1. Clone
git clone https://github.com/GildasHD12/gildax.git
cd gildax

# 2. Install
npm install

# 3. Setup environment
cp .env.local.example .env.local

# 4. Run
npm run dev
```

Visit http://localhost:3000

## Getting Gemini API Key

1. Go to [Google AI Studio](https://ai.google.dev)
2. Click **"Get API Key"** (top right)
3. Create new project OR use default
4. **Create API Key** → Copy it
5. Paste in `.env.local`:
   ```env
   VITE_GEMINI_API_KEY=AIzaSyD...
   ```

## Project Structure

```
gildax/
├── App.tsx                 # Main app
├── App.css                 # Styles
├── types.ts                # TypeScript types
├── constants.ts            # Data & config
├── services/
│   └── geminiService.ts   # AI integration
├── index.tsx              # Entry
├── index.html             # HTML
├── vite.config.ts         # Vite config
├── tsconfig.json          # TS config
├── package.json
├── .env.local             # Local env (create this)
├── .env.local.example     # Template
├── vercel.json            # Vercel config
├── netlify.toml           # Netlify config
├── Dockerfile             # Docker
└── README.md
```

## Features Included ✅

- 📱 Fully responsive design (mobile-first)
- 🛒 Shopping cart with local storage
- 🤖 AI-powered chat with Gemini
- 🎨 Image generation (AI)
- 🎬 Video generation (Veo - optional)
- 💬 WhatsApp integration for checkout
- 👤 User profiles & loyalty system
- 💳 Admin panel for product management
- 📍 Geolocation-based delivery zones
- 🌐 Multi-language ready (French)

## Deployment

### Vercel (Recommended)

```bash
# 1. Push to GitHub
git add .
git commit -m "Ready for production"
git push origin main

# 2. Visit vercel.com/new
# - Import repository
# - Add env vars:
#   - VITE_GEMINI_API_KEY=your_key
# - Deploy
```

### Netlify

```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

### Docker

```bash
docker build -t zayamarket .
docker run -p 3000:3000 \
  -e VITE_GEMINI_API_KEY=your_key \
  zayamarket
```

## Admin Features

**Email containing "admin@zayamarket.africa" = Admin Panel**

Admin can:
- ➕ Add products
- ✏️ Edit products
- 🗑️ Delete products
- 📊 Add partner campaigns

## Configuration

### WhatsApp Number

Edit `constants.ts`:
```typescript
export const WHATSAPP_NUMBER = "2290198148907";
```

### Company Info

Edit `constants.ts`:
```typescript
export const COMPANY_ADDRESS = "Lot 452, Cotonou, Bénin";
export const COMPANY_EMAIL = "contact@zayamarket.africa";
```

### Delivery Zones

Edit `constants.ts` `ZONE_INFO`:
```typescript
ZONE_1: { label: "Centre", time: "30-60 min", price: 500 },
ZONE_2: { label: "Périphérie", time: "1h-2h", price: 1000 },
```

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### API key not working
```bash
# Check .env.local
cat .env.local

# Verify key is correct at https://ai.google.dev
```

### Build fails
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Images not loading
- Check internet connection
- Verify Unsplash links are accessible
- Use browser DevTools (F12) to check

## Performance

- ✅ Optimized images (Unsplash CDN)
- ✅ Code splitting with Vite
- ✅ Lazy loading for products
- ✅ React 19 Suspense
- ✅ No unnecessary re-renders

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile Safari 14+

## Support

- 📧 Email: contact@zayamarket.africa
- 💬 WhatsApp: +229 01 98 14 89 07
- 🐛 GitHub Issues: Report bugs

## License

MIT - Free to use and modify