let subLinks = document.querySelectorAll('.main-menu__sub-link');
let subList = document.querySelector('.main-menu__sub-list');

subLinks.forEach(function(item, i, subLinks) {
  item.addEventListener('focus', function () {
    if(!subList.classList.contains('main-menu__sub-list--visible')) {
      subList.classList.add('main-menu__sub-list--visible');
    }
  })
  item.addEventListener('blur', function () {
    subList.classList.remove('main-menu__sub-list--visible');
  });
});



