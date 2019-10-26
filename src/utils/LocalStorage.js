//     2jri34oepejw34: {
//         reviews: [
//             {},
//             {}
//         ]
//     }

const { localStorage } = window;

const setReviews = (restaurantId, reviews) => {
  const storedReviews = localStorage.getItem(restaurantId);
  if (storedReviews) {
    localStorage.setItem(restaurantId, [...storedReviews, reviews]);
  } else {
    localStorage.setItem(restaurantId, [reviews]);
  }
};

const getReviews = restaurantId => {
  const storedReviews = localStorage.getItem(restaurantId);
  if (storedReviews) {
    return storedReviews;
  }
  return [];
};
