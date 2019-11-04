class LocalStorage {
  storageGetItem = (key) => {
    const { localStorage } = window;
    return JSON.parse(localStorage.getItem(key));
  }

  storageSetItem = (key, value) => {
    const { localStorage } = window;
    localStorage.setItem(key, JSON.stringify(value));
  }

  setReviews = (restaurantId, reviews) => {
    const storedReviews = this.storageGetItem(restaurantId);
    if (storedReviews) {
      this.storageSetItem(restaurantId, [...storedReviews, reviews]);
    } else {
      this.storageSetItem(restaurantId, [reviews]);
    }
  };
  
  getReviews = restaurantId => {
    const storedReviews = this.storageGetItem(restaurantId);
    if (storedReviews) {
      return storedReviews;
    }
    return [];
  };

  addRestaurant = (restaurant) => {
    const storedRestaurants = this.storageGetItem("restaurants");
    if (storedRestaurants) {
      this.storageSetItem("restaurants", [...storedRestaurants, restaurant]);
    } else {
      this.storageSetItem("restaurants", [restaurant]);
    }
  };
  
  getRestaurants = () => {
    const storedRestaurants = this.storageGetItem("restaurants");
    if (storedRestaurants) {
      return storedRestaurants;
    }
    return [];
  };
}

export default LocalStorage;