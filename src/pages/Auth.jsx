import React from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { signupApi, signinApi, googlesigninApi } from "../service/allApis";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

import { GoogleLogin } from "@react-oauth/google";

const Auth = ({ register }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    const { username, email, password } = user;
    if (!username || !email || !password) {
      toast.info("Enter valid data!!!");
    } else {
      const response = await signupApi(user);
      if (response.status === 200) {
        toast.success("Signup successful");
        setUser({ username: "", email: "", password: "" });
        navigate("/login");
      } else {
        toast.error("Signup failed");
      }
    }
  };

  const handleLogin = async () => {
    const { email, password } = user;
    console.log(user);
    if (!email || !password) {
      toast.info("Enter Valid Inputs");
    } else {
      const response = await signinApi(user); 
      console.log(response.data.role);
      if (response.status === 200) {
        sessionStorage.setItem('token', response?.data?.token);
        sessionStorage.setItem('uname', response?.data?.username);
        sessionStorage.setItem('dp', response?.data?.profile);
        sessionStorage.setItem('bio', response?.data?.bio);
        toast.success("Signin Successful");
        setUser({ username: "", email: "", password }); 
        if(response?.data?.role === "admin"){
          navigate('/admin-dashboard');
        }
        else{
        navigate('/');
        }
      } else {
        toast.error(response?.data);
      }
    }
  };

  const handleGoogleLogin = async (Credential) => {
    console.log(Credential);
    const decode_value = jwtDecode(Credential?.credential);
    const data = {
      username: decode_value?.given_name,
      email: decode_value?.email,
      profile: decode_value?.picture,
    };
    console.log(data);
    const response = await googlesigninApi(data);
    console.log(response);
    if (response.status === 200) {
      toast.success("SignIn Successfull");
      sessionStorage.setItem("token", response?.data.token);
      sessionStorage.setItem("uname", response?.data.username);
      sessionStorage.setItem("dp", response?.data?.profile);
      sessionStorage.setItem("bio", response?.data?.bio);
      navigate("/");
    } else {
      toast.error("SignIn Failed");
    }
  };

  return (
    <div className="w-screen min-h-screen bg-[url(/LoginIMG.jpg)] bg-cover bg-center flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-black">
        BOOK STORE
      </h1>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-gray-800 mt-8 rounded-lg shadow-lg flex flex-col items-center p-6 sm:p-8">
        <FaUserCircle className="text-5xl sm:text-6xl text-white mb-4" />

        <h2 className="text-2xl sm:text-3xl text-white font-semibold">
          {register ? "Register" : "Login"}
        </h2>

        <div className="w-full mt-8 space-y-4">
          {register && (
            <input
              type="text"
              className="w-full bg-white py-2 px-3 rounded-md focus:outline-none"
              placeholder="Username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              value={user.username}
            />
          )}
          <input
            type="email"
            className="w-full bg-white py-2 px-3 rounded-md focus:outline-none"
            placeholder="Email ID"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
          />
          <input
            type="password"
            className="w-full bg-white py-2 px-3 rounded-md focus:outline-none"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
          />
          <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm gap-2">
            <span className="text-yellow-500">*Never share your password</span>
            {!register && (
              <span className="text-white underline cursor-pointer">
                Forgot Password?
              </span>
            )}
          </div>

          {register ? (
            <button
              className="w-full bg-green-700 hover:bg-green-800 transition py-2 rounded-md text-white font-semibold mt-2"
              onClick={handleRegister}
            >
              REGISTER
            </button>
          ) : (
            <>
              <button
                className="w-full bg-green-700 hover:bg-green-800 transition py-2 rounded-md text-white font-semibold mt-2"
                onClick={handleLogin}
              >
                LOGIN
              </button>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="mx-3 text-gray-400 text-sm">OR</span>
                <div className="flex-grow border-t border-gray-600"></div>
              </div>

              <div className="w-full flex justify-center mt-2">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    handleGoogleLogin(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  theme="outline"
                  shape="rectangular"
                  size="large"
                  text="signin_with" // This ensures the text/username is visible
                  width="320" // Fixed width to prevent collapsing into just an icon on small screens
                />
              </div>
            </>
          )}
        </div>

        {register ? (
          <p className="text-white mt-6 text-sm sm:text-base text-center">
            Already a user?{" "}
            <Link className="text-blue-400 underline" to="/login">
              Login
            </Link>
          </p>
        ) : (
          <p className="text-white mt-6 text-sm sm:text-base text-center">
            Are you a New user?{" "}
            <Link className="text-blue-400 underline" to="/register">
              Register
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;