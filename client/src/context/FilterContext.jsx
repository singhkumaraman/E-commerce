import { createContext, useEffect, useReducer, useContext } from "react";
import { AppContext } from "./productContext";
import reducer from "../reducers/FilterReducer";
export const FilterContext = createContext();
const initialState = {
  filterproducts: [],
  allProducts: [],
  sorted: "lowest",
};
export function FilterContextProvider({ children }) {
  const { products } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "LOADING_FILTER_PRODUCT", payload: products });
  }, [products]);
  useEffect(() => {
    dispatch({ type: "SORT_PRODUCT", payload: products });
  }, [state.sorted]);
  const sorting = () => {
    dispatch({ type: "SORT" });
  };
  return (
    <FilterContext.Provider value={{ ...state, sorting }}>
      {children}
    </FilterContext.Provider>
  );
}
