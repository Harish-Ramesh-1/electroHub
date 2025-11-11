// ==========================================
// ELECTROHUB - JAVASCRIPT
// Multi-page E-commerce Platform
// ==========================================

// ========== STATE MANAGEMENT ==========
const appState = {
    currentPage: 'home',
    cart: [],
    selectedProduct: null,
    products: {
        smartphones: [
            { id: 1, name: 'iPhone 14 Pro', category: 'smartphones', price: 89999, original: 99999, rating: 4.8, reviews: 1250, icon: '📱', image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop', featured: true },
            { id: 2, name: 'Samsung Galaxy S23', category: 'smartphones', price: 79999, original: 89999, rating: 4.7, reviews: 980, icon: '📱', image: 'https://images.unsplash.com/photo-1610945415295-d9bbf86d2362?w=500&h=500&fit=crop', featured: false },
            { id: 3, name: 'Xiaomi 13 Pro', category: 'smartphones', price: 59999, original: 79999, rating: 4.5, reviews: 750, icon: '📱', image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop', featured: false },
            { id: 4, name: 'OnePlus 11', category: 'smartphones', price: 54999, original: 69999, rating: 4.6, reviews: 620, icon: '📱', image: 'https://images.unsplash.com/photo-1511449884486-a01980e01a18?w=500&h=500&fit=crop', featured: true },
            { id: 25, name: 'Google Pixel 7 Pro', category: 'smartphones', price: 64999, original: 84999, rating: 4.7, reviews: 890, icon: '📱', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop', featured: false },
            { id: 26, name: 'iPhone 15', category: 'smartphones', price: 99999, original: 129999, rating: 4.9, reviews: 1450, icon: '📱', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop', featured: true }
        ],
        laptops: [
            { id: 5, name: 'MacBook Pro 14"', category: 'laptops', price: 179999, original: 199999, rating: 4.9, reviews: 2100, icon: '💻', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop', featured: true },
            { id: 6, name: 'Dell XPS 13', category: 'laptops', price: 119999, original: 149999, rating: 4.7, reviews: 1450, icon: '💻', image: 'https://images.unsplash.com/photo-1588872657840-790ff3bde08c?w=500&h=500&fit=crop', featured: false },
            { id: 7, name: 'HP Pavilion 15', category: 'laptops', price: 59999, original: 79999, rating: 4.4, reviews: 680, icon: '💻', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop', featured: false },
            { id: 8, name: 'ASUS ROG Gaming', category: 'laptops', price: 139999, original: 169999, rating: 4.8, reviews: 1680, icon: '💻', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop', featured: false },
            { id: 27, name: 'Lenovo ThinkPad', category: 'laptops', price: 89999, original: 119999, rating: 4.6, reviews: 920, icon: '💻', image: 'https://images.unsplash.com/photo-1547394765-185ba278ff75?w=500&h=500&fit=crop', featured: false },
            { id: 28, name: 'MacBook Air M2', category: 'laptops', price: 129999, original: 159999, rating: 4.8, reviews: 1120, icon: '💻', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=500&fit=crop', featured: false }
        ],
        appliances: [
            { id: 9, name: 'Samsung Washing Machine', category: 'appliances', price: 34999, original: 49999, rating: 4.6, reviews: 890, icon: '🔧', image: 'https://images.unsplash.com/photo-1626996068904-c5dae5d46efb?w=500&h=500&fit=crop', featured: true },
            { id: 10, name: 'LG Refrigerator', category: 'appliances', price: 44999, original: 64999, rating: 4.5, reviews: 750, icon: '🔧', image: 'https://images.unsplash.com/photo-1584622614875-2f38dd00dbb1?w=500&h=500&fit=crop', featured: false },
            { id: 11, name: 'Microwave Oven', category: 'appliances', price: 9999, original: 14999, rating: 4.4, reviews: 620, icon: '🔧', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop', featured: false },
            { id: 12, name: 'Air Conditioner', category: 'appliances', price: 34999, original: 54999, rating: 4.8, reviews: 1120, icon: '🔧', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop', featured: true },
            { id: 29, name: 'IFB Washing Machine', category: 'appliances', price: 39999, original: 54999, rating: 4.7, reviews: 1050, icon: '🔧', image: 'https://images.unsplash.com/photo-1584622614875-2f38dd00dbb1?w=500&h=500&fit=crop', featured: false },
            { id: 30, name: 'Godrej Refrigerator', category: 'appliances', price: 41999, original: 59999, rating: 4.6, reviews: 890, icon: '🔧', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop', featured: false }
        ],
        accessories: [
            { id: 13, name: 'Sony Headphones', category: 'accessories', price: 24999, original: 34999, rating: 4.8, reviews: 1890, icon: '🎧', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop', featured: true },
            { id: 14, name: 'Apple AirPods Pro', category: 'accessories', price: 19999, original: 29999, rating: 4.7, reviews: 1450, icon: '🎧', image: 'https://images.unsplash.com/photo-1606841837239-c5a1a0aebc90?w=500&h=500&fit=crop', featured: false },
            { id: 15, name: 'USB-C Charger', category: 'accessories', price: 1999, original: 3999, rating: 4.5, reviews: 620, icon: '🎧', image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop', featured: false },
            { id: 16, name: 'Phone Case', category: 'accessories', price: 799, original: 1599, rating: 4.7, reviews: 920, icon: '🎧', image: 'https://images.unsplash.com/photo-1609269585253-05b19c61ff63?w=500&h=500&fit=crop', featured: false },
            { id: 31, name: 'Wireless Charger', category: 'accessories', price: 2499, original: 4999, rating: 4.6, reviews: 750, icon: '🎧', image: 'https://images.unsplash.com/photo-1491933382519-2bac3cb49b6d?w=500&h=500&fit=crop', featured: false },
            { id: 32, name: 'Screen Protector', category: 'accessories', price: 499, original: 999, rating: 4.4, reviews: 580, icon: '🎧', image: 'https://images.unsplash.com/photo-1607522369075-9c95e7c88e1d?w=500&h=500&fit=crop', featured: false }
        ],
        audio: [
            { id: 17, name: 'Bose Speaker', category: 'audio', price: 34999, original: 49999, rating: 4.8, reviews: 1200, icon: '🔊', image: 'https://images.unsplash.com/photo-1589003077984-894e133da19d?w=500&h=500&fit=crop', featured: true },
            { id: 18, name: 'JBL Bluetooth', category: 'audio', price: 14999, original: 24999, rating: 4.6, reviews: 890, icon: '🔊', image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop', featured: false },
            { id: 19, name: 'Soundbar System', category: 'audio', price: 24999, original: 39999, rating: 4.7, reviews: 760, icon: '🔊', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop', featured: false },
            { id: 20, name: 'Portable Speaker', category: 'audio', price: 9999, original: 14999, rating: 4.5, reviews: 650, icon: '🔊', image: 'https://images.unsplash.com/photo-1589003077984-894e133da19d?w=500&h=500&fit=crop', featured: false },
            { id: 33, name: 'Sony WH-1000XM5', category: 'audio', price: 29999, original: 44999, rating: 4.9, reviews: 1320, icon: '🔊', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop', featured: false },
            { id: 34, name: 'Marshall Speaker', category: 'audio', price: 19999, original: 29999, rating: 4.7, reviews: 890, icon: '🔊', image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop', featured: false }
        ],
        cameras: [
            { id: 21, name: 'Canon DSLR', category: 'cameras', price: 59999, original: 79999, rating: 4.8, reviews: 980, icon: '📷', image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop', featured: true },
            { id: 22, name: 'Sony Mirrorless', category: 'cameras', price: 89999, original: 124999, rating: 4.9, reviews: 1150, icon: '📷', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop', featured: false },
            { id: 23, name: 'GoPro Hero 11', category: 'cameras', price: 34999, original: 49999, rating: 4.7, reviews: 820, icon: '📷', image: 'https://images.unsplash.com/photo-1617638924702-92d37e439220?w=500&h=500&fit=crop', featured: false },
            { id: 24, name: 'Webcam 4K', category: 'cameras', price: 8999, original: 12999, rating: 4.4, reviews: 540, icon: '📷', image: 'https://images.unsplash.com/photo-1598148755341-aca9c2d0b374?w=500&h=500&fit=crop', featured: false },
            { id: 35, name: 'Nikon D850', category: 'cameras', price: 124999, original: 169999, rating: 4.9, reviews: 1250, icon: '📷', image: 'https://images.unsplash.com/photo-1609042231871-5820b0dcc2d8?w=500&h=500&fit=crop', featured: false },
            { id: 36, name: 'DJI Drone Camera', category: 'cameras', price: 79999, original: 109999, rating: 4.8, reviews: 1080, icon: '📷', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop', featured: false }
        ]
    },
    chatbotResponses: {
        greeting: ['👋 Hello! Welcome to ElectroHub! How can I help you today?', 'Hi there! 😊 Looking for something specific?', 'Welcome! What electronics can we help you find?'],
        delivery: ['📦 We offer free delivery on orders above ₹500! Delivery takes 2-3 business days.', '🚚 Express delivery available - next day in major cities (₹99 extra).'],
        payment: ['💳 We accept all payment methods: Cards, UPI, Wallets, and EMI options available!', 'EMI available on purchases above ₹10,000!'],
        services: ['🛠️ Check our Services page for warranty, free installation, returns policy, and more!'],
        about: ['📖 Learn about us on the About page - trusted by 5 lakhs+ customers!'],
        products: ['🛍️ Browse our 24+ products across 6 categories with amazing discounts!'],
        support: ['📞 Call: +91 1234-567-890 or Email: support@electrohub.com', '⏰ Support hours: Mon-Fri 9 AM-6 PM | Sat 10 AM-4 PM'],
        default: ['🤔 I can help with products, delivery, payments, returns, or services! What do you need?']
    }
};

// ========== DOM ELEMENTS ==========
const checkoutCart = document.getElementById('checkoutCart');
const cartBadge = document.getElementById('cartBadge');
const checkoutSidebar = document.getElementById('checkoutSidebar');
const closeCheckoutBtn = document.querySelector('.close-checkout');
const checkoutItems = document.getElementById('checkoutItems');
const checkoutTotal = document.getElementById('checkoutTotal');
const subtotal = document.getElementById('subtotal');
const delivery = document.getElementById('delivery');
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const productModal = document.getElementById('productModal');
const closeModalBtn = document.querySelector('.close-modal');
const modalBody = document.getElementById('modalBody');
const categoryCards = document.querySelectorAll('.category-card');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const navigationLinks = document.querySelectorAll('[data-page]');
const pages = document.querySelectorAll('.page');
const newsletterForm = document.getElementById('newsletterForm');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChat');
const chatMessages = document.getElementById('chatMessages');
const closeAnnouncementBtn = document.querySelector('.close-announcement');
const contactForm = document.getElementById('contactForm');
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWidget = document.getElementById('chatbotWidget');
const closeChatbot = document.getElementById('closeChatbot');

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    showPage('home'); // Initialize with home page
    renderShuffledProducts(); // Show 10 shuffled products from all categories
    setupEventListeners();
    initializeChatbot();
});

// ========== PAGE NAVIGATION ==========
function setupEventListeners() {
    // Page navigation
    navigationLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = link.getAttribute('data-page');
            showPage(pageName);
            mobileMenu.classList.remove('active');
        });
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Checkout cart
    checkoutCart.addEventListener('click', () => {
        checkoutSidebar.classList.toggle('active');
    });

    closeCheckoutBtn.addEventListener('click', () => {
        checkoutSidebar.classList.remove('active');
    });

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (appState.currentPage === 'home') {
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const filter = e.target.getAttribute('data-filter');
                renderProducts(filter);
            }
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterBySearch(searchTerm);
    });

    // Modal close
    closeModalBtn.addEventListener('click', () => {
        productModal.classList.remove('active');
    });

    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.classList.remove('active');
        }
    });

    // Category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            showPage('home');
            const filter = document.querySelector(`[data-filter="${category}"]`);
            if (filter) {
                filterButtons.forEach(b => b.classList.remove('active'));
                filter.classList.add('active');
                renderProducts(category);
            }
        });
    });

    // Newsletter form
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            addBotMessage(`✅ Thank you for subscribing! Check ${email} for exclusive deals.`);
            newsletterForm.reset();
        }
    });

    // Chat functionality
    sendChatBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Chatbot toggle
    chatbotToggle.addEventListener('click', () => {
        chatbotWidget.classList.toggle('active');
        chatbotToggle.classList.toggle('active');
    });

    closeChatbot.addEventListener('click', () => {
        chatbotWidget.classList.remove('active');
        chatbotToggle.classList.remove('active');
    });

    // Contact form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        addBotMessage(`✅ Hi ${name}! Your message has been sent. We'll get back to you soon!`);
        contactForm.reset();
    });

    // Announcement close
    closeAnnouncementBtn.addEventListener('click', () => {
        document.querySelector('.announcement-bar').style.display = 'none';
    });

    // Checkout button
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (appState.cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        const total = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Order confirmed! Total: ₹${total.toLocaleString()}\n\nThank you for shopping at ElectroHub!`);
        appState.cart = [];
        updateCheckout();
        checkoutSidebar.classList.remove('active');
    });
}

function showPage(pageName) {
    pages.forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(`${pageName}Page`);
    if (targetPage) {
        targetPage.classList.add('active');
        appState.currentPage = pageName;
    }

    // Update active nav link
    navigationLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToProducts() {
    showPage('home');
    const productsSection = document.getElementById('featuredProducts');
    productsSection.scrollIntoView({ behavior: 'smooth' });
}

// ========== PRODUCT RENDERING ==========
function renderProducts(category = 'all') {
    productsGrid.innerHTML = '';
    let productsToDisplay = [];

    if (category === 'all') {
        // Show only top 10 featured products first
        const allProducts = Object.values(appState.products).flat();
        const featuredProducts = allProducts.filter(p => p.featured);
        productsToDisplay = featuredProducts.slice(0, 10);
    } else {
        productsToDisplay = appState.products[category] || [];
    }

    productsToDisplay.forEach(product => {
        const discount = Math.round(((product.original - product.price) / product.original) * 100);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2236%22 fill=%22%23999%22%3E${product.icon}%3C/text%3E%3C/svg%3E'">
                ${product.featured ? '<div class="product-badge featured">Featured</div>' : `<div class="product-badge">-${discount}%</div>`}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <span>${product.rating} (${product.reviews})</span>
                </div>
                <div class="product-price">
                    <div class="current-price">₹${product.price.toLocaleString()}</div>
                    <div class="original-price">₹${product.original.toLocaleString()}</div>
                </div>
                <div class="product-actions">
                    <button class="view-btn" onclick="viewProduct(${product.id})">View</button>
                    <button class="add-btn" onclick="addToCart(${product.id})">Add</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// ========== CATEGORY PRODUCTS RENDERING ==========
function renderCategoryProducts(category, gridElementId) {
    const gridElement = document.getElementById(gridElementId);
    if (!gridElement) return;
    
    gridElement.innerHTML = '';
    const categoryProducts = appState.products[category] || [];

    categoryProducts.forEach(product => {
        const discount = Math.round(((product.original - product.price) / product.original) * 100);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2236%22 fill=%22%23999%22%3E${product.icon}%3C/text%3E%3C/svg%3E'">
                ${product.featured ? '<div class="product-badge featured">Featured</div>' : `<div class="product-badge">-${discount}%</div>`}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <span>${product.rating} (${product.reviews})</span>
                </div>
                <div class="product-price">
                    <div class="current-price">₹${product.price.toLocaleString()}</div>
                    <div class="original-price">₹${product.original.toLocaleString()}</div>
                </div>
                <div class="product-actions">
                    <button class="view-btn" onclick="viewProduct(${product.id})">View</button>
                    <button class="add-btn" onclick="addToCart(${product.id})">Add</button>
                </div>
            </div>
        `;
        gridElement.appendChild(productCard);
    });
}

// ========== SHUFFLED PRODUCTS RENDERING (10 from all categories) ==========
function renderShuffledProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    // Get all products from all categories
    const allProducts = Object.values(appState.products).flat();
    
    // Shuffle the products
    const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);
    
    // Take only first 10
    const topProducts = shuffledProducts.slice(0, 10);

    topProducts.forEach(product => {
        const discount = Math.round(((product.original - product.price) / product.original) * 100);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2236%22 fill=%22%23999%22%3E${product.icon}%3C/text%3E%3C/svg%3E'">
                ${product.featured ? '<div class="product-badge featured">Featured</div>' : `<div class="product-badge">-${discount}%</div>`}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <span>${product.rating} (${product.reviews})</span>
                </div>
                <div class="product-price">
                    <div class="current-price">₹${product.price.toLocaleString()}</div>
                    <div class="original-price">₹${product.original.toLocaleString()}</div>
                </div>
                <div class="product-actions">
                    <button class="view-btn" onclick="viewProduct(${product.id})">View</button>
                    <button class="add-btn" onclick="addToCart(${product.id})">Add</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// ========== CATEGORY TOGGLE SETUP ==========
function setupCategoryToggle() {
    const categoryHeaders = document.querySelectorAll('.category-header');
    
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const categorySection = this.closest('.category-section');
            const categoryGrid = categorySection.querySelector('.products-grid');
            const toggleIcon = this.querySelector('.toggle-icon');
            
            // Toggle the hidden class
            categoryGrid.classList.toggle('hidden');
            toggleIcon.classList.toggle('rotated');
            
            // Load products when opened for first time
            const gridId = categoryGrid.id;
            if (gridId && categoryGrid.children.length === 0) {
                const category = gridId.replace('Grid', '');
                renderCategoryProducts(category, gridId);
            }
        });
    });
}

