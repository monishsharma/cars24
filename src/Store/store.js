// import { createStore, applyMiddleware } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

// for testing
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


// for production
// export const store = createStore(rootReducer, applyMiddleware(thunk));

export default { store };
