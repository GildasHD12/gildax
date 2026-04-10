
import { Product, MealPack, Promo, ZoneId, PartnerCampaign, LoyaltyTier, Coupon, Review } from './types';

export const APP_NAME = "ZAYAMARKET";
export const CURRENCY = "FCFA";
export const WHATSAPP_NUMBER = "2290198148907";
export const COMPANY_ADDRESS = "Lot 452, Quartier Haie Vive, Cotonou, Bénin";
export const COMPANY_EMAIL = "contact@zayamarket.africa";

// Mock Zones Configuration
export const ZONE_INFO: Record<ZoneId, { label: string; time: string; color: string; price: number }> = {
  ZONE_1: { label: "Zone 1 (Centre)", time: "30-60 min", color: "bg-green-600", price: 500 },
  ZONE_2: { label: "Zone 2 (Périphérie)", time: "1h-2h", color: "bg-yellow-500", price: 1000 },
  ZONE_3: { label: "Zone 3 (Lointaine)", time: "2h-4h", color: "bg-orange-500", price: 2000 },
  ZONE_OUT: { label: "Zone Non Couverte", time: "Indisponible", color: "bg-gray-400", price: 0 },
};

export const CATEGORIES = [
  { id: 'all', label: 'Tout', icon: '🛍️' },
  { id: 'fresh', label: 'Marché Frais', icon: '🍅' },
  { id: 'meat', label: 'Viandes & Poissons', icon: '🍗' },
  { id: 'market', label: 'Épicerie', icon: '🍚' },
  { id: 'spices', label: 'Épices', icon: '🌶️' },
  { id: 'packs', label: 'Packs Repas', icon: '🥘' },
  { id: 'breakfast', label: 'Petit Déj', icon: '☕' },
  { id: 'drinks', label: 'Boissons', icon: '🥤' },
  { id: 'snacks', label: 'Snacks', icon: '🍿' },
  { id: 'hygiene', label: 'Beauté', icon: '✨' },
  { id: 'household', label: 'Maison', icon: '🏠' },
  { id: 'baby', label: 'Bébé', icon: '👶' },
  { id: 'local', label: 'Made in Africa', icon: '🌍' },
];

export const LOYALTY_TIERS: LoyaltyTier[] = [
  { name: "Bronze", minPoints: 0, color: "from-amber-700 to-amber-900", benefits: ["Accès standard"] },
  { name: "Argent", minPoints: 500, color: "from-gray-300 to-gray-500", benefits: ["Livraison prio.", "Offres flash"] },
  { name: "Or", minPoints: 1500, color: "from-yellow-400 to-yellow-600", benefits: ["Livraison gratuite (2/mois)", "Cadeau anniversaire"] },
  { name: "Diamant", minPoints: 5000, color: "from-blue-400 to-purple-600", benefits: ["Service Conciergerie", "Cadeaux mensuels"] }
];

export const COUPONS: Coupon[] = [
  { id: 'c1', label: 'Livraison Gratuite', cost: 200, color: 'bg-green-100 text-green-700', icon: 'Truck' },
  { id: 'c2', label: 'Bon de 1.000 FCFA', cost: 500, color: 'bg-yellow-100 text-yellow-700', icon: 'Banknote' },
  { id: 'c3', label: 'Bon de 5.000 FCFA', cost: 2000, color: 'bg-purple-100 text-purple-700', icon: 'Gift' },
  { id: 'c4', label: 'Pack Repas Offert', cost: 3500, color: 'bg-red-100 text-red-700', icon: 'Utensils' },
];

export const REVIEWS: Review[] = [
  { 
    id: 'r1', name: 'Maman Chimène', role: 'Restauratrice à Cocody', rating: 5,
    text: "Depuis que j'utilise ZayaMarket, mes sauces sont toujours prêtes à l'heure ! Les tomates sont bien rouges, pas de déchets. Le livreur est toujours poli. Vraiment, chapeau !",
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80'
  },
  { 
    id: 'r2', name: 'Tonton David', role: 'Père de famille', rating: 5,
    text: "Pour les courses du mois, c'est le top. Plus besoin de discuter le prix sous le soleil au marché. Le riz est propre, l'huile est la bonne qualité. Je recommande.",
    avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=150&q=80'
  },
  { 
    id: 'r3', name: 'Chanceline G.', role: 'Etudiante', rating: 4,
    text: "J'aime trop la rapidité. J'ai commandé mon Attiéké poisson et 40min après c'était là. Juste un peu de retard la dernière fois à cause de la pluie, mais ils ont prévenu.",
    avatar: 'https://images.unsplash.com/photo-1623091410901-00e2d5b6a0ff?auto=format&fit=crop&w=150&q=80'
  },
  { 
    id: 'r4', name: 'Chef Koffi', role: 'Maquis "Le Bon Goût"', rating: 5,
    text: "La qualité des viandes est impeccable. Le poulet bicyclette est vraiment local, pas de surgelé bizarre. C'est doux !",
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80'
  }
];

export const PROMOS: Promo[] = [
  {
    id: 'p1',
    title: 'Super Promo',
    description: '10% sur les produits frais',
    code: 'FRESH10',
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'p2',
    title: 'Livraison Offerte',
    description: 'Dès 5000F d\'achats',
    code: 'LIVRAISON',
    color: 'from-blue-500 to-blue-700'
  }
];

export const PARTNER_CAMPAIGNS: PartnerCampaign[] = [
  {
    id: 'pc1',
    brandName: 'Nestlé',
    title: 'Votre pause café',
    description: 'Commencez la journée avec énergie',
    bannerImage: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80',
    color: 'bg-red-800',
    productIds: ['19', '100', '97']
  }
];

export const LEGAL_TEXTS = {
  MENTIONS: "ZayaMarket SARL\nCotonou, Bénin\nRC 123456",
  PRIVACY: "Nous protégeons vos données...",
  CGU: "Conditions d'utilisation...",
  CGV: "Conditions de vente...",
  DELIVERY: "Livraison dans tout Cotonou...",
  RETURNS: "Retours acceptés sous conditions...",
  COOKIES: "Nous utilisons des cookies...",
  FAQ: [
    {q: "Comment commander ?", a: "Ajoutez au panier et validez."},
    {q: "Quels moyens de paiement ?", a: "Espèces ou Mobile Money."}
  ]
};

