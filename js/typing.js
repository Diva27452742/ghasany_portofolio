/* typing.js */
/* ===== TYPED.JS EFFECT ===== */
// Teks bergetik sendiri layaknya anak jaman sekarang
if(document.querySelector('.multiple-text')) {
    const typed = new Typed('.multiple-text', {
        strings: ['Digital Creator', 'UI/UX Designer', 'Web Developer', 'Tech Enthusiast'],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1200,
        loop: true
    });
}
