const GooglePlacesAdapter = data => {
    console.log(`GooglePlacesAdapter: ${data.length}`);
    console.log(data);
    /**
     * pas besoin du deuxième return => item =>  ({})
     */
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
  