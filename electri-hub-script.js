// ==========================================
// ELECTRI HUB - JAVASCRIPT
// E-commerce Platform for Electronics & Home Appliances
// ==========================================

// ========== STATE MANAGEMENT ==========
const appState = {
    currentPage: 'home',
    cart: [],
    selectedCategory: null,
    selectedProduct: null,
    products: {
        smartphones: [
            { id: 1, name: 'iPhone 14 Pro', category: 'smartphones', price: 89999, original: 99999, rating: 4.8, reviews: 1250, icon: '📱', featured: true },
            { id: 2, name: 'Samsung Galaxy S23', category: 'smartphones', price: 79999, original: 89999, rating: 4.7, reviews: 980, icon: '📱', featured: false },
            { id: 3, name: 'Xiaomi 13 Pro', category: 'smartphones', price: 59999, original: 79999, rating: 4.5, reviews: 750, icon: '📱', featured: false },
            { id: 4, name: 'OnePlus 11', category: 'smartphones', price: 54999, original: 69999, rating: 4.6, reviews: 620, icon: '📱', featured: false },
            { id: 5, name: 'Google Pixel 7', category: 'smartphones', price: 64999, original: 79999, rating: 4.7, reviews: 890, icon: '📱', featured: false },
            { id: 6, name: 'Vivo X80', category: 'smartphones', price: 49999, original: 69999, rating: 4.4, reviews: 540, icon: '📱', featured: false }
        ],
        laptops: [
            { id: 7, name: 'MacBook Pro 14"', category: 'laptops', price: 179999, original: 199999, rating: 4.9, reviews: 2100, icon: '💻', featured: true },
            { id: 8, name: 'Dell XPS 13', category: 'laptops', price: 119999, original: 149999, rating: 4.7, reviews: 1450, icon: '💻', featured: false },
            { id: 9, name: 'HP Pavilion 15', category: 'laptops', price: 59999, original: 79999, rating: 4.4, reviews: 680, icon: '💻', featured: false },
            { id: 10, name: 'Lenovo ThinkPad', category: 'laptops', price: 89999, original: 109999, rating: 4.6, reviews: 920, icon: '💻', featured: false },
            { id: 11, name: 'ASUS ROG Gaming', category: 'laptops', price: 139999, original: 169999, rating: 4.8, reviews: 1680, icon: '💻', featured: false },
            { id: 12, name: 'Acer Swift 3', category: 'laptops', price: 74999, original: 99999, rating: 4.5, reviews: 760, icon: '💻', featured: false }
        ],
        appliances: [
            { id: 13, name: 'Samsung Washing Machine', category: 'appliances', price: 34999, original: 49999, rating: 4.6, reviews: 890, icon: '🔧', featured: true },
            { id: 14, name: 'Whirlpool Refrigerator', category: 'appliances', price: 44999, original: 64999, rating: 4.5, reviews: 750, icon: '🔧', featured: false },
            { id: 15, name: 'LG Microwave Oven', category: 'appliances', price: 9999, original: 14999, rating: 4.4, reviews: 620, icon: '🔧', featured: false },
            { id: 16, name: 'Bajaj Mixer Grinder', category: 'appliances', price: 3999, original: 5999, rating: 4.3, reviews: 480, icon: '🔧', featured: false },
            { id: 17, name: 'Philips Air Purifier', category: 'appliances', price: 14999, original: 19999, rating: 4.7, reviews: 920, icon: '🔧', featured: false },
            { id: 18, name: 'Daikin Air Conditioner', category: 'appliances', price: 34999, original: 54999, rating: 4.8, reviews: 1120, icon: '🔧', featured: false }
        ],
        accessories: [
            { id: 19, name: 'Sony WH-1000XM5 Headphones', category: 'accessories', price: 24999, original: 34999, rating: 4.8, reviews: 1890, icon: '🎧', featured: true },
            { id: 20, name: 'Apple AirPods Pro', category: 'accessories', price: 19999, original: 29999, rating: 4.7, reviews: 1450, icon: '🎧', featured: false },
            { id: 21, name: 'Samsung 25W Charger', category: 'accessories', price: 1999, original: 3999, rating: 4.5, reviews: 620, icon: '🎧', featured: false },
            { id: 22, name: 'Anker USB-C Cable', category: 'accessories', price: 499, original: 999, rating: 4.6, reviews: 780, icon: '🎧', featured: false },
            { id: 23, name: 'Belkin Screen Protector', category: 'accessories', price: 599, original: 1199, rating: 4.4, reviews: 540, icon: '🎧', featured: false },
            { id: 24, name: 'Spigen Phone Case', category: 'accessories', price: 799, original: 1599, rating: 4.7, reviews: 920, icon: '🎧', featured: false }
        ]
    },
    chatbotResponses: {
        greeting: ['👋 Hello! Welcome to Electri Hub! How can I help you today?', 'Hi there! 😊 Looking for something specific?', 'Welcome! What electronics can we help you find?'],
        delivery: ['📦 We offer free delivery on orders above ₹500! Delivery typically takes 2-3 business days.', '🚚 Express delivery available in major cities (1-2 days).', 'Standard delivery: 2-3 days | Express: Next day (₹99 extra)'],
        payment: ['💳 We accept all major payment methods: Credit/Debit cards, UPI, Net Banking, and Digital Wallets.', '🏦 Secure payment with SSL encryption. No hidden charges!', 'EMI options available on purchases above ₹10,000!'],
        products: ['🔍 Browse our 24+ products across Smartphones, Laptops, Appliances & Accessories!', 'We stock the latest models from top brands like Apple, Samsung, Dell, LG & more!', 'Use filters to find exactly what you need!'],
        support: ['📞 Need help? Contact us: support@electrihub.com | Call: +91 1234-567-890', '💬 Available 24/7 to assist you!', 'Can also visit our Help Center for FAQs.'],
        return: ['↩️ 30-day hassle-free return policy on all products!', 'Return window: 30 days from delivery. Must be in original condition.', 'No questions asked returns within 30 days!'],
        order: ['📋 Track your orders in real-time from your account dashboard.', '✅ You\'ll receive email & SMS updates at each stage.', 'Estimated delivery shown at checkout!'],
        default: ['🤔 I\'m not sure about that. Try asking about delivery, payment, returns, or our products!', 'Feel free to browse our products or ask about shipping & support!', 'Let me help! Ask about products, delivery, payment methods, or returns.']
    }
};

