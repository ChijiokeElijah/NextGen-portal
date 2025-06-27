'use client'
import React, {useState} from 'react';

const page = () => {

  const [studentDetails, setStudentDetails] = useState({
    name: '',
    email: '',
    gender: '',
    dob:'',
    class_id:'',      
    admission_number:''
  })

  const handleInputChange = (e) =>{
    const {name, value} = e.target

    setStudentDetails((prev) = ({
      ...prev,
      [name] : value
    }))


  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Register New Student
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="student@example.com"
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                required
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-600">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                onChange={handleInputChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Class */}
            <div>
              <label htmlFor="class" className="block text-sm font-medium text-gray-600">
                Class
              </label>
              <select
                id="class"
                name="class_id"
                onChange={handleInputChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">-- Select Class --</option>
                <option value="1">Grade 10</option>
                <option value="2">Grade 11</option>
                <option value="3">Grade 12</option>
              </select>
            </div>

            {/* Admission Number */}
            <div>
              <label htmlFor="admission_number" className="block text-sm font-medium text-gray-600">
                Admission Number
              </label>
              <input
                type="text"
                id="admission_number"
                name="admission_number"
                onChange={handleInputChange}
                required
                placeholder="STU123456"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Register Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
