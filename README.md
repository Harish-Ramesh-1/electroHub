# 🛍️ ElectroHub - E-Commerce Platform

A modern, fully-featured e-commerce website built with vanilla HTML, CSS, and JavaScript. ElectroHub showcases a sleek interface for browsing and purchasing electronics with an animated cursor, responsive design, and interactive shopping experience.

---

## ✨ Features

### 🏪 Core E-Commerce Features
- **36 Products** across 6 categories (Smartphones, Laptops, Appliances, Accessories, Audio, Cameras)
- **Shopping Cart** with add, remove, and quantity management
- **Checkout System** with order summary and total calculation
- **Product Filtering** by category with dynamic product display
- **Product Modal** with detailed information, images, and quantity selector
- **Search Functionality** to find products quickly
- **Responsive Design** - works perfectly on mobile, tablet, and desktop

### 🎨 User Interface
- **Multi-Page Navigation** (Home, Services, About, Contact)
- **Dynamic Content** with smooth page transitions
- **Hero Section** with call-to-action
- **Category Showcase** with 6 featured categories
- **Best Picks Section** - 10 randomly shuffled products on every visit
- **Special Offers** section with promotional deals
- **Customer Testimonials** with ratings and reviews
- **Newsletter Subscription** for email updates
- **Floating Chatbot** - AI-like support widget

### 🎯 Interactive Elements
- **Animated Cursor** - Dark navy custom cursor with smooth trailing effect
- **Hover Effects** - Product cards with image zoom and transitions
- **Smooth Animations** - Page transitions and UI interactions
- **Mobile Menu** - Hamburger menu for mobile devices
- **Search Bar** - Real-time product search
- **Filter Buttons** - Browse products by category

### 📱 Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px
- **Extra Small**: 480px and below

---

## 🏗️ Project Structure

```
MKT/
├── index.html              # Main HTML file (628 lines)
├── electroHub-styles.css   # Complete CSS styling (2087 lines)
├── electroHub-script.js    # JavaScript functionality (830+ lines)
├── README.md              # This file
└── [Product images from Unsplash CDN]
```

---

## 📁 File Details

### **index.html** (628 lines)
Main entry point with:
- Announcement bar with promotional message
- Sticky navigation bar with search and cart
- Mobile hamburger menu
- Hero section with welcome message
- 6 category showcase cards
- "Best Picks for You" section with 10 shuffled products
- Filter buttons for category browsing
- Special offers section (3 deals)
- Customer testimonials (4 reviews)
- Newsletter subscription form
- Multi-page content (Home, Services, About, Contact)
- Product modal for detailed view
- Checkout sidebar with cart summary
- Floating chatbot widget
- Footer with links and information

### **electroHub-styles.css** (2087 lines)
Complete styling with:
- CSS variables for colors and sizing
- Responsive grid layouts using CSS Grid and Flexbox
- Product card styling with hover effects
- Modal and popup styling
- Checkout sidebar design
- Mobile-first responsive design
- Smooth transitions and animations
- Chatbot widget styling
- Custom cursor styles

### **electroHub-script.js** (830+ lines)
JavaScript functionality including:
- **State Management** - Global `appState` object
- **Product Data** - 36 products with details and images
- **Rendering Functions**:
  - `renderShuffledProducts()` - Shows 10 random products
  - `renderProducts(category)` - Filter by category
  - `viewProduct(productId)` - Show product modal
- **Cart Functions**:
  - `addToCart()` - Add items to shopping cart
  - `removeFromCart()` - Remove items
  - `updateQuantityCheckout()` - Change quantities
  - `calculateCheckoutTotal()` - Compute totals
- **Navigation** - Multi-page routing system
- **Search** - Real-time product search
- **Chatbot** - Interactive support widget
- **Animated Cursor System** - Custom cursor with smooth animations

---

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Navy | `#1B3C53` | Main text, buttons |
| Secondary Navy | `#234C6A` | Interactive elements |
| Tertiary Slate | `#456882` | Secondary text |
| Accent Beige | `#D2C1B6` | Highlights, accents |
| Success Green | `#4CAF50` | Positive actions |
| Danger Red | `#F44336` | Warnings, errors |
| Warning Orange | `#FF9800` | Important notices |
| Info Blue | `#2196F3` | Information |

---

## 📦 Product Categories

### 1. **Smartphones** (6 products)
- iPhone 14 Pro, iPhone 15
- Samsung Galaxy S23
- Xiaomi 13 Pro
- OnePlus 11
- Google Pixel 7 Pro

### 2. **Laptops** (6 products)
- MacBook Pro 14"
- MacBook Air M2
- Dell XPS 13
- HP Pavilion 15
- ASUS ROG Gaming
- Lenovo ThinkPad

### 3. **Appliances** (6 products)
- Samsung Washing Machine
- LG Refrigerator
- Microwave Oven
- Air Conditioner
- IFB Washing Machine
- Godrej Refrigerator

### 4. **Accessories** (6 products)
- Sony Headphones
- Apple AirPods Pro
- USB-C Charger
- Wireless Charger
- Phone Case
- Screen Protector

### 5. **Audio** (6 products)
- Bose Speaker
- JBL Bluetooth Speaker
- Sony WH-1000XM5
- Marshall Speaker
- Soundbar System
- Portable Speaker

