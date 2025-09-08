// scripts.js

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// Blog modal functionality
function openBlogModal() {
    const modal = document.getElementById('blogModal');
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus trap - focus on close button
    const closeButton = modal.querySelector('.close');
    closeButton.focus();
}

// Close modal function
function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

// Close modal event listeners
document.querySelector('.close').addEventListener('click', closeBlogModal);

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('blogModal');
    if (event.target === modal) {
        closeBlogModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('blogModal');
        if (modal.style.display === 'block') {
            closeBlogModal();
        }
    }
});

// Form submission
// document.querySelector('.contact-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Thank you for your message! I\'ll get back to you soon.');
//     this.reset();
// });

// Smooth scrolling for navigation links
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