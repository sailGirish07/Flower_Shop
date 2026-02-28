//Home Animation
const homeSection = document.querySelector('#home');

function triggerHomeAnimation() {
  homeSection.classList.remove('show-animate');

  // force reflow (important!)
  void homeSection.offsetWidth;

  homeSection.classList.add('show-animate');
}

// run on page load
window.addEventListener('load', () => {
  homeSection.classList.add('show-animate');
});

// run when clicking Home nav link
document.querySelectorAll('a[href="#home"]').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(triggerHomeAnimation, 50);
  });
});


//Review Slider
const track = document.querySelector('.review-track');
const nextBtn = document.querySelector('.review-btn.next');
const prevBtn = document.querySelector('.review-btn.prev');
const cards = document.querySelectorAll('.review .box');

let index = 0;
const cardsPerView = 3;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 32; // 32 ≈ gap
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (index < cards.length - cardsPerView) {
    index++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});
