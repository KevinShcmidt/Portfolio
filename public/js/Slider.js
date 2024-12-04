const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.esakafo');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth + 22;

const updateSlider = () => {
  // Limiter l'index pour éviter les débordements
  currentIndex = Math.max(0, Math.min(currentIndex, slides.length - 1));

  sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // Masquer les boutons si on est au début ou à la fin du slider
  prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
  nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
};

updateSlider();

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});