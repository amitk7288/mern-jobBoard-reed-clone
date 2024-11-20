import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { apiSlice } from "../features/apiSlice";
import authReducer from "../features/authSlice";
import profileReducer from "../features/profileSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware),
  devTools: true,
});

export const persistor = persistStore(store);