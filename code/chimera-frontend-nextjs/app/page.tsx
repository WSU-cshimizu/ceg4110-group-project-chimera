"use client";
import React, { useEffect, useState } from "react";
import AboutUs from "./landing-page/AboutUs";
import ContactUs from "./landing-page/ContactUs";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event and toggle button visibility
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="mt-3 min-h-[90vh] flex bg-customBg dark:bg-gray-800 text-gray-900 dark:text-gray-200 dark:border-gray-600 p-6">
        <div className="min-h-full w-[50vh] flex-grow flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Are You Ready to Face the Unexplained?
          </h2>
          <h2 className="text-xl md:text-2xl">Start Your Journey Today!</h2>
          <button className="mt-4 px-6 py-2 bg-indigo-500 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition duration-200">
            Start Now
          </button>
        </div>

        <div className="min-h-full flex-grow relative">
          <img
            src="ghostimg.png"
            className="absolute top-0 right-0 p-4 mt-5"
          ></img>{" "}
        </div>
      </div>
      <div id="aboutUs">
        <AboutUs />
      </div>
      <div id="contactUs">
        <ContactUs />
      </div>

      <button
        id="to-top-button"
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 p-3 border-0 w-14 h-14 transition-opacity rounded-full shadow-md bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold duration-300 ${
          isVisible ? "" : "hidden"
        }`}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
};

export default LandingPage;