### 6. **Cameras** (6 products)
- Canon EOS R5
- Sony A7IV
- Nikon Z9
- Fujifilm X-T5
- GoPro Hero 12
- DJI Air 3S

---

## 🔧 Installation & Usage

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs as static HTML file

### How to Use

1. **Open the Website**
   ```bash
   # Simply open index.html in your browser
   # Or double-click the index.html file
   ```

2. **Browse Products**
   - View 10 shuffled products on the home page
   - Click filter buttons to browse by category
   - Use search bar to find specific products

3. **View Product Details**
   - Click "View" button on any product card
   - See full details, images, and ratings in modal
   - Select quantity and add to cart

4. **Shopping Cart**
   - Click cart icon to open checkout sidebar
   - View items, update quantities, or remove items
   - See real-time total calculations
   - Proceed to checkout

5. **Navigate Pages**
   - Click navigation links (Home, Services, About, Contact)
   - Smooth transitions between pages
   - All products accessible from any page

6. **Use Features**
   - **Search**: Type in search bar to find products
   - **Chatbot**: Click floating icon to chat with support
   - **Newsletter**: Subscribe for updates
   - **Testimonials**: Read customer reviews on homepage

---

## 🎯 Key Functionality

### Shopping Cart System
```javascript
// Add product to cart
addToCart(productId, quantity);

// Remove from cart
removeFromCart(productId);

// Update quantity
updateQuantityCheckout(productId, newQuantity);

// Calculate totals
calculateCheckoutTotal();
```

### Product Display
- **Best Picks**: 10 random products (shuffles on each page load)
- **Category Filter**: View all 36 products by category
- **Search**: Find products by name
- **Modal View**: Detailed product information with image

### Navigation
- Single Page Application (SPA) with client-side routing
- Smooth page transitions
- All pages: Home, Services, About, Contact

### Chatbot
- Floating widget that toggles on/off
- Context-aware responses
- Professional styling

---

## 🚀 Performance Features

- **Lightweight**: Pure vanilla JavaScript (no frameworks)
- **Fast Loading**: All images optimized from Unsplash CDN
- **Smooth Animations**: 60fps animations using requestAnimationFrame
- **Responsive**: Mobile-optimized with efficient CSS
- **No Dependencies**: Completely self-contained

---

## 🎨 Animated Cursor

Custom animated cursor with:
- **Dark Navy Design**: Professional dark blue color
- **Smooth Trailing**: Inner dot follows immediately, outer ring trails
- **Hover Effects**: Expands and glows on clickable elements
- **Blend Mode**: Multiply effect for dark overlay
- **Drop Shadows**: Multiple glow layers for visibility

---

## 📊 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| IE 11 | ⚠️ Limited |

---

## 🔐 Features Highlights

### Security
- Client-side cart management (no server required)
- No sensitive data transmission
- Safe to use for demo/testing

### Scalability
- Easy to add more products
- Modular JavaScript functions
- CSS variables for easy theming

### Customization
- Change colors via CSS variables
- Add/remove products in JavaScript
- Modify text and content easily
- Adjust pricing and discounts

---

## 📝 Product Data Structure

```javascript
{
    id: 1,                    // Unique identifier (1-36)
    name: 'Product Name',     // Product title
    category: 'category',     // Category slug
    price: 99999,            // Current price in rupees
    original: 129999,        // Original price
    rating: 4.8,             // Star rating (0-5)
    reviews: 1250,           // Number of reviews
    icon: '📱',              // Emoji icon
    image: 'https://...jpg', // Unsplash image URL
    featured: true           // Featured flag
}
```

---

## 🎯 Future Enhancements

Potential features for expansion:
- [ ] Backend API integration
- [ ] User authentication & accounts
- [ ] Payment gateway integration
- [ ] Order history & tracking
- [ ] Product reviews & ratings system
- [ ] Wishlist functionality
- [ ] Advanced search filters
- [ ] Product recommendations
- [ ] Admin dashboard
- [ ] Inventory management

---

## 📞 Support

For issues or questions:
1. Check the chatbot widget (floating icon)
2. Visit the Contact page
3. Review the Services page

---

## 📄 License

This project is provided as-is for educational and demonstration purposes.

---

## 👨‍💻 Developer

**Created by**: Harish Ramesh  
**Repository**: [GitHub - Harish-Ramesh-1/electroHub](https://github.com/Harish-Ramesh-1/electroHub)  
**Instagram**: [@electrohub613](https://www.instagram.com/electrohub613/)  
**Facebook**: [ElectroHub](https://www.facebook.com/profile.php?id=61583473838495)  
**Twitter/X**: [@hub_electr62316](https://x.com/hub_electr62316)  
**Date**: November 2025

---

## 🙌 Acknowledgments

- **Unsplash**: High-quality product images
- **Font Awesome**: Icon library
- **Segoe UI Font**: Professional typography

---

## 📱 Quick Stats

- **Total Products**: 36
- **Product Categories**: 6
- **Pages**: 4 (Home, Services, About, Contact)
- **Line of Code**: 2,500+
- **File Size**: ~50KB (with optimized images from CDN)
- **Load Time**: <2 seconds
- **Mobile Optimized**: ✅ Yes
- **Responsive Breakpoints**: 4

---

## 🎉 Thank You!

Thank you for exploring ElectroHub! We hope you enjoy the seamless shopping experience. Happy browsing! 🛒✨

