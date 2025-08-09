import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [showSignUpPassword, setShowSignUpPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  return (
    <div className="flex items-center justify-center p-2 ">
      <div className="w-full max-w-sm bg-gray-900 shadow-lg rounded-xl p-6 transition-all duration-300">
        {/* Top SignIn, SignUp */}
        <div className="flex justify-between mb-4 border-b border-gray-700">
          <button
            onClick={() => setIsSignIn(true)}
            className={`w-1/2 text-center pb-1 text-lg font-medium border-b-2 transition ${
              isSignIn
                ? "text-indigo-300 border-indigo-400"
                : "text-gray-300 border-transparent hover:border-yellow-400"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`w-1/2 text-center pb-1 text-lg font-medium border-b-2 transition ${
              !isSignIn
                ? "text-indigo-300 border-indigo-300"
                : "text-gray-100 border-transparent hover:border-yellow-400"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* _____________Sign In Form____________ */}
        {isSignIn && (
          <form className="space-y-3">
            {/* Email */}
            <div>
              <label className="block text-gray-200  text-left text-md mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                placeholder="developer@email.com"
              />
            </div>
            {/* Password */}
            <div className="relative">
              <label className="block text-left text-gray-100 text-md mb-1">
                Password
              </label>
              <input
                type={!showPassword ? "text" : "password"}
                className="w-full px-3 py-2 pr-10 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 mt-6 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="flex justify-between text-xs text-gray-200">
              <label className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  className="h-3 w-3 text-indigo-500 border-red-400 rounded"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-red-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md text-sm">
              Sign In
            </button>
          </form>
        )}

        {/*______________ Sign Up Form ________________*/}
        {!isSignIn && (
          <form className="space-y-3">
            {/* Name */}
            <div>
              <label className="block text-gray-100 text-md text-left mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                placeholder="Enter Name"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-gray-100 text-md text-left mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                placeholder="developer@email.com"
              />
            </div>
            {/* Password */}
            <div className="relative">
              <label className="block text-gray-100 text-md text-left mb-1">
                Password
              </label>
              <input
                type={!showSignUpPassword ? "text" : "password"}
                className="w-full px-3 py-2 pr-10 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 mt-6 text-gray-400 hover:text-white"
              >
                {showSignUpPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-gray-100 text-md text-left mb-1">
                Confirm Password
              </label>
              <input
                type={!showConfirmPassword ? "text" : "password"}
                className="w-full px-3 py-2 pr-10 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 mt-6 text-gray-400 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Button */}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md text-sm">
              Sign Up
            </button>
          </form>
        )}

        {/* ----Social Login---- */}
        <div className="mt-4">
          <p className="text-center text-xs text-lime-500">Or continue with</p>
          <div className="mt-2 flex space-x-2">
            {/* Facebook */}
            <button
              className="flex-1 bg-cyan-800 hover:bg-lime-500 transition 
            p-2 rounded-md flex items-center justify-center"
            >
              <img
                src="https://i.postimg.cc/k5h4ds7X/facebook-2.png"
                alt="Facebook"
                className="h-6 bg-white  rounded-full"
              />
            </button>

            {/* Google */}
            <button
              className="flex-1 bg-cyan-800 hover:bg-lime-500 transition
             p-2 rounded-md flex items-center justify-center"
            >
              <img
                src="https://i.postimg.cc/d3wKMKPP/google.png"
                alt="Google"
                className="h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
