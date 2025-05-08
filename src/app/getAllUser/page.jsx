"use client";

import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const GetAllUser = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem("formData");
    if (userData) {
      setUserList(JSON.parse(userData));
    }
  }, []);

  const deleteUser = (index) => {
    const existingUser = JSON.parse(localStorage.getItem("formData")) || [];
    existingUser.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(existingUser));
    setUserList(existingUser);
  };

  return (
    <div>
      <div className="flex justify-center pt-10">
        <p className="text-xl font-semibold border-l-2 ps-3 inline-block">
          All User Details
        </p>
      </div>

      <div className="w-full py-10 px-4">
        {userList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {userList.map((user, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md p-6 w-full"
              >
                <div className="bg-white shadow-md rounded-md p-6">
                  <p className="text-xl font-semibold text-left pb-3 border-b border-gray-200">
                    Details
                  </p>
                  <p>
                    <span className="font-semibold">Name: </span>
                    {user.name}
                  </p>
                  <p>
                    <span className="font-semibold">Email: </span>
                    {user.email}
                  </p>
                  <p>
                    <span className="font-semibold">Phone: </span>
                    {user.number}
                  </p>
                  <p>
                    <span className="font-semibold">Location: </span>
                    {user.location}
                  </p>
                  <p>
                    <span className="font-semibold">DOB: </span>
                    {user.date}
                  </p>
                  <p>
                    <span className="font-semibold">Status: </span>
                    {user.status}
                  </p>
                  <p>
                    <span className="font-semibold">Company Name: </span>
                    {user.company}
                  </p>
                  <p>
                    <span className="font-semibold">Job Title: </span>
                    {user.jobTitle}
                  </p>
                  <p>
                    <span className="font-semibold">Note: </span>
                    {user.notes}
                  </p>
                </div>
                <div className="flex items-center gap-x-5 pt-4">
                  <button
                    className="border px-3 py-1 rounded-md shadow-md"
                    onClick={() => deleteUser(index)}
                  >
                    <MdDelete size={24} className="hover:text-red-500" />
                  </button>
                  <button
                    className="border px-3 py-1 rounded-md shadow-md"
                    onClick={() => editUser(index)}
                  >
                    <FaRegEdit size={24} className="hover:text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-10">
            No data found
          </p>
        )}
      </div>
    </div>
  );
};

export default GetAllUser;
