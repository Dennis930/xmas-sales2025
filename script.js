// Language translations
const translations = {
    en: {
        'home': 'Home',
        'deals': 'Deals',
        'about': 'About',
        'contact': 'Contact',
        'title': 'Christmas Sales 2025',
        'subtitle': 'Discover amazing holiday deals and special offers!',
        'view-deals': 'View Deals',
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
        'copyright': '© 2025 Xmas Sales. All rights reserved.'
    },
    zh: {
        'home': '首頁',
        'deals': '優惠',
        'about': '關於',
        'contact': '聯絡我們',
        'title': '2025 聖誕特賣',
        'subtitle': '發現超值節日優惠和特別優待！',
        'view-deals': '查看優惠',
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
        'copyright': '© 2025 聖誕特賣。版權所有。'
    }
};

// Language switching functionality
function switchLanguage(lang) {
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
}

// Initialize language buttons
document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-zh').addEventListener('click', () => switchLanguage('zh'));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const currentLang = document.documentElement.lang;
        const message = currentLang === 'en' 
            ? 'Thank you for your message! We will get back to you soon with our Christmas deals!'
            : '感謝您的訊息！我們將盡快回覆您關於聖誕優惠的資訊！';
        alert(message);
        contactForm.reset();
    });
}

// CTA button animation
const ctaButton = document.getElementById('cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            document.querySelector('#deals').scrollIntoView({
                behavior: 'smooth'
            });
        }, 200);
    });
}

// Add scroll-based header styling
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(198, 40, 40, 0.9)';
    } else {
        header.style.backgroundColor = '#c62828';
    }
});

// Add snowflake effect
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄';
    snowflake.style.position = 'fixed';
    snowflake.style.color = 'white';
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.top = '-10px';
    snowflake.style.opacity = Math.random();
    snowflake.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Add snowflake animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Create snowflakes periodically
setInterval(createSnowflake, 300); 