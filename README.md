# ZAYAMARKET - Le Marché Rapide 🚀

> The fastest online marketplace in Africa. Fresh products. Express delivery. Made simple.

## ⚡ Quick Start

```bash
npm install
cp .env.local.example .env.local
# Add your Gemini API key to .env.local
npm run dev
```

Visit: http://localhost:3000

## 🎯 Features

- 📱 **Fully Responsive** - Works on all devices
- 🛒 **Smart Cart** - Persistent storage, quick checkout
- 🤖 **AI Assistant** - Powered by Google Gemini
- 👨‍💼 **Admin Panel** - Manage products easily
- 💳 **Loyalty System** - Earn & redeem points
- 📍 **Geolocation** - Delivery zones with pricing
- 💬 **WhatsApp Checkout** - Direct order placement
- 🌐 **Multilingual** - French-ready

## 📦 What's Included

✅ 100+ products across 13 categories
✅ Product variants (sizes, options)
✅ User profiles & referral system
✅ Admin dashboard
✅ Fully styled with Tailwind CSS
✅ Mobile-optimized UI
✅ Performance optimized

## 🚀 Deploy in 2 Minutes

### Vercel
```bash
git push origin main
# Visit vercel.com/new and connect repo
```

### Netlify
```bash
npm install -g netlify-cli
netlify init && netlify deploy --prod
```

### Docker
```bash
docker build -t zayamarket .
docker run -p 3000:3000 zayamarket
```

## 📖 Documentation

- [Setup Guide](./SETUP.md)
- [Admin Guide](./ADMIN_GUIDE.md)
- [Deployment Guide](./DEPLOYMENT.md)

## 🔧 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **AI**: Google Gemini API
- **Build**: Vite
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify / Docker

## 📝 Admin Access

Login with email: `admin@zayamarket.africa`

## 🌍 Environment Variables

```env
VITE_GEMINI_API_KEY=your_api_key      # Required
VITE_VEO_API_KEY=your_veo_key         # Optional
VITE_APP_ENV=production               # Optional
```

Get keys at: https://ai.google.dev

## 📞 Support

- 📧 Email: contact@zayamarket.africa
- 💬 WhatsApp: +229 01 98 14 89 07

## 📄 License

MIT © 2024 ZayaMarket