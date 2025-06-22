'use client'
import React, { useState } from 'react';

const page = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    subjectId: '',
    sessionId: '',
    termId: '',
    score: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData({ ...formData,
       [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log('Submitting score:', formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Input Student Score</h2>

        <form  className="space-y-6">
          {/* Student Select */}
          <div>
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
              Select Student
            </label>
            <select
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select Student --</option>
              <option value="1">John Doe</option>
              <option value="2">Jane Smith</option>
              {/* Populate dynamically */}
            </select>
          </div>

          {/* Subject Select */}
          <div>
            <label htmlFor="subjectId" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <select
              id="subjectId"
              name="subjectId"
              value={formData.subjectId}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select Subject --</option>
              <option value="math">Mathematics</option>
              <option value="eng">English</option>
              {/* Populate dynamically */}
            </select>
          </div>

          {/* Session Select */}
          <div>
            <label htmlFor="sessionId" className="block text-sm font-medium text-gray-700">
              Academic Session
            </label>
            <select
              id="sessionId"
              name="sessionId"
              value={formData.sessionId}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select Session --</option>
              <option value="2024_2025">2024/2025</option>
              <option value="2025_2026">2025/2026</option>
            </select>
          </div>

          {/* Term Select */}
          <div>
            <label htmlFor="termId" className="block text-sm font-medium text-gray-700">
              Term
            </label>
            <select
              id="termId"
              name="termId"
              value={formData.termId}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select Term --</option>
              <option value="first">First Term</option>
              <option value="second">Second Term</option>
              <option value="third">Third Term</option>
            </select>
          </div>

          {/* Score Input */}
          <div>
            <label htmlFor="score" className="block text-sm font-medium text-gray-700">
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
 