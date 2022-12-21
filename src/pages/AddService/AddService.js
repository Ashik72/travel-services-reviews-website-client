import React from "react";
import useTitle from "../../hook/useTitle";

export default function AddService() {
  useTitle("Add Services");
  const handleService = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const image_url = form.photourl.value;
    const decs = form.decs.value;

    const service = {
      title,
      price,
      image_url,
      decs,
    };

    fetch(
      "https://b6a11-service-review-server-side-ashik72-ashik72.vercel.app/service",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(service),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Service placed successfully");

          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="pt-96 lg:p-10">
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleService}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="title"
                          id="company-website"
                          className="input input-bordered w-full focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Service Title"
                        />
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="price"
                          id="company-website"
                          className="block input input-bordered w-full max-w-xs w-full flex-1  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Service Title"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cover photo URL
                    </label>
                    <input
                      type="text"
                      name="photourl"
                      id="company-website"
                      className="input input-bordered w-full focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Service Title"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="decs"
                        className="textarea textarea-success w-full mr-4"
                        placeholder="Bio"
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
