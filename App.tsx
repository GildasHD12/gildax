
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { 
  MapPin, ShoppingCart, Search, Menu, Plus, Minus, X, 
  Phone, Star, Clock, CheckCircle, ChefHat, Sparkles,
  ArrowRight, Heart, User as UserIcon, FileText, HelpCircle, LogOut, ChevronRight,
  ShieldCheck, Truck, CreditCard, AlertCircle, Home, Mail, Lock,
  Mic, Image as ImageIcon, Video, Wand2, Send, Play, Bot, Loader2, Settings2, Globe, Map,
  Edit, Trash2, Save, PlusCircle, ShoppingBag, SlidersHorizontal, MessageSquarePlus, Tag, Briefcase,
  Facebook, Instagram, Twitter, Smartphone, Zap, Gift, Shield, Copy, Ticket, Users, Crown, Banknote, Utensils, Quote
} from 'lucide-react';
import { 
  PRODUCTS, CATEGORIES, PROMOS, APP_NAME, ZONE_INFO, CURRENCY, WHATSAPP_NUMBER, LEGAL_TEXTS, COMPANY_ADDRESS, COMPANY_EMAIL, PARTNER_CAMPAIGNS, LOYALTY_TIERS, COUPONS, REVIEWS
} from './constants';
import { Product, CartItem, LocationState, ZoneId, PageView, User, Order, AiTab, ChatMessage, ProductCategory, ProductVariant, PartnerCampaign, UserRole, Review } from './types';
import { 
  generateRecipeSuggestion, chatWithChef, generateImage, editImage, generateVideo, transcribeAudio, speakText, checkVeoKey, requestVeoKey, ChatConfig, analyzeVideo
} from './services/geminiService';

// --- Sub-Components ---

const Toast = ({ message, onClose }: { message: string, onClose: () => void }) => (
  <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-800 text-white px-6 py-3 rounded-full shadow-xl z-[100] animate-bounce flex items-center gap-2">
    <CheckCircle size={18} className="text-green-300" />
    <span className="text-sm font-medium">{message}</span>
  </div>
);

// Fallback image URL
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80";

// --- MARKETING COMPONENTS ---

const HeroBanner = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-6 bg-green-900 shadow-xl mx-1">
      <div className="absolute inset-0 opacity-40">
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800/80 to-transparent"></div>
      <div className="relative p-6 sm:p-8 flex flex-col justify-center h-full text-white max-w-lg">
        <span className="bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded w-fit mb-2 uppercase tracking-wide">Nouveau à Cotonou</span>
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-2">Vos courses du marché, <br/><span className="text-green-300">livrées en 30 min !</span></h2>
        <p className="text-green-100 text-xs sm:text-sm mb-4">Plus besoin de sortir sous le soleil. On fait le marché pour vous.</p>
        <button onClick={() => document.getElementById('products-section')?.scrollIntoView({behavior: 'smooth'})} className="bg-white text-green-800 px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-green-50 w-fit flex items-center gap-2">
           Commander maintenant <ArrowRight size={16}/>
        </button>
      </div>
    </div>
  );
};

const TrustStrip = () => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-8 px-1">
      <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl flex flex-col items-center text-center">
         <div className="bg-white p-2 rounded-full shadow-sm mb-2 text-blue-600"><ShieldCheck size={20}/></div>
         <h4 className="font-bold text-xs text-blue-900">Paiement Sécurisé</h4>
         <p className="text-[10px] text-blue-600 leading-tight mt-1">Mobile Money à la livraison</p>
      </div>
      <div className="bg-orange-50 border border-orange-100 p-3 rounded-xl flex flex-col items-center text-center">
         <div className="bg-white p-2 rounded-full shadow-sm mb-2 text-orange-600"><Zap size={20}/></div>
         <h4 className="font-bold text-xs text-orange-900">Livraison Express</h4>
         <p className="text-[10px] text-orange-600 leading-tight mt-1">Partout dans la ville</p>
      </div>
      <div className="bg-green-50 border border-green-100 p-3 rounded-xl flex flex-col items-center text-center">
         <div className="bg-white p-2 rounded-full shadow-sm mb-2 text-green-600"><ChefHat size={20}/></div>
         <h4 className="font-bold text-xs text-green-900">100% Frais</h4>
         <p className="text-[10px] text-green-600 leading-tight mt-1">Directement du marché</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="mb-10 animate-fade-in">
       <div className="flex items-center gap-2 mb-4 px-1">
          <Quote className="text-green-600 fill-current" size={20}/>
          <h3 className="font-bold text-gray-800 text-lg">Ce qu'on dit au quartier</h3>
       </div>
       
       <div className="flex gap-4 overflow-x-auto no-scrollbar pb-6 px-1 snap-x snap-mandatory">
          {REVIEWS.map(review => (
            <div key={review.id} className="min-w-[280px] sm:min-w-[320px] bg-white p-5 rounded-2xl shadow-md border border-gray-100 snap-center relative">
               {/* Quotation mark decoration */}
               <div className="absolute top-4 right-4 text-gray-100 font-serif text-6xl leading-none">"</div>
               
               <div className="flex items-center gap-3 mb-3 relative z-10">
                  <img src={review.avatar} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" alt={review.name} onError={(e) => e.currentTarget.src = FALLBACK_IMAGE}/>
                  <div>
                     <h4 className="font-bold text-sm text-gray-900">{review.name}</h4>
                     <p className="text-[10px] text-green-600 font-medium uppercase tracking-wide">{review.role}</p>
                  </div>
               </div>

               <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                     <Star key={i} size={12} className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}`}/>
                  ))}
               </div>

               <p className="text-sm text-gray-600 italic leading-relaxed relative z-10">
                  "{review.text}"
               </p>
            </div>
          ))}
       </div>
    </div>
  );
};

// --- PROFILE & LOYALTY COMPONENTS ---

const LoyaltyCard = ({ user }: { user: User }) => {
  const currentTier = LOYALTY_TIERS.slice().reverse().find(t => user.points >= t.minPoints) || LOYALTY_TIERS[0];
  const nextTierIndex = LOYALTY_TIERS.indexOf(currentTier) + 1;
  const nextTier = LOYALTY_TIERS[nextTierIndex];
  
  const progress = nextTier 
    ? Math.min(100, Math.max(0, ((user.points - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100))
    : 100;

  return (
    <div className={`w-full aspect-[1.586/1] rounded-2xl p-6 relative overflow-hidden shadow-2xl bg-gradient-to-br ${currentTier.color} text-white transition-all transform hover:scale-[1.02]`}>
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
       <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

       <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
             <div>
                <h3 className="font-bold text-lg tracking-widest">{APP_NAME} <span className="text-[10px] font-normal opacity-80">CLUB</span></h3>
                <div className="mt-1 inline-flex items-center gap-1 bg-black/20 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                   <Crown size={10} /> Membre {currentTier.name}
                </div>
             </div>
             <Sparkles size={24} className="opacity-80"/>
          </div>

          <div>
             <div className="flex justify-between items-end mb-2">
                <div>
                   <p className="text-[10px] opacity-70 uppercase tracking-wider">Points Fidélité</p>
                   <p className="text-3xl font-bold font-mono">{user.points.toLocaleString()}</p>
                </div>
                {nextTier && (
                   <div className="text-right">
                      <p className="text-[10px] opacity-70">Prochain niveau</p>
                      <p className="text-xs font-bold">{nextTier.name} ({nextTier.minPoints} pts)</p>
                   </div>
                )}
             </div>

             {/* Progress Bar */}
             {nextTier && (
               <div className="w-full h-1.5 bg-black/20 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-white/90 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
               </div>
             )}

             <div className="flex justify-between items-center">
                 <p className="font-medium tracking-wide uppercase text-sm">{user.name}</p>
                 <p className="text-[10px] opacity-60">ID: {user.id.toUpperCase()}</p>
             </div>
          </div>
       </div>
    </div>
  );
};

const ReferralSection = ({ user }: { user: User }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(user.referralCode);
    alert("Code copié !");
  };

  const shareMsg = `Utilise mon code parrain *${user.referralCode}* sur ZayaMarket et gagne 500F sur ta première commande ! Télécharge l'appli ici.`;

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden mb-6">
       <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
             <Users size={20} className="text-purple-200"/>
             <h3 className="font-bold text-lg">Parrainez vos amis</h3>
          </div>
          <p className="text-purple-100 text-sm mb-4">Gagnez <span className="font-bold text-white">500 points</span> pour chaque ami qui commande avec votre code.</p>
          
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-3 flex items-center justify-between gap-3">
             <div className="flex flex-col">
                <span className="text-[10px] text-purple-200 uppercase tracking-wider">Votre Code</span>
                <span className="font-mono font-bold text-xl tracking-widest">{user.referralCode}</span>
             </div>
             <button onClick={handleCopy} className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Copy size={18} />
             </button>
          </div>

          <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(shareMsg)}`, '_blank')} className="w-full mt-4 bg-white text-purple-700 font-bold py-3 rounded-xl shadow-lg hover:bg-purple-50 flex items-center justify-center gap-2">
             <Send size={18} /> Partager sur WhatsApp
          </button>
       </div>
       <Gift size={100} className="absolute -bottom-4 -right-4 text-white/10 rotate-12"/>
    </div>
  );
};

const CouponsSection = ({ user }: { user: User }) => {
  return (
    <div className="space-y-4">
       <h3 className="font-bold text-gray-800 flex items-center gap-2"><Ticket size={18}/> Mes Tickets Bonus</h3>
       <div className="grid grid-cols-2 gap-3">
          {COUPONS.map(coupon => {
             const canAfford = user.points >= coupon.cost;
             const Icon = coupon.icon === 'Truck' ? Truck : coupon.icon === 'Banknote' ? Banknote : coupon.icon === 'Utensils' ? Utensils : Gift;
             
             return (
               <div key={coupon.id} className={`border rounded-xl p-3 flex flex-col justify-between relative overflow-hidden ${canAfford ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-100 opacity-60'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${coupon.color}`}>
                     <Icon size={16}/>
                  </div>
                  <div>
                     <h4 className="font-bold text-sm leading-tight mb-1">{coupon.label}</h4>
                     <p className={`text-xs font-bold ${canAfford ? 'text-green-600' : 'text-gray-400'}`}>{coupon.cost} pts</p>
                  </div>
                  {canAfford && (
                     <button className="mt-3 w-full py-1.5 bg-gray-900 text-white text-[10px] font-bold rounded hover:bg-black">
                        Utiliser
                     </button>
                  )}
                  {/* Dotted Lines for Ticket Effect */}
                  <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-50 rounded-full border-r border-gray-200"></div>
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-50 rounded-full border-l border-gray-200"></div>
               </div>
             );
          })}
       </div>
    </div>
  );
};

