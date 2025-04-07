// Language translations
const translations = {
    en: {
        'home': 'Home',
        'products': 'Products',
        'deals': 'Deals',
        'about': 'About',
        'contact': 'Contact',
        'title': 'Christmas Sales 2025',
        'subtitle': 'Discover amazing holiday deals and special offers!',
        'view-products': 'View Products',
        'featured-products': 'Featured Products',
        'product1-name': 'Premium Christmas Tree',
        'product1-desc': '7ft Premium Artificial Christmas Tree with LED Lights',
        'product2-name': 'Christmas Ornament Set',
        'product2-desc': '24-Piece Handcrafted Glass Ornament Collection',
        'product3-name': 'LED Christmas Lights',
        'product3-desc': '100ft Smart LED String Lights with Remote Control',
        'product4-name': 'Christmas Wreath',
        'product4-desc': '24" Premium Artificial Christmas Wreath with Berries',
        'add-to-cart': 'Add to Cart',
        'special-deals': 'Special Holiday Deals',
        'early-bird': 'Early Bird Special',
        'early-bird-desc': 'Get 20% off on all items',
        'bundle': 'Bundle Offers',
        'bundle-desc': 'Buy 2 get 1 free',
        'flash-sale': 'Flash Sale',
        'flash-sale-desc': 'Limited time offers',
        'shop-now': 'Shop Now',
        'about-title': 'About Our Christmas Sale',
        'about-desc': 'Join us for the biggest Christmas sale of 2025! We\'re offering amazing deals on a wide range of products. Don\'t miss out on these limited-time offers!',
        'contact-title': 'Contact Us',
        'name-placeholder': 'Your Name',
        'email-placeholder': 'Your Email',
        'message-placeholder': 'Your Message',
        'send-message': 'Send Message',
        'copyright': '© 2025 Xmas Sales. All rights reserved.',
        'success-message': 'Message sent successfully!',
        'error-message': 'Please fill in all fields correctly.',
        'countdown-title': 'Time Left Until Christmas:',
        'days': 'Days',
        'hours': 'Hours',
        'minutes': 'Minutes',
        'seconds': 'Seconds',
        'added-to-cart': 'Added to cart!',
        'view-cart': 'View Cart',
        'shopping-cart': 'Shopping Cart',
        'total': 'Total',
        'checkout': 'Checkout'
    },
    zh: {
        'home': '首頁',
        'products': '產品',
        'deals': '優惠',
        'about': '關於',
        'contact': '聯絡我們',
        'title': '2025 聖誕特賣',
        'subtitle': '發現超值節日優惠和特別優待！',
        'view-products': '查看產品',
        'featured-products': '精選產品',
        'product1-name': '優質聖誕樹',
        'product1-desc': '7英尺優質人造聖誕樹，帶LED燈',
        'product2-name': '聖誕裝飾品套裝',
        'product2-desc': '24件手工玻璃裝飾品套裝',
        'product3-name': 'LED聖誕燈飾',
        'product3-desc': '100英尺智能LED串燈，帶遙控器',
        'product4-name': '聖誕花環',
        'product4-desc': '24英寸優質人造聖誕花環，帶漿果',
        'add-to-cart': '加入購物車',
        'special-deals': '節日特別優惠',
        'early-bird': '早鳥優惠',
        'early-bird-desc': '全場商品 8 折',
        'bundle': '組合優惠',
        'bundle-desc': '買二送一',
        'flash-sale': '限時特賣',
        'flash-sale-desc': '限時優惠',
        'shop-now': '立即購買',
        'about-title': '關於我們的聖誕特賣',
        'about-desc': '加入我們 2025 年最大的聖誕特賣！我們提供各種產品的超值優惠。不要錯過這些限時優惠！',
        'contact-title': '聯絡我們',
        'name-placeholder': '您的姓名',
        'email-placeholder': '您的電子郵件',
        'message-placeholder': '您的訊息',
        'send-message': '發送訊息',
        'copyright': '© 2025 聖誕特賣。版權所有。',
        'success-message': '訊息發送成功！',
        'error-message': '請正確填寫所有欄位。',
        'countdown-title': '距離聖誕節還有：',
        'days': '天',
        'hours': '小時',
        'minutes': '分鐘',
        'seconds': '秒',
        'added-to-cart': '已加入購物車！',
        'view-cart': '查看購物車',
        'shopping-cart': '購物車',
        'total': '總計',
        'checkout': '結帳'
    }
};

