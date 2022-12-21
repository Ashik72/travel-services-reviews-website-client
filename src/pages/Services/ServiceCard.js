import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function ServiceCard({ service }) {
  const { _id, image_url, price, title, decs } = service;
  return (
    <div>
      <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <PhotoProvider>
            <PhotoView src={image_url}>
              <img
                src={image_url}
                alt=""
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <div className="my-2 flex justify-between">
              <div>
                <h3 className="text-2xl font-semibold pb-2 text-gray-700">
                  {title}
                </h3>
                {`${decs.substring(0, 100)}...`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>${price}</p>
        <Link className="flex items-center" to={`/servicedetails/${_id}`}>
          <button className="pr-1 hover:text-red-700">View Details </button>
          <span className="text-red-700">
            <FaLongArrowAltRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
