import Review from "./Review";
import placeholder from "../placeholder.jpg";

export default class Restaurant {
  constructor(data) {
    this._id = data.id;
    this._alias = data.alias;
    this._name = data.name;
    this._imageUrl = data.imageUrl ? data.imageUrl : placeholder;
    this._reviewCount = data.reviewCount;
    this._rating = data.rating;
    this._categories = data.categories;
    this._latitude = data.latitude;
    this._longitude = data.longitude;
    this._displayAddress = data.displayAddress;
    this._reviews = data.reviews.map(
      review => new Review(review)
    );
  }

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

  get reviews() {
    return this._reviews;
  }
}
