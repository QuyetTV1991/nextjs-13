import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>

        {/* Login Form */}
        <form id="loginForm">
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
              htmlFor="password"
              className="block text-gray-800 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <Button type="button" label="Login" />
            <Link href='/register'>
              <p>Register?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
