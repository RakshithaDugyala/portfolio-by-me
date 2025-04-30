// Navigation active state
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

// Helper function to set active nav
function setActiveElements() {
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    // Update navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// Set active elements on scroll
window.addEventListener('scroll', setActiveElements);

// Set active elements on load
window.addEventListener('load', setActiveElements);

// Mobile menu toggle
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});