import React from "react";



const AboutUs = () => {
  return (
    <div>
      <section className="bg-white dark:bg-customBg2 h-[100vh] flex items-center justify-center" >
        {" "}
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-900 dark:text-gray-200 text-lg">
                WSU students, faculty, and staff have reported strange
                disturbances across the campus and surrounding areas. Campus
                police, maintnence, and custodial staff’slusive information regarding these
                disturbances. We believe these disturbances are of the
                supernatural nature. The goal of C.H.I.M.E.R.A. is to compile
                all known supernatural entity data and compare reports from
                students to help determine unknown supernatural entities.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-500 text-blue-500 dark:text-blue-200 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="AboutUs.png"
                alt="About Us Image"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
