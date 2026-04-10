
export type ZoneId = 'ZONE_1' | 'ZONE_2' | 'ZONE_3' | 'ZONE_OUT';

export type PageView = 
  | 'HOME' 
  | 'LOGIN' 
  | 'REGISTER' 
  | 'PROFILE' 
  | 'AI_HUB' 
  | 'PARTNERS'
  | 'LEGAL_MENTIONS' 
  | 'LEGAL_PRIVACY' 
  | 'LEGAL_CGU' 
  | 'LEGAL_CGV' 
  | 'LEGAL_DELIVERY' 
  | 'LEGAL_RETURNS' 
  | 'LEGAL_COOKIES' 
  | 'LEGAL_FAQ';

export interface LocationState {
  coords: { lat: number; lng: number } | null;
  zone: ZoneId;
  address: string;
  loading: boolean;
  error: string | null;
}

export type UserRole = 'USER' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  points: number;
  referralCode: string; // Code de parrainage
  orders: Order[];
  role: UserRole; 
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'En attente' | 'Livré' | 'Annulé';
  items: CartItem[];
}

export interface ProductVariant {
  id: string;
  label: string; // ex: "5kg", "Bouteille 1L", "Pimenté"
  price: number;
  unit: string; // Pour l'affichage
}

export interface Product {
  id: string;
  name: string;
  price: number; // Prix par défaut (ou prix de la 1ère variante)
  unit: string; 
  category: ProductCategory;
  image: string;
  isLocal: boolean; 
  isFresh: boolean;
  minQuantity: number; 
  rating: number;
  tags?: string[];
  description?: string;
  variants?: ProductVariant[]; // NOUVEAU: Liste des variantes possibles
}

export type ProductCategory = 
  | 'market' 
  | 'fresh' 
  | 'packs' 
  | 'hygiene' 
  | 'local'
  | 'drinks'
  | 'breakfast'
  | 'meat'
  | 'baby'
  | 'spices'    // New
  | 'household' // New
  | 'snacks';   // New

export interface CartItem extends Product {
  quantity: number;
  selectedVariant?: ProductVariant; // Variante choisie dans le panier
}

export interface MealPack {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  servings: number;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  code: string;
  color: string;
}

export interface PartnerCampaign {
  id: string;
  brandName: string;
  title: string;
  description: string;
  bannerImage: string;
  color: string;
  productIds: string[]; // IDs of products linked to this campaign
}

export interface Coupon {
  id: string;
  label: string;
  cost: number;
  color: string;
  icon: any; // lucide icon name reference or component
}

export interface LoyaltyTier {
  name: string;
  minPoints: number;
  color: string;
  benefits: string[];
}

export interface Review {
  id: string;
  name: string;
  role: string; // ex: "Maman de 3 enfants", "Restaurateur"
  text: string;
  rating: number;
  avatar: string;
}

// AI Types
export type AiTab = 'CHAT' | 'IMAGE' | 'VIDEO' | 'VISION' | 'AUDIO';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  image?: string;
  isThinking?: boolean;
}
