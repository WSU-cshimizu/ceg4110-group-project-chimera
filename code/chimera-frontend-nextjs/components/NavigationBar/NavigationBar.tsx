"use client";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { scroller as ScrollLink } from "react-scroll";

const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrollTarget, setScrollTarget] = useState(null);

  const handleNavigation = (sectionId: any) => {
    if (pathname === "/") {
      // If already on the home page, scroll immediately
      ScrollLink.scrollTo(sectionId, {
        smooth: true,
      });
    } else {
      // If not on the home page, navigate first, then scroll after a delay
      router.push("/");
      // Set the scroll target and navigate to the home page
      setScrollTarget(sectionId);
      router.push("/");
    }
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
            <li className="md:px-4 md:py-2 text-indigo-500 dark:text-indigo-400">
              <span
                onClick={() => handleNavigation("home")}
                style={{ cursor: "pointer" }}
              >
                Home
              </span>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400 dark:hover:text-indigo-300">
              <span
                onClick={() => handleNavigation("aboutUs")}
                style={{ cursor: "pointer" }}
              >
                About Us
              </span>
            </li>
            <li
              className="md:px-4 md:py-2 hover:text-indigo-400 dark:hover:text-indigo-300"
              onClick={() => {
                router.push("/explore");
              }}
              style={{ cursor: "pointer" }}
            >
              Explore
            </li>
            <li
              className="md:px-4 md:py-2 hover:text-indigo-400 dark:hover:text-indigo-300"
              style={{ cursor: "pointer" }}
            >
              <span
                onClick={() => handleNavigation("contactUs")}
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </span>
            </li>
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2"
              onClick={() => router.push("/login-page")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Login</span>
            </button>
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