// REPLACED IMAGES WITH HIGH QUALITY, RELIABLE UNSPLASH LINKS
export const PRODUCTS: Product[] = [
  // --- FRESH / MARKET ---
  { 
    id: '1', name: 'Tomates Fraîches', price: 200, unit: 'le tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1, 
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80', rating: 4.8,
    description: "Tomates rouges bien fermes, arrivées ce matin du marché Dantokpa. Idéal pour la sauce.",
    variants: [
      { id: 'v1', label: 'Le tas (4 pcs)', price: 200, unit: 'tas' },
      { id: 'v2', label: 'Le panier (1kg)', price: 1500, unit: 'panier' },
      { id: 'v3', label: 'Cajot entier', price: 12000, unit: 'cajot' }
    ]
  },
  { 
    id: '2', name: 'Oignons Rouges', price: 100, unit: 'la pièce', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1, 
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82a6b6dc?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Gros oignons violets, parfaits pour la sauce ou les marinades.",
    variants: [
      { id: 'v1', label: 'Le tas (4-5 boules)', price: 100, unit: 'tas' },
      { id: 'v2', label: 'Le panier (1kg)', price: 1000, unit: 'panier' },
      { id: 'v3', label: 'Sac de 25kg', price: 18000, unit: 'sac' }
    ]
  },
  { 
    id: '3', name: 'Piment Vert', price: 50, unit: 'le petit tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1, 
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80', rating: 4.2,
    description: "Piment vert très piquant pour relever vos plats.",
    variants: [
      { id: 'v1', label: 'Petit tas', price: 50, unit: 'tas' },
      { id: 'v2', label: 'Gros tas', price: 200, unit: 'tas' },
      { id: 'v3', label: 'Le panier (1kg)', price: 1500, unit: 'panier' }
    ]
  },
  {
    id: '30', name: 'Ail Blanc', price: 200, unit: 'le tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1615477209376-74900a68d0d9?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Gousses d'ail fraîches pour un arôme puissant.",
    variants: [
      { id: 'v1', label: 'Petit tas (3 têtes)', price: 200, unit: 'tas' },
      { id: 'v2', label: 'Le filet (500g)', price: 1200, unit: 'filet' }
    ]
  },
  {
    id: '31', name: 'Gingembre Frais', price: 100, unit: 'le tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80', rating: 4.7,
    description: "Racines de gingembre fraîches et juteuses.",
    variants: [
      { id: 'v1', label: 'Petit tas', price: 100, unit: 'tas' },
      { id: 'v2', label: 'Le kg', price: 1500, unit: 'kg' }
    ]
  },
  { 
    id: '4', name: 'Igname Laboco', price: 800, unit: 'le tubercule', category: 'local', isLocal: true, isFresh: true, minQuantity: 1, 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Dioscorea_rotundata_-_tubers.jpg/640px-Dioscorea_rotundata_-_tubers.jpg', rating: 4.9,
    description: "Igname pileuse de qualité supérieure, idéale pour le foutou ou igname pilée.",
    variants: [
      { id: 'v1', label: 'Unité (Moyen)', price: 800, unit: 'unité' },
      { id: 'v2', label: 'Unité (Gros)', price: 1200, unit: 'unité' },
      { id: 'v3', label: 'Tas de 3', price: 2200, unit: 'tas' }
    ]
  },
  { 
    id: '5', name: 'Banane Plantain', price: 500, unit: 'la main', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1, 
    image: 'https://images.unsplash.com/photo-1603052875302-d376b7c0638a?auto=format&fit=crop&w=600&q=80', rating: 4.7,
    description: "Plantains pour alloco ou bouilli. Choisissez votre maturité.",
    variants: [
      { id: 'v1', label: 'Mûres (Jaunes)', price: 500, unit: 'main' },
      { id: 'v2', label: 'Vertes (Non mûres)', price: 500, unit: 'main' }
    ]
  },
  {
    id: '13', name: 'Attiéké Frais', price: 300, unit: 'la boule', category: 'local', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Atti%C3%A9k%C3%A9_-_C%C3%B4te_d%27Ivoire.jpg/640px-Atti%C3%A9k%C3%A9_-_C%C3%B4te_d%27Ivoire.jpg', rating: 4.8,
    description: "Attiéké 1er choix, grains moyens, sans sable. Directement de Bassam.",
    variants: [
      { id: 'v1', label: 'Boule individuelle', price: 300, unit: 'boule' },
      { id: 'v2', label: 'Lot de 5 boules', price: 1400, unit: 'lot' },
      { id: 'v3', label: 'Sachet familial (2kg)', price: 2000, unit: 'sachet' }
    ]
  },
  {
    id: '14', name: 'Gombo Frais', price: 200, unit: 'le tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1466192450123-e4d089bb2c25?auto=format&fit=crop&w=600&q=80', rating: 4.3,
    description: "Gombo vert tendre, parfait pour la sauce kopè ou gluant.",
    variants: [
      { id: 'v1', label: 'Petit tas', price: 200, unit: 'tas' },
      { id: 'v2', label: 'Gros tas', price: 500, unit: 'tas' },
      { id: 'v3', label: 'Panier 1kg', price: 1500, unit: 'panier' }
    ]
  },
  {
    id: '70', name: 'Carottes', price: 200, unit: 'le tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Carottes fraîches, idéales pour la salade ou le riz gras.",
    variants: [
      { id: 'v1', label: 'Le tas (200F)', price: 200, unit: 'tas' },
      { id: 'v2', label: 'Le Kg', price: 800, unit: 'kg' }
    ]
  },
  {
    id: '71', name: 'Chou Pommé', price: 500, unit: 'pièce', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1594412239413-d3c4033ce337?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Chou vert ferme et frais.",
    variants: [
      { id: 'v1', label: 'Petit', price: 300, unit: 'pièce' },
      { id: 'v2', label: 'Moyen', price: 500, unit: 'pièce' },
      { id: 'v3', label: 'Gros', price: 800, unit: 'pièce' }
    ]
  },
  {
    id: '72', name: 'Aubergines', price: 200, unit: 'le tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1627798366917-743209dbb3b1?auto=format&fit=crop&w=600&q=80', rating: 4.4,
    description: "Aubergines pour vos sauces.",
    variants: [
      { id: 'v1', label: 'Violettes (Le tas)', price: 200, unit: 'tas' },
      { id: 'v2', label: 'Gnangnan/N\'drowa (Amère)', price: 300, unit: 'tas' }
    ]
  },
  {
    id: '73', name: 'Poivrons', price: 200, unit: 'le tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdf5dbc240?auto=format&fit=crop&w=600&q=80', rating: 4.3,
    description: "Poivrons verts frais pour assaisonner.",
    variants: [
      { id: 'v1', label: 'Le tas (3 pièces)', price: 200, unit: 'tas' },
      { id: 'v2', label: 'Le Kg', price: 1200, unit: 'kg' }
    ]
  },
  {
    id: '83', name: 'Feuilles Crincrin (Lalo)', price: 100, unit: 'la botte', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Corchorus_olitorius_in_Benin.jpg/640px-Corchorus_olitorius_in_Benin.jpg', rating: 4.9,
    description: "Feuilles de Corète potagère pour la sauce crincrin bien gluante.",
  },
  {
    id: '74', name: 'Feuilles Adémè', price: 100, unit: 'la botte', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Corchorus_olitorius_in_Benin.jpg/640px-Corchorus_olitorius_in_Benin.jpg', rating: 4.8,
    description: "Feuilles d'Adémè fraîches pour la sauce gluante.",
  },
  {
    id: '75', name: 'Feuilles Gboma', price: 100, unit: 'la botte', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Solanum_macrocarpon_01.jpg/640px-Solanum_macrocarpon_01.jpg', rating: 4.7,
    description: "Feuilles de grande morelle (Gboma), légèrement amères.",
  },
  {
    id: '84', name: 'Feuilles Amanvivè (Amer)', price: 150, unit: 'la botte', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Vernonia_amygdalina.jpg/640px-Vernonia_amygdalina.jpg', rating: 4.6,
    description: "Feuilles amères (N'dolé/Vernonia) pour nettoyer le ventre ou la sauce.",
    variants: [
      { id: 'v1', label: 'Fraîches', price: 150, unit: 'botte' },
      { id: 'v2', label: 'Lavées (Sans amertume)', price: 500, unit: 'sachet' }
    ]
  },
  {
    id: '85', name: 'Feuilles Fotètè (Amarante)', price: 100, unit: 'la botte', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Amaranthus_dubius_in_Benin.jpg/640px-Amaranthus_dubius_in_Benin.jpg', rating: 4.8,
    description: "Feuilles d'amarante douces, parfaites pour la sauce légume.",
  },
  {
    id: '86', name: 'Taro', price: 500, unit: 'le tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Taro_corms.jpg/640px-Taro_corms.jpg', rating: 4.5,
    description: "Tubercules de taro pour ragoût ou chips.",
    variants: [
      { id: 'v1', label: 'Le tas (Moyen)', price: 500, unit: 'tas' },
      { id: 'v2', label: 'Le Kg', price: 800, unit: 'kg' }
    ]
  },
  {
    id: '76', name: 'Citron Vert', price: 100, unit: 'le tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1552526881-721ce8509ea8?auto=format&fit=crop&w=600&q=80', rating: 4.9,
    description: "Citrons verts juteux pour vos marinades et jus.",
    variants: [
      { id: 'v1', label: 'Le tas (4 pcs)', price: 100, unit: 'tas' },
      { id: 'v2', label: 'Le Kg', price: 600, unit: 'kg' }
    ]
  },
  {
    id: '77', name: 'Avocat Tropical', price: 300, unit: 'pièce', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1523049673856-306ad65076e6?auto=format&fit=crop&w=600&q=80', rating: 4.7,
    description: "Avocat beurre, chair fondante.",
    variants: [
      { id: 'v1', label: 'Moyen', price: 300, unit: 'pièce' },
      { id: 'v2', label: 'Gros', price: 500, unit: 'pièce' }
    ]
  },
  {
    id: '78', name: 'Patate Douce', price: 500, unit: 'le tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1596097635121-14b63b7a7c19?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Patate douce à chair blanche ou orange pour frire ou bouillir.",
    variants: [
      { id: 'v1', label: 'Le tas', price: 500, unit: 'tas' },
      { id: 'v2', label: 'Le Kg', price: 600, unit: 'kg' }
    ]
  },
  {
    id: '79', name: 'Manioc Frais', price: 500, unit: 'le tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1627918342416-2da9e979e2c6?auto=format&fit=crop&w=600&q=80', rating: 4.4,
    description: "Tubercules de manioc frais pour bouillir.",
  },
  {
    id: '80', name: 'Laitue (Salade)', price: 300, unit: 'pièce', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=600&q=80', rating: 4.3,
    description: "Salade verte fraîche pour vos entrées.",
  },
  {
    id: '81', name: 'Haricots Verts', price: 500, unit: 'le tas', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Haricots verts frais et croquants.",
    variants: [
      { id: 'v1', label: 'Le tas', price: 500, unit: 'tas' },
      { id: 'v2', label: 'Le Kg', price: 1500, unit: 'kg' }
    ]
  },
  {
    id: '82', name: 'Concombre', price: 200, unit: 'pièce', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Concombre frais pour salade.",
  },
  {
    id: '32', name: 'Ananas Pain de Sucre', price: 500, unit: 'pièce', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80', rating: 4.8,
    description: "Ananas béninois, chair blanche très sucrée.",
    variants: [
      { id: 'v1', label: 'Moyen', price: 500, unit: 'pièce' },
      { id: 'v2', label: 'Gros', price: 800, unit: 'pièce' }
    ]
  },
  {
    id: '33', name: 'Papaye Solo', price: 400, unit: 'pièce', category: 'fresh', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1517260739337-6799d2df9ebd?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Papaye mûre à point, chair rouge sucrée.",
  },

  // --- VIANDES & POISSONS ---
  {
    id: '15', name: 'Poulet Bicyclette', price: 3500, unit: 'unité', category: 'meat', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=80', rating: 4.9,
    description: "Poulet du village, chair ferme et goût authentique. Nettoyé sur demande.",
    variants: [
      { id: 'v1', label: 'Vivant', price: 3500, unit: 'unité' },
      { id: 'v2', label: 'Nettoyé/Vidé', price: 3800, unit: 'unité' },
      { id: 'v3', label: 'Fumé', price: 4500, unit: 'unité' }
    ]
  },
  {
    id: '16', name: 'Tilapia Frais', price: 2000, unit: 'le kg', category: 'meat', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1511265825349-34b7a4623700?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Tilapia frais du fleuve, écailles brillantes. Idéal pour braiser.",
    variants: [
      { id: 'v1', label: 'Moyen (le kg)', price: 2000, unit: 'kg' },
      { id: 'v2', label: 'Gros (le kg)', price: 2500, unit: 'kg' }
    ]
  },
  {
    id: '17', name: 'Viande de Boeuf', price: 2800, unit: 'le kg', category: 'meat', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=600&q=80', rating: 4.7,
    description: "Viande rouge fraîche, boucherie locale halal.",
    variants: [
      { id: 'v1', label: 'Avec Os', price: 2800, unit: 'kg' },
      { id: 'v2', label: 'Sans Os', price: 3500, unit: 'kg' }
    ]
  },
  {
    id: '64', name: 'Viande de Mouton', price: 3000, unit: 'le kg', category: 'meat', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6f545b7?auto=format&fit=crop&w=600&q=80', rating: 4.7,
    description: "Viande de mouton tendre, fraîchement découpée.",
    variants: [
      { id: 'v1', label: 'Avec Os (Ragoût)', price: 3000, unit: 'kg' },
      { id: 'v2', label: 'Gigot (Entier)', price: 4500, unit: 'kg' }
    ]
  },
  {
    id: '65', name: 'Peau de Boeuf (Kplo)', price: 1000, unit: 'le tas', category: 'meat', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Cow_skin_meat.jpg/640px-Cow_skin_meat.jpg', rating: 4.5,
    description: "Peau de boeuf nettoyée, indispensable pour la sauce graine ou légumes.",
    variants: [
      { id: 'v1', label: 'Frais (Nettoyé)', price: 1000, unit: 'tas' },
      { id: 'v2', label: 'Fumé/Séché', price: 1500, unit: 'tas' }
    ]
  },
  {
    id: '66', name: 'Escargots Géants', price: 2000, unit: 'le tas', category: 'meat', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1595168055109-1736b80693a1?auto=format&fit=crop&w=600&q=80', rating: 4.8,
    description: "Escargots géants de forêt (Achatines), bien charnus.",
    variants: [
      { id: 'v1', label: 'Vivant (4 pièces)', price: 2000, unit: 'tas' },
      { id: 'v2', label: 'Nettoyé/Décoquillé', price: 3500, unit: 'barquette' }
    ]
  },
  {
    id: '67', name: 'Poisson Capitaine', price: 3500, unit: 'le kg', category: 'meat', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lates_niloticus_2.jpg/640px-Lates_niloticus_2.jpg', rating: 4.9,
    description: "Le roi des poissons d'eau douce. Chair blanche, sans arêtes fines.",
    variants: [
      { id: 'v1', label: 'Tranches (Filet)', price: 4000, unit: 'kg' },
      { id: 'v2', label: 'Entier', price: 3500, unit: 'kg' }
    ]
  },
  {
    id: '68', name: 'Ailes de Dindon', price: 1800, unit: 'le kg', category: 'meat', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80', rating: 4.4,
    description: "Ailes de dindon charnues, idéal pour braiser ou frire.",
    variants: [
      { id: 'v1', label: 'Ailes', price: 1800, unit: 'kg' },
      { id: 'v2', label: 'Cuisses', price: 1700, unit: 'kg' },
      { id: 'v3', label: 'Gésiers', price: 2000, unit: 'kg' }
    ]
  },
  {
    id: '69', name: 'Pintade Fumée', price: 4000, unit: 'unité', category: 'meat', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Numida_meleagris_-bottom_left_of_four-8.jpg/640px-Numida_meleagris_-bottom_left_of_four-8.jpg', rating: 4.8,
    description: "Pintade du nord fumée traditionnellement, goût très parfumé.",
  },
  {
    id: '34', name: 'Poisson Fumé (Maquereau)', price: 1500, unit: 'le tas', category: 'meat', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1517594002662-799d1297e2da?auto=format&fit=crop&w=600&q=80', rating: 4.8,
    description: "Poisson fumé sec pour donner du goût aux sauces légumes.",
    variants: [
      { id: 'v1', label: 'Tas de 3 poissons', price: 1500, unit: 'tas' },
      { id: 'v2', label: 'Gros poisson fumé (unité)', price: 800, unit: 'unité' }
    ]
  },
  {
    id: '35', name: 'Crabes Frais', price: 1000, unit: 'le tas', category: 'meat', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1551800628-8740d9981442?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Crabes de lagune vivants pour la sauce gombo.",
    variants: [
      { id: 'v1', label: 'Tas de 5 petits', price: 1000, unit: 'tas' },
      { id: 'v2', label: 'Tas de 3 gros', price: 1500, unit: 'tas' }
    ]
  },
  {
    id: '60', name: 'Lanhouin', price: 500, unit: 'morceau', category: 'meat', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Lanhouin.jpg/640px-Lanhouin.jpg', rating: 4.8,
    description: "Poisson fermenté salé, donne un goût unique à la sauce.",
    variants: [
      { id: 'v1', label: 'Petit morceau', price: 200, unit: 'morceau' },
      { id: 'v2', label: 'Gros morceau', price: 500, unit: 'morceau' }
    ]
  },

  // --- EPICERIE (MARKET) ---
  { 
    id: '8', name: 'Riz Parfumé', price: 450, unit: 'le kg', category: 'market', isLocal: false, isFresh: false, minQuantity: 1, 
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Riz long grain parfumé de qualité supérieure.",
    variants: [
      { id: 'v1', label: '1 Kg (Détail)', price: 450, unit: 'kg' },
      { id: 'v2', label: 'Sac 5 Kg', price: 2200, unit: 'sac' },
      { id: 'v3', label: 'Sac 25 Kg', price: 10500, unit: 'sac' },
      { id: 'v4', label: 'Sac 50 Kg', price: 20000, unit: 'sac' }
    ]
  },
  {
    id: '56', name: 'Haricot (Niébé)', price: 600, unit: 'le kg', category: 'market', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80', rating: 4.7,
    description: "Haricots secs locaux, très riches en protéines.",
    variants: [
      { id: 'v1', label: 'Blanc (Niébé)', price: 600, unit: 'kg' },
      { id: 'v2', label: 'Rouge', price: 700, unit: 'kg' },
      { id: 'v3', label: 'Tacheté', price: 650, unit: 'kg' }
    ]
  },
  {
    id: '57', name: 'Maïs Grains', price: 300, unit: 'le kg', category: 'market', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Maïs séché pour la bouillie, la pâte ou le moulin.",
    variants: [
      { id: 'v1', label: 'Maïs Blanc', price: 300, unit: 'kg' },
      { id: 'v2', label: 'Maïs Jaune', price: 350, unit: 'kg' }
    ]
  },
  {
    id: '58', name: 'Arachide Crue', price: 800, unit: 'le kg', category: 'market', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1627038843940-b8830cb85806?auto=format&fit=crop&w=600&q=80', rating: 4.8,
    description: "Arachides décortiquées crues, pour la sauce arachide ou à griller.",
    variants: [
      { id: 'v1', label: 'Rouge (Petite)', price: 800, unit: 'kg' },
      { id: 'v2', label: 'Blanche (Grosse)', price: 1000, unit: 'kg' }
    ]
  },
  {
    id: '87', name: 'Graines de Courge (Pistache)', price: 1200, unit: 'le kg', category: 'market', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Egusi_seeds.jpg/640px-Egusi_seeds.jpg', rating: 4.9,
    description: "Graines d'Egussi (Pistache) pour la sauce gombo ou egussi.",
    variants: [
      { id: 'v1', label: 'Entières', price: 1200, unit: 'kg' },
      { id: 'v2', label: 'Moulues (Poudre)', price: 1500, unit: 'kg' }
    ]
  },
  {
    id: '36', name: 'Gari', price: 300, unit: 'le kg', category: 'market', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1647432017772-243577d6110f?auto=format&fit=crop&w=600&q=80', rating: 4.4,
    description: "Farine de manioc croustillante et acide, premier choix.",
    variants: [
      { id: 'v1', label: 'Sohui (Blanc)', price: 300, unit: 'kg' },
      { id: 'v2', label: 'Jaune (Huile Rouge)', price: 400, unit: 'kg' },
      { id: 'v3', label: 'Bassine (5 Kg)', price: 1400, unit: 'bassine' }
    ]
  },
  {
    id: '61', name: 'Farine de Maïs', price: 400, unit: 'le kg', category: 'market', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Corn_flour.jpg/640px-Corn_flour.jpg', rating: 4.5,
    description: "Farine de maïs fine pour préparer la pâte.",
    variants: [
      { id: 'v1', label: 'Tamisée', price: 400, unit: 'kg' },
      { id: 'v2', label: 'Fermentée (Ogi)', price: 500, unit: 'kg' }
    ]
  },
  {
    id: '94', name: 'Sucre Morceaux', price: 500, unit: 'boîte', category: 'market', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80', rating: 4.7,
    description: "Sucre blanc en morceaux Saint Louis, le classique.",
    variants: [
      { id: 'v1', label: 'Boîte 500g', price: 500, unit: 'boîte' },
      { id: 'v2', label: 'Boîte 1kg', price: 900, unit: 'boîte' }
    ]
  },
  {
    id: '96', name: 'Couscous', price: 800, unit: 'paquet', category: 'market', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1590594445830-4fb3e60a3061?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Couscous grain moyen de blé dur.",
    variants: [
      { id: 'v1', label: 'Paquet 500g', price: 800, unit: 'paquet' },
      { id: 'v2', label: 'Paquet 1kg', price: 1500, unit: 'paquet' }
    ]
  },
  {
    id: '97', name: 'Macaroni', price: 400, unit: 'sachet', category: 'market', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&w=600&q=80', rating: 4.3,
    description: "Pâtes macaroni coudées.",
    variants: [
      { id: 'v1', label: 'Sachet 500g', price: 400, unit: 'sachet' },
      { id: 'v2', label: 'Sachet 1kg', price: 750, unit: 'sachet' }
    ]
  },
  {
    id: '98', name: 'Vinaigre Blanc', price: 600, unit: 'bouteille', category: 'market', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1596627706727-2c9769641773?auto=format&fit=crop&w=600&q=80', rating: 4.4,
    description: "Vinaigre d'alcool blanc pour la salade ou le nettoyage.",
  },
  {
    id: '99', name: 'Farine de Blé', price: 600, unit: 'kg', category: 'market', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1582283995729-198166710427?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Farine de blé tout usage pour gâteaux et beignets.",
  },
  {
    id: '103', name: 'Tapioca', price: 300, unit: 'sachet', category: 'market', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Tapioca_pearls.jpg/640px-Tapioca_pearls.jpg', rating: 4.5,
    description: "Tapioca (Gari fin) pour la bouillie ou dessert.",
  },
  {
    id: '62', name: 'Soja Texturé (Wagashi Faux)', price: 1500, unit: 'sachet', category: 'market', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Textured_vegetable_protein_chunks.jpg/640px-Textured_vegetable_protein_chunks.jpg', rating: 4.3,
    description: "Morceaux de soja, alternative économique et saine à la viande.",
    variants: [
      { id: 'v1', label: 'Petits morceaux', price: 1500, unit: 'sachet' },
      { id: 'v2', label: 'Gros morceaux', price: 1800, unit: 'sachet' }
    ]
  },
  {
    id: '37', name: 'Sardines à l\'huile', price: 450, unit: 'boîte', category: 'market', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1598511726623-d219983995eb?auto=format&fit=crop&w=600&q=80', rating: 4.3,
    description: "Sardines en conserve, idéal pour le pain ou la salade.",
    variants: [
      { id: 'v1', label: 'Huile végétale', price: 450, unit: 'boîte' },
      { id: 'v2', label: 'Pimentée', price: 450, unit: 'boîte' }
    ]
  },
  {
    id: '38', name: 'Corned Beef', price: 1200, unit: 'boîte', category: 'market', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Viande de boeuf assaisonnée en conserve, clé pour les spaghettis.",
    variants: [
      { id: 'v1', label: 'Petite boîte (198g)', price: 1200, unit: 'boîte' },
      { id: 'v2', label: 'Grande boîte (340g)', price: 2000, unit: 'boîte' }
    ]
  },
  {
    id: '39', name: 'Mayonnaise', price: 100, unit: 'sachet', category: 'market', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1585246704987-a8dc1176b66d?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Mayonnaise onctueuse pour vos salades et sandwichs.",
    variants: [
      { id: 'v1', label: 'Sachet 30g', price: 100, unit: 'sachet' },
      { id: 'v2', label: 'Pot 200ml', price: 1200, unit: 'pot' },
      { id: 'v3', label: 'Pot 500ml', price: 2500, unit: 'pot' }
    ]
  },
  {
    id: '26', name: 'Spaghettis', price: 400, unit: 'paquet', category: 'market', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&w=600&q=80', rating: 4.3,
    description: "Pâtes spaghettis classiques pour un repas rapide.",
    variants: [
      { id: 'v1', label: 'Fin (Vermicelle)', price: 400, unit: 'paquet' },
      { id: 'v2', label: 'Moyen', price: 400, unit: 'paquet' },
      { id: 'v3', label: 'Gros', price: 400, unit: 'paquet' }
    ]
  },
  {
    id: '27', name: 'Tomate Concentrée', price: 100, unit: 'sachet', category: 'market', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1627997970899-7f99999026d3?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Concentré de tomate double concentré pour colorer et épaissir vos sauces.",
    variants: [
      { id: 'v1', label: 'Sachet 70g', price: 100, unit: 'sachet' },
      { id: 'v2', label: 'Boîte 400g', price: 800, unit: 'boîte' },
      { id: 'v3', label: 'Boîte 800g', price: 1500, unit: 'boîte' }
    ]
  },
  { 
    id: '10', name: 'Huile Rouge (Zomi)', price: 600, unit: '0.5 litre', category: 'local', isLocal: true, isFresh: false, minQuantity: 1, 
    // Real Palm Oil (Zomi) in bowl/bottle
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Palm_oil.jpg', rating: 5.0,
    description: "Huile de palme pure (Zomi), sans mélange. Goût authentique du village.",
    variants: [
      { id: 'v1', label: 'Bouteille 0.5L', price: 600, unit: 'btl' },
      { id: 'v2', label: 'Bouteille 1L', price: 1200, unit: 'btl' },
      { id: 'v3', label: 'Bidon 5L', price: 5500, unit: 'bidon' }
    ]
  },
  {
    id: '40', name: 'Huile d\'Arachide', price: 1000, unit: 'litre', category: 'market', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Huile végétale raffinée pour friture et cuisson.",
    variants: [
      { id: 'v1', label: 'Bouteille 1L', price: 1000, unit: 'litre' },
      { id: 'v2', label: 'Bidon 5L', price: 4800, unit: 'bidon' }
    ]
  },

  // --- EPICES & CONDIMENTS ---
  {
    id: '55', name: 'Sel de Cuisine', price: 100, unit: 'sachet', category: 'spices', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1518110925418-dc2f493526ae?auto=format&fit=crop&w=600&q=80', rating: 5.0,
    description: "Sel iodé fin ou gros sel marin pour la cuisine.",
    variants: [
      { id: 'v1', label: 'Sel fin (Sachet 250g)', price: 100, unit: 'sachet' },
      { id: 'v2', label: 'Sel fin (Sachet 1kg)', price: 350, unit: 'sachet' },
      { id: 'v3', label: 'Gros Sel Marin (Kg)', price: 500, unit: 'kg' }
    ]
  },
  {
    id: '59', name: 'Crevettes Séchées', price: 1000, unit: 'mesure', category: 'spices', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Dried_shrimp.jpg/640px-Dried_shrimp.jpg', rating: 4.8,
    description: "Crevettes séchées pour assaisonner les sauces légumes.",
    variants: [
      { id: 'v1', label: 'Petite mesure', price: 1000, unit: 'mesure' },
      { id: 'v2', label: 'Grande mesure', price: 2500, unit: 'mesure' },
      { id: 'v3', label: 'En poudre (Sachet)', price: 1200, unit: 'sachet' }
    ]
  },
  {
    id: '63', name: 'Moutarde Africaine (Afitin)', price: 200, unit: 'boule', category: 'spices', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/N%C3%A9r%C3%A9_seeds.jpg/640px-N%C3%A9r%C3%A9_seeds.jpg', rating: 4.9,
    description: "Soumbala/Afitin traditionnel, pour un goût profond.",
    variants: [
      { id: 'v1', label: 'Boule', price: 200, unit: 'boule' },
      { id: 'v2', label: 'Pot (Pâte)', price: 1000, unit: 'pot' }
    ]
  },
  {
    id: '89', name: 'Kankan (Epice Choukouya)', price: 500, unit: 'sachet', category: 'spices', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Spice_mix.jpg/640px-Spice_mix.jpg', rating: 4.9,
    description: "Mélange d'épices piquant pour les grillades (soya/choukouya).",
  },
  {
    id: '90', name: 'Potasse (Amon)', price: 100, unit: 'morceau', category: 'spices', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Potash.jpg/640px-Potash.jpg', rating: 4.7,
    description: "Potasse traditionnelle pour ramollir les légumes ou le gombo.",
  },
  {
    id: '91', name: 'Clou de Girofle (Atinwouin)', price: 500, unit: 'sachet', category: 'spices', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Syzygium_aromaticum_003.JPG/640px-Syzygium_aromaticum_003.JPG', rating: 4.8,
    description: "Clous de girofle très parfumés pour infusions ou cuisine.",
  },
  {
    id: '92', name: 'Feuilles de Laurier', price: 200, unit: 'sachet', category: 'spices', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1606132924637-2384a2340578?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Feuilles de laurier séchées pour parfumer le riz et les sauces.",
  },
  {
    id: '93', name: 'Muscade', price: 200, unit: 'noix', category: 'spices', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Noix de muscade entière.",
  },
  { 
    id: '9', name: 'Cube Assaisonnement', price: 25, unit: 'la tablette', category: 'spices', isLocal: false, isFresh: false, minQuantity: 2, 
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80', rating: 4.0,
    description: "Le goût de ça ! Indispensable pour toutes vos sauces.",
    variants: [
      { id: 'v1', label: 'Crevette', price: 25, unit: 'tablette' },
      { id: 'v2', label: 'Poulet', price: 25, unit: 'tablette' },
      { id: 'v3', label: 'Boeuf', price: 25, unit: 'tablette' }
    ]
  },
  {
    id: '41', name: 'Poivre', price: 50, unit: 'sachet', category: 'spices', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Poivre en grain ou moulu pour relever le goût.",
    variants: [
      { id: 'v1', label: 'Poivre Noir (Grains)', price: 100, unit: 'sachet' },
      { id: 'v2', label: 'Poivre Blanc (Moulu)', price: 150, unit: 'sachet' }
    ]
  },
  {
    id: '42', name: 'Curry / Curry', price: 50, unit: 'sachet', category: 'spices', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Mélange d'épices jaune pour assaisonner viandes et riz.",
    variants: [
      { id: 'v1', label: 'Petit sachet', price: 50, unit: 'sachet' },
      { id: 'v2', label: 'Pot moyen', price: 1000, unit: 'pot' }
    ]
  },
  {
    id: '88', name: 'Piment Rouge Long', price: 200, unit: 'le tas', category: 'spices', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1563229509-c6e0031846b8?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Piment rouge long, moins fort, idéal pour colorer la sauce.",
    variants: [
      { id: 'v1', label: 'Frais', price: 200, unit: 'tas' },
      { id: 'v2', label: 'Sec', price: 300, unit: 'tas' }
    ]
  },
  {
    id: '43', name: 'Moutarde', price: 800, unit: 'pot', category: 'spices', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1528750717929-32dbb34517b4?auto=format&fit=crop&w=600&q=80', rating: 4.3,
    description: "Moutarde de Dijon classique, idéale pour mariner le poulet Yassa.",
    variants: [
      { id: 'v1', label: 'Petit pot (200g)', price: 800, unit: 'pot' },
      { id: 'v2', label: 'Grand pot (370g)', price: 1400, unit: 'pot' }
    ]
  },

  // --- PETIT DEJEUNER ---
  {
    id: '44', name: 'Pain Baguette', price: 150, unit: 'baguette', category: 'breakfast', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80', rating: 4.8,
    description: "Baguette de pain croustillante chaude du matin.",
  },
  {
    id: '100', name: 'Milo (Chocolat)', price: 150, unit: 'sachet', category: 'breakfast', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Milo_tin.jpg/640px-Milo_tin.jpg', rating: 4.9,
    description: "Poudre de chocolat malté fortifiante, le favori des enfants.",
    variants: [
      { id: 'v1', label: 'Sachet 20g', price: 150, unit: 'sachet' },
      { id: 'v2', label: 'Boîte 400g', price: 3500, unit: 'boîte' },
      { id: 'v3', label: 'Boîte 900g', price: 7500, unit: 'boîte' }
    ]
  },
  {
    id: '101', name: 'Thé Lipton', price: 50, unit: 'sachet', category: 'breakfast', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=600&q=80', rating: 4.7,
    description: "Thé jaune Lipton Yellow Label.",
    variants: [
      { id: 'v1', label: 'Sachet unité', price: 50, unit: 'sachet' },
      { id: 'v2', label: 'Paquet 25 sachets', price: 1200, unit: 'paquet' }
    ]
  },
  {
    id: '102', name: 'Kinkéliba', price: 500, unit: 'paquet', category: 'breakfast', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Combretum_micranthum.jpg/640px-Combretum_micranthum.jpg', rating: 4.8,
    description: "Feuilles séchées de Kinkéliba pour infusion santé.",
  },
  {
    id: '18', name: 'Lait en Poudre', price: 3500, unit: 'boîte 400g', category: 'breakfast', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80', rating: 4.8,
    description: "Lait entier en poudre instantané, riche en vitamines.",
    variants: [
      { id: 'v1', label: 'Sachet 25g', price: 150, unit: 'sachet' },
      { id: 'v2', label: 'Boîte 400g (Nido/Peak)', price: 3500, unit: 'boîte' },
      { id: 'v3', label: 'Boîte 900g', price: 7500, unit: 'boîte' }
    ]
  },
  {
    id: '97', name: 'Lait Concentré Sucré', price: 600, unit: 'boîte', category: 'breakfast', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=600&q=80', rating: 4.8,
    description: "Lait concentré sucré pour le café ou la bouillie (Bonnet Rouge).",
  },
  {
    id: '98', name: 'Lait Concentré Non Sucré', price: 400, unit: 'boîte', category: 'breakfast', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Lait concentré non sucré (Peak) idéal pour la cuisine ou le café léger.",
  },
  {
    id: '19', name: 'Café Instantané', price: 50, unit: 'stick', category: 'breakfast', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1556742521-9713bf08a55c?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Café soluble classique pour bien démarrer la journée.",
    variants: [
      { id: 'v1', label: 'Stick individuel', price: 50, unit: 'stick' },
      { id: 'v2', label: 'Pot 50g', price: 1500, unit: 'pot' },
      { id: 'v3', label: 'Pot 100g', price: 2800, unit: 'pot' }
    ]
  },
  {
    id: '20', name: 'Pâte à Tartiner', price: 2000, unit: 'pot', category: 'breakfast', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1543886362-7232239dc9df?auto=format&fit=crop&w=600&q=80', rating: 4.9,
    description: "Pâte au chocolat et noisettes onctueuse.",
    variants: [
      { id: 'v1', label: 'Petit pot (350g)', price: 2000, unit: 'pot' },
      { id: 'v2', label: 'Grand pot (750g)', price: 3800, unit: 'pot' }
    ]
  },
  {
    id: '108', name: 'Beurre de Cacahuète', price: 1200, unit: 'pot', category: 'breakfast', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1528750717929-32dbb34517b4?auto=format&fit=crop&w=600&q=80', rating: 4.8,
    description: "Pâte d'arachide naturelle (Dakata) pour le pain ou la sauce.",
  },
  {
    id: '109', name: 'Margarine', price: 500, unit: 'pot', category: 'breakfast', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Margarine à tartiner (Blue Band / Jadida).",
    variants: [
      { id: 'v1', label: 'Petit pot (250g)', price: 500, unit: 'pot' },
      { id: 'v2', label: 'Moyen pot (450g)', price: 900, unit: 'pot' }
    ]
  },
  {
    id: '103', name: 'Miel Pur', price: 2500, unit: 'bouteille', category: 'breakfast', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80', rating: 4.9,
    description: "Miel pur naturel du nord, non mélangé.",
    variants: [
      { id: 'v1', label: 'Demi-litre', price: 2500, unit: 'btl' },
      { id: 'v2', label: 'Litre', price: 4500, unit: 'btl' }
    ]
  },
  {
    id: '105', name: 'Flocons d\'Avoine', price: 1500, unit: 'boîte', category: 'breakfast', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1587411768638-ec71bdd94f48?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Flocons d'avoine (Quaker) pour une bouillie saine.",
  },
  {
    id: '106', name: 'Céréales Corn Flakes', price: 2000, unit: 'boîte', category: 'breakfast', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1598284594371-332924a48792?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Pétales de maïs croustillants pour le lait.",
  },
  {
    id: '45', name: 'Oeufs Frais', price: 2000, unit: 'plateau', category: 'breakfast', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80', rating: 4.7,
    description: "Oeufs frais de ferme.",
    variants: [
      { id: 'v1', label: 'Demi-plateau (15)', price: 1200, unit: 'demi' },
      { id: 'v2', label: 'Plateau complet (30)', price: 2200, unit: 'plateau' }
    ]
  },

  // --- BOISSONS ---
  {
    id: '21', name: 'Jus de Bissap', price: 300, unit: 'bouteille 0.5L', category: 'drinks', isLocal: true, isFresh: true, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1536935338788-843bb5d7d900?auto=format&fit=crop&w=600&q=80', rating: 5.0,
    description: "Jus d'hibiscus fait maison, sucré, mentholé et bien glacé.",
    variants: [
      { id: 'v1', label: 'Bouteille 0.33L', price: 300, unit: 'btl' },
      { id: 'v2', label: 'Bouteille 1.5L (GM)', price: 800, unit: 'btl' }
    ]
  },
  {
    id: '22', name: 'Eau Minérale', price: 400, unit: 'bouteille 1.5L', category: 'drinks', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1563283256-4299b9eb2b79?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Eau minérale naturelle locale.",
    variants: [
      { id: 'v1', label: 'Bouteille 1.5L', price: 400, unit: 'btl' },
      { id: 'v2', label: 'Pack 6x1.5L', price: 2200, unit: 'pack' },
      { id: 'v3', label: 'Pack 12x0.5L', price: 2400, unit: 'pack' }
    ]
  },
  {
    id: '23', name: 'Boisson Gazeuse', price: 600, unit: 'bouteille', category: 'drinks', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80', rating: 4.4,
    description: "Soda rafraîchissant.",
    variants: [
      { id: 'v1', label: 'Cola 60cl', price: 600, unit: 'btl' },
      { id: 'v2', label: 'Orange 60cl', price: 600, unit: 'btl' },
      { id: 'v3', label: 'Citron 60cl', price: 600, unit: 'btl' }
    ]
  },
  {
    id: '46', name: 'Bière Locale', price: 600, unit: 'bouteille', category: 'drinks', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "La bière du pays, bien glacée. Consigne incluse.",
    variants: [
      { id: 'v1', label: 'Blonde 65cl', price: 600, unit: 'btl' },
      { id: 'v2', label: 'Brune 65cl', price: 700, unit: 'btl' },
      { id: 'v3', label: 'Casier 12 bouteilles', price: 7000, unit: 'casier' }
    ]
  },
  {
    id: '47', name: 'Malta', price: 600, unit: 'bouteille', category: 'drinks', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1571657805295-827d00f9160d?auto=format&fit=crop&w=600&q=80', rating: 4.7,
    description: "Boisson maltée sans alcool, riche en énergie.",
    variants: [
      { id: 'v1', label: 'Bouteille 33cl', price: 600, unit: 'btl' },
      { id: 'v2', label: 'Canette 33cl', price: 700, unit: 'canette' }
    ]
  },

  // --- SNACKS & APERO ---
  {
    id: '48', name: 'Chips de Plantain', price: 500, unit: 'sachet', category: 'snacks', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1623594132478-4c125d0c7f21?auto=format&fit=crop&w=600&q=80', rating: 4.9,
    description: "Chips de banane plantain croustillantes, légèrement salées.",
    variants: [
      { id: 'v1', label: 'Salé', price: 500, unit: 'sachet' },
      { id: 'v2', label: 'Sucré', price: 500, unit: 'sachet' }
    ]
  },
  {
    id: '49', name: 'Arachides Grillées', price: 200, unit: 'bouteille', category: 'snacks', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1524292261621-1259e830e255?auto=format&fit=crop&w=600&q=80', rating: 4.8,
    description: "Arachides grillées du village, croquantes.",
    variants: [
      { id: 'v1', label: 'Sachet simple', price: 100, unit: 'sachet' },
      { id: 'v2', label: 'Bouteille (Fanta)', price: 500, unit: 'btl' }
    ]
  },
  {
    id: '50', name: 'Klui Klui', price: 200, unit: 'sachet', category: 'snacks', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kuli-kuli_2.jpg/640px-Kuli-kuli_2.jpg', rating: 4.7,
    description: "Galettes d'arachide croustillantes, spécialité locale.",
  },

  // --- MAISON & ENTRETIEN ---
  {
    id: '51', name: 'Eau de Javel', price: 500, unit: 'litre', category: 'household', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Eau de javel concentrée pour désinfecter et blanchir.",
    variants: [
      { id: 'v1', label: 'Bouteille 1L', price: 500, unit: 'litre' },
      { id: 'v2', label: 'Bidon 5L', price: 2200, unit: 'bidon' }
    ]
  },
  {
    id: '52', name: 'Insecticide Spray', price: 2000, unit: 'spray', category: 'household', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1632832549242-7b243b879a95?auto=format&fit=crop&w=600&q=80', rating: 4.8,
    description: "Tue les moustiques, mouches et cafards instantanément.",
    variants: [
      { id: 'v1', label: '300ml', price: 2000, unit: 'spray' },
      { id: 'v2', label: '600ml (Grand)', price: 3500, unit: 'spray' }
    ]
  },
  {
    id: '53', name: 'Eponge Végétale', price: 200, unit: 'unité', category: 'household', isLocal: true, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1610438250910-01e8c7479c53?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Eponge traditionnelle pour la douche.",
  },

  // --- HYGIENE ---
  { 
    id: '11', name: 'Savon Kota', price: 400, unit: 'la barre', category: 'hygiene', isLocal: true, isFresh: false, minQuantity: 1, 
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=600&q=80', rating: 4.6,
    description: "Savon local au citron, très efficace contre les taches.",
    variants: [
      { id: 'v1', label: 'Unité (Barre)', price: 400, unit: 'barre' },
      { id: 'v2', label: 'Lot de 3', price: 1100, unit: 'lot' }
    ]
  },
  { 
    id: '107', name: 'Beurre de Karité', price: 500, unit: 'pot', category: 'hygiene', isLocal: true, isFresh: false, minQuantity: 1, 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Shea_butter.jpg/640px-Shea_butter.jpg', rating: 4.9,
    description: "Beurre de karité pur non raffiné pour la peau et les cheveux.",
    variants: [
      { id: 'v1', label: 'Petit pot', price: 500, unit: 'pot' },
      { id: 'v2', label: 'Grand pot', price: 1000, unit: 'pot' }
    ]
  },
  { 
    id: '12', name: 'Poudre à laver', price: 100, unit: 'sachet', category: 'hygiene', isLocal: false, isFresh: false, minQuantity: 5, 
    // Laundry Powder (Blue)
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0b6b?auto=format&fit=crop&w=600&q=80', rating: 4.3,
    description: "Petit sachet pour une lessive rapide.",
    variants: [
      { id: 'v1', label: 'Sachet 30g', price: 100, unit: 'sachet' },
      { id: 'v2', label: 'Sachet 250g', price: 500, unit: 'sachet' },
      { id: 'v3', label: 'Sachet 1kg', price: 1800, unit: 'sachet' }
    ]
  },
  {
    id: '28', name: 'Dentifrice', price: 500, unit: 'tube', category: 'hygiene', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1559599238-308793637427?auto=format&fit=crop&w=600&q=80', rating: 4.2,
    description: "Dentifrice protection anti-caries goût menthe fraîche.",
    variants: [
      { id: 'v1', label: 'Petit tube (50ml)', price: 500, unit: 'tube' },
      { id: 'v2', label: 'Grand tube (125ml)', price: 800, unit: 'tube' }
    ]
  },
  {
    id: '54', name: 'Savon de Toilette', price: 400, unit: 'unité', category: 'hygiene', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1607006411516-79b8a06df51b?auto=format&fit=crop&w=600&q=80', rating: 4.5,
    description: "Savon parfumé pour la peau.",
    variants: [
      { id: 'v1', label: 'Citron', price: 400, unit: 'unité' },
      { id: 'v2', label: 'Rose', price: 400, unit: 'unité' }
    ]
  },

  // --- PACKS REPAS ---
  { 
    id: '6', name: 'Pack Sauce Graine', price: 2500, unit: 'le kit (4 pers)', category: 'packs', isLocal: true, isFresh: true, minQuantity: 1, 
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80', rating: 5.0, tags: ['ReadyToCook'],
    description: "Tout ce qu'il faut : Jus de noix de palme frais, poisson fumé, crabe, piment, cube."
  },
  { 
    id: '7', name: 'Pack Tchèp Rouge', price: 3500, unit: 'le kit (4 pers)', category: 'packs', isLocal: true, isFresh: true, minQuantity: 1, 
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80', rating: 4.8, tags: ['ReadyToCook'],
    description: "Riz cassé 2 fois, légumes (chou, carotte, aubergine), poisson capitaine, huile, tomate concentrée."
  },

  // --- BEBE ---
  {
    id: '24', name: 'Couches Bébé', price: 3000, unit: 'paquet', category: 'baby', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80', rating: 4.7,
    description: "Couches douces et absorbantes pour le confort de bébé.",
    variants: [
      { id: 'v1', label: 'Taille 2 (3-6kg)', price: 3000, unit: 'paquet' },
      { id: 'v2', label: 'Taille 3 (4-9kg)', price: 3500, unit: 'paquet' },
      { id: 'v3', label: 'Taille 4 (7-18kg)', price: 4000, unit: 'paquet' }
    ]
  },
  {
    id: '25', name: 'Farine Lactée', price: 2500, unit: 'boîte', category: 'baby', isLocal: false, isFresh: false, minQuantity: 1,
    image: 'https://images.unsplash.com/photo-1584178668677-74272448372d?auto=format&fit=crop&w=600&q=80', rating: 4.8,
    description: "Céréales infantiles enrichies au fer et au lait. Dès 6 mois.",
    variants: [
      { id: 'v1', label: 'Boîte 400g', price: 2500, unit: 'boîte' },
      { id: 'v2', label: 'Boîte 900g', price: 5500, unit: 'boîte' }
    ]
  },
];
