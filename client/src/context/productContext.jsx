import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/productReducer";
const initialState = {
  isLoding: false,
  products: [],
  isError: false,
  featuresProducts: [],
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
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
}
