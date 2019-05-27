console.log('hello');

// Product photo classes loop
var productPhotosList = document.querySelectorAll('.photo');
for (var i = 0; i < productPhotosList.length; i++) {
  productPhotosList[i].classList.add('photo' + (i + 1));
}
