'use client'
import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";

const page = () => {
  const [formData, setFormData] = useState({
    Admission_Number: "",
    subject: "",
    session: "",
    student_class: "",
    term: "",
    score: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:3001/user/registerScore",
        //
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false, // Only if using cookies/sessions
        }
      );
      toast.success(response.data.message);
    } catch (error) {}
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Input Student Score
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Select */}
          <div>
            <label
              htmlFor="Admission_Number"
              className="block text-sm font-medium text-gray-700"
            >
              Admission Number
            </label>

            <input
              type="text"
              id="Admission_Number"
              name="Admission_Number"
              value={formData.Admission_Number}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="NEXTGEN123456"
            />
          </div>

          {/* Subject Select */}
          <div>
            <label
              htmlFor="subjectId"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select Subject --</option>
              <option value="Mathematics">Mathematics</option>
              <option value="English">English</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Physics">Physics</option>
              <option value="Biology">Biology</option>
              <option value="Commerce">Commerce</option>
              <option value="Economics">Economics</option>
              <option value="Government">Government</option>
              <option value="Further-Mathematics">Further Mathematics</option>
              <option value="Accounting">Accounting</option>
              <option value="Lit-in-English">Lit-in-English</option>
              <option value="Geography">Geography</option>
              {/* Populate dynamically */}
            </select>
          </div>

          {/* Session Select */}
          <div>
            <label
              htmlFor="score"
              className="block text-sm font-medium text-gray-700"
            >
              Session
            </label>
            <input
              type="text"
              id="session"
              name="session"
              value={formData.session}
              onChange={handleChange}
              required
              min="0"
              max="100"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="2024/2025"
            />
          </div>
          {/* CLASS */}
          <div>
            <label
              htmlFor="student_class"
              className="block text-sm font-medium text-gray-700"
            >
              Class
            </label>
            <select
              id="student_class"
              name="student_class"
              value={formData.student_class}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select Class --</option>
              <option value="JS 1">JS 1</option>
              <option value="JS 2">JS 2</option>
              <option value="JS 3">JS 3</option>
              <option value="SS 1">SS 1</option>
              <option value="SS 2">SS 2</option>
              <option value="SS 3">SS 3</option>
            </select>
          </div>
          {/* Term Select */}
          <div>
            <label
              htmlFor="term"
              className="block text-sm font-medium text-gray-700"
            >
              Term
            </label>
            <select
              id="term"
              name="term"
              value={formData.term}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select Term --</option>
              <option value="First Term">First Term</option>
              <option value="Second Term">Second Term</option>
              <option value="Third Term">Third Term</option>
            </select>
          </div>

          {/* Score Input */}
          <div>
            <label
              htmlFor="score"
              className="block text-sm font-medium text-gray-700"
            >
              Score
            </label>
            <input
              type="number"
              id="score"
              name="score"
              value={formData.score}
              onChange={handleChange}
              required
              min="0"
              max="100"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter score (0–100)"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Score
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page 
 