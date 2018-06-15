function addClassVisibleParentElements (array, parrent, classVisible) {

  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener('focus', function () {
      if (!parrent.classList.contains(classVisible)) {
        parrent.classList.add(classVisible);
      }
    });

    array[i].addEventListener('blur', function () {
      if (parrent.classList.contains(classVisible)) {
        parrent.classList.remove(classVisible);
      }
    });
  }
}
console.log("Main-menu");
let subLinks = document.querySelectorAll('.main-menu__sub-link');
let subList = document.querySelector('.main-menu__sub-list');

addClassVisibleParentElements(subLinks, subList, 'main-menu__sub-list--visible');





