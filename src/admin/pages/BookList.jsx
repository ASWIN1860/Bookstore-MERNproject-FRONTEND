import React, { useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../../components/Footer";

import {toast} from "react-toastify"

import base_Url from "../../service/baseUrl";

import {
  getAllAdminBooksApi,
  getAdminAllUsersApi,
  adminApproveBookApi
} from "../../service/allApis";

function Booklist() {
  const [bookstatus, setbookstatus] = useState(true);
  const [userstatus, setuserstatus] = useState(false);
  const [bookList, setBookList] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    if (bookstatus) {
      getBookList();
    }
    if (userstatus) {
      getUserList();
      console.log(allUsers)
    }
  }, [userstatus]);


  const getBookList = async () => {
    const response = await getAllAdminBooksApi();
    if (response.status === 200) {
      console.log(response.data);
      setBookList(response.data);
    } else {
      console.log(response);
    }
  };

  const getUserList = async () => {
    const response = await getAdminAllUsersApi();
    if (response.status === 200) {
      console.log(response?.data);
      setAllUsers(response?.data);
    } else {
      console.log(response);
    }
  };
  
  const bookUpproveList=async(id)=>{
    const response=await adminApproveBookApi(id)
    if(response.status===200){
      console.log(response)
      toast.success("Book Upproved")
      getBookList()
    }
    else{
      console.log(response)
      toast.error("Something went wrong!!!")
    }
  }

  return(
    <>
      <AdminHeader />
      
      <div className="min-h-[60vh] grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-1">
          <AdminSidebar />
        </div>

        <div className="col-span-1 lg:col-span-3">
          <h2 className="text-center text-2xl my-5">Resources</h2>

          {/* Tabs */}
          <div className="flex justify-center items-center px-4">
            <div
              onClick={() => {
                setbookstatus(true);
                setuserstatus(false);
              }}
              className={
                bookstatus
                  ? "p-3 border-l border-r border-t rounded-t-sm border-gray-600 text-blue-600"
                  : "p-3 border-b border-gray-600 cursor-pointer"
              }
            >
              All Books
            </div>

            <div
              onClick={() => {
                setbookstatus(false);
                setuserstatus(true);
              }}
              className={
                userstatus
                  ? "p-3 border-l border-r border-t rounded-t-sm border-gray-600 text-blue-600"
                  : "p-3 border-b border-gray-600 cursor-pointer"
              }
            >
              Users
            </div>
          </div>

          {/* BOOKS SECTION */}
          {bookstatus && (
            <div className="px-4 md:px-10 py-5 flex flex-wrap justify-center lg:justify-around gap-6">
              {bookList.length > 0 ? (
                <>
                  {bookList.map((item, index) => (
                    <div key={index} className="p-1 w-full sm:w-[45%] md:w-[16rem] shadow-xl text-center flex flex-col justify-between">
                      <div>
                        <img
                          src={item?.image}
                          alt="no img"
                          className="object-cover"
                          style={{ height: "300px", width: "100%" }}
                        />
                        <h2 className="text-lg mt-2 font-semibold">{item?.title}</h2>
                        <p className="text-sm px-2">{item?.abstract.slice(0, 90)}....</p>
                      </div>
                      <div className="mt-auto">
                        <h4 className="text-lg text-blue-600 my-2">
                          &#8377;{item?.price}
                        </h4>
                        {item?.status === "pending" ? (
                          <button onClick={()=>{bookUpproveList(item?._id)}} className="bg-green-500 text-white border border-green-500 w-full py-2 hover:bg-white hover:text-blue-900 transition-colors">
                            Approve
                          </button>
                        ) : (
                          <h2 className="text-green-600 text-center py-2">Approved</h2>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <h2 className="m-5 text-center text-red-600 text-xl">
                  No Books Available
                </h2>
              )}
            </div>
          )}

          {/* USERS SECTION */}
          {userstatus && (
            <div className="px-4 md:px-10 py-5 flex flex-wrap justify-center lg:justify-around gap-6">
              {allUsers.length > 0 ? (
                <>
                  {allUsers.map((item, index) => (
                    <div key={index} className="w-full sm:w-[45%] lg:w-[18rem] border bg-gray-300 py-4 px-4 rounded-sm">
                      <h1 className="text-center mb-4 text-amber-900 truncate text-xs">
                        ID : {item?._id}
                      </h1>

                      <div className="flex items-center gap-4">
                        <div className="shrink-0">
                          <img
                            src={item.profile ? (item.profile.startsWith("https://lh3.googleusercontent.com") ? item.profile : `${base_Url}/uploadImg/${item.profile}`) : "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image-File.png"}
                            alt="userpic"
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        </div>

                        <div className="flex flex-col justify-center overflow-hidden">
                          <h2 className="text-blue-800 text-lg font-medium truncate">{item?.username}</h2>
                          <p className="text-green-800 text-sm truncate">{item?.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <h2 className="text-center text-red-600 w-full mt-10">
                  No users available!!!
                </h2>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Booklist;