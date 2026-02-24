import React from 'react'
import { FaPowerOff } from "react-icons/fa";


function AdminHeader() {
  return (
    <>
       <div className="w-full p-3 flex justify-between">
        <div className="flex items-center gap-1">
            <img src="/Book.png" alt="book" className='w-[50px]'/>
            <span className='text-xl'>BOOK STORE</span>
        </div>
        <button className='flex items-center gap-2 border shadow rounded-lg p-3 hover:bg-black hover:text-white'>
            <FaPowerOff />
            Logout
        </button>
       </div>
       <div className='bg-black text-white p-2 flex'>
        <marquee behavior="" direction="">
            Welcome , Admin! You're all set to manage and monitor the system. Let's get to work.
        </marquee>
       </div>
    </>
  )
}

export default AdminHeader