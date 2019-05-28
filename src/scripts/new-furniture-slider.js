/* eslint-disable no-undef */
const dotsContainer = document.querySelector('.section--products .dots');

// eslint-disable-next-line no-unused-vars
const slider = tns({
  container: '.new-furniture-slider',
  items: 1,
  slideBy: 1,
  controls: false,
  autoplayButtonOutput: false,
  mouseDrag: true,
  swipeAngle: 10,
  nav: true,
  responsive: {
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    }
  },
  navContainer: dotsContainer
});
