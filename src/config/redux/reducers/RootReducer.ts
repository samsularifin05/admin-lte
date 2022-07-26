// import { combineReducers } from "redux";
import loadingState from "./redux-loading/redux-loading.state";
import { reducer as reducerForm } from "redux-form";
import theme from "./redux-theme/redux-theme";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  loader: loadingState,
  theme : theme,
  form: reducerForm,
});

export type RootState = ReturnType<typeof RootReducer>

export default RootReducer;
