import React, { useContext } from "react";
import { AppContext } from "../context/productContext";

import Card from "./Card";

const Featured = () => {
  const context = useContext(AppContext);
  const FeaturedProducts = context.featuresProducts;
  let Loading = context.Loading;
  if (Loading) return <div>Loading....</div>;
  return (
    <div className="bg-gray-100 rounded-lg p-10">
      <div>
        <h1 className="text-4xl font-bold text-center font-mono">
          {" "}
          Our Featured Products
        </h1>
      </div>
      <div className="flex">
        {FeaturedProducts.map((val, i) => (
          <Card {...val} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
{
  /* <div className="m-auto max-w-5xl px-2 lg:px-8 mr-36 p-5">
        <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Featured Products
          </h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">
            CHECK NOW !!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          {FeaturedProducts.map((val, i) => (
            <div className="p-2 ">
              <div className="mx-auto flex h-1/2 w-30 items-center justify-center rounded-xl bg-blue-100">
                <img src={val.image} className="rounded-xl " />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-black">
                {val.name}
              </h3>
              {/* <p className="mt-4 text-sm text-gray-600">{val.price}</p> */
}
//     </div>
//   ))}
// </div>
// </div> */}
