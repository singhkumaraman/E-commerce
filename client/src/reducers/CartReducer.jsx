import React from "react";

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, amount, product } = action.payload;
      let cart_product = {};
      if (idx !== -1) {
        state.cart[idx].amount += 1;
      } else {
        cart_product = {
          id: id,
          name: product.name,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
      }
      return {
        ...state,
        cart: [...state.cart, cart_product],
      };
    case "REMOVE_ITEM":
      const _id = action.payload;
      let updatedCart = state.cart.filter((e) => {
        return e.id !== _id;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    default:
      return {
        ...state,
      };
  }
};

export default CartReducer;
