import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from ".";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";

import storage from "reduxjs-toolkit-persist/lib/storage";

const rootPersistConfig = {
    key :"root",
    storage:storage
};

const PresistReducer =persistReducer(rootPersistConfig,rootReducer);

const store =configureStore({
    reducer:{
      products: PresistReducer},
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),

})

export const persistor = persistStore(store);
export default store;