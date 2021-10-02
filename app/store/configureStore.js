import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "./rootReducer";
import middlewares from "./middlewares";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
