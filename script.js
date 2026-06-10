/* ============================================
   SIRKAY DIVINE OUTFITS - JAVASCRIPT
   Interactive features and animations
   ============================================ */

// ============================================
// MOBILE MENU TOGGLE
// ============================================
/**
 * Toggles the mobile navigation menu
 * Handles hamburger icon animation
 */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    // Toggle menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// ============================================
// STICKY NAVBAR
// ============================================
/**
 * Adds shadow to navbar when user scrolls
 * Creates sticky navigation effect
 */
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    }
});

// ============================================
// BACK TO TOP BUTTON
// ============================================
/**
 * Shows/hides back to top button based on scroll position
 * Smooth scroll to top on click
 */
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

if (backToTopButton) {
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// SCROLL ANIMATIONS - Fade in on scroll
// ============================================
/**
 * Triggers fade-in animation when elements come into view
 * Uses Intersection Observer API for performance
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in-on-scroll elements
document.querySelectorAll('.fade-in-on-scroll').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ============================================
// GALLERY FILTER
// ============================================
/**
 * Filters gallery items based on selected category
 * Shows/hides gallery items with smooth animation
 */
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-filter') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// CONTACT FORM HANDLING
// ============================================
/**
 * Handles contact form submission
 * Validates form data and provides user feedback
 * EDIT: Update form action URL in index.html for form submission
 */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Form will submit to Formspree or your backend
        // Add custom validation here if needed
        
        // Example: Show success message
        const formData = new FormData(this);
        
        // Optional: Add custom validation
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();
        
        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all required fields.');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }
        
        // If validation passes, form will submit normally
        // You can add a loading state here
        const submitButton = this.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
        }
    });
}

// ============================================
// NEWSLETTER FORM HANDLING
// ============================================
/**
 * Handles newsletter subscription
 * Validates email and provides feedback
 */
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        const button = this.querySelector('button');
        const originalText = button.textContent;
        
        button.textContent = '✓ Subscribed!';
        button.style.backgroundColor = '#d4af37';
        button.style.color = '#0f0f0f';
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            button.style.color = '';
        }, 3000);
        
        // EDIT: Send email to your backend/service here
        // Example with fetch:
        /*
        fetch('your-backend-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));
        */
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
/**
 * Smooth scroll to sections when clicking navigation links
 * Already handled by CSS scroll-behavior: smooth
 * This is a fallback for older browsers
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// LAZY LOADING FOR IMAGES
// ============================================
/**
 * Implements lazy loading for images
 * Improves page load performance
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================
/**
 * Highlights the current section in navigation
 * Updates as user scrolls through page
 */
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// HOVER EFFECTS ON SERVICE CARDS
// ============================================
/**
 * Adds interactive hover effects to service cards
 * Enhances user experience
 */
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// COLLECTION CARD INTERACTIONS
// ============================================
/**
 * Handles collection card hover and click interactions
 */
const collectionCards = document.querySelectorAll('.collection-card');

collectionCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const overlay = this.querySelector('.collection-overlay');
        if (overlay) {
            overlay.style.opacity = '1';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const overlay = this.querySelector('.collection-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
        }
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
/**
 * Debounce function for scroll and resize events
 * Prevents excessive function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// PRELOAD CRITICAL IMAGES
// ============================================
/**
 * Preloads hero image for faster display
 * Improves perceived performance
 */
window.addEventListener('load', function() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage && heroImage.src) {
        const img = new Image();
        img.src = heroImage.src;
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Checks if element is in viewport
 * Useful for triggering animations
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Tracks page analytics events
 * EDIT: Replace with your analytics service (Google Analytics, Mixpanel, etc.)
 */
function trackEvent(eventName, eventData = {}) {
    // Example: Google Analytics
    // if (window.gtag) {
    //     gtag('event', eventName, eventData);
    // }
    
    console.log('Event tracked:', eventName, eventData);
}

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('button_click', {
            button_text: this.textContent,
            button_class: this.className
        });
    });
});

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

/**
 * Keyboard navigation support
 * Allows users to navigate with Tab key
 */
document.addEventListener('keydown', function(e) {
    // Close mobile menu on Escape key
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ============================================
// PRINT STYLESHEET SUPPORT
// ============================================
/**
 * Hides unnecessary elements when printing
 */
window.addEventListener('beforeprint', function() {
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('.back-to-top').style.display = 'none';
});

window.addEventListener('afterprint', function() {
    document.querySelector('.navbar').style.display = 'block';
    document.querySelector('.back-to-top').style.display = 'flex';
});

// ============================================
// INITIALIZATION
// ============================================

/**
 * Runs initialization code when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sirkay Divine Outfits website loaded successfully');
    
    // Initialize all interactive features
    initializeAnimations();
    initializeEventListeners();
});

/**
 * Initialize animations
 */
function initializeAnimations() {
    // Fade in elements on scroll are already handled by observer above
    console.log('Animations initialized');
}

/**
 * Initialize event listeners
 */
function initializeEventListeners() {
    // All event listeners are already attached above
    console.log('Event listeners initialized');
}

// ============================================
// ERROR HANDLING
// ============================================

/**
 * Global error handler
 */
window.addEventListener('error', function(event) {
    console.error('An error occurred:', event.error);
    // You can send errors to a logging service here
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
});

// ============================================
// EXPORT FOR TESTING (if using modules)
// ============================================
// Uncomment if using ES6 modules
// export { debounce, isInViewport, trackEvent };
