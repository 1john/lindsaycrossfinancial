// Wait for DOM to be fully loaded
console.log('Script loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    
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
    const navElement = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');

    // Add mobile menu toggle button only if nav exists
    if (navElement && navUl) {
        const menuButton = document.createElement('button');
        menuButton.className = 'menu-toggle';
        menuButton.setAttribute('aria-label', 'Toggle navigation menu');
        menuButton.innerHTML = '<span></span><span></span><span></span>';
        navElement.insertBefore(menuButton, navUl);

        menuButton.addEventListener('click', () => {
            navUl.classList.toggle('active');
            menuButton.classList.toggle('active');
        });
    }

    // FAQ Accordion functionality
    console.log('Setting up FAQ accordion');
    const faqQuestions = document.querySelectorAll('.faq-question');
    console.log('Found', faqQuestions.length, 'FAQ questions');
    
    if (faqQuestions.length === 0) {
        console.error('No FAQ questions found! Check if .faq-question elements exist in the DOM');
    }
    
    faqQuestions.forEach((button, index) => {
        console.log('Attaching click listener to FAQ question', index);
        
        button.addEventListener('click', function(e) {
            console.log('FAQ question clicked:', index);
            
            const faqItem = this.closest('.faq-item');
            console.log('FAQ item found:', !!faqItem);
            
            if (!faqItem) {
                console.error('Could not find .faq-item parent');
                return;
            }
            
            const isActive = faqItem.classList.contains('active');
            console.log('Is active:', isActive);

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
                console.log('Added active class to FAQ item', index);
            }
        });
    });
    
    console.log('FAQ accordion setup complete');
});