// --- ADMIN COMPONENTS ---

const AdminProductModal = ({ 
  product, 
  onClose, 
  onSave, 
  onDelete 
}: { 
  product: Product | null, // null = new product
  onClose: () => void, 
  onSave: (p: Product) => void,
  onDelete?: (id: string) => void
}) => {
  const [formData, setFormData] = useState<Partial<Product>>(
    product || {
      name: '',
      price: 0,
      unit: '',
      category: 'fresh',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80',
      isLocal: false,
      isFresh: false,
      minQuantity: 1,
      rating: 5.0,
      description: ''
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;
    
    // Create new ID if needed
    const newProduct: Product = {
      ...formData as Product,
      id: product?.id || Date.now().toString()
    };
    onSave(newProduct);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white rounded-2xl w-full max-w-lg relative z-10 shadow-2xl overflow-y-auto max-h-[90vh] animate-zoom-in">
        <div className="p-4 border-b bg-gray-50 flex justify-between items-center rounded-t-2xl">
           <h2 className="font-bold text-lg flex items-center gap-2">
             {product ? <Edit size={20} className="text-blue-600"/> : <PlusCircle size={20} className="text-green-600"/>}
             {product ? 'Modifier Produit' : 'Ajouter Produit'}
           </h2>
           <button onClick={onClose}><X size={20} className="text-gray-500 hover:text-red-500"/></button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
           <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Nom</label>
                <input type="text" className="w-full border rounded-lg p-2 text-sm" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Prix ({CURRENCY})</label>
                <input type="number" className="w-full border rounded-lg p-2 text-sm" value={formData.price} onChange={e => setFormData({...formData, price: parseInt(e.target.value)})} required />
              </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Unité (ex: le kg)</label>
                <input type="text" className="w-full border rounded-lg p-2 text-sm" value={formData.unit} onChange={e => setFormData({...formData, unit: e.target.value})} required />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Catégorie</label>
                <select className="w-full border rounded-lg p-2 text-sm" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value as ProductCategory})}>
                   {CATEGORIES.filter(c => c.id !== 'all').map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
              </div>
           </div>

           <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Image URL</label>
              <input type="text" className="w-full border rounded-lg p-2 text-sm font-mono text-gray-500" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} />
              <img src={formData.image} alt="Preview" className="h-20 w-full object-cover rounded-lg mt-2 bg-gray-100 border" onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}/>
           </div>

           <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Description</label>
              <textarea className="w-full border rounded-lg p-2 text-sm h-20" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
           </div>

           <div className="flex gap-4 items-center bg-gray-50 p-3 rounded-lg">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                 <input type="checkbox" checked={formData.isLocal} onChange={e => setFormData({...formData, isLocal: e.target.checked})} />
                 <span className="font-semibold text-yellow-700">Made in Africa</span>
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                 <input type="checkbox" checked={formData.isFresh} onChange={e => setFormData({...formData, isFresh: e.target.checked})} />
                 <span className="font-semibold text-green-700">Produit Frais</span>
              </label>
           </div>

           <div className="flex gap-3 pt-4 border-t">
              {product && onDelete && (
                <button type="button" onClick={() => { if(confirm("Supprimer ce produit ?")) onDelete(product.id); }} className="px-4 py-2 bg-red-100 text-red-600 rounded-lg font-bold text-sm hover:bg-red-200">
                   <Trash2 size={18}/>
                </button>
              )}
              <div className="flex-1"></div>
              <button type="button" onClick={onClose} className="px-6 py-2 text-gray-600 font-bold text-sm">Annuler</button>
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-700 flex items-center gap-2">
                 <Save size={18}/> Enregistrer
              </button>
           </div>
        </form>
      </div>
    </div>
  );
};

// --- PARTNERS VIEW ---

const PartnersView = ({ 
  onBack, 
  partners, 
  user,
  allProducts,
  onAddPartner,
  onAddToCart
}: { 
  onBack: () => void, 
  partners: PartnerCampaign[], 
  user: User | null,
  allProducts: Product[],
  onAddPartner: (p: PartnerCampaign) => void,
  onAddToCart: (p: Product) => void
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newPartner, setNewPartner] = useState<Partial<PartnerCampaign>>({
     brandName: '', title: '', description: '', bannerImage: '', color: 'bg-blue-600', productIds: []
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if(newPartner.brandName && newPartner.title) {
       onAddPartner({
         ...newPartner as PartnerCampaign,
         id: Date.now().toString(),
         productIds: [] // Empty for demo, admin would select products ideally
       });
       setIsFormOpen(false);
    }
  };

  const contactText = `Bonjour ZayaMarket, je suis une marque et je souhaite devenir partenaire pour afficher mes produits sur votre application.`;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white sticky top-0 z-40 border-b shadow-sm">
         <div className="flex items-center p-4 gap-3">
             <button onClick={onBack} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"><ArrowRight size={20} className="rotate-180"/></button>
             <div>
                <h1 className="font-bold text-lg flex items-center gap-2 text-blue-900"><Briefcase size={20}/> Espace Marques</h1>
                <p className="text-xs text-gray-500">Nos partenaires officiels</p>
             </div>
         </div>
      </div>

      <div className="p-4 max-w-2xl mx-auto space-y-6">
          {/* Header Card */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-xl font-bold mb-2">Découvrez les grandes marques</h2>
                <p className="text-blue-100 text-sm mb-4">Des offres exclusives et des produits de qualité directement des fabricants.</p>
                <button onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(contactText)}`)} className="bg-white text-blue-900 px-4 py-2 rounded-lg text-xs font-bold shadow hover:bg-gray-100 transition-colors">
                   Devenir Partenaire
                </button>
             </div>
             <Briefcase className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 rotate-12"/>
          </div>

          {/* Admin Add Button */}
          {user?.role === 'ADMIN' && (
             <div className="flex justify-end">
                <button onClick={() => setIsFormOpen(true)} className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-xs font-bold">
                   <PlusCircle size={16}/> Ajouter une campagne
                </button>
             </div>
          )}

          {/* Admin Form */}
          {isFormOpen && (
             <div className="bg-white p-4 rounded-xl shadow-lg border animate-slide-up">
                <h3 className="font-bold mb-3">Nouvelle Campagne</h3>
                <form onSubmit={handleCreate} className="space-y-3">
                   <input className="w-full border p-2 rounded text-sm" placeholder="Nom de la marque (ex: Nescafé)" value={newPartner.brandName} onChange={e => setNewPartner({...newPartner, brandName: e.target.value})} required />
                   <input className="w-full border p-2 rounded text-sm" placeholder="Titre de la promo" value={newPartner.title} onChange={e => setNewPartner({...newPartner, title: e.target.value})} required />
                   <textarea className="w-full border p-2 rounded text-sm" placeholder="Description" value={newPartner.description} onChange={e => setNewPartner({...newPartner, description: e.target.value})} />
                   <input className="w-full border p-2 rounded text-sm" placeholder="Image Banner URL" value={newPartner.bannerImage} onChange={e => setNewPartner({...newPartner, bannerImage: e.target.value})} />
                   <div className="flex gap-2">
                      <button type="button" onClick={() => setIsFormOpen(false)} className="flex-1 bg-gray-100 py-2 rounded text-xs font-bold">Annuler</button>
                      <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded text-xs font-bold">Publier</button>
                   </div>
                </form>
             </div>
          )}

          {/* Campaigns List */}
          <div className="space-y-8">
             {partners.map(partner => (
                <div key={partner.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 animate-fade-in group">
                   {/* Banner */}
                   <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-black/30 z-10"></div>
                      <img src={partner.bannerImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => e.currentTarget.src = FALLBACK_IMAGE} />
                      <div className="absolute bottom-4 left-4 z-20 text-white">
                         <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-1 inline-block ${partner.color || 'bg-gray-800'}`}>{partner.brandName}</span>
                         <h3 className="text-xl font-bold leading-tight">{partner.title}</h3>
                      </div>
                   </div>
                   
                   {/* Description */}
                   <div className="p-4 pb-2">
                      <p className="text-sm text-gray-600">{partner.description}</p>
                   </div>

                   {/* Associated Products (Horizontal Scroll) */}
                   {partner.productIds.length > 0 && (
                      <div className="p-4 border-t bg-gray-50">
                         <h4 className="text-xs font-bold text-gray-500 uppercase mb-3 flex items-center gap-1"><Tag size={12}/> Produits en vedette</h4>
                         <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                            {allProducts.filter(p => partner.productIds.includes(p.id)).map(prod => (
                               <div key={prod.id} className="min-w-[120px] w-[120px] bg-white rounded-lg shadow-sm border p-2 flex flex-col shrink-0">
                                  <div className="h-20 bg-gray-100 rounded mb-2 overflow-hidden">
                                     <img src={prod.image} className="w-full h-full object-cover"/>
                                  </div>
                                  <h5 className="text-xs font-bold line-clamp-1 mb-1">{prod.name}</h5>
                                  <div className="mt-auto flex justify-between items-center">
                                     <span className="text-xs font-bold text-green-700">{prod.price}F</span>
                                     <button onClick={() => onAddToCart(prod)} className="bg-green-100 text-green-700 p-1 rounded hover:bg-green-200"><Plus size={12}/></button>
                                  </div>
                               </div>
                            ))}
                         </div>
                      </div>
                   )}
                </div>
             ))}

             {partners.length === 0 && (
                <div className="text-center py-10 text-gray-400">
                   <p>Aucune campagne partenaire pour le moment.</p>
                </div>
             )}
          </div>
      </div>
    </div>
  );
};

