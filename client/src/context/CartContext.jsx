import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducers/CartReducer";
import { json } from "react-router-dom";
export const CartContext = createContext();
const getCartData = () => {
  let newCart = localStorage.getItem("cart");
  if (newCart == []) return [];
  else return JSON.parse(localStorage.getItem("cart"));
};
const initialState = {
  cart: getCartData(),
  total_item: "",
  total_price: "",
  shipping_charges: 100000,
};
export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
