import React from 'react'

const Register = () => (
  <div className="p-8 max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4">Register</h2>
    <form className="flex flex-col gap-4">
      <input className="border p-2" type="text" placeholder="Name" />
      <input className="border p-2" type="email" placeholder="Email" />
      <input className="border p-2" type="password" placeholder="Password" />
      <button className="bg-green-600 text-white py-2 rounded" type="submit">Register</button>
    </form>
  </div>
)

export default Register