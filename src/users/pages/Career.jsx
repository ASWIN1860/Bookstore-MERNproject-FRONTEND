import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationDot } from "react-icons/fa6";
import { GrShare } from "react-icons/gr";



function Career() {
  return (
    <>
     <Header/>
       <div className='min-h-[60vh] px-5 py-10 md:px-40'>
        {/* Intro */}
       <h1 className='text-4xl text-center font-bold'>Career</h1>
       <p className='text-justify my-5'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, sunt? Necessitatibus sit, voluptatibus architecto optio veniam impedit totam molestias id asperiores consequuntur alias, rem aliquid, et nam! Natus, provident atque?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla incidunt praesentium aperiam dicta, quo provident amet aspernatur fuga sunt doloribus harum eligendi laborum, alias magnam. Voluptas esse sed nesciunt molestias.
       </p>
       {/* Current Openings */}
       <div className='w-full mt-10'>
        <h1 className='text-2xl'>Currrent openings</h1>
        <div className='flex justify-center my-5'>
          <input type="text" className='border py-2' placeholder='Job Title' />
          <button className='bg-green-700 text-white p-2'>Search</button>
        </div>
        <div className='w-full'>
          <div className='border-2 border-gray-500  shadow-lg py-3 px-2 md:grid grid-cols-7'>
             <div className='col-span-6'>
              <h1 className='text-lg mb-2'>Job Title</h1>
                <hr />
                <p className='mt-5 flex gap-2 items-center'><FaLocationDot  className='text-blue-800'/></p>
                <p className='mt-5'>Job Type:</p>
                <p className='mt-5'>Salary:</p>
                <p className='mt-5'>Qualification:</p>
                <p className='mt-5'>Experience:</p>
                <p className='mt-5'>Description:</p>
            

             </div>
             <div className='px-4 col-span-1 flex justify-end md:flex-none  md:justify-start '>
              <button className='bg-blue-800 p-4  text-white  md:float-start   rounded-sm  flex  md:items-center gap-1 h-[50px] '>Apply <GrShare />
                </button>

             </div>
          </div>
        </div>
        
       </div>
       </div>
       <Footer/>
    </>
  )
}

export default Career