// ========== DOM ELEMENTS ==========
const cartBtn = document.getElementById('cartBtn');
const cartBadge = document.getElementById('cartBadge');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartBtn = document.querySelector('.close-cart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalSpan = document.getElementById('cartTotal');
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const productModal = document.getElementById('productModal');
const closeModalBtn = document.querySelector('.close-modal');
const modalBody = document.getElementById('modalBody');
const categoryCards = document.querySelectorAll('.category-card');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const newsletterForm = document.getElementById('newsletterForm');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChat');
const chatMessages = document.getElementById('chatMessages');
const closeAnnouncementBtn = document.querySelector('.close-announcement');

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    renderProducts('all');
    setupEventListeners();
    initializeChatbot();
});

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Cart functionality
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.toggle('active');
    });

    closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const filter = e.target.getAttribute('data-filter');
            renderProducts(filter);
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
            const filter = document.querySelector(`[data-filter="${category}"]`);
            if (filter) {
                filterButtons.forEach(b => b.classList.remove('active'));
                filter.classList.add('active');
                renderProducts(category);
                window.scrollTo({ top: document.querySelector('.products-section').offsetTop, behavior: 'smooth' });
            }
        });
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Newsletter form
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            addBotMessage(`✅ Thank you for subscribing! We'll send exclusive deals to ${email}`);
            newsletterForm.reset();
        }
    });

    // Chat functionality
    sendChatBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Announcement close
    closeAnnouncementBtn.addEventListener('click', () => {
        document.querySelector('.announcement-bar').style.display = 'none';
    });
}

