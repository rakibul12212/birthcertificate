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
      <div className="flex justify-center pt-10 px-4 sm:px-6 lg:px-8">
        <p className="text-xl font-semibold border-l-2 ps-3 inline-block">
          Show All Certificate
        </p>
      </div>

      <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
        {userList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {userList.map((user, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 sm:p-8 lg:p-10 border rounded"
              >
                <div className="text-center py-4 sm:py-6">
                  <p className="text-xl sm:text-2xl font-semibold">
                    People's Republic of Bangladesh
                  </p>
                  <p className="text-base sm:text-lg py-1 sm:py-2">
                    Office of Registrar of Birth Certificate
                  </p>
                  <p className="text-sm sm:text-md">X Union Parishad</p>
                </div>

                <div className="my-6 sm:my-8 text-center">
                  <p className="text-xl sm:text-2xl font-bold">
                    Birth Certificate
                  </p>
                </div>

                <p className="text-right text-sm sm:text-base py-2">
                  <span className="font-semibold">Date:</span>
                  <span className="">{user.dateR}</span>
                </p>

                <div className="flex justify-between mb-2 text-sm sm:text-base">
                  <p>
                    <span className="font-semibold">Register No:</span>

                    {index + 1}
                  </p>
                </div>

                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    <span className="font-semibold">
                      Birth Registration No:
                    </span>
                    <span className="ms-3">
                      {user.regNum}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Name:</span>
                    <span className="ms-3">{user.name}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Gender:</span>
                    <span className="ms-3">{user.gender}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Date of Birth:</span>
                    <span className="ms-3">{user.dob}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Father's Name:</span>
                    <span className="ms-3">{user.fatherName}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Mother's Name:</span>
                    <span className="ms-3">{user.motherName}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Present Address:</span>
                    <span className="ms-3">{user.presentAddress}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Permanent Address:</span>
                    <span className="ms-3">{user.permanentAddress}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Signature:</span>
                    <span className="ms-3">{user.sign}</span>
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6">
                  <button
                    className="border px-3 py-1 rounded-md shadow-sm"
                    onClick={() => deleteUser(index)}
                  >
                    <MdDelete size={20} className="hover:text-red-500" />
                  </button>
                  <button
                    className="border px-3 py-1 rounded-md shadow-sm"
                    onClick={() => editUser(index)}
                  >
                    <FaRegEdit size={20} className="hover:text-gray-600" />
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
