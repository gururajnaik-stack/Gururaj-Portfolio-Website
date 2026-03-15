// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Download Resume
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Gururaj_Naik_Main (2).pdf';
    link.download = 'Gururaj_Naik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(88, 166, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and timeline items
document.querySelectorAll('.project-card, .timeline-content, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active nav link highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
            item.style.color = 'var(--accent-blue)';
        } else {
            item.style.color = 'var(--text-secondary)';
        }
    });
});

// Add smooth reveals on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Prevent right-click on certain elements (optional security measure)
document.addEventListener('DOMContentLoaded', () => {
    // Add any additional initialization code here
    console.log('Portfolio loaded successfully!');
});
