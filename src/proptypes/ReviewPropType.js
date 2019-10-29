import { shape, number, string } from "prop-types";

const ReviewPropType = shape({
  id: string,
  name: string.isRequired,
  imageUrl: string.isRequired,
  rating: number.isRequired,
  text: string.isRequired,
  timeCreated: string.isRequired
});

export default ReviewPropType;
