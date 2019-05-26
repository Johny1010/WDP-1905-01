const hoverStars = (product, e) => {
  if (product.classList.contains('rated')) return;
  product.classList.add('on-hover');
  for (let i = 0; i < parseInt(e.target.dataset.star); i++) {
    product.querySelectorAll('a')[i].classList.add('hovered');
  }
};
const cleanHover = (product, e) => {
  product.classList.remove('on-hover');
  e.target.querySelectorAll('a').forEach(star => star.classList.remove('hovered'));
};
const rateProduct = (product, e) => {
  e.preventDefault();
  const rate = e.target.dataset.star;
  if (rate && !product.classList.contains('rated')) {
    product.querySelectorAll('a').forEach(e => e.classList.remove('full'));
    product.classList.add('rated');
    for (let i = 0; i < parseInt(rate); i++) {
      product.querySelectorAll('a')[i].classList.add('full');
    }
  }
};
const productRatesBoxes = document.querySelectorAll('.stars');
['click', 'mouseover', 'mouseout'].forEach((event, i) => {
  productRatesBoxes.forEach(product =>
    product.addEventListener(
      event,
      [rateProduct, hoverStars, cleanHover][i].bind(null, product)
    )
  );
});
