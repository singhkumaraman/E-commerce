import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/productReducer";
const initialState = {
  isLoding: false,
  products: [],
  isError: false,
  featuresProducts: [],
  singleProduct: {},
  isSingleLoading: false,
  isSingleError: false,
};
export const AppContext = createContext();
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch("https://api.pujakaitem.com/api/products", {
        method: "GET",
        headers: {
          "Context-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch({ type: "PRODUCTS", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };
  const getSingleProduct = async (id) => {
    dispatch({ type: "SINGLE_LOADING" });

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
      // console.log(data);
      dispatch({ type: "SINGLE_PRODUCT", payload: data });
    } else {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
}
