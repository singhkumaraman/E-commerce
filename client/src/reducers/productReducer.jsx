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
    case "SINGLE_LOADING":
      return {
        isSingleLoading: true,
        ...state,
      };
    case "SINGLE_ERROR":
      return {
        isSingleLoading: false,
        isSingleError: true,
      };
    case "SINGLE_PRODUCT":
      return {
        ...state,
        isLoading: false,
        singleProduct: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
