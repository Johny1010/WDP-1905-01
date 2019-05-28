/* eslint-disable no-undef */
const dotsContainer = document.querySelector('.section--blog-posts .dots');

// eslint-disable-next-line no-unused-vars
const slider = tns({
  container: '.blog-slider',
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
