"use strict";var subLinks=document.querySelectorAll(".main-menu__sub-link"),subList=document.querySelector(".main-menu__sub-list");subLinks.forEach(function(e,s,t){e.addEventListener("focus",function(){subList.classList.contains("main-menu__sub-list--visible")||subList.classList.add("main-menu__sub-list--visible")}),e.addEventListener("blur",function(){subList.classList.remove("main-menu__sub-list--visible")})});var dots=document.querySelectorAll(".dots-slider__item"),slides=document.querySelectorAll(".slide");dots.forEach(function(e,s,t){e.addEventListener("click",function(){var i=s;console.log(i),dots.forEach(function(e,s,t){s!==i?e.classList.contains("dots-slider__item--active")&&e.classList.remove("dots-slider__item--active"):s===i&&(e.classList.contains("dots-slider__item--active")||(e.classList.add("dots-slider__item--active"),slides.forEach(function(e,s,t){s!==i?e.classList.contains("slide--visible")&&(e.classList.remove("slide--animationIn"),setTimeout(function(){e.classList.add("slide--animationOut")},100),setTimeout(function(){e.classList.remove("slide--visible")},600)):s===i&&(e.classList.contains("slide--visible")||(e.classList.remove("slide--animationOut"),setTimeout(function(){e.classList.add("slide--visible")},650),setTimeout(function(){e.classList.add("slide--animationIn")},650)))})))})})});var ServiceBtnList=document.querySelector(".service-list"),ServiceBtns=ServiceBtnList.querySelectorAll(".btn"),ServiceSlides=document.querySelectorAll(".service-description");ServiceBtns.forEach(function(e,s,t){var i=s;e.addEventListener("click",function(){ServiceBtns.forEach(function(e,s,t){s!==i?e.classList.contains("btn--active")&&e.classList.remove("btn--active"):s===i&&(e.classList.contains("btn--active")||(e.classList.add("btn--active"),ServiceSlides.forEach(function(e,s,t){s!==i?e.classList.contains("service-description--visible")&&(e.classList.remove("service-description--animationIn"),setTimeout(function(){e.classList.add("service-description--animationOut")},100),setTimeout(function(){e.classList.remove("service-description--visible")},600)):s===i&&(e.classList.contains("service-description--visible")||(e.classList.remove("service-description--animationOut"),setTimeout(function(){e.classList.add("service-description--animationIn")},700),setTimeout(function(){e.classList.add("service-description--visible")},700)))})))})})});var btnMessage=document.querySelector(".btn--contacts-js"),popupOverlay=document.querySelector(".popup-overlay"),popupMessage=popupOverlay.querySelector(".popup-message"),btnCloseMessage=popupOverlay.querySelector(".popup-close"),formMessage=popupOverlay.querySelector(".form-popup"),inputTextMessage=formMessage.querySelector("[name=name]"),inputEmailMessage=formMessage.querySelector("[name=email]"),textAreaMessage=formMessage.querySelector("[name=text]"),arrayInputMessage=formMessage.querySelectorAll("[name]"),storageName=localStorage.getItem("name"),storageEmail=localStorage.getItem("email");btnMessage.addEventListener("click",function(e){e.preventDefault(),popupMessage.classList.remove("popup-message--animanion-hide"),popupOverlay.classList.add("popup-overlay--visible"),popupMessage.classList.add("popup-message--animanion-show"),storageName&&storageEmail?(inputTextMessage.value=storageName,inputEmailMessage.value=storageEmail,textAreaMessage.focus()):storageName?(inputTextMessage.value=storageName,inputEmailMessage.focus()):(inputEmailMessage.value=storageEmail,inputTextMessage.focus())}),btnCloseMessage.addEventListener("click",function(e){e.preventDefault(),popupMessage.classList.remove("popup-message--animanion-show"),setTimeout(function(){popupMessage.classList.add("popup-message--animanion-hide")},50),setTimeout(function(){popupOverlay.classList.remove("popup-overlay--visible");for(var e=0;e<arrayInputMessage.length;e++)arrayInputMessage[e].classList.remove("input-text-popup--error")},450)}),window.addEventListener("keydown",function(e){27===e.keyCode&&popupOverlay.classList.contains("popup-overlay--visible")&&(popupMessage.classList.remove("popup-message--animanion-show"),setTimeout(function(){popupMessage.classList.add("popup-message--animanion-hide")},50),setTimeout(function(){popupOverlay.classList.remove("popup-overlay--visible");for(var e=0;e<arrayInputMessage.length;e++)arrayInputMessage[e].classList.remove("input-text-popup--error")},450))}),formMessage.addEventListener("submit",function(e){if(inputTextMessage.value&&inputEmailMessage.value&&textAreaMessage.value)localStorage.setItem("name",inputTextMessage.value),localStorage.setItem("email",inputEmailMessage.value);else{e.preventDefault();for(var s=0;s<arrayInputMessage.length;s++)arrayInputMessage[s].value?arrayInputMessage[s].classList.remove("input-text-popup--error"):arrayInputMessage[s].classList.add("input-text-popup--error")}}),arrayInputMessage.forEach(function(e,s,t){e.addEventListener("keydown",function(){e.classList.contains("input-text-popup--error")&&e.classList.remove("input-text-popup--error")})});