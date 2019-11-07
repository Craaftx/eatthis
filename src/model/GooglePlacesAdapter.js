const GooglePlacesAdapter = data => {
  const categoriesFilter = ['point_of_interest', 'establishment'];
  return data.map(item => ({
    id: item.place_id,
    alias: null,
    name: item.name,
    imageUrl: item.photos[0].getUrl(),
    reviewCount: item.user_ratings_total,
    rating: item.rating,
    categories: item.types.filter(element => !categoriesFilter.includes(element)),
    latitude: item.geometry.location.lat(),
    longitude: item.geometry.location.lng(),
    displayAddress: item.formatted_address,
    priceLevel: item.price_level,
    reviews: []
  }));
};

export default GooglePlacesAdapter;
