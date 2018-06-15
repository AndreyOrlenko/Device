if (document.querySelector('.index-js')) {
  let dots = document.querySelectorAll('.dots-slider__item');
  let slides = document.querySelectorAll('.slide');

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
      for (let j = 0; j < dots.length; j++) {
        if (j !== i) {
          if (dots[j].classList.contains('dots-slider__item--active')) {
            dots[j].classList.remove('dots-slider__item--active');
          }
        } else if (j === i) {
          if (!dots[j].classList.contains('dots-slider__item--active')) {
            dots[j].classList.add('dots-slider__item--active');

            for (let s = 0; s < slides.length; s++) {
              if (s !== i) {
                if (slides[s].classList.contains('slide--visible')) {
                  slides[s].classList.remove('slide--animationIn');
                  setTimeout(function () {
                    slides[s].classList.add('slide--animationOut');
                  }, 100);
                  setTimeout(function () {
                    slides[s].classList.remove('slide--visible');
                  }, 600);
                }
              } else if (s === i) {
                if (!slides[s].classList.contains('slide--visible')) {
                  slides[s].classList.remove('slide--animationOut');
                  setTimeout(function () {
                    slides[s].classList.add('slide--visible');
                  }, 650);
                  setTimeout(function () {
                    slides[s].classList.add('slide--animationIn');
                  }, 650);
                }
              }
            }
          }
        }
      }
    })
  }
  ;
}


