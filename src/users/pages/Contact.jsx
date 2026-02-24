import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { IoIosPin, IoIosMail, IoIosSend } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <>
      <Header />
      
      {/* Main Container */}
      <div className='min-h-[60vh] px-6 py-10 md:px-20 lg:px-40'>
        <h1 className='text-4xl text-center font-bold'>Contact</h1>
        <p className="text-center my-6 text-gray-600 max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque rerum animi laudantium enim, asperiores deleniti eaque minus odio dicta aut dolores nam quis vitae perspiciatis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut omnis accusantium. Corporis, nostrum maiores quas placeat fuga reiciendis aspernatur quos in labore ducimus. Molestiae cumque animi assumenda itaque molestias.
        </p>

        {/* Contact Info Cards */}
        <div className='flex flex-col md:flex-row justify-center items-start md:items-center gap-8 mt-10'>
          
          {/* Address */}
          <div className='flex items-center w-full md:w-auto'>
            <span className='p-4 bg-gray-400 inline-block rounded-full shrink-0'>
              <IoIosPin className='text-black text-2xl' />
            </span>
            <span className='font-bold ms-4 text-sm md:text-base leading-tight'>
              123 Main street, Apt 4B <br /> Anytown, CA 912345
            </span>
          </div>

          {/* Phone */}
          <div className='flex items-center w-full md:w-auto'>
            <span className='p-4 bg-gray-400 inline-block rounded-full shrink-0'>
              <FaPhoneAlt className='text-black text-2xl' />
            </span>
            <span className='font-bold ms-4 text-sm md:text-base'>+91 987654321</span>
          </div>

          {/* Email */}
          <div className='flex items-center w-full md:w-auto'>
            <span className='p-4 bg-gray-400 inline-block rounded-full shrink-0'>
              <IoIosMail className='text-black text-2xl' />
            </span>
            <span className='font-bold ms-4 text-sm md:text-base'>Bookstore@gmail.com</span>
          </div>
        </div>

        {/* Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-8">
          
          {/* Contact Form */}
          <div className='p-6 md:p-10 bg-gray-100 rounded-lg shadow-sm'>
            <h2 className='text-center text-2xl font-semibold mb-6'>Send Me a Message</h2>
            <div className='space-y-4'>
              <input 
                type="text" 
                className='w-full bg-white rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-gray-400' 
                placeholder='Name'
              />
              <input 
                type="email" 
                className='w-full bg-white rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-gray-400' 
                placeholder='Email ID'
              />
              <textarea 
                className='w-full bg-white rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-gray-400' 
                rows='6' 
                placeholder='Message'
              ></textarea>
              <button className='bg-black text-white py-4 w-full flex justify-center items-center gap-2 hover:bg-gray-800 transition-all rounded-md'>
                Send <IoIosSend className='text-2xl' />
              </button>
            </div>
          </div>

          {/* Map */}
          <div className='w-full h-full min-h\-[400px] overflow-hidden rounded-lg'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0329002277995!2d75.78116707487426!3d11.25899005010772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65900d568d853%3A0x86dc9f15ee869de3!2sLuminar%20Technolab%20-%20Software%20Training%20Institute%20in%20Calicut!5e0!3m2!1sen!2sin!4v1771478599830!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact