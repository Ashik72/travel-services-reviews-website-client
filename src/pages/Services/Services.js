import React, { useEffect, useState } from "react";
import useTitle from "../../hook/useTitle";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useTitle("Services");

  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-ashik72-ashik72.vercel.app/services"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
    setLoading(false);
  }, []);
  if (loading) {
    return <h1 className="text-5xl p-10">Loading...</h1>;
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl pb-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900 pb-5">
          Find Your Tour Location And Take My Guidelines
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {/* Single product  */}

          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
}
