import React, {useState} from 'react'

export default function page() {

  const [formData, setFormData] = useState({
    email: "",
    password:""

  })

  const handleInputChange = (e) =>{
    const {name, value} = e.target

    setFormData((prev)=>({
      ...prev,
      [name]: value

    }))
  } 

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">

  <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center text-gray-700">Student Portal Login</h2>
    
    <form action="/login" method="POST" className="space-y-4">
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
        <input type="email" id="email" name="email" onChange={handleInputChange} required
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md h-12 focus:ring-blue-500 focus:border-blue-500" 
          placeholder="you@example.com" />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
        <input type="password" id="password" name="password" onChange={handleInputChange} required
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md h-12 focus:ring-blue-500 focus:border-blue-500" 
          placeholder="••••••••" />
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 h-12 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Login
        </button>
      </div>

      {/* Forgot Password */}
      <div className="text-center">
        <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot your password?</a>
      </div>
    </form>
  </div>

</div>
  )
}