// ... (AiHubView and ProductDetailModal same as before, no admin logic there)
// --- AI HUB VIEW ---

const AiHubView = ({ onBack, userLocation }: { onBack: () => void, userLocation?: { lat: number, lng: number } | null }) => {
  const [activeTab, setActiveTab] = useState<AiTab>('CHAT');
  
  // Chat State
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Bonjour ! Je suis l'Assistant ZayaMarket. Je suis là pour vous aider à trouver le meilleur de nos produits ou vous donner des idées recettes !" }
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  
  // Chat Configs
  const [chatConfig, setChatConfig] = useState<ChatConfig>({
      useThinking: false,
      useSearch: false,
      useMaps: false,
      useLite: false
  });
  const [showChatSettings, setShowChatSettings] = useState(false);

  // Image Gen State
  const [imgPrompt, setImgPrompt] = useState("");
  const [generatedImg, setGeneratedImg] = useState<string | null>(null);
  const [isImgLoading, setIsImgLoading] = useState(false);
  const [imgAspectRatio, setImgAspectRatio] = useState("1:1");
  const [imgSize, setImgSize] = useState("1K");

  // Image Edit State
  const [editMode, setEditMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadImg, setUploadImg] = useState<string | null>(null);

  // Video State (Veo)
  const [videoPrompt, setVideoPrompt] = useState("");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [videoRatio, setVideoRatio] = useState<'16:9'|'9:16'>('16:9');
  const [videoInputImg, setVideoInputImg] = useState<string | null>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // Vision/Analysis State
  const [analysisVideo, setAnalysisVideo] = useState<string | null>(null);
  const analysisInputRef = useRef<HTMLInputElement>(null);

  // Audio State
  const [isRecording, setIsRecording] = useState(false);
  
  // --- Actions ---

  const handleSendChat = async () => {
    if ((!chatInput.trim() && !uploadImg && !analysisVideo)) return;
    
    // Check constraints
    if (chatConfig.useThinking && (chatConfig.useSearch || chatConfig.useMaps)) {
        alert("Attention: Le mode Pensée (Gemini 3 Pro) n'est pas compatible avec la recherche Google/Maps (Flash).");
        return;
    }

    const userMsg: ChatMessage = { role: 'user', text: chatInput, image: uploadImg || undefined, isThinking: chatConfig.useThinking };
    setMessages(prev => [...prev, userMsg]);
    setChatInput("");
    setIsChatLoading(true);

    try {
      let responseText = "";
      if (analysisVideo) {
          responseText = await analyzeVideo(analysisVideo, userMsg.text || "Analyse cette vidéo.");
      } else {
          // Pass userLocation to config
          responseText = await chatWithChef(userMsg.text, userMsg.image, { ...chatConfig, userLocation: userLocation || undefined });
      }
      setMessages(prev => [...prev, { role: 'model', text: responseText, isThinking: chatConfig.useThinking }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Erreur de connexion." }]);
    } finally {
      setIsChatLoading(false);
      setUploadImg(null); // Clear context
      setAnalysisVideo(null);
    }
  };

  const handleGenImage = async () => {
    if (!imgPrompt) return;
    setIsImgLoading(true);
    setGeneratedImg(null);
    
    if (editMode && uploadImg) {
      // Edit Mode (Nano Banana)
      const res = await editImage(uploadImg, imgPrompt);
      setGeneratedImg(res);
    } else {
      // Create Mode (Pro 3)
      const res = await generateImage(imgPrompt, imgAspectRatio, imgSize);
      setGeneratedImg(res);
    }
    setIsImgLoading(false);
  };

  const handleGenVideo = async () => {
    if (!videoPrompt && !videoInputImg) return;
    
    // Check Veo Key
    const hasKey = await checkVeoKey();
    if (!hasKey) {
        if (confirm("Pour utiliser Veo, vous devez sélectionner une clé API payante. Ouvrir la sélection ?")) {
            await requestVeoKey();
        } else {
            return;
        }
    }

    setIsVideoLoading(true);
    setVideoUrl(null);
    const res = await generateVideo(videoPrompt, videoRatio, videoInputImg || undefined);
    setVideoUrl(res);
    setIsVideoLoading(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (s: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => setAnalysisVideo(reader.result as string);
          reader.readAsDataURL(file);
      }
  }

  // Mock Audio Recording (Browser MediaRecorder implementation would be larger)
  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTimeout(() => {
        setIsRecording(false);
        setChatInput("Tomates, Oignons et Riz parfumé"); // Mock result
      }, 3000);
    }
  };

  const playTTS = async (text: string) => {
      // In a real app we decode the PCM data. For demo we just alert interaction.
      alert("TTS: Le modèle parlerait maintenant : " + text.substring(0, 50) + "...");
      // await speakText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white sticky top-0 z-40 border-b shadow-sm">
         <div className="flex items-center p-4 gap-3">
             <button onClick={onBack} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"><ArrowRight size={20} className="rotate-180"/></button>
             <div>
                <h1 className="font-bold text-lg bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Zaya Studio</h1>
                <p className="text-xs text-gray-500">Propulsé par Gemini & Veo</p>
             </div>
         </div>
         {/* Tabs */}
         <div className="flex overflow-x-auto no-scrollbar px-2 pb-0">
             {[
               {id: 'CHAT', label: 'Assistant', icon: <Bot size={18}/>},
               {id: 'IMAGE', label: 'Images', icon: <ImageIcon size={18}/>},
               {id: 'VIDEO', label: 'Vidéo', icon: <Video size={18}/>},
               {id: 'VISION', label: 'Analyse', icon: <Wand2 size={18}/>},
             ].map(tab => (
                 <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as AiTab)}
                    className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium whitespace-nowrap transition-colors ${activeTab === tab.id ? 'border-purple-600 text-purple-700' : 'border-transparent text-gray-500'}`}
                 >
                    {tab.icon} {tab.label}
                 </button>
             ))}
         </div>
      </div>

      <div className="p-4 max-w-lg mx-auto">
         
         {/* --- CHAT TAB --- */}
         {(activeTab === 'CHAT' || activeTab === 'VISION') && (
            <div className="flex flex-col h-[75vh]">
                <div className="flex-1 overflow-y-auto space-y-4 pb-4">
                    {messages.map((m, i) => (
                        <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] rounded-2xl p-3 ${m.role === 'user' ? 'bg-purple-600 text-white rounded-br-none' : 'bg-white border rounded-bl-none shadow-sm'}`}>
                                {m.image && <img src={m.image} alt="Upload" className="w-32 h-32 object-cover rounded-lg mb-2" />}
                                {m.isThinking && <div className="text-[10px] uppercase font-bold text-purple-400 mb-1 flex items-center gap-1 bg-white/20 p-1 rounded w-fit"><Sparkles size={10}/> Thinking</div>}
                                <p className="text-sm whitespace-pre-wrap">{m.text}</p>
                                {m.role === 'model' && (
                                    <button onClick={() => playTTS(m.text)} className="mt-2 text-xs opacity-50 hover:opacity-100 flex items-center gap-1"><Mic size={12}/> Lire</button>
                                )}
                            </div>
                        </div>
                    ))}
                    {isChatLoading && <div className="flex justify-start"><div className="bg-gray-100 rounded-2xl p-3 flex items-center gap-2 text-xs text-gray-500"><Loader2 size={14} className="animate-spin"/> Zaya réfléchit...</div></div>}
                </div>
                
                <div className="mt-auto bg-white p-3 border rounded-2xl shadow-lg">
                    {/* Vision Inputs */}
                    {activeTab === 'VISION' && (
                        <div className="flex gap-2 mb-2">
                             <input type="file" accept="image/*" ref={fileInputRef} onChange={(e) => handleImageUpload(e, setUploadImg)} className="hidden" />
                             <input type="file" accept="video/*" ref={analysisInputRef} onChange={handleVideoUpload} className="hidden" />
                             
                             <button onClick={() => fileInputRef.current?.click()} className={`flex-1 border-dashed border-2 rounded-xl p-4 flex flex-col items-center ${uploadImg ? 'bg-purple-50 border-purple-300' : 'border-gray-300'}`}>
                                {uploadImg ? <img src={uploadImg} className="h-10 object-contain"/> : <><ImageIcon size={20}/> <span className="text-[10px]">Photo</span></>}
                             </button>
                             <button onClick={() => analysisInputRef.current?.click()} className={`flex-1 border-dashed border-2 rounded-xl p-4 flex flex-col items-center ${analysisVideo ? 'bg-red-50 border-red-300' : 'border-gray-300'}`}>
                                {analysisVideo ? <Video size={24} className="text-red-500"/> : <><Video size={20}/> <span className="text-[10px]">Vidéo</span></>}
                             </button>
                        </div>
                    )}
                    
                    {/* Chat Settings Toggle */}
                    {activeTab === 'CHAT' && (
                         <div className="mb-2">
                             <div className="flex justify-between items-center mb-2">
                                <button onClick={() => setShowChatSettings(!showChatSettings)} className="flex items-center gap-1 text-xs text-gray-500 hover:text-purple-600">
                                    <Settings2 size={12}/> {showChatSettings ? 'Masquer options' : 'Options avancées'}
                                </button>
                             </div>
                             
                             {showChatSettings && (
                                 <div className="grid grid-cols-2 gap-2 bg-gray-50 p-2 rounded-lg mb-2 text-xs">
                                     <label className="flex items-center gap-2 cursor-pointer">
                                         <input type="checkbox" checked={chatConfig.useThinking} onChange={e => setChatConfig({...chatConfig, useThinking: e.target.checked, useLite: false, useSearch: false})} className="rounded text-purple-600"/>
                                         <span className="flex items-center gap-1"><Sparkles size={10} className="text-purple-600"/> Thinking (Pro 3)</span>
                                     </label>
                                     <label className="flex items-center gap-2 cursor-pointer">
                                         <input type="checkbox" checked={chatConfig.useSearch} onChange={e => setChatConfig({...chatConfig, useSearch: e.target.checked, useThinking: false})} className="rounded text-blue-600"/>
                                         <span className="flex items-center gap-1"><Globe size={10} className="text-blue-600"/> Google Search</span>
                                     </label>
                                     <label className="flex items-center gap-2 cursor-pointer">
                                         <input type="checkbox" checked={chatConfig.useLite} onChange={e => setChatConfig({...chatConfig, useLite: e.target.checked, useThinking: false})} className="rounded text-orange-600"/>
                                         <span className="flex items-center gap-1"><Clock size={10} className="text-orange-600"/> Fast (Lite)</span>
                                     </label>
                                 </div>
                             )}
                         </div>
                    )}

                    <div className="flex gap-2">
                        <button onClick={toggleRecording} className={`p-3 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-100 text-gray-600'}`}>
                            <Mic size={20} />
                        </button>
                        <input 
                            value={chatInput} 
                            onChange={e => setChatInput(e.target.value)}
                            placeholder="Posez une question..." 
                            className="flex-1 bg-gray-50 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            onKeyDown={e => e.key === 'Enter' && handleSendChat()}
                        />
                        <button onClick={handleSendChat} disabled={isChatLoading} className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 disabled:opacity-50">
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>
         )}

         {/* --- IMAGE TAB --- */}
         {activeTab === 'IMAGE' && (
            <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border shadow-sm">
                    <h3 className="font-bold mb-3 flex items-center gap-2"><ImageIcon size={18} className="text-purple-600"/> Studio Image</h3>
                    
                    <div className="flex gap-2 mb-4 bg-gray-100 p-1 rounded-lg">
                        <button onClick={() => {setEditMode(false); setUploadImg(null)}} className={`flex-1 py-1 text-xs font-bold rounded-md transition-all ${!editMode ? 'bg-white shadow text-purple-700' : 'text-gray-500'}`}>Créer (Pro 3)</button>
                        <button onClick={() => setEditMode(true)} className={`flex-1 py-1 text-xs font-bold rounded-md transition-all ${editMode ? 'bg-white shadow text-purple-700' : 'text-gray-500'}`}>Éditer (Nano Banana)</button>
                    </div>

                    {editMode && (
                        <div className="mb-3">
                            <input type="file" accept="image/*" ref={fileInputRef} onChange={(e) => handleImageUpload(e, setUploadImg)} className="hidden" />
                            <div onClick={() => fileInputRef.current?.click()} className="h-32 border-dashed border-2 border-purple-200 bg-purple-50 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden relative">
                                {uploadImg ? <img src={uploadImg} className="w-full h-full object-cover" /> : <span className="text-purple-400 text-xs">Cliquez pour uploader l'image source</span>}
                            </div>
                        </div>
                    )}

                    <textarea 
                        value={imgPrompt}
                        onChange={e => setImgPrompt(e.target.value)}
                        placeholder={editMode ? "Ex: Ajouter des lunettes de soleil, Rendre style rétro..." : "Ex: Un panier de fruits exotiques sur une plage au coucher du soleil..."}
                        className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none h-24 resize-none mb-3"
                    />
                    
                    {!editMode && (
                        <div className="mb-3 space-y-2">
                             <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                  {['1:1', '16:9', '9:16', '4:3', '3:4', '21:9'].map(r => (
                                      <button key={r} onClick={() => setImgAspectRatio(r)} className={`px-3 py-1 rounded-full text-xs border ${imgAspectRatio === r ? 'bg-purple-100 border-purple-500 text-purple-700' : 'border-gray-200'}`}>{r}</button>
                                  ))}
                             </div>
                             <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                  {['1K', '2K', '4K'].map(s => (
                                      <button key={s} onClick={() => setImgSize(s)} className={`px-3 py-1 rounded-full text-xs border ${imgSize === s ? 'bg-purple-100 border-purple-500 text-purple-700' : 'border-gray-200'}`}>{s}</button>
                                  ))}
                             </div>
                        </div>
                    )}

                    <button onClick={handleGenImage} disabled={isImgLoading || (editMode && !uploadImg)} className="w-full bg-purple-600 text-white font-bold py-3 rounded-xl hover:bg-purple-700 disabled:opacity-50 flex items-center justify-center gap-2">
                        {isImgLoading ? <Loader2 className="animate-spin"/> : <Sparkles size={18}/>}
                        {editMode ? 'Transformer l\'image' : 'Générer l\'image'}
                    </button>
                </div>

                {generatedImg && (
                    <div className="bg-white p-4 rounded-xl border shadow-sm animate-fade-in">
                        <h4 className="font-bold text-sm mb-2 text-green-700">Résultat :</h4>
                        <img src={generatedImg} alt="Generated" className="w-full rounded-lg shadow-sm" />
                        <button className="w-full mt-2 py-2 text-xs font-bold text-gray-500 border rounded hover:bg-gray-50">Télécharger</button>
                    </div>
                )}
            </div>
         )}

         {/* --- VIDEO TAB --- */}
         {activeTab === 'VIDEO' && (
             <div className="space-y-4">
                 <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-2xl text-white shadow-lg">
                     <h3 className="font-bold text-lg mb-1 flex items-center gap-2"><Video size={20} className="text-red-500"/> Veo Studio</h3>
                     <p className="text-xs text-gray-400 mb-4">Générez des vidéos incroyables avec Veo 3.1.</p>
                     
                     <div className="mb-3">
                         <input type="file" accept="image/*" ref={videoInputRef} onChange={(e) => handleImageUpload(e, setVideoInputImg)} className="hidden" />
                         {videoInputImg ? (
                             <div className="relative h-20 w-20 mb-2">
                                 <img src={videoInputImg} className="h-full w-full object-cover rounded-lg border-2 border-red-500"/>
                                 <button onClick={() => setVideoInputImg(null)} className="absolute -top-1 -right-1 bg-red-500 rounded-full p-0.5"><X size={12}/></button>
                             </div>
                         ) : (
                             <button onClick={() => videoInputRef.current?.click()} className="text-xs border border-gray-600 px-3 py-1 rounded hover:bg-gray-700 flex items-center gap-1">
                                 <ImageIcon size={12}/> Animer une image (optionnel)
                             </button>
                         )}
                     </div>

                     <textarea 
                        value={videoPrompt}
                        onChange={e => setVideoPrompt(e.target.value)}
                        placeholder="Décrivez votre vidéo (Ex: Un chef cuisinier qui coupe des légumes rapidement en slow motion...)"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-500 outline-none h-24 resize-none mb-4 text-white placeholder-gray-400"
                    />

                    <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-2">
                             <button onClick={() => setVideoRatio('16:9')} className={`px-3 py-1 rounded text-xs border ${videoRatio === '16:9' ? 'bg-red-500 border-red-500 text-white' : 'border-gray-600 text-gray-300'}`}>16:9</button>
                             <button onClick={() => setVideoRatio('9:16')} className={`px-3 py-1 rounded text-xs border ${videoRatio === '9:16' ? 'bg-red-500 border-red-500 text-white' : 'border-gray-600 text-gray-300'}`}>9:16</button>
                        </div>
                    </div>

                    <button onClick={handleGenVideo} disabled={isVideoLoading} className="w-full bg-white text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-100 disabled:opacity-50 flex items-center justify-center gap-2">
                        {isVideoLoading ? <Loader2 className="animate-spin text-red-600"/> : <Play size={18} className="text-red-600"/>}
                        Générer avec Veo
                    </button>
                    <p className="text-[10px] text-center mt-2 text-gray-500">* Nécessite une clé API payante sélectionnée.</p>
                 </div>

                 {videoUrl && (
                    <div className="bg-black rounded-xl overflow-hidden shadow-lg animate-fade-in">
                        <video src={videoUrl} controls className="w-full aspect-video" />
                    </div>
                 )}
             </div>
         )}

         {/* --- AUDIO TAB --- */}
         {activeTab === 'AUDIO' && (
             <div className="space-y-4 text-center py-10">
                 <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                     <Mic size={40} className="text-purple-600" />
                     {isRecording && <span className="absolute inset-0 rounded-full border-4 border-purple-500 animate-ping opacity-20"></span>}
                 </div>
                 <h3 className="font-bold text-lg">Dictez votre liste</h3>
                 <p className="text-sm text-gray-500 mb-6 px-8">Appuyez pour parler. ZayaMarket va transcrire votre liste de courses.</p>
                 
                 <button onClick={toggleRecording} className={`px-8 py-3 rounded-full font-bold shadow-lg transition-transform active:scale-95 ${isRecording ? 'bg-red-500 text-white' : 'bg-purple-600 text-white'}`}>
                     {isRecording ? 'Arrêter' : 'Commencer'}
                 </button>
                 
                 {chatInput && (
                     <div className="mt-8 bg-white p-4 rounded-xl border text-left mx-4 animate-fade-in">
                         <p className="text-xs text-gray-400 mb-1">Transcription :</p>
                         <p className="font-medium text-gray-800">{chatInput}</p>
                         <div className="mt-3 flex gap-2">
                             <button className="flex-1 py-2 bg-green-100 text-green-700 rounded-lg text-xs font-bold" onClick={() => alert("Articles ajoutés au panier !")}>Ajouter au panier</button>
                         </div>
                     </div>
                 )}
             </div>
         )}

      </div>
    </div>
  );
};

