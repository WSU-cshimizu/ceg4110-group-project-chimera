"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleBlockUser = async (userId: any, isBlocked: any) => {
    const newStatus = isBlocked === 0 ? 1 : 0; // Toggle block/unblock status

    try {
      // Make the PUT request to update the user's block status
      const response = await fetch("http://localhost:9000/api/user/block", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          isBlocked: newStatus,
        }),
      });

      if (response.ok) {
        const updatedUsers = users.map((user) =>
          user.userid === userId ? { ...user, is_blocked: newStatus } : user
        );

        setUsers(updatedUsers); // Update the state to re-render the component
        console.log("User status updated successfully");
      } else {
        console.error("Failed to update user status");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteUser = (id: any) => {
    axios
      .delete(`http://localhost:9000/api/users/${id}`)
      .then((res) => {
        toast.success("User removed sucessfully.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              User ID
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Role
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700 dark:text-gray-300">
          {users?.map((user) => (
            <tr
              key={user.userid}
              className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <td className="px-6 py-4">{user.userid}</td>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.useremail}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">
                {!user.is_blocked == 0 ? "Blocked" : "Not Blocked"}
              </td>
              <td className="px-6 py-4">
                <button
                  className="ml-2 px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                  onClick={() => {
                    handleBlockUser(user.userid, user.is_blocked);
                  }}
                >
                  {!user.is_blocked == 1 ? "Block user" : "Unblock"}
                </button>
                <button
                  className="ml-2 px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                  onClick={() => {
                    handleDeleteUser(user.userid);
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
