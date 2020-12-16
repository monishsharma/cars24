import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  loading:false
};

const Items = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADER: {
      return {
        ...state,
        loading: true
      };
    }

    case actionTypes.UNSET_LOADER: {
        return {
          ...state,
          loading: false
        };
      }

    default: {
      return state;
    }
  }
};

export default Items;
