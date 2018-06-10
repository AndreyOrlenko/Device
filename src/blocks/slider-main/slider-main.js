let dots = document.querySelectorAll('.dots-slider__item');
let slides = document.querySelectorAll('.slide');

dots.forEach(function (item, i, subLinks) {
  item.addEventListener('click', function () {
    let currentItem = i;
    console.log(currentItem);
    dots.forEach(function (item, i, subLinks) {
      if (i !== currentItem) {
        if (item.classList.contains('dots-slider__item--active')) {
          item.classList.remove('dots-slider__item--active');
        }
      } else if (i === currentItem) {
        if (!item.classList.contains('dots-slider__item--active')) {
          item.classList.add('dots-slider__item--active');
          slides.forEach(function (item, i, subLinks) {
            if (i !== currentItem) {
              if (item.classList.contains('slide--visible')) {
                item.classList.remove('slide--animationIn');
                setTimeout(function() {item.classList.add('slide--animationOut');}, 100);
                setTimeout(function() {item.classList.remove('slide--visible');}, 600);
              }
            } else if (i === currentItem) {
              if (!item.classList.contains('slide--visible')) {
                item.classList.remove('slide--animationOut');
                setTimeout(function() { item.classList.add('slide--visible');}, 650);
                setTimeout(function() { item.classList.add('slide--animationIn');}, 650);
              }
            }
          })
        }
      }
    })
  })
});