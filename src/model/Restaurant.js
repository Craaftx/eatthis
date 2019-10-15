// import fetchJsonp from "fetch-jsonp";
// import config from "../config";
// import Review from "./Review";
import placeholder from "../placeholder.jpg";

export default class Restaurant {
  constructor(data) {
    this._id = data.id;
    this._alias = data.alias;
    this._name = data.name;
    this._imageUrl = data.image_url ? data.image_url : placeholder;
    this._reviewCount = data.review_count;
    this._rating = data.rating;
    this._categories = data.categories.map(category => category.title);
    this._latitude = data.coordinates.latitude;
    this._longitude = data.coordinates.longitude;
    this._displayAddress = data.location.display_address.join(" ");
    // this._reviews = this.getReviewsFromApi().reviews.map(
    //   review => new Review(review)
    // );
  }

  // async getReviewsFromApi() {
  //   const response = await fetchJsonp(`https://api.yelp.com/v3/businesses/${this.id}/reviews?locale=fr_FR`, { 
  //     headers: new Headers({
  //       "Authorization": `Bearer ${config.yelp.apiKey}`,
  //     }),
  //   });
  //   console.log(response);
  //   return await response.json();
  // }

  get id() {
    return this._id;
  }

  get alias() {
    return this._alias;
  }

  get name() {
    return this._name;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  get reviewCount() {
    return this._reviewCount;
  }

  get rating() {
    return this._rating;
  }

  get categories() {
    return this._categories;
  }

  get latitude() {
    return this._latitude;
  }

  get longitude() {
    return this._longitude;
  }

  get displayAddress() {
    return this._displayAddress;
  }
}
