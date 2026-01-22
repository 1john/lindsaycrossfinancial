// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll only for hash links
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Basic mobile menu functionality
    const nav = document.querySelector('nav ul');
    const header = document.querySelector('header');

    // Add mobile menu toggle button
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-toggle';
    menuButton.setAttribute('aria-label', 'Toggle navigation menu');
    menuButton.innerHTML = '<span></span><span></span><span></span>';
    header.insertBefore(menuButton, nav);

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
});
