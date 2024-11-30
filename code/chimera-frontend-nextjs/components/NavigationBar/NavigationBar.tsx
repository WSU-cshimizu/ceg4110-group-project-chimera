"use client";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { scroller as ScrollLink } from "react-scroll";
import { CiSettings } from "react-icons/ci";

interface UserDetail {
  id: number;
  name: string;
  email: string;
  // Add other properties based on your `userDetail` structure
}

const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrollTarget, setScrollTarget] = useState(null);
  const [loginShow, setLoginShow] = useState(true);
  const [userDetails, setUserDetails] = useState<any>(null);
  const [active, setActive] = useState("home");
  const { isAuthenticated, login, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (sectionId: any) => {
    setActive(sectionId);
    if (pathname === "/") {
      // If already on the home page, scroll immediately
      ScrollLink.scrollTo(sectionId, {
        smooth: true,
      });
      if (sectionId === "home") {
        window.scrollTo(0, 0);
      }
    } else {
      // If not on the home page, navigate first, then scroll after a delay
      router.push("/");
      // Set the scroll target and navigate to the home page
      setScrollTarget(sectionId);
      router.push("/");
    }
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const storedUserDetailString = localStorage.getItem("userDetail") || null;

  const storedUserDetail: UserDetail | null = storedUserDetailString
    ? JSON.parse(storedUserDetailString)
    : null;

  useEffect(() => {
    setLoginShow(false);
    if (storedUserDetail) {
      setUserDetails(storedUserDetail);
    }
  }, []);

  const removeLocalStorate = () => {
    localStorage.removeItem("userDetail");
    window.location.reload();
  };

  useEffect(() => {
    if (scrollTarget) {
      // Wait for 2 seconds, then scroll
      const timer = setTimeout(() => {
        ScrollLink.scrollTo(scrollTarget, {
          smooth: true,
        });
        setScrollTarget(null); // Reset the scroll target after scrolling
      }, 800);

      return () => clearTimeout(timer); // Clean up timeout on unmount or dependency change
    }
  }, [pathname, scrollTarget]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md w-100 px-8 md:px-auto fixed w-full z-[100000000] top-0">
      <div
        id="home"
        className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap"
      >
        <div className="text-indigo-500 md:order-1 font-extrabold">CHIMERA</div>
        <div className="text-gray-700 dark:text-gray-200 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li
              className={`md:px-4 md:py-2 ${
                active === "home"
                  ? "text-indigo-500 dark:text-indigo-400"
                  : "hover:text-indigo-400 dark:hover:text-indigo-300"
              }`}
              onClick={() => handleNavigation("home")}
              style={{ cursor: "pointer" }}
            >
              Home
            </li>
            <li
              className={`md:px-4 md:py-2 ${
                active === "aboutUs"
                  ? "text-indigo-500 dark:text-indigo-400"
                  : "hover:text-indigo-400 dark:hover:text-indigo-300"
              }`}
              onClick={() => handleNavigation("aboutUs")}
              style={{ cursor: "pointer" }}
            >
              About Us
            </li>
            <li
              className={`md:px-4 md:py-2 ${
                active === "explore"
                  ? "text-indigo-500 dark:text-indigo-400"
                  : "hover:text-indigo-400 dark:hover:text-indigo-300"
              }`}
              onClick={() => {
                handleNavigation("explore");
                router.push("/explore");
              }}
              style={{ cursor: "pointer" }}
            >
              Explore
            </li>
            <li
              className={`md:px-4 md:py-2 ${
                active === "contactUs"
                  ? "text-indigo-500 dark:text-indigo-400"
                  : "hover:text-indigo-400 dark:hover:text-indigo-300"
              }`}
              onClick={() => handleNavigation("contactUs")}
              style={{ cursor: "pointer" }}
            >
              Contact Us
            </li>
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <div className="flex gap-2">
            {isAuthenticated || storedUserDetailString ? (
              <a
                onClick={() => {
                  removeLocalStorate();
                  logout();
                }}
                className="cursor-pointer px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
              >
                Log out
              </a>
            ) : (
              <a
                onClick={() => {
                  router.push("/login-page");
                }}
                className="relative cursor-pointer inline-flex items-center px-12 py-1 overflow-hidden text-sm font-small text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Log In</span>
              </a>
            )}
            <div className="relative">
              {/* Button to open the dropdown */}
              {isAuthenticated || storedUserDetailString ? (
                <button
                  onClick={toggleDropdown}
                  className="flex h-10 w-10 p-2 items-center justify-center rounded-md border border-gray-800 text-gray-800 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:border-slate-300 dark:text-white"
                >
                  <CiSettings size={"23px"} />
                </button>
              ) : null}

              {/* Dropdown menu */}
              {isOpen && (
                <div
                  className="absolute z-50 mt-2 right-1 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                  id="language-dropdown-menu"
                >
                  <ul className="py-2 font-medium" role="none">
                    <li>
                      <a
                        href="/profile-settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <div className="inline-flex items-center">
                          
                          Settings
                        </div>
                      </a>
                    </li>
                    {/* Add more languages below */}
                    <li>
                      <a
                        href="/my-posts"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <div className="inline-flex items-center">My Posts</div>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              type="button"
              className="flex h-10 w-10 p-2 items-center justify-center rounded-md border border-gray-800 text-gray-800 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:border-slate-300 dark:text-white"
            >
              <svg
                className="dark:hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                className="hidden dark:block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
