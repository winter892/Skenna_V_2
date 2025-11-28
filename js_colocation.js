
// Scroll reveal functionality
const rEls = document.querySelectorAll(".reveal");
const showOnScroll = () => {
    rEls.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
};
window.addEventListener("scroll", showOnScroll);
showOnScroll();

// Typing effect for section title
const t = document.querySelector(".section-title");
if (t) {
    const txt = t.textContent;
    t.textContent = "";
    let i = 0;

    (function type() {
        if (i < txt.length) {
            t.textContent += txt.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    })();
}

// Carousel functionality
document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-images img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    let currentIndex = 0;

    // Create dots
    images.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = carousel.querySelectorAll('.carousel-dot');

    function goToSlide(index) {
        images[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        
        currentIndex = index;
        
        images[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        let nextIndex = (currentIndex + 1) % images.length;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = (currentIndex - 1 + images.length) % images.length;
        goToSlide(prevIndex);
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-advance every 5 seconds
    let autoSlide = setInterval(nextSlide, 5000);

    // Pause auto-slide on hover
    carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
    carousel.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });
});