// ========== SEARCH FUNCTIONALITY ==========
function filterBySearch(searchTerm) {
    if (searchTerm === '') {
        renderProducts('all');
        return;
    }

    const allProducts = Object.values(appState.products).flat();
    const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    productsGrid.innerHTML = '';
    if (filtered.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #456882; padding: 40px;">No products found</p>';
        return;
    }

    filtered.forEach(product => {
        const discount = Math.round(((product.original - product.price) / product.original) * 100);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                ${product.icon}
                ${product.featured ? '<div class="product-badge featured">Featured</div>' : `<div class="product-badge">-${discount}%</div>`}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <span>${product.rating} (${product.reviews})</span>
                </div>
                <div class="product-price">
                    <div class="current-price">₹${product.price.toLocaleString()}</div>
                    <div class="original-price">₹${product.original.toLocaleString()}</div>
                </div>
                <div class="product-actions">
                    <button class="view-btn" onclick="viewProduct(${product.id})">View</button>
                    <button class="add-btn" onclick="addToCart(${product.id})">Add</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// ========== PRODUCT MODAL ==========
function viewProduct(productId) {
    const product = findProductById(productId);
    if (!product) return;

    const discount = Math.round(((product.original - product.price) / product.original) * 100);
    modalBody.innerHTML = `
        <h2>${product.name}</h2>
        <div style="width: 100%; height: 300px; display: flex; align-items: center; justify-content: center; margin: 20px 0; background: linear-gradient(135deg, #1B3C53 0%, #234C6A 100%); border-radius: 10px; overflow: hidden;">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2248%22 fill=%22%23999%22%3E${product.icon}%3C/text%3E%3C/svg%3E'">
        </div>
        <div class="modal-price">₹${product.price.toLocaleString()} <span style="color: #456882; font-size: 0.7em; text-decoration: line-through;">₹${product.original.toLocaleString()}</span></div>
        <div style="display: flex; gap: 10px; align-items: center; color: #456882; margin: 15px 0;">
            <span>⭐ ${product.rating}</span>
            <span>${product.reviews} Reviews</span>
            <span style="background: #234C6A; color: #D2C1B6; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem;">Save ${discount}%</span>
        </div>
        <div class="modal-description">
            Premium ${product.category.slice(0, -1)} with latest technology, excellent performance, and great value for money. Includes manufacturer warranty and after-sales support.
        </div>
        <div class="quantity-selector">
            <button onclick="decreaseQuantity()">−</button>
            <input type="number" id="quantityInput" value="1" min="1" max="10" readonly>
            <button onclick="increaseQuantity()">+</button>
        </div>
        <button class="modal-add-btn" onclick="confirmAddToCart(${productId})">
            <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
    `;
    productModal.classList.add('active');
}

function findProductById(id) {
    // Convert id to number for strict comparison
    const numId = Number(id);
    
    for (let category in appState.products) {
        const product = appState.products[category].find(p => p.id === numId);
        if (product) return product;
    }
    return null;
}

function increaseQuantity() {
    const input = document.getElementById('quantityInput');
    if (parseInt(input.value) < 10) {
        input.value = parseInt(input.value) + 1;
    }
}

function decreaseQuantity() {
    const input = document.getElementById('quantityInput');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function confirmAddToCart(productId) {
    const quantity = parseInt(document.getElementById('quantityInput').value);
    addToCart(productId, quantity);
    productModal.classList.remove('active');
}

// ========== CART FUNCTIONALITY ==========
function addToCart(productId, quantity = 1) {
    // Convert productId to number for strict comparison
    const numId = Number(productId);
    const product = findProductById(numId);
    
    if (!product) {
        console.error(`Product not found: ID ${numId}`);
        addBotMessage(`❌ Sorry, we couldn't find that product!`);
        return;
    }

    const existingItem = appState.cart.find(item => item.id === numId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        appState.cart.push({ ...product, quantity });
    }

    updateCheckout();
    addBotMessage(`✅ Added ${quantity} x ${product.name} to your cart!`);
}

function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.id !== productId);
    updateCheckout();
}

function updateQuantityCheckout(productId, newQuantity) {
    const item = appState.cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, newQuantity);
        updateCheckout();
    }
}

