const YelpAdapter = data => {
  return data.map(item => {
    return {
      id: item.id,
      alias: item.alias,
      name: item.name,
      imageUrl: item.image_url,
      reviewCount: item.review_count,
      rating: item.rating,
      categories: item.categories.map(category => category.title),
      latitude: item.coordinates.latitude,
      longitude: item.coordinates.longitude,
      priceLevel: item.price,
      displayAddress: item.location.display_address.join(" "),
      reviews: item.reviews.map(review => {
        return {
          id: review.id,
          name: review.user.name,
          imageUrl: review.user.image_url,
          rating: review.rating,
          text: review.text,
          timeCreated: review.time_created
        };
      })
    };
  })
};

export default YelpAdapter;
