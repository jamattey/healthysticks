/**
 * Healthysticks Shared JavaScript
 */

function toggleLanguage() {
    const body = document.body;
    const toggleBtnText = document.getElementById('lang-toggle-text');
    
    if (body.classList.contains('lang-active-es')) {
        body.classList.remove('lang-active-es');
        localStorage.setItem('preferred-lang', 'en');
        if (toggleBtnText) toggleBtnText.innerText = 'ES';
    } else {
        body.classList.add('lang-active-es');
        localStorage.setItem('preferred-lang', 'es');
        if (toggleBtnText) toggleBtnText.innerText = 'EN';
    }
}

// Persist language across pages
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang');
    const body = document.body;
    const toggleBtnText = document.getElementById('lang-toggle-text');

    if (savedLang === 'es') {
        body.classList.add('lang-active-es');
        if (toggleBtnText) toggleBtnText.innerText = 'EN';
    }

    // Intersection Observer for fade-in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
