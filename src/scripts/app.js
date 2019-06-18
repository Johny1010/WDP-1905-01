import { parse, render } from 'mustache';

// Mustache

var productData = [
  {
    nr: 0,
    tag: 'bed',
    title: 'Aenean Ru Bristique',
    price: '$ 30.00'
  },
  {
    nr: 1,
    tag: 'bed',
    title: 'Aenean Ru Bristique',
    price: '$ 30.00'
  },
  {
    nr: 2,
    tag: 'chair',
    title: 'Aenean Ru Bristique',
    price: '$ 30.00'
  },
  {
    nr: 3,
    tag: 'chair',
    title: 'Aenean Ru Bristique',
    price: '$ 30.00'
  },
  {
    nr: 4,
    tag: 'sofa',
    title: 'Aenean Ru Bristique',
    price: '$ 30.00'
  },
  {
    nr: 5,
    tag: 'sofa',
    title: 'Aenean Ru Bristique',
    price: '$ 30.00'
  },
  {
    nr: 6,
    tag: 'table',
    title: 'Aenean Ru Bristique',
    price: '$ 30.00'
  },
  {
    nr: 7,
    tag: 'dining',
    title: 'Aenean Ru Bristique',
    price: '$ 30.00'
  }
];

var productTemp = document.getElementById('product-temp').innerHTML;

parse(productTemp);

var generateData = '';

for (let i = 0; i < productData.length; i++) {
  generateData += render(productTemp, productData[i]);
}

var content = document.querySelector('#features');
console.log(content);
if (content) {
  content.innerHTML = generateData;
  console.log('test');
}

var tabs = document.querySelectorAll('.tab');
var products = document.querySelectorAll('.product-box');
var beds = document.querySelectorAll('.bed');
var chairs = document.querySelectorAll('.chair');
var sofas = document.querySelectorAll('.sofa');
var tables = document.querySelectorAll('.table');
var dinings = document.querySelectorAll('.dining');

bedVisible();

var bedTab = document.querySelector('.bed-tab');
bedTab.addEventListener('click', function (e) {
  e.preventDefault();
  selectionRemove();
  bedTab.classList.add('selected');
  productsHide();
  setTimeout(function () {
    bedVisible();
  }, 720);
});

var chairTab = document.querySelector('.chair-tab');
chairTab.addEventListener('click', function (e) {
  e.preventDefault();
  selectionRemove();
  chairTab.classList.add('selected');
  productsHide();
  setTimeout(function () {
    chairVisible();
  }, 720);
});

var sofaTab = document.querySelector('.sofa-tab');
sofaTab.addEventListener('click', function (e) {
  e.preventDefault();
  selectionRemove();
  sofaTab.classList.add('selected');
  productsHide();
  setTimeout(function () {
    sofaVisible();
  }, 720);
});

var tableTab = document.querySelector('.table-tab');
tableTab.addEventListener('click', function (e) {
  e.preventDefault();
  selectionRemove();
  tableTab.classList.add('selected');
  productsHide();
  setTimeout(function () {
    tableVisible();
  }, 720);
});

var diningTab = document.querySelector('.dining-tab');
diningTab.addEventListener('click', function (e) {
  e.preventDefault();
  selectionRemove();
  diningTab.classList.add('selected');
  productsHide();
  setTimeout(function () {
    diningVisible();
  }, 720);
});

function selectionRemove () {
  tabs.forEach(function (tab) {
    tab.classList.remove('selected');
  });
}

function productsHide () {
  products.forEach(function (product) {
    product.classList.remove('visible');
    setTimeout(function () {
      product.classList.remove('static');
      product.classList.add('hidden');
    }, 710);
  });
}

function bedVisible () {
  beds.forEach(function (bed) {
    bed.classList.remove('hidden');
    bed.classList.add('static');
    bed.classList.add('visible');
  });
}

function chairVisible () {
  chairs.forEach(function (chair) {
    chair.classList.remove('hidden');
    chair.classList.add('static');
    chair.classList.add('visible');
  });
}

function sofaVisible () {
  sofas.forEach(function (sofa) {
    sofa.classList.remove('hidden');
    sofa.classList.add('static');
    sofa.classList.add('visible');
  });
}

function tableVisible () {
  tables.forEach(function (table) {
    table.classList.remove('hidden');
    table.classList.add('static');
    table.classList.add('visible');
  });
}

function diningVisible () {
  dinings.forEach(function (dining) {
    dining.classList.remove('hidden');
    dining.classList.add('static');
    dining.classList.add('visible');
  });
}
