import React, { useEffect, useState } from "react";
import CreateReview from "./CreateReview";
import ShowReviews from "./ShowReviews";

export default function ReviewSection({ service }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-ashik72-ashik72.vercel.app/review/${service}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [service]);

  return (
    <div>
      <h1 className="text-2xl text-center font-bold tracking-tight text-gray-900 pb-5">
        Write your review
      </h1>
      <div className="flow-root">
        <ul className="-my-6 divide-y divide-gray-200">
          <CreateReview service={service}></CreateReview>
          {reviews.map((review) => (
            <ShowReviews key={review._id} review={review}></ShowReviews>
          ))}
        </ul>
      </div>
    </div>
  );
}
