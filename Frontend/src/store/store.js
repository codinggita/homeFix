import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import bookingReducer from "../features/bookingSlice";
import servicesReducer from "../features/servicesSlice";
import uiReducer from "../features/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    booking: bookingReducer,
    services: servicesReducer,
    ui: uiReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