// Enhanced language switching functionality
function switchLanguage(lang) {
    // Add transition effect
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        // Update all elements with data-lang attribute
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update active language button
        document.querySelectorAll('.language-switcher button').forEach(button => {
            button.classList.remove('active');
        });
        document.getElementById(`lang-${lang}`).classList.add('active');

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Save language preference
        localStorage.setItem('preferredLanguage', lang);

        // Restore opacity
        document.body.style.opacity = '1';
    }, 300);
}

// Initialize language buttons
document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-zh').addEventListener('click', () => switchLanguage('zh'));

// Load saved language preference
const savedLang = localStorage.getItem('preferredLanguage');
if (savedLang) {
    switchLanguage(savedLang);
}

// Add transition effect to body
document.body.style.transition = 'opacity 0.3s ease';

// Enhanced smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (name && email && message) {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = translations[document.documentElement.lang]['success-message'];
            this.appendChild(successMessage);
            
            // Reset form
            this.reset();
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        } else {
            // Show error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = translations[document.documentElement.lang]['error-message'];
            this.appendChild(errorMessage);
            
            // Remove error message after 3 seconds
            setTimeout(() => {
                errorMessage.remove();
            }, 3000);
        }
    });
}

// Christmas countdown timer
function updateCountdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // December 25th
    
    if (now.getMonth() === 11 && now.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    
    const diff = christmas - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Enhanced snowflake animation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    
    // Random position and animation properties
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    document.body.appendChild(snowflake);
    
    // Remove snowflake after animation
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Create snowflakes periodically
setInterval(createSnowflake, 300);

// Add scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Check reveal on scroll
window.addEventListener('scroll', checkReveal);
// Initial check
checkReveal();

// Add scroll-based header styling
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Shopping Cart Functionality
const cart = {
    items: [],
    total: 0,
    
    addItem(product) {
        const existingItem = this.items.find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        this.updateCart();
        this.saveCart();
    },
    
    removeItem(index) {
        this.items.splice(index, 1);
        this.updateCart();
        this.saveCart();
    },
    
    updateQuantity(index, quantity) {
        if (quantity > 0) {
            this.items[index].quantity = quantity;
        } else {
            this.removeItem(index);
        }
        this.updateCart();
        this.saveCart();
    },
    
    calculateTotal() {
        this.total = this.items.reduce((sum, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return sum + (price * item.quantity);
        }, 0);
    },
    
    updateCart() {
        this.calculateTotal();
        this.updateCartUI();
        this.updateCartCount();
    },
    
    updateCartUI() {
        const cartItems = document.querySelector('.cart-items');
        const totalPrice = document.querySelector('.total-price');
        
        cartItems.innerHTML = '';
        this.items.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">
                        ${item.price} × ${item.quantity}
                    </div>
                </div>
                <div class="quantity-controls">
                    <button onclick="cart.updateQuantity(${index}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="cart.updateQuantity(${index}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-item" onclick="cart.removeItem(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });
        
        totalPrice.textContent = `$${this.total.toFixed(2)}`;
    },
    
    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    },
    
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    },
    
    loadCart() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.items = JSON.parse(savedCart);
            this.updateCart();
        }
    }
};

// Cart Panel Toggle
const cartIcon = document.querySelector('.cart-icon');
const cartPanel = document.querySelector('.cart-panel');
const closeCart = document.querySelector('.close-cart');

cartIcon.addEventListener('click', () => {
    cartPanel.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartPanel.classList.remove('active');
});

// Update Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const product = {
            name: productCard.querySelector('h3').textContent,
            price: productCard.querySelector('.sale-price').textContent,
            image: productCard.querySelector('img').src
        };
        
        cart.addItem(product);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = translations[document.documentElement.lang]['added-to-cart'];
        productCard.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 2000);
    });
});

// Load cart from localStorage when page loads
document.addEventListener('DOMContentLoaded', () => {
    cart.loadCart();
});

// Product data structure
const products = [
    {
        name: 'Premium Christmas Tree',
        description: '7ft Premium Artificial Christmas Tree with LED Lights',
        originalPrice: 299.99,
        salePrice: 199.99,
        image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Christmas Ornament Set',
        description: '24-Piece Handcrafted Glass Ornament Collection',
        originalPrice: 89.99,
        salePrice: 59.99,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'LED Christmas Lights',
        description: '100ft Smart LED String Lights with Remote Control',
        originalPrice: 49.99,
        salePrice: 29.99,
        image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Christmas Wreath',
        description: '24" Premium Artificial Christmas Wreath with Berries',
        originalPrice: 79.99,
        salePrice: 49.99,
        image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
]; 