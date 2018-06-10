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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCIuLi9ibG9ja3MvbWFpbi1tZW51L21haW4tbWVudS5qcyIsIi4uL2Jsb2Nrcy9zbGlkZXItbWFpbi9zbGlkZXItbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FEN0JBO0FFSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuLy89aW5jbHVkZSAuLi9ibG9ja3MvbWFpbi1tZW51L21haW4tbWVudS5qc1xyXG4vLz1pbmNsdWRlIC4uL2Jsb2Nrcy9zbGlkZXItbWFpbi9zbGlkZXItbWFpbi5qcyIsImxldCBzdWJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW1lbnVfX3N1Yi1saW5rJyk7XHJcbmxldCBzdWJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudV9fc3ViLWxpc3QnKTtcclxuXHJcbnN1YkxpbmtzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSwgc3ViTGlua3MpIHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoIXN1Ykxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLW1lbnVfX3N1Yi1saXN0LS12aXNpYmxlJykpIHtcclxuICAgICAgc3ViTGlzdC5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnVfX3N1Yi1saXN0LS12aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgfSlcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBzdWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudV9fc3ViLWxpc3QtLXZpc2libGUnKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcbiIsImxldCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdHMtc2xpZGVyX19pdGVtJyk7XHJcbmxldCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUnKTtcclxuXHJcbmRvdHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSwgc3ViTGlua3MpIHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGN1cnJlbnRJdGVtID0gaTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJdGVtKTtcclxuICAgIGRvdHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSwgc3ViTGlua3MpIHtcclxuICAgICAgaWYgKGkgIT09IGN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkb3RzLXNsaWRlcl9faXRlbS0tYWN0aXZlJykpIHtcclxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZG90cy1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChpID09PSBjdXJyZW50SXRlbSkge1xyXG4gICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2RvdHMtc2xpZGVyX19pdGVtLS1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkb3RzLXNsaWRlcl9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICBzbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSwgc3ViTGlua3MpIHtcclxuICAgICAgICAgICAgaWYgKGkgIT09IGN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS0tdmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLS1hbmltYXRpb25JbicpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtpdGVtLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLS1hbmltYXRpb25PdXQnKTt9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLS12aXNpYmxlJyk7fSwgNjAwKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gY3VycmVudEl0ZW0pIHtcclxuICAgICAgICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS0tdmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLS1hbmltYXRpb25PdXQnKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGl0ZW0uY2xhc3NMaXN0LmFkZCgnc2xpZGUtLXZpc2libGUnKTt9LCA2NTApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgaXRlbS5jbGFzc0xpc3QuYWRkKCdzbGlkZS0tYW5pbWF0aW9uSW4nKTt9LCA2NTApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgIC8vIGlmKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZG90cy1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpKSB7XHJcbiAgICAvLyAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZG90cy1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgLy8gfVxyXG4gIH0pXHJcbiAgLy8gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG4gIC8vICAgc3ViTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX3N1Yi1saXN0LS12aXNpYmxlJyk7XHJcbiAgLy8gfSk7XHJcbn0pOyJdfQ==
