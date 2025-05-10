"use client";

import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const GetAllUser = () => {
  const [userList, setUserList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem("formData");
    if (userData) {
      setUserList(JSON.parse(userData));
    }
  }, []);

  const deleteUser = (index) => {
    const existingUsers = JSON.parse(localStorage.getItem("formData")) || [];
    existingUsers.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(existingUsers));
    setUserList(existingUsers);
    if (editIndex === index) {
      setEditIndex(null);
      setEditedUser({});
    }
  };

  const editUser = (index) => {
    setEditIndex(index);
    setEditedUser(userList[index]);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = () => {
    const updatedUsers = [...userList];
    updatedUsers[editIndex] = editedUser;
    localStorage.setItem("formData", JSON.stringify(updatedUsers));
    setUserList(updatedUsers);
    setEditIndex(null);
    setEditedUser({});
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditedUser({});
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userList.map((user, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 sm:p-8 lg:p-10"
              >
                {editIndex === index ? (
                  <div className="space-y-4">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      <div className="flex flex-col">
                        <label
                          htmlFor="name"
                          className="mb-1 text-sm font-medium"
                        >
                          Name
                        </label>
                        <input
                          name="name"
                          value={editedUser.name}
                          onChange={handleEditChange}
                          className="border border-gray-300 outline-none rounded p-2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="dob"
                          className="mb-1 text-sm font-medium"
                        >
                          Date Of Birth
                        </label>
                        <input
                          name="dob"
                          type="date"
                          value={editedUser.dob}
                          onChange={handleEditChange}
                          className="border border-gray-300 outline-none rounded p-2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="fatherName"
                          className="mb-1 text-sm font-medium"
                        >
                          Father's Name
                        </label>
                        <input
                          name="fatherName"
                          value={editedUser.fatherName}
                          onChange={handleEditChange}
                          className="border border-gray-300 outline-none rounded p-2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="motherName"
                          className="mb-1 text-sm font-medium"
                        >
                          Mother's Name
                        </label>
                        <input
                          name="motherName"
                          value={editedUser.motherName}
                          onChange={handleEditChange}
                          className="border border-gray-300 outline-none rounded p-2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="email"
                          className="mb-1 text-sm font-medium"
                        >
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={editedUser.email}
                          onChange={handleEditChange}
                          className="border border-gray-300 outline-none rounded p-2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="regNum"
                          className="mb-1 text-sm font-medium"
                        >
                          Registration Number
                        </label>
                        <input
                          name="regNum"
                          type="number"
                          value={editedUser.regNum}
                          onChange={handleEditChange}
                          className="border border-gray-300 outline-none rounded p-2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="presentAddress"
                          className="mb-1 text-sm font-medium"
                        >
                          Present Address
                        </label>
                        <input
                          name="presentAddress"
                          value={editedUser.presentAddress}
                          onChange={handleEditChange}
                          className="border border-gray-300 outline-none rounded p-2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="permanentAddress"
                          className="mb-1 text-sm font-medium"
                        >
                          Permanent Address
                        </label>
                        <input
                          name="permanentAddress"
                          value={editedUser.permanentAddress}
                          onChange={handleEditChange}
                          className="border border-gray-300 outline-none rounded p-2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="dateR"
                          className="mb-1 text-sm font-medium"
                        >
                          Date Of Registration
                        </label>
                        <input
                          name="dateR"
                          type="date"
                          value={editedUser.dateR}
                          onChange={handleEditChange}
                          className="border border-gray-300 outline-none rounded p-2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="nationality"
                          className="mb-1 text-sm font-medium"
                        >
                          Nationality
                        </label>
                        <input
                          name="nationality"
                          value={editedUser.nationality}
                          onChange={handleEditChange}
                          className="border border-gray-300 outline-none rounded p-2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="gender"
                          className="mb-1 text-sm font-medium"
                        >
                          Gender
                        </label>
                        <select
                          name="gender"
                          value={editedUser.gender}
                          onChange={handleEditChange}
                          className="border border-gray-300 outline-none rounded p-2"
                        >
                          <option value="" disabled>
                            Select a gender
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="col-span-1 md:col-span-2 flex flex-col">
                        <label
                          htmlFor="sign"
                          className="mb-1 text-sm font-medium"
                        >
                          Signature
                        </label>
                        <textarea
                          name="sign"
                          value={editedUser.sign}
                          onChange={handleEditChange}
                          rows={4}
                          className="border border-gray-300 outline-none rounded p-2"
                        />
                      </div>
                    </form>

                    <div className="flex space-x-4">
                      <button
                        onClick={saveEdit}
                        className="px-16 bg-white text-black border py-2 rounded hover:bg-black hover:text-white transition"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="px-4 py-2 bg-gray-300 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="border border-gray-600 rounded p-1 shadow-md">
                      <div className="bg-[#fcfaf5] border border-gray-400 rounded p-5">
                        <div className="text-center py-4 sm:py-6">
                          <p className="text-xl sm:text-2xl font-base">
                            People's Republic of Bangladesh
                          </p>
                          <p className="text-base sm:text-lg py-1 sm:py-2">
                            Office of Registrar of Birth Certificate
                          </p>
                          <p className="text-sm sm:text-md">X Union Parishad</p>
                          <p className="text-sm sm:text-md">Dhanmondi, Dhaka</p>
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
                            <span className="ms-3 font-semibold tracking-widest">
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
                            <span className="ms-3 font-semibold">
                              {user.dob}
                            </span>
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
                            <span className="font-base">
                              Permanent Address:
                            </span>
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
                          <p>
                            <span className="font-base">Signature:</span>
                            <span className="ms-3 font-semibold">
                              {user.sign}
                            </span>
                          </p>
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
                  </>
                )}
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
