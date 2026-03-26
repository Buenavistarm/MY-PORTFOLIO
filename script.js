// Year for Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar Scrolled Effect & Burger Menu
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Close Mobile Menu when clicking a link
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

// Intersection Observer for Fade-in Elements on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

fadeElements.forEach(el => {
    appearOnScroll.observe(el);
});

// Dynamic Typing Effect (Glitch element substitution)
const glitchText = document.querySelector('.glitch');
const roles = ["A Creative Developer", "A UI/UX Enthusiast", "A Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 150;

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        glitchText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        glitchText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = 2000; // pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 500; // pause before typing next
    }

    glitchText.setAttribute('data-text', glitchText.textContent);
    setTimeout(typeEffect, typingDelay);
}

// Ensure the first word starts immediately but don't delete until we read
setTimeout(() => {
    isDeleting = true;
    charIndex = roles[0].length;
    setTimeout(typeEffect, 2000);
}, 1000);

