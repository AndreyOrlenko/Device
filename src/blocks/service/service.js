if (document.querySelector('.index-js')) {

  let ServiceBtnList = document.querySelector('.service-list');
  let ServiceBtns = ServiceBtnList.querySelectorAll('.btn');
  let ServiceSlides = document.querySelectorAll('.service-description');

  for (let i = 0; i < ServiceBtns.length; i++) {
    ServiceBtns[i].addEventListener('click', function () {
      for (let j = 0; j < ServiceBtns.length; j++) {
        if (j !== i) {
          if (ServiceBtns[j].classList.contains('btn--active')) {
            ServiceBtns[j].classList.remove('btn--active');
          }
        } else if (j === i) {
          if (!ServiceBtns[j].classList.contains('btn--active')) {
            ServiceBtns[j].classList.add('btn--active');

            for (let s = 0; s < ServiceSlides.length; s++) {
              if (s !== i) {
                if (ServiceSlides[s].classList.contains('service-description--visible')) {
                  ServiceSlides[s].classList.remove('service-description--animationIn');
                  setTimeout(function () {
                    ServiceSlides[s].classList.add('service-description--animationOut');
                  }, 100);
                  setTimeout(function () {
                    ServiceSlides[s].classList.remove('service-description--visible');
                  }, 600);

                }
              } else if (s === i) {
                if (!ServiceSlides[s].classList.contains('service-description--visible')) {
                  ServiceSlides[s].classList.remove('service-description--animationOut');
                  setTimeout(function () {
                    ServiceSlides[s].classList.add('service-description--animationIn');
                  }, 700);
                  setTimeout(function () {
                    ServiceSlides[s].classList.add('service-description--visible');
                  }, 700);
                }
              }
            }
          }
        }
      }
    })
  }
}