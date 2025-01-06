document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    slidesPerView: 1.05,
    spaceBetween: 50,
    loop: true,
    allowTouchMove: false,  // Disable touch/drag
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // Typing effect for both sections
  const sections = [
    '.carousel-section h1',
    '.media-text-section h1',
    '.stay-tuned-section .stay-tuned',
    '.stay-tuned-section .coming-soon'
  ];

  sections.forEach(selector => {
    const text = document.querySelector(selector);
    const originalText = text.textContent;
    text.textContent = '';
    
    function typeText() {
      let index = 0;
      text.textContent = '';
      
      function type() {
        if (index < originalText.length) {
          text.textContent += originalText.charAt(index);
          index++;
          setTimeout(type, 30);
        }
      }
      
      type();
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeText();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    observer.observe(text);
  });
}); 