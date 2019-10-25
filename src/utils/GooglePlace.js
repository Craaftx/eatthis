const enabled = true;

const GooglePlace = request => {
  const places = [];
  if (enabled) {
    const service = new window.google.maps.places.PlacesService(request.map);
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        // TODO: Delay for loop
        for (let i = 0; i < 3; i += 1) {
          // Get data for Basic Plan only
          // See https://developers.google.com/maps/billing/gmp-billing#basic-data
          const detailsRequest = {
            placeId: results[i].place_id,
            fields: ['address_component', 'adr_address', 'formatted_address', 'geometry', 'icon', 'name', 'permanently_closed', 'photo', 'type', 'url', 'utc_offset', 'vicinity']
          };
          service.getDetails(detailsRequest, (place, statusDetails) => {
            const result = results[i];
            if (statusDetails === window.google.maps.places.PlacesServiceStatus.OK) {
              places.push({...place, place_id: result.place_id, rating: result.rating, price_level: result.price_level, user_ratings_total: result.user_ratings_total });
            }
          });
        }
      }
    });
  }
  return places;
};

export default GooglePlace;
