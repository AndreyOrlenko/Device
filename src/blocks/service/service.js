let ServiceBtnList = document.querySelector('.service-list');
console.log(ServiceBtnList);
let ServiceBtns = ServiceBtnList.querySelectorAll('.btn');
console.log(ServiceBtns);
let ServiceSlides = document.querySelectorAll('.service-description');

ServiceBtns.forEach(function (item, i, subLinks) {
  let NumberItem = i;
  item.addEventListener('click', function () {
    ServiceBtns.forEach(function (item, i, subLinks) {
      if (i !== NumberItem) {
        if (item.classList.contains('btn--active')) {
          item.classList.remove('btn--active');
        }
      } else if (i === NumberItem) {
        if (!item.classList.contains('btn--active')) {
          item.classList.add('btn--active');
          ServiceSlides.forEach(function (item, i, subLinks) {
            if (i !== NumberItem) {
              if (item.classList.contains('service-description--visible')) {
                item.classList.remove('service-description--visible');

              }
            } else if (i === NumberItem) {
              if (!item.classList.contains('service-description--visible')) {
                item.classList.add('service-description--visible');
              }
            }
          })
        }
      }
    })
  })
});
