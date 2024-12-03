"use client";

import { Tab, Tabs } from "@/components/Tabs";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    name: "",
    useremail: "",
  });
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // const storedUserDetailString = localStorage.getItem("userDetail") || null;
  // const userDetail = JSON.parse(
  //   storedUserDetailString ? storedUserDetailString : ""
  // ); // Parse the string into an object
  const [userDetail, setUserDetail] = useState(null); // State to store user details

useEffect(() => {
  // Access localStorage only on the client side
  const storedUserDetailString = localStorage.getItem("userDetail");
  if (storedUserDetailString) {
    setUserDetail(JSON.parse(storedUserDetailString)); // Parse and set the user detail
  }
}, []);




  // useEffect(() => {
  //   if (storedUserDetailString) {
  //     axios
  //       .get(`http://localhost:9000/api/users/${userDetail.userid}`)
  //       .then((res) => {
  //         console.log(res.data);
  //         const { name, useremail } = res.data;
  //         setFormData({ name, useremail });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [storedUserDetailString]);
  useEffect(() => {
    if (userDetail) {
      axios
        .get(`http://localhost:9000/api/users/${userDetail.userid}`)
        .then((res) => {
          console.log(res.data);
          const { name, useremail } = res.data;
          setFormData({ name, useremail });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userDetail]);
  



  const handleSubmitChange = (e: any) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9000/api/users/${userDetail.userid}`, {password : newPassword})
      .then((res) => {
        console.log("User updated:", res.data);
      })
      .catch((err) => {
        console.error("Error updating user:", err);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the fields are empty
    if (!formData.name || !formData.useremail) {
      alert("Please fill in both name and email");
      return;
    }

    // Make the PUT request to update user data
    axios
      .put(`http://localhost:9000/api/users/${userDetail.userid}`, formData)
      .then((res) => {
        console.log("User updated:", res.data);
      })
      .catch((err) => {
        console.error("Error updating user:", err);
      });
  };

  return (
    <div className="flex flex-col mt-[100px] justify-center items-center">
      <h1 className="text-2xl font-bold text-gray-700 px-6 md:px-0">
        Account Settings
      </h1>
      <Tabs>
        <Tab
          active
          component={
            <form onSubmit={handleSubmit}>
              <div className="w-50 bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
                <div className="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
                  <h2 className="font-medium text-md text-gray-700 mb-4 tracking-wide">
                    Profile Info
                  </h2>
                  <p className="text-xs text-gray-500">
                    Update your basic profile information such as Email Address,
                    Name, and Image.
                  </p>
                </div>
                <div className="md:w-2/3 w-full">
                  <div className="py-8 px-16">
                    <label htmlFor="name" className="text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <hr className="border-gray-200" />
                  <div className="py-8 px-16">
                    <label htmlFor="email" className="text-sm text-gray-600">
                      Email Address
                    </label>
                    <input
                      className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500"
                      type="email"
                      name="email"
                      value={formData.useremail}
                      onChange={handleChange}
                    />
                  </div>
                  <hr className="border-gray-200" />
                </div>
              </div>

              <div className="p-16 py-8 clearfix rounded-b-lg border-t border-gray-200">
                <p className="float-left text-xs text-gray-500 tracking-tight mt-2">
                  Click on Save to update your Profile Info
                </p>
                <button
                  type="submit"
                  className="bg-indigo-500 text-white text-sm font-medium px-6 py-2 rounded float-right uppercase"
                >
                  Save
                </button>
              </div>
            </form>
          }
        >
          Profile Setting
        </Tab>
        <Tab
          component={
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900">
              <form
                onSubmit={handleSubmitChange}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
              >
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  Change Password
                </h2>
                <div className="mb-4">
                  <label
                    htmlFor="current-password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="current-password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  Submit
                </button>
              </form>
            </div>
          }
        >
          Security
        </Tab>
      </Tabs>
    </div>
  );
};

export default AccountSettings;
