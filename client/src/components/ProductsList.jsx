import React from "react";

const ProductsList = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-6 items-center">
      {items.map((_, i) => (
        <div key={i} className="rounded-md border p-4 ">
          <img
            src={_.image}
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {_.name}
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              {_.description.substring(0, 40) + "..."}
            </p>
            {/* <div className="mt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #{_.company}
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #{_.category}
        </span>
      </div> */}
            <div className="mt-5 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Price : </span>
              <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                {Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                  style: "currency",
                  currency: "INR",
                }).format(_.price / 100)}
              </span>
            </div>
            {/* <button
        type="button"
        className="mt-4 w-full rounded-sm bg-green-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Buy
      </button> */}
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
