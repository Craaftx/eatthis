const GooglePlacesAdapter = data => {
    console.log(`GooglePlacesAdapter: ${data.length}`);
    console.log(data);
    return data.map(item => {
      return {
        id: item.place_id,
        alias: null,
        name: item.name,
        imageUrl: item.photos[0].getUrl(),
        reviewCount: item.user_ratings_total,
        rating: item.rating,
        categories: item.types,
        latitude: item.geometry.location.lat(),
        longitude: item.geometry.location.lng(),
        displayAddress: item.formatted_address,
        priceLevel: item.price_level,
        reviews: [],
      };
    })
  };
  
  export default GooglePlacesAdapter;
  