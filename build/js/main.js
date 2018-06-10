'use strict';
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


    // if(!item.classList.contains('dots-slider__item--active')) {
    //   item.classList.add('dots-slider__item--active');
    // }
  })
  // item.addEventListener('blur', function () {
  //   subList.classList.remove('main-menu__sub-list--visible');
  // });
});
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCIuLi9ibG9ja3MvbWFpbi1tZW51L21haW4tbWVudS5qcyIsIi4uL2Jsb2Nrcy9zbGlkZXItbWFpbi9zbGlkZXItbWFpbi5qcyIsIi4uL2Jsb2Nrcy9zZXJ2aWNlL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBRDdCQTtBRUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FGL0VBO0FHTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbi8vPWluY2x1ZGUgLi4vYmxvY2tzL21haW4tbWVudS9tYWluLW1lbnUuanNcclxuLy89aW5jbHVkZSAuLi9ibG9ja3Mvc2xpZGVyLW1haW4vc2xpZGVyLW1haW4uanNcclxuLy89aW5jbHVkZSAuLi9ibG9ja3Mvc2VydmljZS9zZXJ2aWNlLmpzIiwibGV0IHN1YkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fc3ViLWxpbmsnKTtcclxubGV0IHN1Ykxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51X19zdWItbGlzdCcpO1xyXG5cclxuc3ViTGlua3MuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpLCBzdWJMaW5rcykge1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZighc3ViTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4tbWVudV9fc3ViLWxpc3QtLXZpc2libGUnKSkge1xyXG4gICAgICBzdWJMaXN0LmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fc3ViLWxpc3QtLXZpc2libGUnKTtcclxuICAgIH1cclxuICB9KVxyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgIHN1Ykxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1tZW51X19zdWItbGlzdC0tdmlzaWJsZScpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuIiwibGV0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90cy1zbGlkZXJfX2l0ZW0nKTtcclxubGV0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpO1xyXG5cclxuZG90cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpLCBzdWJMaW5rcykge1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgY3VycmVudEl0ZW0gPSBpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudEl0ZW0pO1xyXG4gICAgZG90cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpLCBzdWJMaW5rcykge1xyXG4gICAgICBpZiAoaSAhPT0gY3VycmVudEl0ZW0pIHtcclxuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2RvdHMtc2xpZGVyX19pdGVtLS1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkb3RzLXNsaWRlcl9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZG90cy1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2RvdHMtc2xpZGVyX19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgICAgIHNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpLCBzdWJMaW5rcykge1xyXG4gICAgICAgICAgICBpZiAoaSAhPT0gY3VycmVudEl0ZW0pIHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlLS12aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtLWFuaW1hdGlvbkluJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge2l0ZW0uY2xhc3NMaXN0LmFkZCgnc2xpZGUtLWFuaW1hdGlvbk91dCcpO30sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge2l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtLXZpc2libGUnKTt9LCA2MDApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBjdXJyZW50SXRlbSkge1xyXG4gICAgICAgICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlLS12aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtLWFuaW1hdGlvbk91dCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgaXRlbS5jbGFzc0xpc3QuYWRkKCdzbGlkZS0tdmlzaWJsZScpO30sIDY1MCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBpdGVtLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLS1hbmltYXRpb25JbicpO30sIDY1MCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgLy8gaWYoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkb3RzLXNsaWRlcl9faXRlbS0tYWN0aXZlJykpIHtcclxuICAgIC8vICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkb3RzLXNsaWRlcl9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAvLyB9XHJcbiAgfSlcclxuICAvLyBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICBzdWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudV9fc3ViLWxpc3QtLXZpc2libGUnKTtcclxuICAvLyB9KTtcclxufSk7IiwibGV0IFNlcnZpY2VCdG5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2UtbGlzdCcpO1xyXG5jb25zb2xlLmxvZyhTZXJ2aWNlQnRuTGlzdCk7XHJcbmxldCBTZXJ2aWNlQnRucyA9IFNlcnZpY2VCdG5MaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4nKTtcclxuY29uc29sZS5sb2coU2VydmljZUJ0bnMpO1xyXG5sZXQgU2VydmljZVNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWRlc2NyaXB0aW9uJyk7XHJcblxyXG5TZXJ2aWNlQnRucy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpLCBzdWJMaW5rcykge1xyXG4gIGxldCBOdW1iZXJJdGVtID0gaTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgU2VydmljZUJ0bnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSwgc3ViTGlua3MpIHtcclxuICAgICAgaWYgKGkgIT09IE51bWJlckl0ZW0pIHtcclxuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi0tYWN0aXZlJykpIHtcclxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gTnVtYmVySXRlbSkge1xyXG4gICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi0tYWN0aXZlJykpIHtcclxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYnRuLS1hY3RpdmUnKTtcclxuICAgICAgICAgIFNlcnZpY2VTbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSwgc3ViTGlua3MpIHtcclxuICAgICAgICAgICAgaWYgKGkgIT09IE51bWJlckl0ZW0pIHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlcnZpY2UtZGVzY3JpcHRpb24tLXZpc2libGUnKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZXJ2aWNlLWRlc2NyaXB0aW9uLS12aXNpYmxlJyk7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBOdW1iZXJJdGVtKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnc2VydmljZS1kZXNjcmlwdGlvbi0tdmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2UtZGVzY3JpcHRpb24tLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn0pO1xyXG4iXX0=
