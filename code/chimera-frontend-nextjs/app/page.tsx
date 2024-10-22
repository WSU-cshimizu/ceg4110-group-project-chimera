import React from "react";
import "./custom-css/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="custom-component min-h-[90vh] flex bg-customBg dark:bg-gray-800 text-gray-900 dark:text-gray-200 dark:border-gray-600 p-6">
      <div className="min-h-full w-[50vh] flex-grow flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          Are You Ready to Face the Unexplained?
        </h2>
        <h2 className="text-xl md:text-2xl">
          Start Your Journey Today!
        </h2>
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
  );
};

export default LandingPage;
