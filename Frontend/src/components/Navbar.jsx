import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MapPin, User, LogOut, Menu, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slice/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Don't show navbar on login/signup pages
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";
  if (hideNavbar) return null;

  const navLinks = [
    { label: "Explore", path: "/" },
    { label: "Services", path: "/services" },
    ...(isAuthenticated
      ? [{ label: "Bookings", path: "/dashboard" }]
      : []),
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Left: Logo + Nav Links */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                H
              </div>
              <span className="font-bold text-base tracking-tight text-gray-900">
                HomeFix
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Location + Auth */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
              <MapPin size={15} className="text-primary" />
              <span>Bangalore</span>
            </div>

            {isAuthenticated ? (
              <div className="relative">
                <Link to="/profile">
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm cursor-pointer">
                    {user?.name ? (
                      user.name.charAt(0).toUpperCase()
                    ) : (
                      <User size={14} />
                    )}
                  </div>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Log in
                </Link>
                <button
                  onClick={() => navigate("/signup")}
                  className="text-sm font-medium bg-primary text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-red-500 rounded-lg hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 text-sm font-medium text-primary rounded-lg hover:bg-blue-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
