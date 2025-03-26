import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Menu,
  X,
  LogIn,
  Sun,
  Moon,
  User,
  LogOut,
  Settings,
  ChevronDown,
  Home,
  Info,
  Heart,
  BarChart3,
  Lightbulb,
  Award,
  Users,
} from "lucide-react";
import { useAuthStore, useThemeStore } from "../lib/store";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    userType: "student" | "ngo" | "donor" | "worker";
    mode: "login" | "signup";
  }>({ isOpen: false, userType: "student", mode: "login" });
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, userType, userProfile, logout } = useAuthStore();
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const openAuthModal = (
    type: "student" | "ngo" | "donor" | "worker",
    mode: "login" | "signup" = "login",
  ) => {
    setAuthModal({ isOpen: true, userType: type, mode });
    setIsOpen(false);
  };

  const mainNavLinks = [
    {
      path: "home",
      label: "Home",
      type: "link",
      id: "home",
      icon: <Home className="h-5 w-5 text-indigo-500" />,
    },
    {
      path: "about",
      label: "About Us",
      type: "link",
      id: "about",
      icon: <Info className="h-5 w-5 text-sky-500" />,
    },
    {
      path: "what-we-do",
      label: "What We Do",
      type: "link",
      id: "what-we-do",
      icon: <BarChart3 className="h-5 w-5 text-emerald-500" />,
    },
    {
      path: "vision",
      label: "Our Vision",
      type: "link",
      id: "vision",
      icon: <Lightbulb className="h-5 w-5 text-purple-500" />,
    },
    {
      path: "goals",
      label: "Our Goals",
      type: "link",
      id: "goals",
      icon: <Award className="h-5 w-5 text-amber-500" />,
    },
  ];

  const subNavLinks = [
    {
      path: "/students",
      label: "Students",
      type: "student",
      icon: <GraduationCap className="h-5 w-5 text-blue-500" />,
    },
    {
      path: "/ngo",
      label: "NGOs",
      type: "ngo",
      icon: <Users className="h-5 w-5 text-purple-500" />,
    },
    {
      path: "/donate",
      label: "Donate",
      type: "donor",
      icon: <Heart className="h-5 w-5 text-rose-500" />,
    },
    {
      path: "/worker",
      label: "Workers",
      type: "worker",
      icon: <User className="h-5 w-5 text-amber-500" />,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const currentPath = location.pathname;

    if (currentPath === "/") {
      // If we're on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate(`/?section=${sectionId}`);
    }
  };

  // Fix scroll positioning for page loads with section parameter
  useEffect(() => {
    if (location.pathname === "/") {
      const sectionParam = new URLSearchParams(window.location.search).get(
        "section",
      );
      if (sectionParam) {
        setTimeout(() => {
          const element = document.getElementById(sectionParam);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.replaceState({}, "", "/");
          }
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    // Check for section parameter in URL when component mounts
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState({}, "", "/"); // Clean up URL
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <div className="fixed w-full z-50">
        {/* Main Navbar */}
        <motion.nav
          initial={false}
          animate={{
            backgroundColor: isScrolled
              ? isDarkMode
                ? "rgba(17, 24, 39, 0.8)"
                : "rgba(255, 255, 255, 0.8)"
              : isDarkMode
                ? "rgba(17, 24, 39, 1)"
                : "rgba(255, 255, 255, 1)",
            backdropFilter: isScrolled ? "blur(8px)" : "none",
            boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
          }}
          className="w-full transition-all duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo Section */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center group">
                  <div
                    className="relative overflow-hidden rounded-full p-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 hover:shadow-lg transition-all duration-300 group-hover:rotate-[360deg]"
                    style={{
                      transition:
                        "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-full p-1.5 transition-all">
                      <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 transition-all group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="ml-2.5 overflow-hidden">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-all">
                      TATHASTU
                    </span>
                    <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-amber-500 transition-all duration-300"></div>
                  </div>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-4 lg:space-x-5">
                {/* Main Nav Links */}
                <div className="flex space-x-1 lg:space-x-3 items-center">
                  {mainNavLinks.map(({ path, label, icon, id, type }) =>
                    type === "link" ? (
                      <button
                        key={id}
                        onClick={() =>
                          id === "home"
                            ? window.scrollTo({ top: 0, behavior: "smooth" })
                            : scrollToSection(id)
                        }
                        className={`px-3 py-2 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-medium relative group ${
                          location.pathname.includes(path)
                            ? "text-blue-600 dark:text-blue-400"
                            : ""
                        }`}
                      >
                        <div className="flex items-center space-x-1.5">
                          <span className="hidden lg:inline-block">{icon}</span>
                          <span>{label}</span>
                        </div>
                        <div
                          className={`h-0.5 bg-blue-500 absolute bottom-0 left-0 transition-all duration-300 ${location.pathname.includes(path) ? "w-full" : "w-0 group-hover:w-full"}`}
                        ></div>
                      </button>
                    ) : (
                      <Link
                        key={path}
                        to={path}
                        className={`px-3 py-2 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-medium relative group ${
                          location.pathname.includes(path)
                            ? "text-blue-600 dark:text-blue-400"
                            : ""
                        }`}
                      >
                        <div className="flex items-center space-x-1.5">
                          <span className="hidden lg:inline-block">{icon}</span>
                          <span>{label}</span>
                        </div>
                        <div
                          className={`h-0.5 bg-blue-500 absolute bottom-0 left-0 transition-all duration-300 ${location.pathname.includes(path) ? "w-full" : "w-0 group-hover:w-full"}`}
                        ></div>
                      </Link>
                    ),
                  )}
                </div>

                {/* Theme Toggle */}
                <div className="order-1 lg:order-2">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 relative overflow-hidden group"
                    aria-label="Toggle theme"
                  >
                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gray-100 dark:bg-gray-800 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
                    {isDarkMode ? (
                      <Sun className="h-5 w-5 text-yellow-500 relative z-10" />
                    ) : (
                      <Moon className="h-5 w-5 text-gray-600 relative z-10" />
                    )}
                  </button>
                </div>

                {/* Authentication Button/Profile */}
                {isAuthenticated ? (
                  <div className="relative group">
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-medium overflow-hidden border-2 border-white dark:border-gray-800">
                          <span>{userProfile?.name?.charAt(0) || "U"}</span>
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 font-medium">
                        {userProfile?.name || "User"}
                      </span>
                      <ChevronDown className="h-4 w-4 text-gray-500 transition-transform group-hover:rotate-180 duration-300" />
                    </button>

                    {/* User Dropdown Menu */}
                    <div className="absolute right-0 w-64 mt-2 origin-top-right bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible z-50 border border-gray-200 dark:border-gray-700">
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-lg font-medium">
                            <span>{userProfile?.name?.charAt(0) || "U"}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                              {userProfile?.name || "User"}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {userProfile?.email || "user@example.com"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-2">
                        <Link
                          to="/profile"
                          className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <User className="h-5 w-5 text-gray-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Profile
                          </span>
                        </Link>

                        <Link
                          to="/settings"
                          className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Settings className="h-5 w-5 text-gray-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Settings
                          </span>
                        </Link>

                        <hr className="my-2 border-gray-200 dark:border-gray-700" />

                        <button
                          onClick={logout}
                          className="w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                        >
                          <LogOut className="h-5 w-5 text-red-500" />
                          <span className="text-sm text-red-600 dark:text-red-400 font-medium">
                            Log out
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative group">
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 font-medium shadow hover:shadow-md">
                      <span>Get Started</span>
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 duration-300" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute right-0 w-56 mt-3 origin-top-right bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible z-50 border border-gray-200 dark:border-gray-700">
                      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          Choose your role
                        </p>
                      </div>
                      <div className="p-2">
                        {subNavLinks.map(({ type, label, icon }) => (
                          <button
                            key={type}
                            onClick={() =>
                              openAuthModal(
                                type as "student" | "ngo" | "donor" | "worker",
                              )
                            }
                            className="flex items-center space-x-2 p-2 w-full text-left rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <div
                              className={`p-1.5 rounded-full ${
                                type === "student"
                                  ? "bg-blue-100 dark:bg-blue-900/20"
                                  : type === "ngo"
                                    ? "bg-purple-100 dark:bg-purple-900/20"
                                    : type === "donor"
                                      ? "bg-green-100 dark:bg-green-900/20"
                                      : "bg-amber-100 dark:bg-amber-900/20"
                              }`}
                            >
                              {icon}
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                {label.slice(0, -1)}
                              </span>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {type === "student"
                                  ? "Access learning resources"
                                  : type === "ngo"
                                    ? "Register your organization"
                                    : type === "donor"
                                      ? "Make a contribution"
                                      : "Join as a volunteer"}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="p-3 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700 flex space-x-2">
                        <button
                          onClick={() => openAuthModal("student", "login")}
                          className="flex-1 px-4 py-2 text-center text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                        >
                          Login
                        </button>
                        <button
                          onClick={() => openAuthModal("student", "signup")}
                          className="flex-1 px-4 py-2 text-center text-xs font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex items-center space-x-3">
                {/* Theme Toggle Mobile */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 relative overflow-hidden group"
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5 text-yellow-500 absolute inset-0 m-auto transform transition-opacity opacity-100 rotate-0" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-600 absolute inset-0 m-auto transform transition-opacity opacity-100 rotate-0" />
                  )}
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gray-100 dark:bg-gray-800 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
                </button>

                {/* Menu Toggle Button */}
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  {isOpen ? (
                    <X className="h-6 w-6 transform transition-transform duration-300" />
                  ) : (
                    <Menu className="h-6 w-6 transform transition-transform duration-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Sub Navbar for User Types */}
        <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex justify-center space-x-2">
              {subNavLinks.map(({ path, label, type, icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-2 text-white rounded-md hover:bg-white/10 transition-all duration-300 font-medium relative group ${
                    location.pathname === path ? "bg-white/20" : ""
                  }`}
                >
                  <div className="flex items-center space-x-1.5">
                    <span className="text-white">{icon}</span>
                    <span>{label}</span>
                  </div>
                  <div
                    className={`h-0.5 bg-white absolute bottom-[-2px] left-0 transition-all duration-300 ${location.pathname === path ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
                {/* Main Navigation Links */}
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-3 mb-2">
                    Main Navigation
                  </p>
                  {mainNavLinks.map(({ path, label, icon, id, type }) =>
                    type === "link" ? (
                      <button
                        key={id}
                        onClick={() => {
                          scrollToSection(id);
                          setIsOpen(false);
                        }}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          {icon}
                          <span
                            className={`font-medium ${
                              location.pathname.includes(path)
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-gray-700 dark:text-gray-200"
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                      </button>
                    ) : (
                      <Link
                        key={path}
                        to={path}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          {icon}
                          <span
                            className={`font-medium ${
                              location.pathname === path
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-gray-700 dark:text-gray-200"
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                      </Link>
                    ),
                  )}
                </div>

                <hr className="border-gray-200 dark:border-gray-800" />

                {/* User Type Links */}
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-3 mb-2">
                    User Categories
                  </p>
                  {subNavLinks.map(({ path, label, icon }) => (
                    <Link
                      key={path}
                      to={path}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        {icon}
                        <span
                          className={`font-medium ${
                            location.pathname === path
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-200"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                <hr className="border-gray-200 dark:border-gray-800" />

                {/* Mobile Authentication Section */}
                {isAuthenticated ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-lg font-medium">
                          <span>{userProfile?.name?.charAt(0) || "U"}</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          {userProfile?.name || "User"}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {userProfile?.email || "user@example.com"}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Link
                        to="/profile"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <User className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Profile
                        </span>
                      </Link>

                      <Link
                        to="/settings"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <Settings className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Settings
                        </span>
                      </Link>

                      <button
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-left"
                      >
                        <LogOut className="h-5 w-5 text-red-500" />
                        <span className="text-red-600 dark:text-red-400 font-medium">
                          Log out
                        </span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Sign in or create an account
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {subNavLinks.map(({ type, icon }) => (
                        <button
                          key={type}
                          onClick={() =>
                            openAuthModal(
                              type as "student" | "ngo" | "donor" | "worker",
                            )
                          }
                          className={`p-3 rounded-lg transition-all duration-300 ${
                            type === "student"
                              ? "bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                              : type === "ngo"
                                ? "bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30"
                                : type === "donor"
                                  ? "bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30"
                                  : "bg-amber-50 dark:bg-amber-900/20 hover:bg-amber-100 dark:hover:bg-amber-900/30"
                          }`}
                        >
                          <div className="flex flex-col items-center space-y-2">
                            <div
                              className={`p-2 rounded-full ${
                                type === "student"
                                  ? "bg-blue-100 dark:bg-blue-900"
                                  : type === "ngo"
                                    ? "bg-purple-100 dark:bg-purple-900"
                                    : type === "donor"
                                      ? "bg-green-100 dark:bg-green-900"
                                      : "bg-amber-100 dark:bg-amber-900"
                              }`}
                            >
                              {icon}
                            </div>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                              {type === "student"
                                ? "Student"
                                : type === "ngo"
                                  ? "NGO"
                                  : type === "donor"
                                    ? "Donor"
                                    : "Worker"}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => openAuthModal("student", "login")}
                        className="flex-1 px-4 py-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => openAuthModal("student", "signup")}
                        className="flex-1 px-4 py-2 text-center text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Creates space for the sticky navbar */}
      <div className="md:h-[40px]"></div>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        userType={authModal.userType}
        mode={authModal.mode}
      />
    </>
  );
};

export default Navbar;
