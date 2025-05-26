import { useEffect, useState } from "react";

interface StarRatingProps {
  maxStars?: number;
  initialRating?: number;
  interactive?: boolean;
  rating: number;
}

export default function StarRating({
  maxStars = 5,
  initialRating,
  interactive = false,
}: StarRatingProps) {
  const [rating, setRating] = useState<number>(initialRating || 0);

  useEffect(() => {
    if (initialRating === undefined) {
      const randomRating = Math.floor(Math.random() * maxStars) + 1;
      setRating(randomRating);
    }
  }, [initialRating, maxStars]);

  const handleClick = (index: number) => {
    if (interactive) {
      setRating(index + 1);
    }
  };

  return (
    <div
      className="flex items-center mt-2"
      aria-label={`Rating: ${rating} out of ${maxStars}`}
    >
      {Array.from({ length: maxStars }, (_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 cursor-${
            interactive ? "pointer" : "default"
          } transition-colors ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => handleClick(i)}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.075 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
        </svg>
      ))}
    </div>
  );
}
