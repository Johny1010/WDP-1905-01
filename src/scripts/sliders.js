/* eslint-disable no-undef */
const sliders = document.querySelectorAll('.slider-container');

// eslint-disable-next-line no-unused-vars
sliders.forEach(slider => {
  const sliderName = slider.dataset.slider;
  const dotsContainer = document.querySelector(`[data-sliderNav=${sliderName}]`);
  const slidesNumber = slider.childElementCount;
  const dots = document.createDocumentFragment();

  for (let i = 0; i < slidesNumber; i++) {
    const button = document.createElement('button');
    button.className = 'slider-control';
    button.style.display = 'none';
    dots.appendChild(button);
  }

  dotsContainer.appendChild(dots);

  tns({
    container: slider,
    items: 1,
    slideBy: 'page',
    controls: false,
    autoplayButtonOutput: false,
    mouseDrag: true,
    swipeAngle: 10,
    responsive: {
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    },
    navContainer: dotsContainer
  });
});
