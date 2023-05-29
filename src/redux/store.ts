import { configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "./api/charactersApi";
import pagesButtonSlice from "./features/pages button/pagesButtonSlice";

export const store = configureStore({
  reducer: {
    pagesButtonSlice,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
