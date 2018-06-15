function initMap() {
  let element = document.querySelector('.inform-column__map');
  let options = {
    zoom: 15,
    center: {lat: 55.686996, lng: 37.529576}
  };

  let myMap = new google.maps.Map(element, options);
  let marker = new google.maps.Marker({
    position: {lat: 55.686996, lng: 37.529576},
    map: myMap
  });
}