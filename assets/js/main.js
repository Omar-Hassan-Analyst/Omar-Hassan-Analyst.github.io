document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('siteNav');
    const toggle = document.getElementById('navToggle');

    if (toggle) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
            });
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 15) {
            nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
});