// UPDATED: ProductDetailModal now acts as a Bottom Sheet on Mobile (Bottom -> Up)
const ProductDetailModal = ({ product, onClose, onAdd, isFavorite, onToggleFav }: { product: Product, onClose: () => void, onAdd: (variant?: ProductVariant) => void, isFavorite: boolean, onToggleFav: () => void }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  useEffect(() => {
    // Default to first variant if exists, else null
    if (product.variants && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    } else {
      setSelectedVariant(null);
    }
  }, [product]);

  if (!product) return null;

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentUnit = selectedVariant ? selectedVariant.unit : product.unit;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      {/* Mobile: Bottom Sheet (slide-up), Desktop: Modal (zoom-in) */}
      <div className="bg-white w-full sm:max-w-md relative z-10 overflow-hidden shadow-2xl flex flex-col max-h-[90vh] rounded-t-3xl sm:rounded-2xl animate-slide-up sm:animate-zoom-in">
        <div className="relative h-64 bg-gray-100 shrink-0">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)} />
          <button onClick={onClose} className="absolute top-3 left-3 bg-white/50 p-2 rounded-full backdrop-blur-md hover:bg-white transition-colors"><X size={20}/></button>
          <button onClick={onToggleFav} className="absolute top-3 right-3 bg-white/50 p-2 rounded-full backdrop-blur-md hover:bg-white transition-colors">
            <Heart size={20} fill={isFavorite ? "currentColor" : "none"} className={isFavorite ? "text-red-500" : "text-gray-700"} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
           {/* Draggable handle for visual cue on mobile */}
           <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4 sm:hidden"></div>

           <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
                <p className="text-sm text-gray-500 capitalize">{product.category}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xl font-bold text-green-700">{currentPrice} {CURRENCY}</span>
                <span className="text-xs text-gray-400">/{currentUnit}</span>
              </div>
           </div>
           
           {/* VARIANTS SELECTION */}
           {product.variants && product.variants.length > 0 && (
             <div className="mb-4">
               <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Choisir une option :</label>
               <div className="flex flex-wrap gap-2">
                 {product.variants.map(v => (
                   <button 
                     key={v.id} 
                     onClick={() => setSelectedVariant(v)}
                     className={`px-3 py-2 rounded-lg text-xs font-bold border transition-all ${selectedVariant?.id === v.id ? 'bg-green-700 text-white border-green-700 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-green-500'}`}
                   >
                     {v.label}
                   </button>
                 ))}
               </div>
             </div>
           )}

           <div className="space-y-4 mb-6">
              <p className="text-gray-600 text-sm leading-relaxed">{product.description || "Aucune description disponible pour ce produit."}</p>
              
              <div className="flex flex-wrap gap-2">
                 {product.isLocal && <span className="text-[10px] font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Made in Africa</span>}
                 {product.isFresh && <span className="text-[10px] font-bold bg-green-100 text-green-800 px-2 py-1 rounded-full">Frais du jour</span>}
              </div>
           </div>
        </div>
        <div className="p-4 border-t bg-gray-50 mt-auto pb-8 sm:pb-4">
            <button onClick={() => {onAdd(selectedVariant || undefined); onClose();}} className="w-full bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-green-800 transform active:scale-95 transition-all flex items-center justify-center gap-2">
               <ShoppingCart size={20} />
               Ajouter au panier {selectedVariant ? `(${selectedVariant.label})` : ''}
            </button>
        </div>
      </div>
    </div>
  );
};

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, total, deliveryFee, zone, locationAddress, user }: { 
  isOpen: boolean, 
  onClose: () => void, 
  cart: CartItem[], 
  updateQuantity: (id: string, d: number) => void,
  total: number,
  deliveryFee: number,
  zone: ZoneId,
  locationAddress: string,
  user: User | null
}) => {
  if (!isOpen) return null;
  const finalTotal = total + deliveryFee;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const itemsList = cart.map(i => {
      const variantLabel = i.selectedVariant ? ` [${i.selectedVariant.label}]` : '';
      const price = i.selectedVariant ? i.selectedVariant.price : i.price;
      return `- ${i.quantity}x ${i.name}${variantLabel} (${price * i.quantity} F)`;
    }).join('%0A');
    
    const msg = `*Nouvelle Commande ZayaMarket* 🛒%0A%0A*Client:* ${user ? user.name : 'Invité'}%0A*Adresse:* ${locationAddress} (${ZONE_INFO[zone].label})%0A%0A*Panier:*%0A${itemsList}%0A%0A*Sous-total:* ${total} F%0A*Livraison:* ${deliveryFee} F%0A*TOTAL:* ${finalTotal} F%0A%0AMerci de confirmer !`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white w-full max-w-md h-full relative z-10 shadow-2xl flex flex-col animate-slide-in-right">
        <div className="p-4 border-b flex items-center justify-between bg-green-50">
           <h2 className="font-bold text-lg flex items-center gap-2"><ShoppingCart size={20}/> Mon Panier ({cart.reduce((a,c) => a+c.quantity, 0)})</h2>
           <button onClick={onClose}><X size={24} className="text-gray-500"/></button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
           {cart.length === 0 ? (
             <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                <ShoppingBag size={64} className="opacity-20"/>
                <p>Votre panier est vide.</p>
                <button onClick={onClose} className="text-green-600 font-bold text-sm">Continuer mes achats</button>
             </div>
           ) : (
             cart.map(item => {
               // EXPLICIT PRICE CALCULATION FOR SAFETY
               const displayPrice = item.selectedVariant ? item.selectedVariant.price : item.price;
               
               return (
                 <div key={item.id} className="flex gap-3 bg-white border rounded-xl p-2 shadow-sm">
                    <img src={item.image} className="w-20 h-20 rounded-lg object-cover bg-gray-100" onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)} />
                    <div className="flex-1 flex flex-col justify-between">
                       <div>
                         <h4 className="font-bold text-sm line-clamp-1">{item.name}</h4>
                         <p className="text-xs text-gray-500">
                           {item.selectedVariant ? item.selectedVariant.label : item.unit}
                         </p>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="font-bold text-green-700 text-sm">{displayPrice * item.quantity} F</span>
                          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                             <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-white rounded"><Minus size={12}/></button>
                             <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                             <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-white rounded"><Plus size={12}/></button>
                          </div>
                       </div>
                    </div>
                 </div>
               );
             })
           )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 bg-gray-50 border-t space-y-3">
             <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between"><span>Sous-total</span><span>{total} {CURRENCY}</span></div>
                <div className="flex justify-between">
                   <span className="flex items-center gap-1"><Truck size={12}/> Livraison ({ZONE_INFO[zone].label})</span>
                   <span>{deliveryFee} {CURRENCY}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-gray-900 pt-2 border-t border-gray-200">
                   <span>Total</span>
                   <span>{finalTotal} {CURRENCY}</span>
                </div>
             </div>
             <button onClick={handleCheckout} className="w-full bg-green-600 text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-green-700 flex items-center justify-center gap-2">
                Commander sur WhatsApp <ArrowRight size={18}/>
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, onClose, onNavigate, user }: { isOpen: boolean, onClose: () => void, onNavigate: (page: PageView) => void, user: User | null }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white w-64 h-full relative z-10 shadow-2xl flex flex-col animate-slide-in-left">
        <div className="p-6 bg-green-700 text-white">
           <h2 className="text-2xl font-bold">{APP_NAME}</h2>
           {user ? (
             <div className="mt-4 flex items-center gap-3">
               <div className="bg-white/20 p-2 rounded-full"><UserIcon size={20}/></div>
               <div>
                 <p className="font-bold text-sm flex items-center gap-2">
                    {user.name} 
                    {user.role === 'ADMIN' && <span className="bg-red-500 text-white text-[10px] px-1 rounded">ADMIN</span>}
                 </p>
                 <p className="text-xs opacity-70">{user.points} points</p>
               </div>
             </div>
           ) : (
             <button onClick={() => {onNavigate('LOGIN'); onClose();}} className="mt-4 bg-white text-green-800 px-4 py-2 rounded-lg text-sm font-bold w-full">Se connecter</button>
           )}
        </div>
        <div className="flex-1 overflow-y-auto py-2">
           <nav className="space-y-1 p-2">
              <button onClick={() => {onNavigate('HOME'); onClose();}} className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl flex items-center gap-3 font-medium text-gray-700"><Home size={20}/> Accueil</button>
              <button onClick={() => {onNavigate('PARTNERS'); onClose();}} className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl flex items-center gap-3 font-medium text-blue-700"><Briefcase size={20}/> Partenaires & Marques</button>
              <button onClick={() => {onNavigate('AI_HUB'); onClose();}} className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl flex items-center gap-3 font-medium text-purple-600"><Sparkles size={20}/> Zaya Studio (IA)</button>
              {user && <button onClick={() => {onNavigate('PROFILE'); onClose();}} className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl flex items-center gap-3 font-medium text-gray-700"><UserIcon size={20}/> Mon Profil</button>}
              <div className="border-t my-2"></div>
              <button onClick={() => {onNavigate('LEGAL_FAQ'); onClose();}} className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl flex items-center gap-3 font-medium text-gray-600"><HelpCircle size={20}/> Aide & FAQ</button>
           </nav>
        </div>
        <div className="p-4 border-t text-xs text-center text-gray-400">
           v2.0.0 • Made with ❤️ in Benin
        </div>
      </div>
    </div>
  );
};

