function addFocusToElementsArray(array, elementOne, elementTwo, elmentsParrent, visibleClass) {
  for (let i = 0; i < array.length; i++) {
    let element1 = array[i].querySelector(elementOne);
    let element2;
    if (elementTwo) {
      element2 = array[i].querySelector(elementTwo);
    }
    let parrent = array[i].querySelector(elmentsParrent);
    element1.addEventListener('focus', function () {
      if (!parrent.classList.contains(visibleClass)) {
        parrent.classList.add(visibleClass);
      }
    });
    element1.addEventListener('blur', function () {
      if (parrent.classList.contains(visibleClass)) {
        parrent.classList.remove(visibleClass);
      }
    });

    if (element2) {
      element2.addEventListener('focus', function () {
        if (!parrent.classList.contains(visibleClass)) {
          parrent.classList.add(visibleClass);
        }
      });
      element2.addEventListener('blur', function () {
        if (parrent.classList.contains(visibleClass)) {
          parrent.classList.remove(visibleClass);
        }
      });
    }
  }
}

if (!document.querySelector('.index-js')) {
  let catalogCards = document.querySelectorAll('.catalog-card');
  let catalogCardBtn = '.btn';
  let catalogCardCompresion = '.catalog-card__comparison';
  let catalogCardUpperLayer = '.catalog-card__upper-layer';
  let catalogCardUpperLayerVisible = 'catalog-card__upper-layer--visible';

  addFocusToElementsArray(catalogCards, catalogCardBtn, catalogCardCompresion, catalogCardUpperLayer, catalogCardUpperLayerVisible);

}