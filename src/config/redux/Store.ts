import { persistStore } from 'redux-persist'
import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware, { ThunkDispatch, ThunkMiddleware } from "redux-thunk";
import { RootAction } from "./reducers/RootAction";
import RootReducer from "./reducers/RootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools
    : compose;

export type IAppActions = RootAction;
export type IAppState = ReturnType<typeof RootReducer>;
export type IAppDispatch = ThunkDispatch<IAppState, any, IAppActions>;

const Store = createStore(
  RootReducer,
  composeEnhancers(
    applyMiddleware<IAppDispatch, any>(
      thunkMiddleware as ThunkMiddleware<IAppState, IAppActions, any>
    )
  )
);

export const persistor = persistStore(Store)

export default Store;


