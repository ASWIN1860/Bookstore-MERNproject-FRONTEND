import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaUser, FaBars } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { toast } from "react-toastify";

import base_Url from "../../service/baseUrl";

function Header() {
  const [menuState, setMenuState] = useState(false);
  const [username, setUsername] = useState("");
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [profilePic,setProfilePic]=useState("")
  
  // 1. Create a reference for the dropdown
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // 2. Effect to close dropdown when clicking anywhere else on the screen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownStatus(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("uname")) {
      setUsername(sessionStorage.getItem("uname"));
      setProfilePic(sessionStorage.getItem("dp"))
    }
    else{
      setUsername("")
    }
  }, []);

  const signout = () => {
    sessionStorage.clear();
    setUsername("");
    setDropdownStatus(false);
    toast.error("Logout successfully")
    navigate("/login");
  };

  return (
    <>
      {/* Top Bar */}
      <div className="flex justify-between items-center p-3 px-5 border-b bg-white">
        <div className="flex items-center gap-2">
          <img src="/Book.png" alt="logo" className="w-[40px] h-[40px]" />
          <h1 className="text-xl font-bold">BOOKSTORE</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-3 text-gray-600">
            <FaInstagram size={20} />
            <RiTwitterXLine size={20} />
            <FaFacebookF size={18} />
          </div>

          {/* Profile/Login Section - Persistent on all screens */}
          <div className="relative" ref={dropdownRef}>
            {username ? (
              <>
                <button
                  className="px-2 py-1 border rounded-lg flex gap-2 items-center"
                  onClick={() => setDropdownStatus(!dropdownStatus)}
                >
                  <img
                    src={profilePic?profilePic.startsWith("https://lh3.googleusercontent.com")?profilePic:`${base_Url}/uploadImg/${profilePic}`:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"}
                    alt="profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="hidden sm:inline">{username}</span>
                </button>
                {dropdownStatus && (
                  <ul className="border text-sm absolute right-0 z-50 rounded-md bg-white shadow-lg mt-2 w-32">
                    <li className="border-b px-4 py-2 hover:bg-gray-100">
                      <Link to="/user-profile" onClick={() => setDropdownStatus(false)}>Profile</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-red-50">
                      <button className="text-red-600 cursor-pointer w-full text-left" onClick={signout}>
                        Sign out
                      </button>
                    </li>
                  </ul>
                )}
              </>
            ) : (
              <Link to="/login">
                <button className="flex items-center gap-2 border border-black rounded px-3 py-1.5 hover:bg-black hover:text-white transition-all">
                  <FaUser /> Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Nav Bar with Hamburger Dropdown */}
      <nav className="w-full bg-gray-900 text-white relative">
        <div className="flex justify-between md:justify-center items-center p-3 px-5">
          <button className="md:hidden text-xl" onClick={() => setMenuState(!menuState)}>
            <FaBars />
          </button>
          
          <ul className={`${
            menuState 
            ? "flex flex-col absolute top-full left-0 w-full bg-gray-800 z-40 p-5 gap-4" 
            : "hidden md:flex gap-10 font-medium uppercase text-xs tracking-widest"
          }`}>
            <li><Link to="/" onClick={() => setMenuState(false)}>Home</Link></li>
            <li><Link to="/books" onClick={() => setMenuState(false)}>Books</Link></li>
            <li><Link to="/career" onClick={() => setMenuState(false)}>Careers</Link></li>
            <li><Link to="/contact" onClick={() => setMenuState(false)}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;