"use strict";function addFocusToElementsArray(n,a,o,c,r){for(var e=function(e){var t=n[e].querySelector(a),s=void 0;o&&(s=n[e].querySelector(o));var i=n[e].querySelector(c);t.addEventListener("focus",function(){i.classList.contains(r)||i.classList.add(r)}),t.addEventListener("blur",function(){i.classList.contains(r)&&i.classList.remove(r)}),s&&(s.addEventListener("focus",function(){i.classList.contains(r)||i.classList.add(r)}),s.addEventListener("blur",function(){i.classList.contains(r)&&i.classList.remove(r)}))},t=0;t<n.length;t++)e(t)}if(!document.querySelector(".index-js")){var catalogCards=document.querySelectorAll(".catalog-card"),catalogCardBtn=".btn",catalogCardCompresion=".catalog-card__comparison",catalogCardUpperLayer=".catalog-card__upper-layer",catalogCardUpperLayerVisible="catalog-card__upper-layer--visible";addFocusToElementsArray(catalogCards,catalogCardBtn,catalogCardCompresion,catalogCardUpperLayer,catalogCardUpperLayerVisible)}function addClassVisibleParentElements(e,t,s){for(var i=0;i<e.length;i++)e[i].addEventListener("focus",function(){t.classList.contains(s)||t.classList.add(s)}),e[i].addEventListener("blur",function(){t.classList.contains(s)&&t.classList.remove(s)})}console.log("Main-menu");var subLinks=document.querySelectorAll(".main-menu__sub-link"),subList=document.querySelector(".main-menu__sub-list");function initMap(){var e=document.querySelector(".inform-column__map"),t=new google.maps.Map(e,{zoom:15,center:{lat:55.686996,lng:37.529576}});new google.maps.Marker({position:{lat:55.686996,lng:37.529576},map:t})}addClassVisibleParentElements(subLinks,subList,"main-menu__sub-list--visible"),document.querySelector(".index-js")&&function(){for(var n=document.querySelectorAll(".dots-slider__item"),a=document.querySelectorAll(".slide"),e=function(i){n[i].addEventListener("click",function(){for(var e=0;e<n.length;e++)if(e!==i)n[e].classList.contains("dots-slider__item--active")&&n[e].classList.remove("dots-slider__item--active");else if(e===i&&!n[e].classList.contains("dots-slider__item--active")){n[e].classList.add("dots-slider__item--active");for(var t=function(e){e!==i?a[e].classList.contains("slide--visible")&&(a[e].classList.remove("slide--animationIn"),setTimeout(function(){a[e].classList.add("slide--animationOut")},100),setTimeout(function(){a[e].classList.remove("slide--visible")},600)):e===i&&(a[e].classList.contains("slide--visible")||(a[e].classList.remove("slide--animationOut"),setTimeout(function(){a[e].classList.add("slide--visible")},650),setTimeout(function(){a[e].classList.add("slide--animationIn")},650)))},s=0;s<a.length;s++)t(s)}})},t=0;t<n.length;t++)e(t)}(),document.querySelector(".index-js")&&function(){for(var n=document.querySelector(".service-list").querySelectorAll(".btn"),a=document.querySelectorAll(".service-description"),e=function(i){n[i].addEventListener("click",function(){for(var e=0;e<n.length;e++)if(e!==i)n[e].classList.contains("btn--active")&&n[e].classList.remove("btn--active");else if(e===i&&!n[e].classList.contains("btn--active")){n[e].classList.add("btn--active");for(var t=function(e){e!==i?a[e].classList.contains("service-description--visible")&&(a[e].classList.remove("service-description--animationIn"),setTimeout(function(){a[e].classList.add("service-description--animationOut")},100),setTimeout(function(){a[e].classList.remove("service-description--visible")},600)):e===i&&(a[e].classList.contains("service-description--visible")||(a[e].classList.remove("service-description--animationOut"),setTimeout(function(){a[e].classList.add("service-description--animationIn")},700),setTimeout(function(){a[e].classList.add("service-description--visible")},700)))},s=0;s<a.length;s++)t(s)}})},t=0;t<n.length;t++)e(t)}(),document.querySelector(".index-js")&&function(){var e=document.querySelector(".btn--contacts-js"),t=document.querySelector(".popup-overlay"),s=t.querySelector(".popup-message"),i=t.querySelector(".popup-close"),n=t.querySelector(".form-popup"),a=n.querySelector("[name=name]"),o=n.querySelector("[name=email]"),c=n.querySelector("[name=text]"),r=n.querySelectorAll("[name]"),l=localStorage.getItem("name"),u=localStorage.getItem("email");e.addEventListener("click",function(e){e.preventDefault(),s.classList.remove("popup-message--animanion-hide"),t.classList.add("popup-overlay--visible"),s.classList.add("popup-message--animanion-show"),l&&u?(a.value=l,o.value=u,c.focus()):l?(a.value=l,o.focus()):(o.value=u,a.focus())}),i.addEventListener("click",function(e){e.preventDefault(),s.classList.remove("popup-message--animanion-show"),setTimeout(function(){s.classList.add("popup-message--animanion-hide")},50),setTimeout(function(){t.classList.remove("popup-overlay--visible");for(var e=0;e<r.length;e++)r[e].classList.remove("input-text-popup--error")},450)}),window.addEventListener("keydown",function(e){27===e.keyCode&&t.classList.contains("popup-overlay--visible")&&(s.classList.remove("popup-message--animanion-show"),setTimeout(function(){s.classList.add("popup-message--animanion-hide")},50),setTimeout(function(){t.classList.remove("popup-overlay--visible");for(var e=0;e<r.length;e++)r[e].classList.remove("input-text-popup--error")},450))}),n.addEventListener("submit",function(e){if(a.value&&o.value&&c.value)localStorage.setItem("name",a.value),localStorage.setItem("email",o.value);else{e.preventDefault();for(var t=0;t<r.length;t++)r[t].value?r[t].classList.remove("input-text-popup--error"):r[t].classList.add("input-text-popup--error")}});for(var d=function(e){r[e].addEventListener("keydown",function(){r[e].classList.contains("input-text-popup--error")&&r[e].classList.remove("input-text-popup--error")})},m=0;m<r.length;m++)d(m)}();