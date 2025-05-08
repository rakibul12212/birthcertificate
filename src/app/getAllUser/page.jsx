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
        <p className="text-xl font-base border-l-2 ps-3 inline-block">
          Show All Certificate
        </p>
      </div>

      <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
        {userList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {userList.map((user, index) => (
              <div>
                <div
                  key={index}
                  className="bg-white shadow-lg p-6 sm:p-8 lg:p-10 "
                >
                  <div className="border border-gray-600 rounded p-1 shadow-md">
                    <div className="bg-[#fcfaf5] border border-gray-400 rounded p-5">
                      {/* img */}
                      <div></div>
                      {/* content */}
                      <div className="text-center py-4 sm:py-6">
                        <p className="text-xl sm:text-2xl font-base">
                          People's Republic of Bangladesh
                        </p>
                        <p className="text-base sm:text-lg py-1 sm:py-2">
                          Office of Registrar of Birth Certificate
                        </p>
                        <p className="text-sm sm:text-md">X Union Parishad</p>
                        <p className="text-sm sm:text-md">Dhanmondi,Dhaka</p>
                      </div>
                      <div className="my-4 sm:my-6 text-center">
                        <p className="text-xl sm:text-2xl font-bold">
                          Birth Certificate
                        </p>
                      </div>
                      <p className="text-right text-sm sm:text-base py-2">
                        <span className="font-base">Date:</span>
                        <span className="ms-3">{user.dateR}</span>
                      </p>
                      <div className="flex justify-between mb-2 text-sm sm:text-base">
                        <p>
                          <span className="font-base">Register No:</span>
                          <span className="ms-3 font-semibold">
                            {index + 1}
                          </span>
                        </p>
                      </div>
                      <div className="space-y-3 text-sm sm:text-base">
                        <p>
                          <span className="font-base">
                            Birth Registration No:
                          </span>
                          <span className="ms-3 font-semibold  tracking-widest">
                            {user.regNum}
                          </span>
                        </p>
                        <p>
                          <span className="font-base">Name:</span>
                          <span className="ms-3 font-semibold">
                            {user.name}
                          </span>
                        </p>
                        <p>
                          <span className="font-base">Gender:</span>
                          <span className="ms-3 font-semibold">
                            {user.gender}
                          </span>
                        </p>
                        <p>
                          <span className="font-base">Date of Birth:</span>
                          <span className="ms-3 font-semibold">{user.dob}</span>
                        </p>
                        <p>
                          <span className="font-base">Father's Name:</span>
                          <span className="ms-3 font-semibold">
                            {user.fatherName}
                          </span>
                        </p>
                        <p>
                          <span className="font-base">Mother's Name:</span>
                          <span className="ms-3 font-semibold">
                            {user.motherName}
                          </span>
                        </p>
                        <p>
                          <span className="font-base">Present Address:</span>
                          <span className="ms-3 font-semibold">
                            {user.presentAddress}
                          </span>
                        </p>
                        <p>
                          <span className="font-base">Permanent Address:</span>
                          <span className="ms-3 font-semibold">
                            {user.permanentAddress}
                          </span>
                        </p>
                        <p>
                          <span className="font-base">Nationality:</span>
                          <span className="ms-3 font-semibold">
                            {user.nationality}
                          </span>
                        </p>
                        <div>
                          <span className="font-base">Signature:</span>
                          <span className="ms-3 font-semibold">
                            {user.sign}
                          </span>
                        </div>
                      </div>
                    </div>
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
