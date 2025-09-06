# CAFE FELICIDAD - MVP Development Plan

## Core Files to Create/Modify (Max 8 files limit)

### 1. **src/pages/Index.tsx** - Homepage
- Hero section with coffee farm imagery
- Featured products section
- About preview
- Tourism experiences preview
- Call-to-actions

### 2. **src/components/ProductCard.tsx** - Product Display Component
- Coffee product cards with images
- Price, description, add to cart functionality
- Hover effects and animations

### 3. **src/components/CartSidebar.tsx** - Shopping Cart
- Sliding cart sidebar
- Product list with quantities
- WhatsApp integration button
- Cart state management

### 4. **src/components/Header.tsx** - Navigation
- Logo, navigation menu
- Cart counter
- Mobile responsive hamburger menu

### 5. **src/lib/store.tsx** - Global State Management
- Cart state using React Context
- Product data
- Cart operations (add, remove, update quantities)

### 6. **src/lib/products.ts** - Product Data
- 6-8 coffee products with details
- Tourism packages data
- Static data structure

### 7. **src/components/WhatsAppButton.tsx** - WhatsApp Integration
- Floating WhatsApp button
- Message generation with cart details
- Contact integration

### 8. **index.html** - SEO and Meta Tags
- Update title, description, favicon
- Coffee-themed branding

## Key Features (MVP Focus)
- ✅ Responsive coffee-themed homepage
- ✅ Product showcase with 6 coffee varieties
- ✅ Functional shopping cart with localStorage
- ✅ WhatsApp integration for orders
- ✅ Tourism section preview
- ✅ Mobile-first responsive design
- ✅ Coffee color palette implementation

## Color Palette
- Primary: #8B4513 (Coffee Brown), #A0522D (Saddle Brown)
- Secondary: #228B22 (Forest Green), #32CD32 (Lime Green)
- Accent: #DAA520 (Goldenrod), #FFD700 (Gold)
- Neutrals: #F5F5DC (Beige), #F4F1E8 (Soft Earth)
- Text: #3C2414 (Dark Brown), #FFFFFF (White)

## Products to Include
1. Café Arábica Premium - $25.000 COP
2. Blend Especial Felicidad - $22.000 COP
3. Café Orgánico de Altura - $28.000 COP
4. Tueste Francés Intenso - $24.000 COP
5. Café Descafeinado Natural - $26.000 COP
6. Edición Limitada Geisha - $35.000 COP

## Tourism Experiences
1. Tour de la Finca - $50.000 COP
2. Taller de Barismo - $80.000 COP
3. Cena en la Finca - $120.000 COP
4. Hospedaje Rural - $200.000 COP/noche

## Technical Implementation
- TypeScript + React + Tailwind CSS
- Context API for cart state
- localStorage for persistence
- WhatsApp Business API integration
- Responsive design (mobile-first)
- SEO optimization