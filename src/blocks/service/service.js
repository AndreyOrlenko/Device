let ServiceBtnList = document.querySelector('.service-list');
let ServiceBtns = ServiceBtnList.querySelectorAll('.btn');
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
                item.classList.remove('service-description--animationIn');
                setTimeout(function(){item.classList.add('service-description--animationOut');}, 100);
                setTimeout(function(){item.classList.remove('service-description--visible');}, 600);

              }
            } else if (i === NumberItem) {
              if (!item.classList.contains('service-description--visible')) {
                item.classList.remove('service-description--animationOut');
                setTimeout(function(){item.classList.add('service-description--animationIn');}, 700);
                setTimeout(function(){item.classList.add('service-description--visible');}, 700);
              }
            }
          })
        }
      }
    })
  })
});
