import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaEye } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoCameraSharp } from "react-icons/io5";

import { getBookByIdApi } from "../../service/allApis";

function ViewBook() {
  const [modalStatus, setModalStatus] = useState(false);
  const [bookData,setBookData]=useState({})
  const {id}=useParams()
  console.log(id)

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      getBookData()
    }
  },[])

  const getBookData=async()=>{
    const response=await getBookByIdApi(id)
    console.log(response)
    if(response?.status===200){
      setBookData(response?.data)
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-[60vh] p-5">
        <div className="border p-2 md:grid grid-cols-4">
          <div className="col-span-1">
            <img
              src={bookData?.image}
              alt="book"
            />
          </div>
          <div className="col-span-3">
            <h1 className="text-center font-bold">
              {bookData?.title}
            </h1>
            <p className="text-center text-violet-600">{bookData?.author}</p>
            <div className="flex justify-end">
              <button className="text-xl text-gray-500">
                <FaEye className="text-xl text-gray-500" onClick={()=>{setModalStatus(true)}}/>
              </button>
            </div>
            <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              <span className="font-semibold">Publisher :{bookData?.publisher}</span>
              <span className="font-semibold">Language :{bookData?.language}</span>
              <span className="font-semibold">No.Of Pages :{bookData?.noOfPages}</span>

              <span className="font-semibold">
                Seller Mail :{bookData?.userMail}
              </span>
              <span className="font-semibold">Real Price :{bookData?.price}</span>
              <span className="font-semibold">ISBN :{bookData?.isbn}</span>
            </div>
            <p className="my-5 text-justify">
             {bookData?.abstract}
            </p>

            <div className="gap-4 flex justify-end ">
              <button className="bg-blue-800 p-4 rounded-xl flex items-end text-white">
                <MdKeyboardDoubleArrowLeft className="text-xl " />
                Back
              </button>
              <button className="bg-green-700 p-4 rounded-xl text-white">
                Buy <span className="text-yellow-400">{bookData?.discountPrice}</span>
              </button>
            </div>
          </div>
        </div>
        {modalStatus && (
          <div
            className="relative z-10"
            onClick={() => {
              setModalStatus(false);
            }}
          >
            <div className="bg-gray-500/75 fixed inset-0">
              <div className="flex justify-center items-center min-h-screen">
                <div style={{ height: "600px", width: "800px" }} className="bg-white rounded-2xl ">
                  <div className="bg-black text-white flex justify-between items-center p-3 rounded-t-2xl">
                    <h1 className="text-2xl font-bold">Books Image</h1>
                    <button>
                      <IoClose />
                    </button>
                  </div>
                  <h2 className="text-lg text-blue-600 flex gap-3 items-center m-3 font-bold">
                    <IoCameraSharp />
                    Camera click of the book in the hand of seller
                  </h2>
                  {/* Image */}
                  
                    
                      <div className="flex overflow-x-auto justify-between items-center"> 
                    <img src={bookData?.image} alt="" width={'300px'}/>
                    <img src="http://www.thrillaura.com/cdn/shop/files/IKIGAI-FRONT-HARD-pdf.jpg?v=1732457900" alt="" width={'300px'}/>
                    <img src="http://www.thrillaura.com/cdn/shop/files/IKIGAI-FRONT-HARD-pdf.jpg?v=1732457900" alt="" width={'300px'}/>
                    <img src="http://www.thrillaura.com/cdn/shop/files/IKIGAI-FRONT-HARD-pdf.jpg?v=1732457900" alt="" width={'300px'}/>
                  </div>
                  
                </div>
              
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ViewBook;
