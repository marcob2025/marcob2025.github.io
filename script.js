document.addEventListener('DOMContentLoaded', function() {
    
    // --- ANIMATION ON SCROLL ---
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(element => observer.observe(element));

    // --- SCROLLED HEADER ---
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    // La logica per l'header cambia: diventa scuro su sfondo chiaro, chiaro su hero.
    const updateHeaderStyle = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            // Se non c'è una hero section (pagine interne), mantieni lo stile scuro
            if (!heroSection) {
                 header.classList.remove('on-hero');
            }
        } else {
             header.classList.remove('scrolled');
        }

        // Questo gestisce il testo chiaro/scuro
        if (heroSection && window.scrollY < heroSection.offsetHeight - 100) {
            header.classList.add('on-hero');
        } else {
            header.classList.remove('on-hero');
        }
    };
    
    // Aggiungo la classe on-hero a tutte le pagine che hanno la hero section
    if (heroSection) {
        // Modifica del CSS per l'header in stato 'on-hero'
        const style = document.createElement('style');
        style.innerHTML = `
            header.on-hero .logo, header.on-hero nav ul li a { color: var(--light-color); }
            header.on-hero .menu-toggle .bar { background-color: var(--light-color); }
        `;
        document.head.appendChild(style);
        updateHeaderStyle(); // Esegui subito per lo stato iniziale
    }
    window.addEventListener('scroll', updateHeaderStyle);


    // --- MOBILE MENU ---
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        nav.classList.toggle('active');
    });
});