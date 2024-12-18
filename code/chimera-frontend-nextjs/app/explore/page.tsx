"use client";
import React, { useEffect, useState } from "react";
import "../custom-css/explore-page.css";

import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import ViewMore from "@/components/ViewMore";
import LikeButton from "@/components/LikeButton";
import { BiSearch } from "react-icons/bi";

// Define the form's data structure
interface FormValues {
  title: string;
  datetime: string;
  location: string;
  description: string;
}

export default function Page() {
  const [entities, setEntities] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [reportList, setReportList] = useState([]);
  // const [likedReports, setLikedReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [modalDetails, setModalDetails] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [user, setUser] = useState<Object | null>(null);
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });

  const handleDateChange = (e: any) => {
    const { id, value } = e.target;
    setDateRange((prevRange) => ({
      ...prevRange,
      [id]: value,
    }));
  };

  const handleDateSubmit = () => {
    if (dateRange.startDate && dateRange.endDate) {
      console.log("Start Date:", dateRange.startDate);
      console.log("End Date:", dateRange.endDate);
      const datedata = {
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
      };
      axios
        .post("http://localhost:9000/api/filter-reports", datedata)
        .then((res) => {
          setReportList(res.data);
        })
        .catch((err) => {
          setReportList([]);
          console.log(err);
        });
    } else {
      console.error("Both start and end dates must be selected.");
    }
  };


  // useEffect(() => {
  //   // Retrieve userDetails from local storage
  //   const storedUserDetails = localStorage.getItem("userDetail");
  //   console.log(storedUserDetails);
  //   if (storedUserDetails) {
  //     const parsedDetails = JSON.parse(storedUserDetails);
  //     setUser(parsedDetails);
  //     console.log(parsedDetails);
  //     setUserId(parsedDetails.userid || null); // Extract userid
  //   }

    // axios
    //   .get("http://localhost:9000/api/mostLikedReports")
    //   .then((res) => {
    //     setLikedReports(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  // }, []);
 


  



  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  const dateconverter = (dt: any) => {
    const date = new Date(dt);

    // Convert to a readable format
    const readableDateTime = date.toLocaleString("en-US", {
      weekday: "long", // e.g. "Wednesday"
      year: "numeric", // e.g. "2024"
      month: "long", // e.g. "November"
      day: "numeric", // e.g. "21"
      hour: "numeric", // e.g. "8"
      minute: "numeric", // e.g. "26"
      second: "numeric", // e.g. "00"
      hour12: true, // Use 12-hour clock (AM/PM)
    });

    return readableDateTime;
  };

  
  const onSubmit = (data: any) => {
    const payload = {
      title: data.title,
      rpt_entity_reportedentityid: data.rpt_entity_reportedentityid,
      location_locationid: selectedLocation, // Ensure this is set
      datetime: data.datetime,
      reportedevidence: data.description,
      user_userid: userId || 1, // Ensure userId is properly set, default to 1
      is_anonymous: isChecked ? 1 : 0, // Convert boolean to number
    };
  
    console.log("Submitting payload:", payload); // Debugging
  
    axios
      .post("http://localhost:9000/api/reports", payload)
      .then((res) => {
        toast.success("Report posted successfully.");
        console.log("API Response:", res.data);
      })
      .catch((err) => {
        toast.error("Couldn't submit the report");
        console.error("Error details:", err.response?.data || err.message);
      });
  };


  const handleChange = (event: any) => {
    const selectedId = event.target.value;
    setSelectedLocation(selectedId);
  };

  // const handleViewMore = (details: any) => {
  //   console.log(details);
  //   setModalDetails(details); // Set the details to be passed to the modal
  //   setIsModal2Open(true); // Open the modal
  // };
  // const handleViewMore = async (details: any) => {
  //   try {
  //     // Fetch the entity name using the rpt_entity_reportedentityid
  //     const response = await axios.get(
  //       `http://localhost:9000/api/known_entities/${details.rpt_entity_reportedentityid}`
  //     );
  
  //     // Add the entity name to the details object
  //     const updatedDetails = {
  //       ...details,
  //       entity_name: response.data.name || "Unknown Entity",
  //     };
  
  //     setModalDetails(updatedDetails); // Set the updated details to the modal
  //     setIsModal2Open(true); // Open the modal
  //   } catch (error) {
  //     console.error("Failed to fetch entity name:", error);
  //     setModalDetails({ ...details, entity_name: "Unknown Entity" });
  //     setIsModal2Open(true); // Open the modal even if entity fetching fails
  //   }
  // };


  // const handleViewMore = async (details: any) => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:9000/api/entities/${details.rpt_entity_reportedentityid}`
  //     );
  //     const entityName = response.data.name || "Unknown Entity";
  
  //     setModalDetails({ ...details, entity_name: entityName });
  //     setIsModal2Open(true);
  //   } catch (err) {
  //     console.error("Error fetching entity name:", err);
  //     setModalDetails({ ...details, entity_name: "Unknown Entity" });
  //     setIsModal2Open(true);
  //   }
  // };
  const handleViewMore = async (details: any) => {
    try {
      // Fetch the entity type (name) using the `rpt_entity_reportedentityid`
      const response = await axios.get(
        `http://localhost:9000/api/entities/name/${details.rpt_entity_reportedentityid}`
      );
  
      // Add the fetched entity type to the report details
      const updatedDetails = {
        ...details,
        entity_name: response.data.ketype || "Unknown Entity",
      };
  
      setModalDetails(updatedDetails); // Pass the updated details to the modal
      setIsModal2Open(true); // Open the modal
    } catch (error) {
      console.error("Failed to fetch entity name (ketype):", error);
      // If the fetch fails, fallback to default
      setModalDetails({ ...details, entity_name: "Unknown Entity" });
      setIsModal2Open(true);
    }
  };
  
  

  const closeModal = () => {
    setIsModal2Open(false); // Close the modal
  };

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/locations")
      .then((res) => {
        setLocations(res.data);
      })
      .catch((err) => {
        console.log("location fetch error");
      });

    axios
      .get("http://localhost:9000/api/reports")
      .then((res) => {
        console.log("response", res);
        setReportList(res.data);
      })
      .catch((err) => {
        console.log("location fetch error");
      });
  }, []);

  const handleClear = () => {
    setDateRange({
      startDate: "",
      endDate: "",
    });

    axios
      .get("http://localhost:9000/api/reports")
      .then((res) => {
        console.log("response", res);
        setReportList(res.data);
      })
      .catch((err) => {
        console.log("location fetch error");
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleOpenModal = () => {
    if (user?.is_blocked == 1) {
      toast.error("You can't post any story");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (event :any) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter data based on search term
    const filtered = reportList.filter((item) =>
      item.title.toLowerCase().includes(value)
    );

    setReportList(filtered);
  };

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
                <label
                  htmlFor="startDate"
                  className="mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Start Date and Time
                </label>
                <input
                  type="datetime-local"
                  id="startDate"
                  value={dateRange.startDate}
                  onChange={handleDateChange}
                  className="w-full px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  htmlFor="endDate"
                  className="mb-2 text-sm font-medium text-black dark:text-white"
                >
                  End Date and Time
                </label>
                <input
                  type="datetime-local"
                  id="endDate"
                  value={dateRange.endDate}
                  onChange={handleDateChange}
                  className="w-full px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="w-full mt-3">
                <button
                  onClick={handleDateSubmit}
                  className="w-full md:ml-[-10px] px-6 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium"
                >
                  Filter
                </button>
              </div>
              <div className="w-full mt-3">
                <button
                  onClick={handleClear}
                  className="w-full md:ml-[-10px] px-6 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <article className="col-span-12 md:col-span-6 lg:col-span-5 row-start-2 md:row-start-1 md:mt-[45px] p-4">
          <div className="pt-2 relative my-3 mx-auto text-gray-600 dark:text-gray-300">
            <input
              className="border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              name="search"
              placeholder="Search"
              onChange={handleSearch}
            />
          </div>
          <ul className="space-y-8">
            {reportList.length > 0 ? (
              reportList.map(
                (items) =>
                  items.status !== "pending" &&
                  items.status !== "denied" && (
                    // <li className="text-sm leading-6">
                    <li key={items.reportid} className="text-sm leading-6">
                      <div className="relative group">
                        <div className="absolute transition rounded-lg opacity-25 -inset-1 duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                        <a className="cursor-pointer">
                          <div className="relative p-6 space-y-6 leading-none rounded-lg bg-zinc-100 dark:bg-slate-700 ring-1 ring-gray-900/5">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <img
                                  src={
                                    items.is_anonymous
                                      ? "https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_1280.png"
                                      : "https://pics.craiyon.com/2023-12-24/THsjm15QQhaId4fUzAcBgQ.webp"
                                  }
                                  className="w-12 h-12 bg-center bg-cover border rounded-full"
                                  alt="Tim Cook"
                                />
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                                    {items.title}
                                  </h3>
                                  <h4 className="text-md text-gray-400  text-gray-700 dark:text-white mb-2">
                                    {items.user_name == null ||
                                    items.is_anonymous
                                      ? "Anonymous"
                                      : items.user_name}
                                  </h4>
                                  <p className="text-gray-500 text-md">
                                    {dateconverter(items.datetime)}
                                  </p>
                                </div>
                              </div>

                              {/* <LikeButton
                                postId={items.reportid}
                                userId={items.user_id}
                              /> */}
                            </div>
                            <p className="leading-normal dark:text-gray-300 text-gray-600 text-md">
                              {items.reportedevidence ?? null}
                            </p>

                            <button
                              onClick={() => handleViewMore(items)}
                              className="flex items-center text-indigo-700 dark:bg-white border border-indigo-600 py-2 px-5 gap-1 rounded inline-flex items-center"
                            >
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
                            </button>
                          </div>
                        </a>
                      </div>
                    </li>
                  )
              )
            ) : (
              <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-pink-700 bg-pink-100 border border-pink-300 ">
                <div className="text-xs font-normal leading-none max-w-full flex-initial">
                  No reports found!
                </div>
              </div>
            )}
          </ul>
        </article>
        {isModal2Open && (
          <ViewMore
            isOpen={isModal2Open}
            onClose={closeModal}
            details={modalDetails}
          />
        )}

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
                    {/* {likedReports?.map((items) => (
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
                              {items.title}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              {items.reportedevidence}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))} */}
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-4 overflow-y-auto"
              >
                <div className="space-y-4">
                  {/* Title Input */}
                  <div>
                    <input
                      type="text"
                      placeholder="Enter title"
                      {...register("title", { required: "Title is required" })}
                      className={`w-full p-2 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 ${
                        errors.title
                          ? "border border-red-500"
                          : "border border-gray-300"
                      }`}
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.title.message}
                      </p>
                    )}
                  </div>

                  {/* Date and Time Input */}
                  <div>
                    <input
                      type="datetime-local"
                      {...register("datetime", {
                        required: "Date and time are required",
                      })}
                      className={`w-full p-2 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 ${
                        errors.datetime
                          ? "border border-red-500"
                          : "border border-gray-300"
                      }`}
                    />
                    {errors.datetime && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.datetime.message}
                      </p>
                    )}
                  </div>

                  {/* Location Input */}
                  <div>
                    <label
                      htmlFor="location-select"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Select Location:
                    </label>
                    <select
                      id="location-select"
                      {...register("location", {
                        required: "Location is required",
                      })}
                      onChange={handleChange}
                      className={`w-full p-2 mt-1 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 ${
                        errors.location
                          ? "border border-red-500"
                          : "border border-gray-300"
                      }`}
                    >
                      <option value="">-- Choose a location --</option>
                      {locations?.map((location) => (
                        <option
                          key={location.locationid}
                          value={location.locationid}
                        >
                          {location.building_name} - {location.roomdetails}
                        </option>
                      ))}
                    </select>
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.location.message}
                      </p>
                    )}
                  </div>

                  {/* Description Textarea */}
                  <div>
                    <textarea
                      placeholder="Enter description"
                      {...register("description", {
                        required: "Description is required",
                      })}
                      className={`w-full p-2 rounded h-24 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 ${
                        errors.description
                          ? "border border-red-500"
                          : "border border-gray-300"
                      }`}
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  <div>Anonymous Post: </div>
                  <label className="relative mb-5 cursor-pointer w-max-content">
                    <input
                      type="checkbox"
                      checked={!userId ? true : null}
                      onChange={handleToggleChange}
                      className="peer sr-only"
                      disabled={!userId}
                    />
                    <div className="peer h-5 w-10 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
                  </label>

                  {/* Submit Button */}
                  <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="py-2 px-3 inline-flex items-center text-sm font-medium rounded-lg border bg-white text-gray-800 hover:bg-gray-50"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      onSubmit={handleSubmit(onSubmit)}
                      className="py-2 px-3 inline-flex items-center text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
