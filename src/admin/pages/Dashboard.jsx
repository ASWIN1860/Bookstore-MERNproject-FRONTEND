import React from 'react'

import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'

function Dashboard() {
  return (
  <>
  <AdminHeader/>
  <div className='min-h[60vh] md:grid grid-cols-4'>
    <div className='col-span-1'> 
<AdminSidebar/>
    </div>
   <div className='col-span-3'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'> 
      <div className='w-full  bg-violet-600 py-10 text-white rounded-xl shadow'>
        <h1 className='text-xl justify-center flex gap-3 items-center'>Total number of books</h1>
        <h1 className='text-xl justify-center flex gap-3 items-center'>100+</h1>
      </div>
       <div className='w-full  bg-green-600 py-10 text-white rounded-xl shadow'>
        <h1 className='text-xl justify-center flex gap-3 items-center'>Total number of users</h1>
        <h1 className='text-xl justify-center flex gap-3 items-center'>100+</h1>
      </div>
       <div className='w-full  bg-red-600 py-10 text-white rounded-xl shadow'>
        <h1 className='text-xl justify-center flex gap-3 items-center'>Total number of employees</h1>
        <h1 className='text-xl justify-center flex gap-3 items-center'>100+</h1>
      </div>
    </div>
    
   </div>

  </div>
  <Footer/>
 
  </>
  )
}

export default Dashboard