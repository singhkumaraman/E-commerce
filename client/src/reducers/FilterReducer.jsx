const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_FILTER_PRODUCT":
      return {
        ...state,
        allProducts: [...action.payload],
        filterproducts: [...action.payload],
      };
    case "SORT":
      let id = document.getElementById("sort");
      let val = id.options[id.selectedIndex].value;
      return {
        ...state,
        sorted: val,
      };
    case "SORT_PRODUCT":
      let filtered;
      let temp = [...action.payload];
      if (state.sorted === "a-z") {
        filtered = temp.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (state.sorted === "z-a") {
        filtered = temp.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      } else if (state.sorted === "lowest") {
        filtered = temp.sort((a, b) => {
          return a.price > b.price;
        });
      } else if (state.sorted === "highest") {
        filtered = temp.sort((a, b) => {
          return a.price < b.price;
        });
      }
      return {
        ...state,
        filterproducts: filtered,
      };
    default:
      return state;
  }
};

export default FilterReducer;
