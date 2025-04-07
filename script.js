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
        alert('Thank you for your message! We will get back to you soon with our Christmas deals!');
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
            // Scroll to deals section
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