import React ,{useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../components/Header";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

function AllBooks() {

  const [collapse,setCollapse]=useState(false)
  return (
    <>
      <Header />
      <div className="min-h-[60vh] py-10 px-5">
        <h1 className="text-3xl text-center">Collections</h1>
        <div className="flex justify-center items-center mb-4">
          <input
            type="text"
            placeholder="Search By Title "
            className="placeholder-gray-600 border py-2 my-2 w-[50%]"
          />
          <button className="py-2 px-2 bg-blue-800 text-white border border-blue-800 hover:bg-white hover:text-blue-800">
            Search
          </button>
        </div>
        <div className={!collapse && "md:grid grid-cols-5 gap-2"}>
          <div className="col-span-1">
            {
              !collapse && 
              <h1 className="text-2xl mb-5">Filters</h1>
            }
            <button className="text-2xl" onClick={()=>setCollapse(!collapse)}>
              <GiHamburgerMenu />
            </button>

            {
              !collapse &&
              <>
                 <div className="my-4">
              <input type="radio" value={"Literary Fiction"} name="filter"/>{" "}
              <label htmlFor="">Literary Fiction</label>
            </div>
            <div className="my-4">
              <input type="radio" value={"Literary Fiction"}  name="filter"/>{" "}
              <label htmlFor="">Literary Fiction</label>
            </div>
            <div className="my-4">
              <input type="radio" value={"Literary Fiction"}  name="filter"/>{" "}
              <label htmlFor="">Literary Fiction</label>
            </div>
            <div className="my-4">
              <input type="radio" value={"Literary Fiction"}  name="filter"/>{" "}
              <label htmlFor="">Literary Fiction</label>
            </div>
            <div className="my-4">
              <input type="radio" value={"Literary Fiction"}  name="filter"/>{" "}
              <label htmlFor="">Literary Fiction</label>
            </div>
            <div className="my-4">
              <input type="radio" value={"Literary Fiction"}  name="filter"/>{" "}
              <label htmlFor="">Literary Fiction</label>
            </div>
            <div className="my-4">
              <input type="radio" value={"Literary Fiction"}  name="filter"/>{" "}
              <label htmlFor="">Literary Fiction</label>
            </div>
            <div className="my-4">
              <input type="radio" value={"Literary Fiction"}  name="filter"/>{" "}
              <label htmlFor="">Literary Fiction</label>
            </div>
              </>
            }
          </div>
          <div className="col-span-4 mt-5">
          <div className=" flex flex-col items-center md:flex-row md:justify-center gap-2 md:flex-wrap">
            {/* Card */}
            <div className="p-1 w-[70%] md:w-[16rem] shadow-xl text-center ">
              <Link to={'/books/1/view'}>
               <img
                src="/HarrypotterBook.jpg"
                alt=""
                style={{ height: "320px", width: "100%" }}
              />
              </Link>
              <h2 className="text-lg">Harry potter</h2>
              <p>Lorem ipsum .....</p>
              <h4 className="text-lg text-blue-600">$40</h4>
            </div>
            {/* Card */}
            <div className="p-1 w-[70%] md:w-[16rem] shadow-xl text-center ">
              <Link to={'/books/1/view'}>
               <img
                src="/HarrypotterBook.jpg"
                alt=""
                style={{ height: "320px", width: "100%" }}
              />
              </Link>
              <h2 className="text-lg">Harry potter</h2>
              <p>Lorem ipsum .....</p>
              <h4 className="text-lg text-blue-600">$40</h4>
            </div>
            {/* Card */}
            <div className="p-1 w-[70%] md:w-[16rem] shadow-xl text-center ">
              <Link to={'/books/1/view'}>
               <img
                src="/HarrypotterBook.jpg"
                alt=""
                style={{ height: "320px", width: "100%" }}
              />
              </Link>
              <h2 className="text-lg">Harry potter</h2>
              <p>Lorem ipsum .....</p>
              <h4 className="text-lg text-blue-600">$40</h4>
            </div>
            {/* Card */}
            <div className="p-1 w-[70%] md:w-[16rem] shadow-xl text-center ">
              <Link to={'/books/1/view'}>
               <img
                src="/HarrypotterBook.jpg"
                alt=""
                style={{ height: "320px", width: "100%" }}
              />
              </Link>
              <h2 className="text-lg">Harry potter</h2>
              <p>Lorem ipsum .....</p>
              <h4 className="text-lg text-blue-600">$40</h4>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllBooks;
