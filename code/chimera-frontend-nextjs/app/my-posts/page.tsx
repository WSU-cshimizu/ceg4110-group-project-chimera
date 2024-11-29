"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiDelete } from "react-icons/fi";
import { MdDelete, MdDeleteForever, MdEdit } from "react-icons/md";
import UpdatePost from "../UpdatePost";

const Page = () => {
  const [reportList, setReportList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const storedUserDetailString = localStorage.getItem("userDetail") || null;
  const userDetail = JSON.parse(
    storedUserDetailString ? storedUserDetailString : ""
  ); // Parse the string into an object
  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/userReports/${userDetail.userid}`)
      .then((res) => {
        setReportList(res.data);
      })
      .catch((err) => {
        console.log("location fetch error");
      });
  }, []);

  const handleEdit = (details: any) => {
    setIsOpen(true);
    setSelectedReport(details);
  };

  const onClose = () => {
    setIsOpen(false);
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

  const handleDelete = (id: any) => {
    axios
      .delete(`http://localhost:9000/api/reports/${id}`)
      .then((response) => {
        // Update the state to remove the deleted report
        setReportList((prevReports: any) =>
          prevReports.filter((report) => report.reportid !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting report:", error);
      });
  };

  console.log(reportList);

  return (
    <div className="flex justify-center flex-col items-center mt-[100px] text-black">
      <h1 className="text-lg font-semibold text-gray-700 dark:text-white">
        MY POSTS
      </h1>

      <article className="w-[60%]  flex-col col-span-12 md:col-span-6 lg:col-span-5 row-start-2 md:row-start-1 md:mt-[45px] p-4">
        <ul className="space-y-8">
          {reportList.length > 0
            ? reportList.map((items) => (
                <li className="text-sm leading-6">
                  <div className="relative group">
                    <div className="absolute transition rounded-lg opacity-25 -inset-1 duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a className="cursor-pointer">
                      <div className="relative p-6 space-y-6 leading-none rounded-lg bg-zinc-100 dark:bg-slate-700 ring-1 ring-gray-900/5">
                        <div className="flex items-center justify-between">
                          <div className=" w-full flex justify-between items-center space-x-4">
                            <div className="flex space-x-4">
                              <img
                                src="https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_1280.png"
                                className="w-12 h-12 bg-center bg-cover border rounded-full"
                                alt="Tim Cook"
                              />
                              <div>
                                <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                                  {items.user_name == null || items.is_anonymous
                                    ? "Anonymous"
                                    : items.user_name}
                                </h3>
                                <p className="text-gray-500 text-md">
                                  {dateconverter(items.datetime)}
                                </p>
                              </div>
                            </div>

                            <div
                              className={`flex justify-center items-center m-1 px-3 py-2 rounded-full text-base text-white font-medium 
  ${
    items.status === "approved"
      ? "bg-green-700"
      : items.status === "denied"
      ? "bg-red-700"
      : items.status === "pending"
      ? "bg-gray-400"
      : ""
  }`}
                            >
                              <div className="flex-initial max-w-full leading-none">
                                {items.status === "approved"
                                  ? "Approved"
                                  : items.status === "denied"
                                  ? "Denied"
                                  : "Pending"}
                              </div>
                              <i className="fa fa-times ml-2 cursor-pointer"></i>
                            </div>
                          </div>
                        </div>
                        <p className="leading-normal dark:text-gray-300 text-gray-600 text-md">
                          {items.reportedevidence ?? null}
                        </p>

                        <button
                          className="flex mr-5 gap-3 items-center justify-center text-indigo-700 dark:bg-white border border-indigo-600 py-2 px-4 gap-1 rounded inline-flex items-center"
                          onClick={() => {
                            handleEdit(items);
                          }}
                        >
                          <span>Edit</span>
                          <MdEdit />
                        </button>
                        <button
                          className="flex items-center text-red-700 dark:bg-red border border-red-600 py-2 px-5 gap-1 rounded inline-flex items-center"
                          onClick={() => handleDelete(items.reportid)}
                        >
                          <span>Delete</span>
                          <MdDelete />
                        </button>
                      </div>
                    </a>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </article>
      <UpdatePost
        isOpen={isOpen}
        details={selectedReport}
        onClose={onClose}
        isDisabled={false}
        header="Edit Details"
      />
    </div>
  );
};

export default Page;
