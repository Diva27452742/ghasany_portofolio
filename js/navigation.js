/* navigation.js */
/* ===== MOBILE NAVBAR TOGGLE ===== */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };
}

/* ===== SCROLL REVEAL & STICKY HEADER ===== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

window.onscroll = () => {
    let top = window.scrollY;

    // Highlight menu yg sedang aktif
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });

    // Sticky Header effect Glassmorphism background
    if (header) {
        header.classList.toggle('sticky', top > 50);
    }

    // Hilangkan menu mobile saat diklik/scroll
    if (menuIcon && navbar) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
};
