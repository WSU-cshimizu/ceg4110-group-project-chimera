"use client";
import React, { useEffect, useState } from "react";
import "../custom-css/explore-page.css";

export default function Page() {
  const [entities, setEntities] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //useEffect(() => {
  //    fetch('http://localhost:9000/explore')
  //        .then(response => response.json())
  //        .then(data => {
  //            setEntities(data);
  //        });
  //}, []);
  const items = Array.from({ length: 10 });
  return (
    <>
      <main className="grid grid-cols-12 md:grid-rows-[55px_1fr] min-h-screen gap-4 p-4 md:mt-0 mt-[100px]">
        {/* Sidebar Section */}

        <section className="col-span-12 md:col-span-3 lg:col-span-3 row-start-1 md:row-start-1 md:sticky md:top-20 self-start p-4">
          <button
            type="button"
            onClick={handleOpenModal}
            className="w-full py-2.5 mb-5 px-6 text-sm bg-blue-50 text-blue-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-100 hover:text-red-700"
          >
            Add your story +
          </button>

          <div className="bg-zinc-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-md p-3">
            <h1 className="text-xl font-bold">Filter</h1>
            <div className="flex flex-col items-center justify-between gap-3 align-start space-y-4 md:space-y-0 bg-none md:space-x-4 p-6 rounded-lg">
              <div className="relative w-full mb-3">
                <label className=" mb-2 text-sm font-medium dark:text-white text-black">
                  Date and Time
                </label>
                <input
                  type="datetime-local"
                  id="date-time"
                  className=" w-full px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="relative w-full">
                <label className="block md:ml-[-10px] mb-2 text-sm font-medium dark:text-white text-black">
                  Category of Report
                </label>
                <select
                  id="category"
                  className=" md:ml-[-10px] w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Category</option>
                  <option value="sales">Sales</option>
                  <option value="finance">Finance</option>
                  <option value="inventory">Inventory</option>
                  <option value="customer">Customer</option>
                </select>
              </div>

              <div className="w-full mt-3">
                <button className="w-full md:ml-[-10px] px-6 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <article className="col-span-12 md:col-span-6 lg:col-span-5 row-start-2 md:row-start-1 md:mt-[45px] p-4">
          <ul className="space-y-8">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-zinc-100 dark:bg-slate-700 ring-1 ring-gray-900/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_1280.png"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                            Anonymous
                          </h3>
                          <p className="text-gray-500 text-md">
                            20th July 2024
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="py-1.5 px-3 hover:text-green-600 hover:scale-105 hover:shadow text-center border border-gray-300 dark:border-gray-700 rounded-md h-8 text-sm flex items-center gap-1 lg:gap-2 bg-green-800 text-white">
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                            ></path>
                          </svg>
                          <span>342</span>
                        </button>

                        <button className="py-1.5 px-3 hover:text-red-600 hover:scale-105 hover:shadow text-center border border-gray-300 dark:border-gray-700 rounded-md h-8 text-sm flex items-center gap-1 lg:gap-2 bg-red-800 text-white">
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                            ></path>
                          </svg>
                          <span>12</span>
                        </button>
                      </div>
                    </div>
                    <p className="leading-normal dark:text-gray-300 text-gray-600 text-md">
                      {`I was alone in my room when the air suddenly turned cold, sending a chill down my spine. The lights flickered for a moment, and I could swear I heard soft footsteps approaching. As I turned, my breath caught—there, in the dim corner ...`}
                    </p>

                    <div className="flex items-center text-indigo-700 dark:bg-white border border-indigo-600 py-2 px-5 gap-1 rounded inline-flex items-center">
                      <span>View More</span>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-3 h-3 ml-2"
                      >
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </article>

        {/* Popular Stories Section */}
        <section className="col-span-12 md:col-span-3 lg:col-span-4 row-start-3 md:row-start-1 md:sticky md:top-20 self-start p-4">
          <div className="p-4 md:p-8 bg-zinc-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-md p-3">
            <h1 className="text-xl font-bold">Popular Stories</h1>
            <div className="max-w-2xl mx-auto">
              <div className="max-w-md rounded-lg">
                <div className="flow-root">
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src="https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_1280.png"
                            alt="Neil image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {`I was alone in my room when the air suddenly turned cold, sending a chill down my spine. 
                          The lights flickered for a moment, and I could swear I heard soft footsteps approaching. As I turned, my breath caught—there, in the dim corner ...`}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src="https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_1280.png"
                            alt="Bonnie image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Bonnie Green
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {`I was alone in my room when the air suddenly turned cold, sending a chill down my spine. The lights flickered for a moment, and I could swear I heard soft footsteps approaching. As I turned, my breath caught—there, in the dim corner ...`}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src="https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_1280.png"
                            alt="Michael image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Michael Gough
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {`I was alone in my room when the air suddenly turned cold, sending a chill down my spine. The lights flickered for a moment, and I could swear I heard soft footsteps approaching. As I turned, my breath caught—there, in the dim corner ...`}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src="https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_1280.png"
                            alt="Lana image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Lana Byrd
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {`I was alone in my room when the air suddenly turned cold, sending a chill down my spine. The lights flickered for a moment, and I could swear I heard soft footsteps approaching. As I turned, my breath caught—there, in the dim corner ...`}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="pt-3 pb-0 sm:pt-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src="https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_1280.png"
                            alt="Thomas image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Thomes Lean
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {`I was alone in my room when the air suddenly turned cold, sending a chill down my spine. The lights flickered for a moment, and I could swear I heard soft footsteps approaching. As I turned, my breath caught—there, in the dim corner ...`}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {isModalOpen && (
          <div
            id="hs-vertically-centered-modal"
            className="  fixed inset-0 z-[1000000000000000] flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50"
            role="dialog"
            aria-labelledby="hs-vertically-centered-modal-label"
          >
            <div className="bg-zinc-100 dark:bg-slate-700 rounded-xl shadow-xl sm:max-w-lg w-full mx-3 p-4">
              <div className="flex justify-between items-center py-3 px-4 border-b">
                <h3
                  id="hs-vertically-centered-modal-label"
                  className="font-bold text-gray-800 dark:text-gray-200"
                >
                  Add story
                </h3>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none"
                  aria-label="Close"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold dark:text-white text-black">Title</label>
                    <input
                      type="text"
                      placeholder="Enter title"
                      className="w-full p-2 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold dark:text-white text-black">Date and Time</label>
                    <input
                      type="datetime-local"
                      className="w-full p-2 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold dark:text-white text-black">Location</label>
                    <input
                      type="text"
                      placeholder="Enter location"
                      className="w-full p-2 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold dark:text-white text-black">Weather</label>
                    <input
                      type="text"
                      placeholder="Enter weather"
                      className="w-full p-2 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold dark:text-white text-black">Description</label>
                    <textarea
                      placeholder="Enter description"
                      className="w-full p-2 rounded h-24 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="py-2 px-3 inline-flex items-center text-sm font-medium rounded-lg border bg-white text-gray-800 hover:bg-gray-50"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
