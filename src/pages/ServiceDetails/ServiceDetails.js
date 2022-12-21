import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hook/useTitle";
import ReviewSection from "./ReviewSection";

export default function ServicesDetails() {
  const { _id, title, price, decs, image_url } = useLoaderData();
  const { user } = useContext(AuthContext);

  useTitle("Service Details");

  return (
    <div>
      <div className="flex p-20 pt-20  bg-white shadow">
        <div className="rounded-l-xl flex-1">
          <img className="rounded-l-xl w-full h-full" src={image_url} alt="" />
        </div>
        <div className="flex-1 rounded-r-xl ">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg text-2xl text-center font-semibold leading-6 text-gray-900">
              Service Information
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Service Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {title}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Service Price
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  ${price}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Decscription
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {decs}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="p-10 w-2/4 border-solid border-2 border-indigo-100">
        {user?.uid ? (
          <ReviewSection service={_id}></ReviewSection>
        ) : (
          <Link to="/login">
            <button className="ml-10 btn btn-outline btn-success">
              Please Login to Add a Review
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
