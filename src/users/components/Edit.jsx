import React, { useState,useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

import { getProfileApi } from "../../service/allApis";
import base_Url from "../../service/baseUrl";

function Edit() {
  const [modalStatus, setModalStatus] = useState(false);
  const [profileData,setProfileData]=useState({
    username:"",password:"",cpassword:"",profile:"",bio:"",role:""
  })

  useEffect(()=>{
    if(sessionStorage.getItem('token')&&modalStatus){
      getProfileData()
    }
  },[modalStatus])

  const getProfileData=async()=>{
    const response=await getProfileApi()
    if(response.status===200){
      console.log(response.data)
      const user=response.data
      setProfileData({
        username:user?.username,password:user?.password,cpassword:user?.password,profile:user?.profile,bio:user?.bio,role:user?.role
      })
    }

  }

  return (
    <>
      <button
        className="text-blue-500 border border-blue-500 rounded-sm px-3 py-2 hover:bg-blue-500 hover:text-white flex justify-between"
        onClick={() => {
          setModalStatus(true);
        }}
      >
        Edit
      </button>

      {modalStatus && (
        <div className="relative z-50">
          {/* Overlay */}
          <div className="bg-gray-500/75 fixed inset-0 flex justify-center items-center p-4">
            {/* Modal Container */}
            <div
              className="bg-white rounded-2xl flex flex-col justify-between w-full max-w-md overflow-hidden shadow-xl"
              style={{ maxHeight: "90vh" }}
            >
              {/* Header */}
              <div className="bg-black text-white flex justify-between items-center p-3">
                <h1 className="text-xl">Application Form</h1>
                <button
                  onClick={() => {
                    setModalStatus(false);
                  }}
                >
                  <IoClose  size={28} className="hover hover:text-red-600"/>
                </button>
              </div>

              {/* Body - Scrollable if content is long */}
              <div className="overflow-y-auto">
                <div className="p-3">
                  <label
                    htmlFor="user-profile"
                    className="flex justify-center relative"
                  >
                    <input type="file" className="hidden" id="user-profile" />
                    <img src={profileData.profile?profileData.profile.startsWith("https://lh3.googleusercontent.com")?profileData.profile:`${base_Url}/uploadImg/${profileData.profile}`:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"} alt="" className="w-48 h-48 object-cover" />
                    <button className="p-2 bg-yellow-400 text-white absolute rounded bottom-0 right-37">
                      <FaEdit />
                    </button>
                  </label>
                </div>

                <div className="p-3">
                  <input
                    type="text"
                    placeholder="User Name"
                    defaultValue={profileData.username}
                    className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    defaultValue={profileData.password}
                    className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    defaultValue={profileData.password}
                    className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"
                  />
                  <textarea
                    placeholder="Bio"
                    defaultValue={profileData.bio}
                    className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full"
                  ></textarea>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-200 p-3 flex justify-end gap-3 rounded-b-lg">
                <button className="p-2 rounded-sm border bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500">
                  Reset
                </button>
                <button className="p-2 rounded-sm border border-red bg-green-500 text-white hover:border-green-500 hover:bg-white hover:text-green-500">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Edit;