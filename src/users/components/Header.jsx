import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";



function Header() {
  const [menuState,setMenuState]=useState(false)

  return (
    <>
       <div className='grid grid-cols-3 p-3'>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/Book.png" alt="" className='w-[50px] h-50px'/>
          <h1 className='text-2xl font-bold md:hidden'>BOOKSTORE</h1>
        </div>
        {/* Title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className='text-3xl font-bold'>BOOK STORE</h1>
        </div>
        {/* Login link */}
        <div className='md:flex justify-end items-center gap-2 hidden'> 
          <FaInstagram style={{fontSize:'25px'}}/>
          <RiTwitterXLine style={{fontSize:'25px'}}/>
          <FaFacebookF style={{fontSize:'22px'}}/>
          {/* Login button */}
          <Link to={'/login'}>
            <button className='flex items-center border border-black rounded px-2 py-2 hover:bg-black hover:text-white'>
                <FaUser />
                Login
            </button>
          </Link>
        </div>
       </div>
       <nav className='w-full p-3 bg-gray-900 text-white md:flex justify-center items-center'>
        {/* Menubar & Login */}
        <div className="flex justify-between md:hidden">
          <button className='ps-5 ' onClick={()=>setMenuState(!menuState)}>
           <GiHamburgerMenu/>
          </button>
          {/* Login Button */}
          <Link>
            <button  className='flex items-center border border-white  rounded px-2 py-2 hover:bg-black text-white'>
              <FaUser/>
              Login
            </button>
          </Link>
        </div>
        <ul className={menuState?'flex flex-col md:flex-row md:gap-2':'md:flex justify-center items-center gap-2 hidden'}>
          <Link to={'/'}>Home</Link>
          <Link to={'/books'}>Books</Link>
          <Link to={'/career'}>Careers</Link>
          <Link to={'/contact'}>Contact</Link>
        </ul>
       </nav>
    </>
  )
}

export default Header