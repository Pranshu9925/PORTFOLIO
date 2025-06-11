// Intersection Observer for scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animation = entry.target.getAttribute('data-animation');
                entry.target.classList.add(animation);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Add animate-on-scroll class to elements you want to animate
    document.querySelectorAll('.hero-content h3, .hero-content h1, .hero-content h2, .hero-content p, .hero-content .cta-buttons').forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.setAttribute('data-animation', `animate-fade-in delay-${index + 1}`);
    });
    
    document.querySelector('.hero-image').classList.add('animate-on-scroll');
    document.querySelector('.hero-image').setAttribute('data-animation', 'animate-scale-in delay-3');
    
    document.querySelector('.scroll-down').classList.add('animate-on-scroll');
    document.querySelector('.scroll-down').setAttribute('data-animation', 'animate-fade-in delay-5');
});
 
// Add scroll event listener to trigger animations
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        const elementPosition = element.getBoundingClientRect().top + scrollPosition;
        if (scrollPosition > elementPosition - windowHeight + 100) {
            const animation = element.getAttribute('data-animation');
            element.classList.add(animation);
        }
    });
});