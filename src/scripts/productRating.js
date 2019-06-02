const hoverStars = (product, e) => {
  if (product.classList.contains('rated')) return;
  for (let i = 0; i < parseInt(e.target.dataset.star); i++) {
    product.querySelectorAll('a')[i].classList.add('hovered');
  }
};

const cleanHover = (product, e) => {
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
productRatesBoxes.forEach(box => {
  box.addEventListener('click', e => rateProduct(box, e));
  box.addEventListener('mouseover', e => hoverStars(box, e));
  box.addEventListener('mouseout', e => cleanHover(box, e));
});
