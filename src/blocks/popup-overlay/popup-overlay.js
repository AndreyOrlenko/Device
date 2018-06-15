if (document.querySelector('.index-js')) {

  let btnMessage = document.querySelector('.btn--contacts-js');
  let popupOverlay = document.querySelector('.popup-overlay');
  let popupMessage = popupOverlay.querySelector('.popup-message');
  let btnCloseMessage = popupOverlay.querySelector('.popup-close');
  let formMessage = popupOverlay.querySelector('.form-popup');
  let inputTextMessage = formMessage.querySelector('[name=name]');
  let inputEmailMessage = formMessage.querySelector('[name=email]');
  let textAreaMessage = formMessage.querySelector('[name=text]');
  let arrayInputMessage = formMessage.querySelectorAll('[name]');
  let storageName = localStorage.getItem('name');
  let storageEmail = localStorage.getItem('email');

  btnMessage.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMessage.classList.remove('popup-message--animanion-hide');
    popupOverlay.classList.add('popup-overlay--visible');
    popupMessage.classList.add('popup-message--animanion-show');

    if (storageName && storageEmail) {
      inputTextMessage.value = storageName;
      inputEmailMessage.value = storageEmail;
      textAreaMessage.focus();
    } else if (storageName) {
      inputTextMessage.value = storageName;
      inputEmailMessage.focus();
    } else {
      inputEmailMessage.value = storageEmail;
      inputTextMessage.focus();
    }
  });

  btnCloseMessage.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMessage.classList.remove('popup-message--animanion-show');
    setTimeout(function () {
      popupMessage.classList.add('popup-message--animanion-hide');
    }, 50);
    setTimeout(function () {
      popupOverlay.classList.remove('popup-overlay--visible');
      for (let i = 0; i < arrayInputMessage.length; i++) {
        arrayInputMessage[i].classList.remove('input-text-popup--error');
      }
    }, 450);
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popupOverlay.classList.contains('popup-overlay--visible')) {
        popupMessage.classList.remove('popup-message--animanion-show');
        setTimeout(function () {
          popupMessage.classList.add('popup-message--animanion-hide');
        }, 50);
        setTimeout(function () {
          popupOverlay.classList.remove('popup-overlay--visible');
          for (let i = 0; i < arrayInputMessage.length; i++) {
            arrayInputMessage[i].classList.remove('input-text-popup--error');
          }
        }, 450);
      }
    }
  });

//
  formMessage.addEventListener('submit', function (evt) {
    if (!inputTextMessage.value || !inputEmailMessage.value || !textAreaMessage.value) {
      evt.preventDefault();
      for (let i = 0; i < arrayInputMessage.length; i++) {
        if (!arrayInputMessage[i].value) {
          arrayInputMessage[i].classList.add('input-text-popup--error');
        } else {
          arrayInputMessage[i].classList.remove('input-text-popup--error');
        }
      }
    } else {
      localStorage.setItem('name', inputTextMessage.value);
      localStorage.setItem('email', inputEmailMessage.value);
    }
  });
//удаляем класс error у input если в его поле были нажаты клавиши
  for (let i = 0; i < arrayInputMessage.length; i++) {
    arrayInputMessage[i].addEventListener('keydown', function () {
      if (arrayInputMessage[i].classList.contains('input-text-popup--error')) {
        arrayInputMessage[i].classList.remove('input-text-popup--error')
      }
    })
  };

}