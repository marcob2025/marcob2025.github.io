document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inizializza AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Durata animazione in ms
        once: true,     // Anima solo una volta quando scorri
        offset: 100,    // Trigger point
    });

    // 2. Mobile Menu Logic
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Chiudi menu quando clicchi un link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 3. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

});