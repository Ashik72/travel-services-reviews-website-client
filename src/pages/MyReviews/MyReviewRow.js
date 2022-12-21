import React from "react";

export default function MyReviewRow({
  review,
  handleDelete,
  handleStatusUpdate,
}) {
  const { _id, name, message, serviceTitle, status } = review;

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{serviceTitle}</td>
        <td>{message}</td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-active btn-ghost mr-2"
          >
            Delete
          </button>

          <button
            onClick={() => handleStatusUpdate(_id)}
            className="btn btn-success btn-xs"
          >
            {status ? status : "pending"}
          </button>
        </td>
      </tr>
    </>
  );
}
