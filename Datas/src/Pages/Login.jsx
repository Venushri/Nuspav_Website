import React from 'react'

const Login = () => (
  <div className="w-full flex-1 bg-gray-50">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <form className="flex flex-col gap-4">
      <input className="border p-2" type="email" placeholder="Email" />
      <input className="border p-2" type="password" placeholder="Password" />
      <button className="bg-blue-600 text-white py-2 rounded" type="submit">Login</button>
    </form>
  </div>
)

export default Login