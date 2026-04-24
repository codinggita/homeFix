import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sun, Moon, MapPin, User, LogOut } from "lucide-react";
// import useTheme from "../../../hooks/useTheme";
// import useAuth from "../../../hooks/useAuth";
import Button from "./components/Button";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-surface dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                H
              </div>
              <span className="font-bold text-xl tracking-tight text-primary">
                HomeFix
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <MapPin size={16} className="text-primary" />
              <span>Bangalore</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors focus:outline-none"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/dashboard"
                  className="hidden sm:block text-sm font-medium hover:text-primary transition-colors"
                >
                  Dashboard
                </Link>
                <div className="relative group">
                  <Link to="/profile">
                    <div className="h-9 w-9 rounded-full bg-blue-100 dark:bg-blue-900 border border-primary text-primary flex items-center justify-center font-bold overflow-hidden">
                      {user?.name ? (
                        user.name.charAt(0).toUpperCase()
                      ) : (
                        <User size={18} />
                      )}
                    </div>
                  </Link>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 border border-gray-200 dark:border-gray-700 hidden group-hover:block">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                    >
                      <LogOut size={14} /> Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="text-sm font-medium hover:text-primary transition-colors hidden sm:block"
                >
                  Log in
                </Link>
                <Button size="sm" onClick={() => navigate("/signup")}>
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
