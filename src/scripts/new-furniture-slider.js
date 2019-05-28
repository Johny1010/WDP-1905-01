/* eslint-disable no-undef */
const dotsContainer = document.querySelector('.section--products .dots');

// eslint-disable-next-line no-unused-vars
const slider = tns({
  container: '.new-furniture-slider',
  items: 1,
  slideBy: 'page',
  controls: false,
  autoplayButtonOutput: false,
  mouseDrag: true,
  swipeAngle: 10,
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
