/* address_component, adr_address, formatted_address, geometry, icon, name, permanently_closed, photo, type, url, utc_offset, vicinity */

const enabled = false;

const GooglePlace = request => {
  if (enabled) {
    const service = new window.google.maps.places.PlacesService(request.map);
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i += 1) {
          console.log(results[i]);
        }
      }
    });
  }
};

export default GooglePlace;
