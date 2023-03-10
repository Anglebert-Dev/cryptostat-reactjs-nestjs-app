import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { usersApi } from "../api/user.api";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    counter: counterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(usersApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