// ========== PRODUCT RENDERING ==========
function renderProducts(category = 'all') {
    productsGrid.innerHTML = '';
    let productsToDisplay = [];

    if (category === 'all') {
        productsToDisplay = Object.values(appState.products).flat();
    } else {
        productsToDisplay = appState.products[category] || [];
    }

    productsToDisplay.forEach(product => {
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
                    <span>${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="product-price">
                    <div class="current-price">₹${product.price.toLocaleString()}</div>
                    <div class="original-price">₹${product.original.toLocaleString()}</div>
                </div>
                <div class="product-actions">
                    <button class="view-btn" onclick="viewProduct(${product.id})">View</button>
                    <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
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
                    <span>${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="product-price">
                    <div class="current-price">₹${product.price.toLocaleString()}</div>
                    <div class="original-price">₹${product.original.toLocaleString()}</div>
                </div>
                <div class="product-actions">
                    <button class="view-btn" onclick="viewProduct(${product.id})">View</button>
                    <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
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
        <div style="font-size: 3rem; text-align: center; margin: 20px 0; color: #234C6A;">${product.icon}</div>
        <div class="modal-price">₹${product.price.toLocaleString()} <span style="color: #456882; font-size: 0.7em; text-decoration: line-through;">₹${product.original.toLocaleString()}</span></div>
        <div style="display: flex; gap: 10px; align-items: center; color: #456882; margin: 15px 0;">
            <span>⭐ ${product.rating}</span>
            <span>${product.reviews} Customer Reviews</span>
            <span style="background: #234C6A; color: #D2C1B6; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem;">Save ${discount}%</span>
        </div>
        <div class="modal-description">
            Premium ${product.category.slice(0, -1)} with latest technology, great performance, and excellent value for money.
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
    for (let category in appState.products) {
        const product = appState.products[category].find(p => p.id === id);
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
    const product = findProductById(productId);
    if (!product) return;

    const existingItem = appState.cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        appState.cart.push({ ...product, quantity });
    }

    updateCart();
    addBotMessage(`✅ Added ${quantity} x ${product.name} to your cart!`);
}

function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, newQuantity) {
    const item = appState.cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, newQuantity);
        updateCart();
    }
}

function updateCart() {
    updateCartBadge();
    renderCartItems();
    calculateTotal();
}

function updateCartBadge() {
    const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
}

function renderCartItems() {
    cartItemsContainer.innerHTML = '';

    if (appState.cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        return;
    }

    appState.cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">${item.icon}</div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

function calculateTotal() {
    const total = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalSpan.textContent = '₹' + total.toLocaleString();
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
    } else if (msg.includes('payment') || msg.includes('pay') || msg.includes('card') || msg.includes('upi')) {
        return appState.chatbotResponses.payment[Math.floor(Math.random() * appState.chatbotResponses.payment.length)];
    } else if (msg.includes('product') || msg.includes('what do you sell') || msg.includes('categories')) {
        return appState.chatbotResponses.products[Math.floor(Math.random() * appState.chatbotResponses.products.length)];
    } else if (msg.includes('support') || msg.includes('help') || msg.includes('contact') || msg.includes('call')) {
        return appState.chatbotResponses.support[Math.floor(Math.random() * appState.chatbotResponses.support.length)];
    } else if (msg.includes('return') || msg.includes('refund') || msg.includes('exchange')) {
        return appState.chatbotResponses.return[Math.floor(Math.random() * appState.chatbotResponses.return.length)];
    } else if (msg.includes('order') || msg.includes('track') || msg.includes('status')) {
        return appState.chatbotResponses.order[Math.floor(Math.random() * appState.chatbotResponses.order.length)];
    } else {
        return appState.chatbotResponses.default[Math.floor(Math.random() * appState.chatbotResponses.default.length)];
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

// Close mobile menu when link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// CTA Button smooth scroll
document.querySelector('.cta-btn').addEventListener('click', () => {
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
});

// Checkout button functionality
document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (appState.cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    const total = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Proceeding to checkout with total: ₹${total.toLocaleString()}\n\nThank you for shopping at Electri Hub!`);
    appState.cart = [];
    updateCart();
    cartSidebar.classList.remove('active');
});
