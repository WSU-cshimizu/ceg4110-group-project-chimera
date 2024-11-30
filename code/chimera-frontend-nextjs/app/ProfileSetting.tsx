import React, { useState } from "react";

const ProfileSetting = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "https://pbs.twimg.com/profile_images/1163965029063913472/ItoFLWys_400x400.jpg",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-700 px-6 md:px-0">Account Settings</h1>
      <ul className="flex border-b border-gray-300 text-sm font-medium text-gray-600 mt-3 px-6 md:px-0">
        <li className="mr-8 text-gray-900 border-b-2 border-gray-800">
          <a href="#_" className="py-4 inline-block">Profile Info</a>
        </li>
        <li className="mr-8 hover:text-gray-900">
          <a href="#_" className="py-4 inline-block">Security</a>
        </li>
        <li className="mr-8 hover:text-gray-900">
          <a href="#_" className="py-4 inline-block">Billing</a>
        </li>
      </ul>

      <form onSubmit={handleSubmit}>
        <div className="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
          <div className="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
            <h2 className="font-medium text-md text-gray-700 mb-4 tracking-wide">Profile Info</h2>
            <p className="text-xs text-gray-500">
              Update your basic profile information such as Email Address, Name, and Image.
            </p>
          </div>
          <div className="md:w-2/3 w-full">
            <div className="py-8 px-16">
              <label htmlFor="name" className="text-sm text-gray-600">Name</label>
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
              <label htmlFor="email" className="text-sm text-gray-600">Email Address</label>
              <input
                className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <hr className="border-gray-200" />
            <div className="py-8 px-16 clearfix">
              <label htmlFor="photo" className="text-sm text-gray-600 w-full block">Photo</label>
              <img
                className="rounded-full w-16 h-16 border-4 mt-2 border-gray-200 float-left"
                src={formData.photo}
                alt="Profile"
              />
              <div className="bg-gray-200 text-gray-500 text-xs mt-5 ml-3 font-bold px-4 py-2 rounded-lg float-left hover:bg-gray-300 hover:text-gray-600 relative overflow-hidden cursor-pointer">
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
                Change Photo
              </div>
            </div>
          </div>
        </div>

        <div className="p-16 py-8 bg-gray-300 clearfix rounded-b-lg border-t border-gray-200">
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
    </div>
  );
};

export default ProfileSetting;
