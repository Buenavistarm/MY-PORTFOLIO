// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Navigation Toggle
const burger = document.getElementById('burger-menu');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Burger Animation
    burger.classList.toggle('toggle');
});

// Close Mobile/Burger Menu on Link Click
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if(nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});

// Scroll Effects (Navbar style change and Fade in elements)
const navbar = document.querySelector('.navbar');
const fadeElements = document.querySelectorAll('.fade-in');

const checkScroll = () => {
    // Navbar styling on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Fade-in effect for elements within viewport
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 50) {
            element.classList.add('appear');
        }
    });
};

window.addEventListener('scroll', checkScroll);
// Initial check on load
checkScroll();
