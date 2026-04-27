import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

/**
 * STEP 2: Import Global Features
 * - HelmetProvider: Helps with SEO (setting page titles).
 * - Toaster: Shows small pop-up notifications.
 * - ThemeProvider: Controls the look and feel (colors, fonts).
 */
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getMuiTheme } from "./theme/muiTheme";

/**
 * STEP 3: Import Hooks and Components
 * - useAuth: A custom hook to check if the user is logged in.
 * - Nav & Footer: Components that stay on every page.
 */
import useAuth from "./hooks/useAuth";
import GlobalToast from "./components/Toast";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";

/**
 * STEP 4: Import All Pages
 * Each of these represents a different screen in our app.
 */
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ServicesPage from "./pages/ServicesPage";
import ProviderProfilePage from "./pages/ProviderProfilePage";
import BookingPage from "./pages/BookingPage";
import DashboardPage from "./pages/Dashboard";
import UserProfilePage from "./pages/UserProfilePage";
import AdminDashboard from "./pages/AdminDashboard";
import NotFoundPage from "./pages/NotFoundPage";

/**
 * HELPER: ProtectedRoute
 * This "guards" a page. If a user isn't logged in, it sends them to the Login page.
 */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login, but remember where they were trying to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

/**
 * HELPER: RoleRoute
 * This checks if a user is logged in AND has the right "role" (like 'admin').
 */
const RoleRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, role } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(role)) {
    // If they don't have permission, send them to their dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

/**
 * HELPER: ConditionalFooter
 * Hides Footer on login/signup and booking pages for a cleaner experience.
 */
const ConditionalFooter = () => {
  const location = useLocation();
  const hideOnPaths = ["/login", "/signup"];
  const hideOnPrefixes = ["/book/"];

  const shouldHide =
    hideOnPaths.includes(location.pathname) ||
    hideOnPrefixes.some((prefix) => location.pathname.startsWith(prefix));

  if (shouldHide) return null;
  return <Footer />;
};

/**
 * MAIN COMPONENT: App
 * This is the entry point of our entire React application.
 */
function App() {
  // We use the light version of our theme
  const muiTheme = React.useMemo(() => getMuiTheme(), []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Everything inside ThemeProvider will use our custom colors/fonts */}
        <ThemeProvider theme={muiTheme}>
          {/* CssBaseline resets browser styles to look consistent */}
          <CssBaseline />

          {/* Navigation bar — auto-hides on login/signup pages */}
          <Nav />

          {/* This is where the magic happens: Routing! */}
          <Routes>
            {/* --- PUBLIC PAGES (Anyone can see these) --- */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServicesPage />} />
            <Route path="/provider/:id" element={<ProviderProfilePage />} />

            {/* --- PRIVATE PAGES (Must be logged in) --- */}
            <Route
              path="/book/:providerId/*"
              element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <UserProfilePage />
                </ProtectedRoute>
              }
            />

            {/* --- ADMIN PAGES (Only for users with 'admin' role) --- */}
            <Route
              path="/admin/*"
              element={
                <RoleRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </RoleRoute>
              }
            />

            {/* --- 404 PAGE (If the URL doesn't match any above) --- */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          {/* Footer — auto-hides on login/signup/booking pages */}
          <ConditionalFooter />

          {/* Notification handlers */}
          <Toaster position="top-right" />
          <GlobalToast />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
