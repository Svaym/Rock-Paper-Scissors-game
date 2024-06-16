import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modalReducer";
import countReducer from "./reducers/countReducer";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    counter: countReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch