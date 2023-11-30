import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>

        {/* Register Form */}
        <form id="registerForm">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-800 font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password1"
              className="block text-gray-800 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password1"
              name="password1"
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password2"
              className="block text-gray-800 font-bold mb-2"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <Button type="button" label="Register" />
            <Link href='/login'>
              <p>Already had account?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register