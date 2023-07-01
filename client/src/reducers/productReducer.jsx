const productReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        isLoading: true,
        ...state,
      };
    case "ERROR":
      return {
        isLoading: false,
        isError: true,
      };
    case "PRODUCTS":
      const featuredProducts = action.payload.filter(
        (val) => val.featured === true
      );
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuresProducts: featuredProducts,
      };
    default:
      return state;
  }
};
export default productReducer;
