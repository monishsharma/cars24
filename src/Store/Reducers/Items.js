import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  products: [],
};

const Items = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_PRODUCTS: {
      return {
        ...state,
        products: action.products,
      };
    }

    default: {
      return state;
    }
  }
};

export default Items;
