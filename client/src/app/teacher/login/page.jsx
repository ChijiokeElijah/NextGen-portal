'use client'
import React, {useState} from 'react'
import axios from "axios"
import { toast } from 'react-toastify';

export default function page() {
  const [formData, setFormData] = useState({
    email: '',
    password:''
  })
const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData:", formData)
    // setLoading(true)
      try {
       const response =  await axios.post(
          "http://localhost:3001/user/login", 
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
        
        localStorage.setItem("token", response.data.token);
     
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Login failed");
      } else {
        toast.error("An unexpected error occurred");
      }
      
    }
    
    // setLoading(false)
    setFormData({
      email: "",
      password: "",
    })
    

}
  const inputChange = (e) =>{
    const {name, value} = e.target

    setFormData((prev)=>({
      ...prev,
      [name]: value
    }))
  }
  

  return (
     <div className="bg-gray-100 flex items-center justify-center min-h-screen">

  <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Form Teacher Login</h2>

    <form onSubmit={handleSubmit} method="POST" className="space-y-5">
      {/* <!-- Email --> */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
        <input type="email" id="email" name="email" onChange={inputChange} required
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="teacher@example.com" />
      </div>

      {/* <!-- Password --> */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
        <input type="password" id="password" name="password" onChange={inputChange} required
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Password" />
      </div>

      {/* <!-- Submit Button --> */}
      <div>
        <button type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Login
        </button>
      </div>

      {/* <!-- Forgot Password --> */}
      <div className="text-center">
        <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
      </div>
    </form>

    {/* <!-- Optional Link to Sign-Up --> */}
    <p className="text-center text-sm text-gray-500 mt-4">
      Don't have an account?
      <a href="/teacher/signup" className="text-blue-600 hover:underline">Sign up here</a>
    </p>
  </div>

</div>

  )
}
