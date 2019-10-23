const GooglePlace = (request, callback) => {
    const service = new window.google.maps.places.PlacesService(request.map);
    service.nearbySearch(request, callback);
};

export default GooglePlace;