const AuthView = ({ mode, onLogin, onSwitch }: { mode: 'LOGIN' | 'REGISTER', onLogin: (u: User) => void, onSwitch: () => void }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user: User = {
      id: 'u1',
      name: formData.name || 'Utilisateur',
      email: formData.email,
      phone: formData.phone || '00000000',
      points: 100,
      referralCode: (formData.name || 'USER').slice(0, 3).toUpperCase() + Math.floor(Math.random() * 1000), // Génération simple
      orders: [],
      role: 'USER' // Initialize
    };
    onLogin(user);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
         <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-700 mb-2">{APP_NAME}</h1>
            <p className="text-gray-500">{mode === 'LOGIN' ? 'Bon retour parmi nous !' : 'Créez votre compte'}</p>
         </div>
         <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'REGISTER' && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Nom complet</label>
                <div className="relative">
                  <UserIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                  <input type="text" required className="w-full border rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-green-500 outline-none" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
              </div>
            )}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input type="email" required className="w-full border rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-green-500 outline-none" placeholder="hello@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>
            {mode === 'REGISTER' && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Téléphone</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                  <input type="tel" required className="w-full border rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-green-500 outline-none" placeholder="97 00 00 00" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
            )}
            <button type="submit" className="w-full bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-green-800 transition-colors mt-4">
              {mode === 'LOGIN' ? 'Se connecter' : 'S\'inscrire'}
            </button>
         </form>
         <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">{mode === 'LOGIN' ? 'Pas encore de compte ?' : 'Déjà un compte ?'}</span>
            <button onClick={onSwitch} className="text-green-700 font-bold ml-1 hover:underline">
              {mode === 'LOGIN' ? 'Créer un compte' : 'Se connecter'}
            </button>
         </div>
      </div>
    </div>
  );
};

