"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    regNum: "",
    presentAddress: "",
    permanentAddress: "",
    dateR: "",
    dob: "",
    gender: "",
    fatherName: "",
    motherName: "",
    nationality: "",
    sign: "",
    term: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };
  const isValidNumber = (number) => {
    const numberRegex = /^\d{7}$/;
    return numberRegex.test(number);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.regNum) {
      newErrors.regNum = "Registration number is required";
    } else if (!isValidNumber(formData.regNum)) {
      newErrors.regNum = "Registration number must be 7 digits";
    }

    if (!formData.presentAddress)
      newErrors.presentAddress = "Present address is required";
    if (!formData.permanentAddress)
      newErrors.permanentAddress = "Permanent address is required";
    if (!formData.dateR) newErrors.dateR = "Date of registration is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.fatherName)
      newErrors.fatherName = "Father's name is required";
    if (!formData.motherName)
      newErrors.motherName = "Mother's name is required";
    if (!formData.nationality)
      newErrors.nationality = "Nationality is required";
    if (!formData.sign) newErrors.sign = "Signature is required";
    if (!formData.term) newErrors.term = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    if (validateForm()) {
      const rawData = localStorage.getItem("formData") || "[]";
      const existingData = JSON.parse(rawData);
      existingData.push(formData);
      localStorage.setItem("formData", JSON.stringify(existingData));

      toast.success("Form submitted successfully");
      console.log("Form Submitted:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="p-6 my-8 bg-gray-50 shadow-lg rounded-xl max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm font-medium">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            id="name"
            placeholder="Enter your name"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.name && (
            <div className="error text-red-500 font-xs">{errors.name}</div>
          )}
        </div>
        {/* Date of Birth */}
        <div className="flex flex-col">
          <label htmlFor="dob" className="mb-1 text-sm font-medium">
            Date Of Birth
          </label>
          <input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            id="dob"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.dob && (
            <div className="error text-red-500 font-xs">{errors.dob}</div>
          )}
        </div>
        {/* fatherName */}
        <div className="flex flex-col">
          <label htmlFor="fatherName" className="mb-1 text-sm font-medium">
            Father's Name
          </label>
          <input
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            id="fatherName"
            placeholder="Enter Your Father's Name "
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.fatherName && (
            <div className="error text-red-500 font-xs">
              {errors.fatherName}
            </div>
          )}
        </div>
        {/* motherName */}
        <div className="flex flex-col">
          <label htmlFor="motherName" className="mb-1 text-sm font-medium">
            Mother's Name
          </label>
          <input
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            id="motherName"
            placeholder="Enter Your Mother's Name"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.motherName && (
            <div className="error text-red-500 font-xs">
              {errors.motherName}
            </div>
          )}
        </div>
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            placeholder="Enter Your Email"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.name && (
            <div className="error text-red-500 font-xs">{errors.name}</div>
          )}
        </div>
        {/* regNum */}
        <div className="flex flex-col">
          <label htmlFor="regNum" className="mb-1 text-sm font-medium">
            Registration Number
          </label>
          <input
            name="regNum"
            type="number"
            value={formData.regNum}
            onChange={handleChange}
            id="regNum"
            placeholder="Enter your Registration Number"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.regNum && (
            <div className="error text-red-500 font-xs">{errors.regNum}</div>
          )}
        </div>

        {/* parmanent */}
        <div className="flex flex-col">
          <label htmlFor="presentAddress" className="mb-1 text-sm font-medium">
            Present Address
          </label>
          <input
            name="presentAddress"
            value={formData.presentAddress}
            onChange={handleChange}
            id="presentAddress"
            placeholder="Enter your presentAddress"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.presentAddress && (
            <div className="error text-red-500 font-xs">
              {errors.presentAddress}
            </div>
          )}
        </div>
        {/* permanentAddress */}
        <div className="flex flex-col">
          <label
            htmlFor="permanentAddress"
            className="mb-1 text-sm font-medium"
          >
            Permanent Address
          </label>
          <input
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            id="permanentAddress"
            placeholder="Enter your permanentAddress"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.permanentAddress && (
            <div className="error text-red-500 font-xs">
              {errors.permanentAddress}
            </div>
          )}
        </div>
        {/* Date of Reg */}
        <div className="flex flex-col">
          <label htmlFor="dateR" className="mb-1 text-sm font-medium">
            Date Of Registration
          </label>
          <input
            name="dateR"
            type="date"
            value={formData.dateR}
            onChange={handleChange}
            id="dateR"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.dateR && (
            <div className="error text-red-500 font-xs">{errors.dateR}</div>
          )}
        </div>
        {/* nationality */}
        <div className="flex flex-col">
          <label htmlFor="nationality" className="mb-1 text-sm font-medium">
            Nationality
          </label>
          <input
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            id="nationality"
            placeholder="Enter your nationality"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.nationality && (
            <div className="error text-red-500 font-xs">
              {errors.nationality}
            </div>
          )}
        </div>
        {/* gender */}
        <div className="flex flex-col">
          <label htmlFor="status" className="mb-1 text-sm font-medium">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            id="gender"
            className="border border-gray-300 outline-none rounded p-2"
          >
            <option value="" disabled>
              Select a gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <div className="error text-red-500 text-xs">{errors.gender}</div>
          )}
        </div>

        {/* sign */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label htmlFor="sign" className="mb-1 text-sm font-medium">
            Signature
          </label>
          <textarea
            name="sign"
            value={formData.sign}
            onChange={handleChange}
            id="sign"
            rows={4}
            placeholder="Write something..."
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.sign && (
            <div className="error text-red-500 font-xs">{errors.sign}</div>
          )}
        </div>
        {/* Terms */}
        <div className="flex items-start md:items-center mt-2">
          <input
            type="checkbox"
            name="term"
            checked={formData.term}
            onChange={handleChange}
            id="terms"
            className="w-4 h-4 mt-1 md:mt-0"
          />
          {errors.term && (
            <div className="error text-red-500 font-xs">{errors.term}</div>
          )}
          <label htmlFor="terms" className="ml-2 text-sm">
            I agree to the terms and conditions
          </label>
        </div>
        {/* Submit Button */}
        <div className="flex justify-start md:justify-end">
          <button
            type="submit"
            className="px-16 bg-white text-black border py-2 rounded hover:bg-black hover:text-white transition"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
