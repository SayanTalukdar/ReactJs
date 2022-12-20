import { createStore } from "redux";
import { rootReducer } from "./CombineReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persistTodo",
  storage,
};

const persistRootReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistRootReducer);
export const Store = persistStore(store);
export default store;
