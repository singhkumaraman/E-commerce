import React, { useContext } from "react";
import { FilterContext } from "./context/FilterContext";
import ProductsList from "./components/ProductsList";
const Products = () => {
  const context = useContext(FilterContext);
  const { filterproducts, sorting, allProducts } = context;
  return (
    <div className="py-10 px-32 ">
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-1 border border-gray-300 rounded-sm h-1/2">
          <div className="p-3">
            <span className="font-semibold text-gray-400">Sort by:</span>
            <div>
              <form action="#">
                <label htmlFor="sort"></label>
                <select name="sort" id="sort" className="" onClick={sorting}>
                  <option value="lowest">Price(lowest)</option>
                  <option value="highest">Price(highest)</option>
                  <option value="a-z">Price(a-z)</option>
                  <option value="z-a">Price(z-a)</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <ProductsList items={filterproducts} />
        </div>
      </div>
    </div>
  );
};

export default Products;