function updateCheckout() {
    updateCartBadge();
    renderCheckoutItems();
    calculateCheckoutTotal();
}

function updateCartBadge() {
    const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
}

function renderCheckoutItems() {
    checkoutItems.innerHTML = '';

    if (appState.cart.length === 0) {
        checkoutItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        return;
    }

    appState.cart.forEach(item => {
        const checkoutItem = document.createElement('div');
        checkoutItem.className = 'checkout-item';
        checkoutItem.innerHTML = `
            <div class="checkout-item-image">
                <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 5px;">
            </div>
            <div class="checkout-item-details">
                <div class="checkout-item-name">${item.name}</div>
                <div class="checkout-item-price">₹${item.price.toLocaleString()}</div>
                <div class="checkout-item-controls">
                    <button class="quantity-btn" onclick="updateQuantityCheckout(${item.id}, ${item.quantity - 1})">−</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantityCheckout(${item.id}, ${item.quantity + 1})">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
        checkoutItems.appendChild(checkoutItem);
    });
}

function calculateCheckoutTotal() {
    const cartSubtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = cartSubtotal > 500 ? 0 : 50;
    const total = cartSubtotal + deliveryFee;

    subtotal.textContent = '₹' + cartSubtotal.toLocaleString();
    delivery.textContent = deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee;
    checkoutTotal.textContent = '₹' + total.toLocaleString();
}

// ========== CHATBOT ==========
function initializeChatbot() {
    const randomGreeting = appState.chatbotResponses.greeting[Math.floor(Math.random() * appState.chatbotResponses.greeting.length)];
    addBotMessage(randomGreeting);
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    addUserMessage(message);
    chatInput.value = '';

    setTimeout(() => {
        const response = getBotResponse(message);
        addBotMessage(response);
    }, 500);
}

function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase();

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return appState.chatbotResponses.greeting[Math.floor(Math.random() * appState.chatbotResponses.greeting.length)];
    } else if (msg.includes('deliver') || msg.includes('shipping') || msg.includes('how long')) {
        return appState.chatbotResponses.delivery[Math.floor(Math.random() * appState.chatbotResponses.delivery.length)];
    } else if (msg.includes('payment') || msg.includes('pay') || msg.includes('card') || msg.includes('upi') || msg.includes('emi')) {
        return appState.chatbotResponses.payment[Math.floor(Math.random() * appState.chatbotResponses.payment.length)];
    } else if (msg.includes('service') || msg.includes('warranty') || msg.includes('return') || msg.includes('refund')) {
        return appState.chatbotResponses.services[0];
    } else if (msg.includes('about') || msg.includes('who are') || msg.includes('company')) {
        return appState.chatbotResponses.about[0];
    } else if (msg.includes('product') || msg.includes('what do you sell') || msg.includes('categories')) {
        return appState.chatbotResponses.products[0];
    } else if (msg.includes('support') || msg.includes('help') || msg.includes('contact') || msg.includes('call')) {
        return appState.chatbotResponses.support[Math.floor(Math.random() * appState.chatbotResponses.support.length)];
    } else {
        return appState.chatbotResponses.default[0];
    }
}

function addUserMessage(message) {
    const userMsg = document.createElement('div');
    userMsg.className = 'user-message';
    userMsg.textContent = message;
    chatMessages.appendChild(userMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(message) {
    const botMsg = document.createElement('div');
    botMsg.className = 'bot-message';
    botMsg.textContent = message;
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ========== UTILITY FUNCTIONS ==========
function formatPrice(price) {
    return '₹' + price.toLocaleString();
}

// Close mobile menu when navigation link is clicked
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Close checkout sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.checkout-sidebar') && !e.target.closest('#checkoutCart')) {
        checkoutSidebar.classList.remove('active');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('#menuToggle')) {
        mobileMenu.classList.remove('active');
    }
});

// ========== ANIMATED CURSOR SYSTEM ==========
class AnimatedCursor {
    constructor() {
        this.cursorDot = null;
        this.cursorCircle = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.dotX = 0;
        this.dotY = 0;
        this.circleX = 0;
        this.circleY = 0;
        this.speed = 0.3;
        this.radius = 12;
        this.isHovering = false;
        
        this.init();
    }

    init() {
        this.createCursorElements();
        this.addEventListeners();
        this.animate();
    }

    createCursorElements() {
        // Hide default cursor
        document.documentElement.style.cursor = 'none';

        // Create cursor dot (center)
        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'cursor-dot';
        this.cursorDot.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20">
                <defs>
                    <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#000033;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#000011;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="10" cy="10" r="4" fill="url(#dotGradient)"/>
                <circle cx="10" cy="10" r="6" fill="none" stroke="#001155" stroke-width="1.5" opacity="1"/>
            </svg>
        `;
        document.body.appendChild(this.cursorDot);

        // Create cursor circle (outer ring with trails)
        this.cursorCircle = document.createElement('div');
        this.cursorCircle.className = 'cursor-circle';
        this.cursorCircle.innerHTML = `
            <svg width="40" height="40" viewBox="0 0 40 40">
                <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#001155;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#000033;stop-opacity:0.8" />
                        <stop offset="100%" style="stop-color:#002266;stop-opacity:0.6" />
                    </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="15" fill="none" stroke="url(#ringGradient)" stroke-width="2" opacity="0.9"/>
                <circle cx="20" cy="20" r="10" fill="none" stroke="#000033" stroke-width="1" opacity="0.7"/>
            </svg>
        `;
        document.body.appendChild(this.cursorCircle);

        // Add CSS for cursor elements
        this.addCursorStyles();
    }

    addCursorStyles() {
        if (!document.getElementById('cursor-styles')) {
            const style = document.createElement('style');
            style.id = 'cursor-styles';
            style.textContent = `
                .cursor-dot {
                    position: fixed;
                    width: 20px;
                    height: 20px;
                    pointer-events: none;
                    z-index: 99999;
                    mix-blend-mode: multiply;
                    filter: drop-shadow(0 0 5px rgba(0, 17, 85, 0.9)) drop-shadow(0 0 10px rgba(0, 34, 102, 0.6));
                    opacity: 1;
                }

                .cursor-circle {
                    position: fixed;
                    width: 40px;
                    height: 40px;
                    pointer-events: none;
                    z-index: 99998;
                    mix-blend-mode: multiply;
                    filter: drop-shadow(0 0 4px rgba(0, 17, 85, 0.8)) drop-shadow(0 0 8px rgba(0, 34, 102, 0.5));
                    transition: all 0.3s ease-out;
                    opacity: 1;
                }

                .cursor-circle.active {
                    transform: scale(1.8);
                    filter: drop-shadow(0 0 12px rgba(0, 17, 85, 0.9)) drop-shadow(0 0 20px rgba(0, 34, 102, 0.7)) drop-shadow(0 0 6px rgba(0, 51, 153, 0.5));
                }

                /* Hide system cursor on all elements */
                * {
                    cursor: none !important;
                }

                /* But show it for text selection */
                input,
                textarea,
                [contenteditable="true"] {
                    cursor: none !important;
                }
            `;
            document.head.appendChild(style);
        }
    }

    addEventListeners() {
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mouseenter', () => this.show());
        document.addEventListener('mouseleave', () => this.hide());

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, .navbar-brand, .search-btn, .cart-btn, .nav-links a, ' +
            '.menu-btn, .filter-btn, .cta-btn, .close-btn, .category-card, ' +
            '.product-card, input[type="submit"], .chatbot-icon'
        );

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.onHoverEnter());
            el.addEventListener('mouseleave', () => this.onHoverLeave());
        });
    }

    onMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

    onHoverEnter() {
        this.isHovering = true;
        if (this.cursorCircle) {
            this.cursorCircle.classList.add('active');
        }
    }

    onHoverLeave() {
        this.isHovering = false;
        if (this.cursorCircle) {
            this.cursorCircle.classList.remove('active');
        }
    }

    show() {
        if (this.cursorDot) this.cursorDot.style.opacity = '1';
        if (this.cursorCircle) this.cursorCircle.style.opacity = '1';
    }

    hide() {
        if (this.cursorDot) this.cursorDot.style.opacity = '0';
        if (this.cursorCircle) this.cursorCircle.style.opacity = '0';
    }

    animate() {
        // Smooth movement for dot
        this.dotX += (this.mouseX - this.dotX) * 0.5;
        this.dotY += (this.mouseY - this.dotY) * 0.5;

        // Smoother movement for circle (follows behind)
        this.circleX += (this.mouseX - this.circleX) * (this.speed / 2);
        this.circleY += (this.mouseY - this.circleY) * (this.speed / 2);

        // Update positions
        if (this.cursorDot) {
            this.cursorDot.style.left = this.dotX - 10 + 'px';
            this.cursorDot.style.top = this.dotY - 10 + 'px';
        }

        if (this.cursorCircle) {
            this.cursorCircle.style.left = this.circleX - 20 + 'px';
            this.cursorCircle.style.top = this.circleY - 20 + 'px';
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize animated cursor when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new AnimatedCursor();
    });
} else {
    new AnimatedCursor();
}
