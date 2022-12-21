import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewRow from "./MyReviewRow";

export default function MyReviews() {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(
        `https://b6a11-service-review-server-side-ashik72-ashik72.vercel.app/reviews/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  useEffect(() => {
    document.title = "Travel To Go. | My Reviews";
  });
  useEffect(() => {
    fetch(`https://traveltogo.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  const handleStatusUpdate = (id) => {
    fetch(`https://traveltogo.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter((odr) => odr._id !== id);
          const approving = reviews.find((odr) => odr._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setReviews(newOrders);
        }
      });
  };

  return (
    <div className="mx-auto w-full flex items-center	">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            {/* <th></th> */}
            <th>Name</th>
            <th>Service Title</th>
            <th>Your Reviews</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <MyReviewRow
              key={review._id}
              review={review}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
            ></MyReviewRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
