"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
    date: "",
    status: "",
    company: "",
    jobTitle: "",
    notes: "",
    term: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const rawData = localStorage.getItem("formData") || "[]";
    const existingData = JSON.parse(rawData);
    existingData.push(formData);
    localStorage.setItem("formData", JSON.stringify(existingData));
    toast.success("Form submitted successfully");
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
            placeholder="Enter your email"
            className="border border-gray-300 outline-none rounded p-2"
          />
        </div>

        {/* Contact Number */}
        <div className="flex flex-col">
          <label htmlFor="number" className="mb-1 text-sm font-medium">
            Contact Number
          </label>
          <input
            name="number"
            type="tel"
            value={formData.number}
            onChange={handleChange}
            id="number"
            placeholder="Enter your number"
            className="border border-gray-300 outline-none rounded p-2"
          />
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label htmlFor="location" className="mb-1 text-sm font-medium">
            Location
          </label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            id="location"
            placeholder="Enter your location"
            className="border border-gray-300 outline-none rounded p-2"
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col">
          <label htmlFor="date" className="mb-1 text-sm font-medium">
            Date Of Birth
          </label>
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            id="date"
            className="border border-gray-300 outline-none rounded p-2"
          />
        </div>

        {/* Marital Status */}
        <div className="flex flex-col">
          <label htmlFor="status" className="mb-1 text-sm font-medium">
            Marital Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            id="status"
            className="border border-gray-300 outline-none rounded p-2"
          >
            <option value="" disabled>
              Select a status
            </option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Company */}
        <div className="flex flex-col">
          <label htmlFor="company" className="mb-1 text-sm font-medium">
            Company Name
          </label>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            id="company"
            placeholder="Enter Company name"
            className="border border-gray-300 outline-none rounded p-2"
          />
        </div>

        {/* Job Title */}
        <div className="flex flex-col">
          <label htmlFor="jobTitle" className="mb-1 text-sm font-medium">
            Job Title
          </label>
          <input
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            id="jobTitle"
            placeholder="Enter job title"
            className="border border-gray-300 outline-none rounded p-2"
          />
        </div>

        {/* Notes */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label htmlFor="notes" className="mb-1 text-sm font-medium">
            Additional Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            id="notes"
            rows={4}
            placeholder="Write something..."
            className="border border-gray-300 outline-none rounded p-2"
          />
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
