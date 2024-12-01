"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer, useToast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

type Inputs = {
  useremail: string;
  password: string;
};
type Inputs2 = {
  name: string;
  useremail: string;
  password: string;
};
const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const {
    register: loginRegister,
    handleSubmit: loginSubmit,
    formState: { errors: loginErrors },
  } = useForm<Inputs>();
  const router = useRouter();

  const {
    register: signUpRegister,
    handleSubmit: signUpSubmit,
    formState: { errors: signUpErrors },
  } = useForm<Inputs2>();

  const { login } = useAuth();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // Make the POST request to your API
      const response = await axios.post("http://localhost:9000/api/login", {
        useremail: data.useremail,
        password: data.password,
      });
      if (response.status === 200) {
        const userDetail = response.data.user;
        localStorage.setItem("userDetail", JSON.stringify(userDetail));
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      login()
      setTimeout(() => {
        router.push("/explore");
      }, 2000);
    } catch (error: any) {
      // Handle error
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const onSignUpSubmit: SubmitHandler<Inputs2> = async (data) => {
    try {
      // Make the POST request to your API
      const response = await axios.post("http://localhost:9000/api/users", {
        useremail: data.useremail,
        name: data.name,
        password: data.password,
      });

      // Check the response and handle success
      if (response.status === 201) {
        console.log("Data submitted successfully:", response.data);
        toast.success("User registered Successfully.")
        setIsRegister(false);
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="font-[sans-serif]">
          <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
            <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
              <div
                className="rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
                }}
              >
                {!isRegister ? (
                  <form className="space-y-4">
                    <div className="mb-8">
                      <h3 className="text-gray-800 dark:text-gray-300 text-3xl font-extrabold">
                        Sign in
                      </h3>
                      <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                        Sign in to your account and explore a world of
                        possibilities. Your journey begins here.
                      </p>
                    </div>

                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        User name
                      </label>
                      <div className="relative flex items-center">
                        <input
                          {...loginRegister("useremail", {
                            required: "Username is required",
                          })}
                          type="text"
                          className={`w-full text-sm text-gray-800 bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-lg outline-blue-600 ${
                            loginErrors.useremail ? "border border-red-500" : ""
                          }`}
                          placeholder="Enter user name"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#bbb"
                          stroke="#bbb"
                          className="w-[18px] h-[18px] absolute right-4"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="10" cy="7" r="6"></circle>
                          <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                        </svg>
                      </div>
                      {loginErrors.useremail && (
                        <p className="text-red-500 text-xs mt-1">
                          {loginErrors.useremail.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Password
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="password"
                          {...loginRegister("password", {
                            required: "Password is required",
                          })}
                          className={`w-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-800 px-4 py-3 rounded-lg outline-blue-600 ${
                            loginErrors.password ? "border border-red-500" : ""
                          }`}
                          placeholder="Enter password"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#bbb"
                          stroke="#bbb"
                          className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                          viewBox="0 0 128 128"
                        >
                          <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                        </svg>
                      </div>
                      {loginErrors.password && (
                        <p className="text-red-500 text-xs mt-1">
                          {loginErrors.password.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="text-sm">
                        <a
                          href="jajvascript:void(0);"
                          className="text-blue-600 hover:underline font-semibold"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>

                    <div className="!mt-8">
                      <button
                        type="button"
                        onClick={loginSubmit(onSubmit)}
                        className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                      >
                        Log in
                      </button>
                    </div>

                    <p className="text-sm !mt-8 text-center text-gray-800 dark:text-gray-300">
                      Don't have an account{" "}
                      <a
                        onClick={() => {
                          setIsRegister(true);
                        }}
                        className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                      >
                        Register here
                      </a>
                    </p>
                  </form>
                ) : (
                  <form
                    onSubmit={signUpSubmit(onSignUpSubmit)}
                    className="md:col-span-2 w-full py-6 px-6 sm:px-16"
                  >
                    <div className="mb-6">
                      <h3 className="text-gray-800 text-2xl font-bold dark:text-gray-200">
                        Create an account
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label className="text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                          Name
                        </label>
                        <div className="relative flex flex-col items-start">
                          <input
                            {...signUpRegister("name", {
                              required: "Name is required",
                            })}
                            type="text"
                            placeholder="Enter name"
                            className={`text-gray-800 bg-white border w-full text-sm px-4 py-2.5 rounded-md outline-none focus:ring ${
                              signUpErrors.name
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-blue-500"
                            }`}
                          />
                          {signUpErrors.name && (
                            <span className="text-red-500 text-sm">
                              {signUpErrors.name.message}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                          Email Id
                        </label>
                        <div className="relative flex flex-col items-start">
                          <input
                            {...signUpRegister("useremail", {
                              required: "Email is required",
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                              },
                            })}
                            type="email"
                            placeholder="Enter email"
                            className={`text-gray-800 bg-white border w-full text-sm px-4 py-2.5 rounded-md outline-none focus:ring ${
                              signUpErrors.useremail
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-blue-500"
                            }`}
                          />
                          {signUpErrors.useremail && (
                            <span className="text-red-500 text-sm">
                              {signUpErrors.useremail.message}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Password Field */}
                      <div>
                        <label className="text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                          Password
                        </label>
                        <div className="relative flex flex-col items-start">
                          <input
                            {...signUpRegister("password", {
                              required: "Password is required",
                              minLength: {
                                value: 6,
                                message:
                                  "Password must be at least 6 characters long",
                              },
                            })}
                            type="password"
                            placeholder="Enter password"
                            className={`text-gray-800 bg-white border w-full text-sm px-4 py-2.5 rounded-md outline-none focus:ring ${
                              signUpErrors.password
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-blue-500"
                            }`}
                          />
                          {signUpErrors.password && (
                            <span className="text-red-500 text-sm">
                              {signUpErrors.password.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="!mt-12">
                      <button
                        type="submit"
                        className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                      >
                        Create an account
                      </button>
                    </div>

                    <p className="text-gray-800 text-sm mt-6 text-center">
                      Already have an account?{" "}
                      <a
                        onClick={() => setIsRegister(false)}
                        className="text-blue-600 font-semibold hover:underline ml-1 cursor-pointer"
                      >
                        Login here
                      </a>
                    </p>
                  </form>
                )}
              </div>
              <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                <img
                  src="moboLogin.png"
                  className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
                  alt="Dining Experience"
                />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{
            zIndex: 10000000000000000000, // Set a high z-index to maximize visibility
          }}
        />
      </div>
    </>
  );
};

export default LoginPage;
