import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Auth = ({ register }) => {
  console.log(register)
  return (
    <div className="w-screen min-h-screen bg-[url(/LoginIMG.jpg)] bg-cover bg-center flex flex-col items-center justify-center px-4 py-10">

      <h1 className="text-center text-3xl sm:text-4xl font-bold">
        BOOK STORE
      </h1>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-gray-800 mt-8 rounded-lg shadow-lg flex flex-col items-center p-6 sm:p-8">

        <FaUserCircle className="text-5xl sm:text-6xl text-white mb-4" />

        <h2 className="text-2xl sm:text-3xl text-white font-semibold">
          {register ? <>Register</> : <>Login</>}
        </h2>

        <div className="w-full mt-8 space-y-4">

          {
            register &&
            <input
              type="username"
              className="w-full bg-white py-2 px-3 rounded-md focus:outline-none"
              placeholder="Username"
            />
          }

          <input
            type="email"
            className="w-full bg-white py-2 px-3 rounded-md focus:outline-none"
            placeholder="Email ID"
          />


          <input
            type="password"
            className="w-full bg-white py-2 px-3 rounded-md focus:outline-none"
            placeholder="Password"
          />

          <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm gap-2">
            <span className="text-yellow-500">
              *Never share your password
            </span>
            {
              !register &&
              < span className="text-white underline cursor-pointer">
                Forgot Password?
              </span>}
          </div>
          { register ?
            <button className="w-full bg-green-700 hover:bg-green-800 transition py-2 rounded-md text-white font-semibold mt-2">
              REGISTER
            </button>
        :
          <button className="w-full bg-green-700 hover:bg-green-800 transition py-2 rounded-md text-white font-semibold mt-2">
            LOGIN
          </button>}
        </div>

       { register ?
        <p className="text-white mt-6 text-sm sm:text-base text-center">
          Already a user?{" "}
          <Link className="text-blue-400 underline" to="/login">
            Login
          </Link>
        </p>
        :
        <p className="text-white mt-6 text-sm sm:text-base text-center">
         Are you a New user?{" "}
          <Link className="text-blue-400 underline" to="/register">
            Register
          </Link>
        </p>}

      </div>
    </div >
  )
}

export default Auth