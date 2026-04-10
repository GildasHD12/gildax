# 🛠️ ZayaMarket Admin Panel Guide

## Accessing Admin Mode

1. Sign up/Login with email containing: `admin@zayamarket.africa`
2. Example: `admin@zayamarket.africa` or `admin+test@zayamarket.africa`
3. You'll see the **Admin Panel** automatically

## Product Management

### Add Product
1. Click **"+ Ajouter un produit"** (floating button)
2. Fill in details:
   - Name (ex: "Tomates Fraîches")
   - Price
   - Unit (ex: "le kg")
   - Category
   - Image URL (paste Unsplash link)
   - Description
   - Mark as "Made in Africa" or "Fresh"
3. Click **Enregistrer**

### Edit Product
1. Hover over product card
2. Click **Edit icon** (pencil)
3. Modify details
4. Click **Enregistrer**

### Delete Product
1. Hover over product card
2. Click **Delete icon** (trash)
3. Confirm deletion

### Product Variants

Add multiple options for a product:
```
Product: Riz Parfumé
Variants:
- 1 Kg (450 FCFA)
- 5 Kg (2200 FCFA)
- 25 Kg (10500 FCFA)
- 50 Kg (20000 FCFA)
```

When customers add to cart, they select variant.

## Partner Campaigns

### Add Brand Campaign
1. Go to **Espace Marques** (Briefcase icon)
2. Click **"Ajouter une campagne"**
3. Fill in:
   - Brand Name (ex: "Nestlé")
   - Campaign Title
   - Description
   - Banner Image URL
   - Choose color
4. Publish

## Loyalty System

### Tiers
- Bronze: 0 points
- Silver: 500 points
- Gold: 1500 points
- Diamond: 5000 points

### Coupons
Users redeem points for:
- Free delivery
- Cash coupons
- Free meal packs

**Edit coupon costs in `constants.ts`**

## Analytics (Future Feature)

Currently tracked:
- User profiles
- Cart data
- Orders via WhatsApp

## Security Notes

⚠️ **Admin credentials are based on email. In production:**

1. Implement proper authentication:
   ```typescript
   // Add to handleLogin in App.tsx
   const isAdmin = user.role === 'ADMIN';
   ```

2. Use backend authentication:
   - Firebase Authentication
   - Auth0
   - Supabase

3. Secure environment variables:
   - Never commit `.env.local`
   - Use platform secrets (Vercel, Netlify)

## Data Storage

Currently uses **localStorage** (browser storage):
- Products in memory
- Cart persists across sessions
- User data persists

**Upgrade path for production:**
- Firebase Firestore
- MongoDB
- PostgreSQL

## Best Practices

✅ **DO:**
- Keep product images under 1MB
- Use descriptive names
- Set accurate prices
- Update inventory regularly

❌ **DON'T:**
- Share admin credentials
- Commit `.env.local` with real keys
- Upload copyrighted images
- Use extremely low prices to test

## Common Tasks

### Change WhatsApp Number
Edit `constants.ts`:
```typescript
export const WHATSAPP_NUMBER = "your_number_here";
```

### Add New Delivery Zone
Edit `constants.ts`:
```typescript
ZONE_4: { 
  label: "Zone 4 (Très Lointaine)", 
  time: "4h-6h", 
  color: "bg-red-500", 
  price: 3000 
}
```

### Modify Loyalty Tiers
Edit `constants.ts`:
```typescript
{ name: "Diamond", minPoints: 5000, ... }
```

### Change App Name
Edit `constants.ts`:
```typescript
export const APP_NAME = "VOTRE_NOM";
```

## Troubleshooting

**Q: Admin panel not showing**
A: Use email with "admin@zayamarket.africa"

**Q: Changes not persisting**
A: Data is in localStorage. Clear cache to reset.

**Q: Images not displaying**
A: Verify image URL is accessible (use Unsplash)

## Contact

Support: contact@zayamarket.africa
WhatsApp: +229 01 98 14 89 07