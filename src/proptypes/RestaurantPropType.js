import { shape, number, string, array, arrayOf } from "prop-types";
import ReviewPropType from "./ReviewPropType";

const RestaurantPropType = shape({
  id: string,
  alias: string,
  name: string.isRequired,
  imageUrl: string,
  reviewCount: number.isRequired,
  rating: number.isRequired,
  categories: array.isRequired,
  latitude: number.isRequired,
  longitude: number.isRequired,
  displayAddress: string.isRequired,
  priceLevel: string,
  reviews: arrayOf(ReviewPropType)
});

export default RestaurantPropType;