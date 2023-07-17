import { React, useContext, useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import CartAmountToggle from "./components/CartAmountToggle";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const setIncreaseCount = () => {
    setCount(count === stock ? stock : count + 1);
  };
  const setDecreaseCount = () => {
    setCount(count > 1 ? count - 1 : 1);
  };
  const getSingleProduct = async (id) => {
    const response = await fetch(
      `https://api.pujakaitem.com/api/products/${id}`,
      {
        method: "GET",
        headers: {
          "Context-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } else {
      throw error("Error 404");
    }
  };
  useEffect(() => {
    getSingleProduct(id);
  }, []);
  const { name, company, image, description, stock, reviews, price, stars } =
    product;
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded-xl object-cover lg:h-96 lg:w-1/2"
            // src={image[0].url}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            {/* <h2 className="text-sm font-semibold tracking-widest text-gray-500">
              {name}
            </h2> */}
            <h1 className="my-4 text-3xl font-semibold text-black">
              {company}
            </h1>
            <p className="leading-relaxed">{description}</p>
            {/* //rating and review section */}
            <div className="my-4 flex gap-2 items-center">
              <div>{stars}</div>
              <div>
                <Star size={16} className="text-yellow-500" />
              </div>
              <span className="flex flex-col items-center space-x-1">
                <span className="ml-3 inline-block text-xs font-semibold">
                  {reviews} Reviews
                </span>
              </span>
            </div>
            {/* //ends here.... */}
            <div className="mb-5 mt-6 flex-col  items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center gap-16">
                <div>
                  <TbTruckDelivery className="text-5xl text-blue-500 items-center" />
                  <span>Free Delivery</span>
                </div>
                <div>
                  <TbReplace className="text-5xl text-blue-500" />
                  <span>Replacement</span>
                </div>
                <div>
                  <MdSecurity className="text-5xl text-blue-500" />
                  <span>Secure</span>
                </div>
              </div>
              <br></br>
              <div className=" flex items-center justify-between">
                <div className=" flex items-center">
                  <span className="mr-3 text-sm font-semibold">Stock :</span>
                  <div className="relative">{stock}</div>
                </div>
                <div>
                  <CartAmountToggle
                    count={count}
                    increment={setIncreaseCount}
                    decrement={setDecreaseCount}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">
                {Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                  style: "currency",
                  currency: "INR",
                }).format(Number(price) / 100)}
              </span>
              <button
                type="button"
                className="rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
