import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

export default function CreateReview({ services }) {
  const { user } = useContext(AuthContext);

  const { _id, title } = useLoaderData();

  const handleReview = (e) => {
    e.preventDefault();
    const from = e.target;
    const message = from.message.value;
    const name = user?.displayName || "unregistered";
    const email = user?.email || "unregistered";
    const serviceId = _id;
    const serviceTitle = title;

    const review = {
      name,
      email,
      message,
      serviceId,
      serviceTitle,
    };

    fetch("https://traveltogo.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order placed successfully");
          from.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <>
      <li className="flex py-6">
        <div className="w-10 flex-shrink-0 overflow-hidden rounded-md">
          <img className="rounded-full" alt="" src={user?.photoURL} />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>{user?.displayName}</h3>
              {/* <p className="ml-4">Edit</p> */}
            </div>
            {/* <p className="mt-1 text-sm text-gray-500">Salmon</p> */}
          </div>
          <form
            onSubmit={handleReview}
            className="flex flex-1 items-end justify-between text-sm"
          >
            <textarea
              name="message"
              className="textarea textarea-success w-full mr-4"
              placeholder="Your Comment..."
            ></textarea>

            <div className="flex">
              <button
                type="submit"
                className="btn btn-success btn-sm text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </li>
    </>
  );
}
