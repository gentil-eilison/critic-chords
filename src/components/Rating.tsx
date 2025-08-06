import { Rating as ReactRating } from "@smastrom/react-rating";

// Value taken from Lucide icons website
const customStar = (
  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
);

const myStyles = {
  itemShapes: customStar,
  activeFillColor: "var(--color-green-500)",
  inactiveFillColor: "var(--color-gray-600)",
};

interface RatingProps {
  rating: number;
  setRating: (rating: number) => void;
  readOnly?: boolean;
}

export default function Rating({
  rating,
  setRating,
  readOnly = false,
}: RatingProps) {
  return (
    <ReactRating
      style={{ maxWidth: 150 }}
      value={rating}
      onChange={setRating}
      itemStyles={myStyles}
      readOnly={readOnly}
    />
  );
}
