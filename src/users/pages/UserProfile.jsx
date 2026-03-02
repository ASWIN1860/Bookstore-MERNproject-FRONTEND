import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaRegEdit } from "react-icons/fa";

function UserProfile() {
  const [sellStatus, setSellStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);
  return (
    <>
      <Header />

      <div className="min-h-[60vh]">
        <div className="w-full bg-gray-600 h-[30vh] relative">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
            className="rounded full absolute left-5 -bottom-25 w-40 ms-10 mb-10 "
          />
        </div>
        <div className="mt-20 px-5 md:px-20">
          <div className="flex justify-between">
            <h1 className="font-bold text-2xl">John doe</h1>
            <button className="text-blue-700 border-blue-600 rounded-sm px-3 py-2 flex">
              <FaRegEdit />
              edit
            </button>
          </div>
          <p className="text-justify my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est
            quos harum et veritatis deleniti deserunt voluptatum repellat
            impedit! Consequuntur magni impedit, deserunt inventore a
            consectetur! Ex minima quos aut? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nam cum quam blanditiis, optio dolore
            obcaecati at perferendis ipsa, dignissimos distinctio delectus
            quisquam veritatis qui maiores quod perspiciatis, architecto ad
            nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Magni iste consectetur maxime minima quo sunt. Enim praesentium ab
            possimus quidem laudantium perspiciatis dolor, consequuntur quis
            dolorum dolorem, qui omnis quo.
          </p>
        </div>
        <div className="flex justify-center items-center my-10">
          <div
            className={
              sellStatus
                ? "p-3 border-gray-800 border-t border-l border-r border-t-sm text-blue-800"
                : "p-3 border-b border-gray-800"
            }
            onClick={() => {
              setSellStatus(true);
              setBookStatus(false);
              setPurchaseStatus(false);
            }}
          >
            Sell Book
          </div>
          <div
            className={
              bookStatus
                ? "p-3 border-gray-800 border-t border-l border-r border-t-sm text-blue-800"
                : "p-3 border-b border-gray-800"
            }
            onClick={() => {
              setSellStatus(false);
              setBookStatus(true);
              setPurchaseStatus(false);
            }}
          >
            Book Status
          </div>
          <div
            className={
              purchaseStatus
                ? "p-3 border-gray-800 border-t border-l border-r border-t-sm text-blue-800"
                : "p-3 border-b border-gray-800"
            }
            onClick={() => {
              setSellStatus(false);
              setBookStatus(false);
              setPurchaseStatus(true);
            }}
          >
            Purchase History
          </div>
        </div>
        {
          sellStatus &&
          <div className="px-5 md:px-50 mb-10 "> 
            <div className="bg-gray-300 p-3 rounded">
              <h1 className="text-center my-5 text-xl">Book Details</h1>
              <div className="md:grid grid-cols-2 gap-3">
                <div>
                  <input type="text" className="p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full" placeholder="Title"/>
                  <input type="text" className="p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full" placeholder="Author"/>
                  <input type="text" className="p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full" placeholder="No Of Pages"/>
                  <input type="text" className="p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full" placeholder="Image Url"/>
                  <input type="text" className="p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full" placeholder="Price"/>
                  <input type="text" className="p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full" placeholder="Discount Price"/>
                  <textarea name="" id="" className="p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full" rows={'7'} placeholder="Abstract"></textarea>
                </div>
                <div>
                  <input type="text" className="p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full" placeholder="Publisher"/>
                  <input type="text" className="p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full" placeholder="Language"/>
                  <input type="text" className="p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full" placeholder="ISBN"/>
                  <input type="text" className="p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full" placeholder="Category"/>
                  <label htmlFor="imginp" className="flex justify-center mt-5">
                    <input type="file" className="hidden" id="imginp"/>
                    <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="fileinput" className="w-[50%] cursor-pointer"/>
                  </label>
                </div>
              </div>
              <div className="flex py-4 justify-end gap-4 pe-4">
                <button className="px-4 py-3 border bg-red-700 border-red-700 text-white rounded-sm hover:bg-white hover:text-red-700">Reset</button>
                <button className="px-4 py-3 border bg-green-700 border-green-700 text-white rounded-sm hover:bg-white hover:text-green-700">Submit</button>
              </div>
            </div>
          </div>
        }
        {
          bookStatus &&
          <div className="px-5 md:px-50 shadow-lg border border-gray-100 p-2 flex flex-col justify-center items-center">
            <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" width={'150px'} alt="No_book" />
            <h1 className="text-3xl text-red-500 font-bold pb-4">No Books Added Yet !!!</h1>
          </div>
        }
      </div>

      <Footer />
    </>
  );
}

export default UserProfile;
