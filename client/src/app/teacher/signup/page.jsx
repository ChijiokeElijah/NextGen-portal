'use client'

import React, { useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";

export default function page() {
  
  // const [loading, setLoading] = useState()
  const [userDetails, setUserDetails] = useState({
  FullName: '',
  email: '',
  password: '',
  confirm_password:''
})

const handleInputChange = (e) =>{
  const {name, value} = e.target

  setUserDetails((prev)=>({
    ...prev,
    [name]: value,
  }))
 }

const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)
    try {
        await axios.post(
          "http://localhost:3001/user/register", 
          //
          userDetails,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: false, // Only if using cookies/sessions
          }
        );
        toast.success("Registration Completed!");
     
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Registration failed");
      } else {
        toast.error("An unexpected error occurred");
      }
      
    }
    console.log(userDetails)
    // setLoading(false)
    setUserDetails({
      FullName: "",
      email: "",
      password: "",
      confirm_password: "",
    })
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">

  <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Form Teacher Sign-Up</h2>

    <form onSubmit={handleSubmit} method="POST" className="space-y-4">
      {/* <!-- Full Name --> */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
        <input value={userDetails.FullName} type="text" id="FullName" name="FullName" required
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          placeholder="Full Name"
          onChange={handleInputChange} />
      </div>

      {/* <!-- Email --> */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
        <input value={userDetails.email} type="email" id="email" name="email" required
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          placeholder="teacher@example.com" 
          onChange={handleInputChange}/>
      </div>

      {/* <!-- Password --> */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
        <input value={userDetails.password} type="password" id="password" name="password" required
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          placeholder="password" 
          onChange={handleInputChange}/>
      </div>

      {/* <!-- Confirm Password --> */}
      <div>
        <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-600">Confirm Password</label>
        <input value={userDetails.confirm_password} type="password" id="confirm_password" name="confirm_password" required
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          placeholder="confirm password" 
          onChange={handleInputChange}/>
      </div>

      {/* <!-- Assigned Class --> */}
      {/* <div>
        <label htmlFor="assigned_class" className="block text-sm font-medium text-gray-600">Assigned Class</label>
        <select value={userDetails.assigned_class} id="assigned_class" name="assigned_class" required
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" onChange={handleInputChange}>
          <option value="">-- Select Class --</option>
          <option value="JS_1">JS 1</option>
          <option value="JS_2">JS 2</option>
          <option value="JS_3">JS 3</option>
          <option value="SS_1">SS 1</option>
          <option value="SS_2">SS 2</option>
          <option value="SS_3">SS 3</option>
        </select>
      </div> */}

      {/* <!-- Submit Button --> */}
      <div>
        <button type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Register
        </button>
      </div>
    </form>

    <p className="text-center text-sm text-gray-500 mt-4">
      Already have an account?
      <a href="/teacher/login" className="text-blue-600 hover:underline">Login here</a>
    </p>
  </div>

</div>

  )
}
