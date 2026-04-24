import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import bookingReducer from "../features/booking/bookingSlice";
import servicesReducer from "../features/services/servicesSlice";
import uiReducer from "../features/ui/uiSlice";

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