// ... LegalView and ProfileView are next ...

const LegalView = ({ page, onBack }: { page: PageView, onBack: () => void }) => {
  let content: any = "Contenu non disponible.";
  let title = "Information";

  switch(page) {
    case 'LEGAL_MENTIONS': title = "Mentions Légales"; content = LEGAL_TEXTS.MENTIONS; break;
    case 'LEGAL_PRIVACY': title = "Confidentialité"; content = LEGAL_TEXTS.PRIVACY; break;
    case 'LEGAL_CGU': title = "CGU"; content = LEGAL_TEXTS.CGU; break;
    case 'LEGAL_CGV': title = "CGV"; content = LEGAL_TEXTS.CGV; break;
    case 'LEGAL_DELIVERY': title = "Livraison"; content = LEGAL_TEXTS.DELIVERY; break;
    case 'LEGAL_RETURNS': title = "Retours"; content = LEGAL_TEXTS.RETURNS; break;
    case 'LEGAL_COOKIES': title = "Cookies"; content = LEGAL_TEXTS.COOKIES; break;
    case 'LEGAL_FAQ': title = "FAQ"; content = LEGAL_TEXTS.FAQ; break;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
       <div className="bg-white border-b sticky top-0 z-40 px-4 py-3 flex items-center gap-3">
          <button onClick={onBack} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"><ArrowRight size={20} className="rotate-180"/></button>
          <h1 className="font-bold text-lg">{title}</h1>
       </div>
       <div className="p-4 max-w-2xl mx-auto">
          {Array.isArray(content) ? (
            <div className="space-y-4">
              {content.map((item: any, i: number) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border">
                   <h3 className="font-bold text-green-800 mb-2">{item.q}</h3>
                   <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-6 rounded-xl shadow-sm border text-gray-700 leading-relaxed whitespace-pre-wrap">
              {content}
            </div>
          )}
       </div>
    </div>
  );
};

const ProfileView = ({ user, onLogout }: { user: User, onLogout: () => void }) => {
  const [activeTab, setActiveTab] = useState<'LOYALTY' | 'INFO'>('LOYALTY');

  return (
    <div className="p-4 max-w-lg mx-auto pt-20">
       
       <div className="flex gap-2 mb-6 bg-gray-200 p-1 rounded-xl">
          <button onClick={() => setActiveTab('LOYALTY')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'LOYALTY' ? 'bg-white shadow text-gray-900' : 'text-gray-500'}`}>
             Mon Espace Fidélité
          </button>
          <button onClick={() => setActiveTab('INFO')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'INFO' ? 'bg-white shadow text-gray-900' : 'text-gray-500'}`}>
             Mes Infos
          </button>
       </div>

       {activeTab === 'LOYALTY' && (
          <div className="space-y-6 animate-slide-up">
             <LoyaltyCard user={user} />
             <CouponsSection user={user} />
             <ReferralSection user={user} />
          </div>
       )}

       {activeTab === 'INFO' && (
          <div className="space-y-3 animate-slide-up">
             <div className="bg-white p-4 rounded-xl shadow-sm border mb-4">
                 <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">{user.name.charAt(0)}</div>
                     <div>
                         <h2 className="font-bold text-lg flex items-center gap-2">
                             {user.name}
                             {user.role === 'ADMIN' && <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">ADMIN</span>}
                         </h2>
                         <p className="text-sm text-gray-500">{user.email}</p>
                         <p className="text-sm text-gray-500">{user.phone}</p>
                     </div>
                 </div>
             </div>

              <button className="w-full bg-white p-4 rounded-xl shadow-sm border flex items-center justify-between hover:bg-gray-50">
                 <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><ShoppingBag size={20}/></div>
                    <span className="font-bold text-gray-700">Historique des Commandes</span>
                 </div>
                 <ChevronRight size={18} className="text-gray-400"/>
              </button>
              <button className="w-full bg-white p-4 rounded-xl shadow-sm border flex items-center justify-between hover:bg-gray-50">
                 <div className="flex items-center gap-3">
                    <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><MapPin size={20}/></div>
                    <span className="font-bold text-gray-700">Carnet d'adresses</span>
                 </div>
                 <ChevronRight size={18} className="text-gray-400"/>
              </button>
              <button onClick={onLogout} className="w-full bg-red-50 p-4 rounded-xl shadow-sm border border-red-100 flex items-center justify-between hover:bg-red-100">
                 <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg text-red-600"><LogOut size={20}/></div>
                    <span className="font-bold text-red-700">Se déconnecter</span>
                 </div>
              </button>
          </div>
       )}
    </div>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (page: PageView) => void }) => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-24 rounded-t-3xl mt-6">
       <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
             
             {/* Brand & Newsletter */}
             <div className="space-y-4">
                <h3 className="text-2xl font-bold text-green-400">{APP_NAME}</h3>
                <p className="text-sm text-gray-400">Le supermarché en ligne n°1 en Afrique. Qualité, fraicheur et rapidité.</p>
                <div className="bg-gray-800 p-1 rounded-lg flex items-center border border-gray-700">
                   <input type="email" placeholder="Votre email..." className="bg-transparent px-3 py-2 text-sm text-white focus:outline-none w-full" />
                   <button className="bg-green-600 p-2 rounded-lg text-white hover:bg-green-700"><Send size={16}/></button>
                </div>
                <p className="text-[10px] text-gray-500">Recevez nos promos exclusives.</p>
             </div>

             {/* Links */}
             <div>
                <h4 className="font-bold mb-4 text-white">À propos</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                   <li><button onClick={() => onNavigate('PARTNERS')} className="hover:text-green-400">Devenir Partenaire</button></li>
                   <li><button onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')} className="hover:text-green-400">Carrières (Livreurs)</button></li>
                   <li><button onClick={() => onNavigate('LEGAL_MENTIONS')} className="hover:text-green-400">Mentions Légales</button></li>
                   <li><button onClick={() => onNavigate('LEGAL_CGU')} className="hover:text-green-400">Conditions d'utilisation</button></li>
                </ul>
             </div>

             {/* Help */}
             <div>
                <h4 className="font-bold mb-4 text-white">Aide</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                   <li><button onClick={() => onNavigate('LEGAL_DELIVERY')} className="hover:text-green-400">Zones de livraison</button></li>
                   <li><button onClick={() => onNavigate('LEGAL_FAQ')} className="hover:text-green-400">FAQ</button></li>
                   <li><button onClick={() => onNavigate('LEGAL_RETURNS')} className="hover:text-green-400">Retours & Remboursements</button></li>
                   <li><button onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')} className="hover:text-green-400">Service Client WhatsApp</button></li>
                </ul>
             </div>

             {/* Payment & Social */}
             <div>
                 <h4 className="font-bold mb-4 text-white">Paiement Sécurisé</h4>
                 <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded">MTN Money</span>
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">Moov Money</span>
                    <span className="bg-orange-500 text-black text-[10px] font-bold px-2 py-1 rounded">Orange Money</span>
                    <span className="bg-blue-400 text-white text-[10px] font-bold px-2 py-1 rounded">Wave</span>
                    <span className="bg-gray-700 text-white text-[10px] font-bold px-2 py-1 rounded">Espèces</span>
                 </div>
                 
                 <h4 className="font-bold mb-2 text-white text-sm">Suivez-nous</h4>
                 <div className="flex gap-4 text-gray-400">
                    <button className="hover:text-blue-500"><Facebook size={20}/></button>
                    <button className="hover:text-pink-500"><Instagram size={20}/></button>
                    <button className="hover:text-blue-400"><Twitter size={20}/></button>
                 </div>
             </div>

          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
             <p className="text-xs text-gray-500 mb-2">© {new Date().getFullYear()} {APP_NAME} SARL. Tous droits réservés.</p>
             <p className="text-[10px] text-gray-600">Fait avec ❤️ pour l'Afrique.</p>
          </div>
       </div>
    </footer>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('HOME');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Products Management
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Partners Management
  const [partners, setPartners] = useState<PartnerCampaign[]>(PARTNER_CAMPAIGNS);

  // Filter State
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<{min: string, max: string}>({min: '', max: ''});

  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState<LocationState>({
    coords: null,
    zone: 'ZONE_2', 
    address: 'Abidjan, Cocody (Démo)',
    loading: false,
    error: null
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  useEffect(() => {
    const savedUser = localStorage.getItem('mama_user');
    if (savedUser) {
        const u = JSON.parse(savedUser);
        // Simple migration logic
        if (!u.role) u.role = (u as any).isAdmin ? 'ADMIN' : 'USER';
        setUser(u);
    }
    const savedCart = localStorage.getItem('mama_cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('mama_cart', JSON.stringify(cart));
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const handleLogin = (u: User) => {
    // ADMIN CHECK
    const updatedUser = { ...u };
    if (u.email.toLowerCase().includes('admin@zayamarket.africa')) {
      updatedUser.role = 'ADMIN';
      showToast("Mode Administrateur Activé 🛠️");
    } else {
      updatedUser.role = 'USER';
      showToast(`Bienvenue ${u.name} !`);
    }
    
    setUser(updatedUser);
    localStorage.setItem('mama_user', JSON.stringify(updatedUser));
    setCurrentView('HOME');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('mama_user');
    setCurrentView('HOME');
    showToast("Déconnecté.");
  };

  // Admin Actions
  const handleSaveProduct = (p: Product) => {
    if (user?.role !== 'ADMIN') return;

    setProducts(prev => {
      const exists = prev.find(prod => prod.id === p.id);
      if (exists) {
        return prev.map(prod => prod.id === p.id ? p : prod);
      }
      return [p, ...prev];
    });
    setAdminModalOpen(false);
    showToast(editingProduct ? "Produit modifié !" : "Produit ajouté !");
  };

  const handleDeleteProduct = (id: string) => {
    if (user?.role !== 'ADMIN') return;

    setProducts(prev => prev.filter(p => p.id !== id));
    setAdminModalOpen(false);
    showToast("Produit supprimé.");
  };

  const openAdminModal = (p: Product | null) => {
    setEditingProduct(p);
    setAdminModalOpen(true);
  };

  const handleAddPartner = (p: PartnerCampaign) => {
    if (user?.role !== 'ADMIN') return;

    setPartners(prev => [p, ...prev]);
    showToast("Campagne partenaire ajoutée !");
  };

  // UPDATED: Handle Variants
  const addToCart = useCallback((product: Product, variant?: ProductVariant) => {
    setCart(prev => {
      // Create a unique ID for the cart item (Product ID + Variant ID if exists)
      const cartItemId = variant ? `${product.id}-${variant.id}` : product.id;
      
      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        showToast(`${product.name} (+1)`);
        return prev.map(item => item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item);
      }
      
      showToast(`${product.name} ajouté !`);
      
      const newItem: CartItem = {
        ...product,
        id: cartItemId, // Override ID for cart tracking
        quantity: 1,
        selectedVariant: variant,
        price: variant ? variant.price : product.price, // Use variant price
        unit: variant ? variant.unit : product.unit
      };
      
      return [...prev, newItem];
    });
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  }, []);

  const toggleWishlist = (id: string) => {
    setWishlist(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // EXPLICIT TOTAL CALCULATION WITH VARIANTS
  const cartTotal = useMemo(() => cart.reduce((acc, item) => {
    const price = item.selectedVariant ? item.selectedVariant.price : item.price;
    return acc + (price * item.quantity);
  }, 0), [cart]);
  
  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  const detectLocation = () => {
    setLocation(prev => ({ ...prev, loading: true }));
    setTimeout(() => {
      if (navigator.geolocation) {
         const zones: ZoneId[] = ['ZONE_1', 'ZONE_2', 'ZONE_3'];
         const randomZone = zones[Math.floor(Math.random() * zones.length)];
         
         setLocation({
           coords: { lat: 5.35995, lng: -4.00826 }, 
           zone: randomZone,
           address: "Plateau, Rue du Commerce",
           loading: false,
           error: null
         });
         showToast("Zone détectée avec succès !");
      } else {
        setLocation(prev => ({ ...prev, loading: false, error: "Geolocation not supported" }));
      }
    }, 1500);
  };

  const filteredProducts = useMemo(() => {
    let result = products;
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(lower) || p.unit.toLowerCase().includes(lower));
    }
    
    // Price Filter
    const min = parseInt(priceRange.min) || 0;
    const max = parseInt(priceRange.max) || Infinity;
    result = result.filter(p => p.price >= min && p.price <= max);

    return result;
  }, [activeCategory, searchTerm, products, priceRange]);

  // Request Product Feature
  const handleRequestProduct = () => {
      const msg = `Bonjour ZayaMarket, je ne trouve pas ce produit : "${searchTerm}". Pouvez-vous l'ajouter ?`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // View Routing
  
  if (currentView === 'AI_HUB') {
      return <AiHubView onBack={() => setCurrentView('HOME')} userLocation={location.coords} />;
  }

  // Handle Partners View
  if (currentView === 'PARTNERS') {
      return (
        <PartnersView 
           onBack={() => setCurrentView('HOME')} 
           partners={partners}
           user={user}
           allProducts={products}
           onAddPartner={handleAddPartner}
           onAddToCart={(p) => addToCart(p)}
        />
      );
  }

  const isShopView = currentView === 'HOME';

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg(null)} />}
      <Sidebar 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={setCurrentView} 
        user={user}
      />
      
      {(currentView === 'LOGIN' || currentView === 'REGISTER') && (
        <AuthView 
          mode={currentView} 
          onLogin={handleLogin} 
          onSwitch={() => setCurrentView(currentView === 'LOGIN' ? 'REGISTER' : 'LOGIN')} 
        />
      )}

      {currentView.startsWith('LEGAL') && (
        <LegalView page={currentView} onBack={() => setCurrentView('HOME')} />
      )}

      {currentView === 'PROFILE' && user && (
         <>
           <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm p-4 flex items-center gap-4">
              <button onClick={() => setCurrentView('HOME')} className="p-2 bg-gray-100 rounded-full">
                <ArrowRight size={20} className="rotate-180 text-gray-700" />
              </button>
              <h1 className="font-bold text-lg">Mon Profil</h1>
           </div>
           <ProfileView user={user} onLogout={handleLogout} />
         </>
      )}

      {isShopView && (
        <>
            <header className="sticky top-0 z-40 bg-green-700 text-white shadow-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => setIsMenuOpen(true)} className="p-2 hover:bg-green-600 rounded-lg transition-colors">
                  <Menu size={24} />
                </button>
                <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                  <h1 className="text-xl font-bold leading-none tracking-tight">{APP_NAME}</h1>
                  <span className="text-[10px] text-green-100 italic uppercase tracking-wider">Le marché rapide</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <button onClick={() => setCurrentView('AI_HUB')} className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-2 rounded-full shadow-lg animate-pulse-slow hover:scale-105 transition-transform">
                     <Sparkles size={18} />
                 </button>
                {user ? (
                   <button onClick={() => setCurrentView('PROFILE')} className="hidden sm:flex items-center gap-2 bg-green-800 px-3 py-1.5 rounded-full hover:bg-green-600 transition-colors">
                      <UserIcon size={16} />
                      <span className="text-xs font-bold">{user.points} pts</span>
                   </button>
                ) : (
                  <button onClick={() => setCurrentView('LOGIN')} className="text-xs font-bold bg-white text-green-700 px-3 py-1.5 rounded-full shadow hover:bg-gray-100">
                    Se connecter
                  </button>
                )}
                <button className="relative p-2 hover:bg-green-600 rounded-lg transition-colors" onClick={() => setIsCartOpen(true)}>
                  <ShoppingCart size={24} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-bounce">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </header>

          <div className="bg-white border-b border-gray-100 p-2 shadow-sm sticky top-16 z-30">
            <div className="container mx-auto flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-700 truncate">
                <div className={`p-1.5 rounded-full ${location.loading ? 'bg-gray-100 animate-pulse' : 'bg-green-50'}`}>
                  <MapPin size={16} className="text-green-600" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xs text-gray-900 truncate max-w-[150px] sm:max-w-none">
                    {location.loading ? 'Localisation...' : (location.address || 'Choisir zone')}
                  </span>
                  {!location.loading && (
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${ZONE_INFO[location.zone].color}`}></span>
                      <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wide">
                        {ZONE_INFO[location.zone].label} • {ZONE_INFO[location.zone].time}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <button 
                onClick={detectLocation}
                className="shrink-0 text-[10px] font-bold bg-gray-900 text-white px-3 py-1.5 rounded-lg shadow hover:bg-gray-800 transition-colors"
              >
                {location.coords ? 'CHANGER' : 'LOCALISER'}
              </button>
            </div>
          </div>

          <div className="sticky top-[108px] z-20 bg-gray-50/95 backdrop-blur-sm pt-2 pb-2 shadow-sm border-b border-gray-200">
            <div className="container mx-auto px-4">
              <div className="relative mb-3 flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Chercher (riz, tomate, cube...)" 
                    className="w-full bg-white rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm border border-gray-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button onClick={() => setShowFilters(!showFilters)} className={`p-2.5 rounded-full border shadow-sm transition-colors ${showFilters ? 'bg-green-100 border-green-500 text-green-700' : 'bg-white border-gray-200 text-gray-600'}`}>
                   <SlidersHorizontal size={20} />
                </button>
              </div>

              {showFilters && (
                 <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-3 animate-fade-in">
                    <h4 className="font-bold text-xs text-gray-500 mb-2 uppercase">Filtrer par prix ({CURRENCY})</h4>
                    <div className="flex items-center gap-3">
                       <input type="number" placeholder="Min" value={priceRange.min} onChange={e => setPriceRange({...priceRange, min: e.target.value})} className="w-full bg-gray-50 border rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                       <span className="text-gray-400">-</span>
                       <input type="number" placeholder="Max" value={priceRange.max} onChange={e => setPriceRange({...priceRange, max: e.target.value})} className="w-full bg-gray-50 border rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                    </div>
                 </div>
              )}
              
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`
                      whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all border
                      ${activeCategory === cat.id 
                        ? 'bg-green-700 border-green-700 text-white shadow-md' 
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-100'}
                    `}
                  >
                    <span>{cat.icon}</span>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <main className="container mx-auto px-4 py-6 pb-20 relative">
             
             {/* --- MARKETING HERO --- */}
             {activeCategory === 'all' && !searchTerm && !showFilters && (
               <>
                 <HeroBanner />
                 <TrustStrip />
               </>
             )}

             {/* Promos (Horizontal Scroll) */}
             {activeCategory === 'all' && !searchTerm && !showFilters && (
                <div className="mb-8">
                   <div className="flex justify-between items-end mb-3 px-1">
                      <h3 className="font-bold text-gray-800">🔥 Offres du moment</h3>
                   </div>
                   <div className="overflow-x-auto no-scrollbar flex gap-4 pb-4 snap-x snap-mandatory">
                      {PROMOS.map(promo => (
                        <div key={promo.id} className={`shrink-0 w-[85%] sm:w-80 h-36 rounded-2xl bg-gradient-to-br ${promo.color} p-5 text-white relative shadow-lg overflow-hidden snap-center group cursor-pointer`}>
                          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                          <h3 className="font-bold text-xl mb-1 relative z-10">{promo.title}</h3>
                          <p className="text-sm opacity-90 w-3/4 mb-3 leading-tight relative z-10">{promo.description}</p>
                          <div className="flex items-center gap-2 relative z-10">
                            <span className="bg-white/25 px-3 py-1 rounded-lg text-xs font-mono font-bold tracking-wider border border-white/20">{promo.code}</span>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
             )}

             {/* NEW: Horizontal Product List (Left-Right Scroll) */}
             {activeCategory === 'all' && !searchTerm && !showFilters && (
               <div className="mb-8">
                   <div className="flex justify-between items-center mb-3 px-1">
                      <h3 className="font-bold text-gray-800">❤️ Les Indispensables</h3>
                      <button className="text-xs text-green-700 font-bold">Voir tout</button>
                   </div>
                   <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
                      {products.slice(0, 5).map(product => (
                          <div key={product.id} className="min-w-[140px] w-[140px] bg-white rounded-xl shadow-sm border p-2 snap-start flex flex-col" onClick={() => setSelectedProduct(product)}>
                              <div className="h-24 bg-gray-100 rounded-lg mb-2 overflow-hidden">
                                  <img src={product.image} className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = FALLBACK_IMAGE}/>
                              </div>
                              <h4 className="text-xs font-bold line-clamp-1 mb-1">{product.name}</h4>
                              <p className="text-xs text-green-700 font-bold mt-auto">{product.price} {CURRENCY}</p>
                          </div>
                      ))}
                   </div>
               </div>
             )}

             <div className="mb-4 flex justify-between items-center px-1" id="products-section">
               <h3 className="font-bold text-gray-800">
                 {activeCategory === 'all' ? '🛒 Tous les produits' : `📦 ${CATEGORIES.find(c => c.id === activeCategory)?.label}`}
               </h3>
               <span className="text-xs text-gray-400">{filteredProducts.length} articles</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {filteredProducts.map(product => {
                const cartItem = cart.find(c => c.id === product.id); // Simple check on base ID for display
                return (
                   <div key={product.id} className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow relative group/card">
                      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                         {product.isLocal && (
                          <span className="bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                            AFRICA
                          </span>
                        )}
                      </div>

                      {/* ADMIN CONTROLS OVERLAY */}
                      {user?.role === 'ADMIN' && (
                        <div className="absolute top-2 right-2 z-20 flex gap-1 bg-white/90 backdrop-blur rounded-lg p-1 shadow-sm opacity-0 group-hover/card:opacity-100 transition-opacity">
                           <button onClick={(e) => {e.stopPropagation(); openAdminModal(product)}} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md"><Edit size={14}/></button>
                           <button onClick={(e) => {e.stopPropagation(); handleDeleteProduct(product.id)}} className="p-1.5 text-red-600 hover:bg-red-50 rounded-md"><Trash2 size={14}/></button>
                        </div>
                      )}

                      <div className="relative h-36 bg-gray-100 cursor-pointer group" onClick={() => setSelectedProduct(product)}>
                        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)} />
                        <button onClick={(e) => {e.stopPropagation(); toggleWishlist(product.id)}} className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-colors">
                           <Heart size={14} fill={wishlist.has(product.id) ? "currentColor" : "none"} className={wishlist.has(product.id) ? "text-red-500" : ""} />
                        </button>
                      </div>
                      
                      <div className="p-3 flex-1 flex flex-col">
                        <div className="mb-1 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                          <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">{product.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star size={10} className="text-yellow-400" fill="currentColor" />
                            <span className="text-[10px] text-gray-400">{product.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-xs text-gray-500 mb-3 capitalize line-clamp-1">
                          {product.variants && product.variants.length > 0 ? `${product.variants.length} options` : product.unit}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <span className="font-bold text-green-700 text-sm">
                            {product.variants && product.variants.length > 0 ? 'Dès ' : ''}
                            {product.price} {CURRENCY}
                          </span>
                          
                          <button 
                            onClick={() => setSelectedProduct(product)}
                            className="bg-green-50 text-green-700 p-1.5 rounded-lg hover:bg-green-100 transition-colors border border-green-100"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                );
              })}
            </div>

            {/* Testimonials Section */}
            {activeCategory === 'all' && !searchTerm && !showFilters && (
                <TestimonialsSection />
            )}

            {filteredProducts.length === 0 && (
               <div className="text-center py-20 text-gray-400 flex flex-col items-center">
                 <div className="bg-gray-100 p-4 rounded-full mb-3">
                   <Search size={32} className="opacity-50" />
                 </div>
                 <p className="mb-4">Aucun produit trouvé pour "{searchTerm}"</p>
                 
                 {/* Feature: Request Product */}
                 <div className="bg-green-50 border border-green-100 p-4 rounded-xl max-w-xs w-full">
                    <h4 className="font-bold text-green-800 text-sm mb-2 flex items-center justify-center gap-2"><MessageSquarePlus size={16}/> Produit manquant ?</h4>
                    <p className="text-xs text-green-700 mb-3">Dites-nous ce que vous cherchez, on le trouve pour vous !</p>
                    <button onClick={handleRequestProduct} className="w-full bg-green-600 text-white py-2 rounded-lg text-xs font-bold hover:bg-green-700">
                       Demander sur WhatsApp
                    </button>
                 </div>

                 <button onClick={() => setSearchTerm('')} className="mt-4 text-gray-500 text-xs underline">Effacer la recherche</button>
               </div>
            )}
            
            {/* ADMIN FAB ADD BUTTON */}
            {user?.role === 'ADMIN' && (
               <button onClick={() => openAdminModal(null)} className="fixed bottom-24 right-4 z-30 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 hover:scale-110 transition-all">
                  <PlusCircle size={24} />
               </button>
            )}

          </main>
          
          <Footer onNavigate={setCurrentView} />
        </>
      )}

      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAdd={(variant) => addToCart(selectedProduct, variant)}
          isFavorite={wishlist.has(selectedProduct.id)}
          onToggleFav={() => toggleWishlist(selectedProduct.id)}
        />
      )}

      {adminModalOpen && (
         <AdminProductModal 
            product={editingProduct} 
            onClose={() => setAdminModalOpen(false)}
            onSave={handleSaveProduct}
            onDelete={handleDeleteProduct}
         />
      )}
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        total={cartTotal}
        deliveryFee={ZONE_INFO[location.zone].price}
        zone={location.zone}
        locationAddress={location.address}
        user={user}
      />
    </div>
  );
}
