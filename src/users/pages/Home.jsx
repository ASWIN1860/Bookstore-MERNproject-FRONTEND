import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getLatestBookApi } from "../../service/allApis";

import { useNavigate } from "react-router-dom";
import { searchContext } from "../../ContextApi/ContextApi";

function Home() {
  const [latestBook, setLatestBook] = useState({});
  const {globalSearchKey,setGlobalSearchKey}=useContext(searchContext)

  useEffect(() => {
    getLatestBook();
  }, []);

  const navigate=useNavigate()

  const getLatestBook = async () => {
    const response = await getLatestBookApi();
    console.log(response);
    if (response?.status === 200) {
      setLatestBook(response?.data);
    }
  };

  const goToBooks=()=>{
    navigate('/books')
  }

  return (
    <>
      <Header />
      <>
        {/* Hero */}
        <section className="w-full h-[70vh] bg-[url(/LandingImg.jpg)] bg-cover bg-center bg-fixed">
          <div className="w-full h-[70vh] bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
            <div className="w-[90%] md:w-[50%] flex flex-col text-white text-center">
              <h1 className="text-4xl font-bold">Wonderful Gifts</h1>
              <p>Give your family and friends a book</p>
              <div className="mt-5 flex justify-center items-center bg-white p-2 rounded-full">
                <input
                  type="text"
                  placeholder="Search books"
                  className="placeholder-gray-700 text-black w-full border-0 outline-none focus:outline-none focus:ring-0 appearance-none ml-3"
                  onChange={(e)=>{setGlobalSearchKey(e.target.value)}}
                />
                <FaMagnifyingGlass className="text-blue-950 mr-3"  onClick={goToBooks}/>
              </div>
            </div>
          </div>
        </section>

        {/* New arrivals */}
        <section className="my-10 px-5 md:px-40">
          <h1 className="text-center text-2xl font-bold">New Arrivals</h1>
          <h1 className="text-center text-3xl md:text-4xl font-bold">
            Explore our Latest Collection
          </h1>
          <div className="w-full mt-10 flex flex-wrap justify-center gap-6">
            {/* Card */}
            {latestBook.length > 0 ? (
              <>
                {latestBook.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 w-full max-w-[18rem] md:w-[16rem] shadow-xl text-center bg-white rounded-lg flex flex-col items-center"
                  >
                    <img
                      src={item.image}
                      alt="Book_Image"
                      className="object-cover rounded"
                      style={{ height: "320px", width: "100%" }}
                    />
                    <h2 className="text-lg font-bold mt-3 line-clamp-1">
                      {item.title.slice(0,20)}...
                    </h2>
                    {/* Fixed overflow by adding break-words and normal whitespace */}
                    {/* <p className="text-center text-sm text-gray-600 mt-2 break-words whitespace-normal w-full px-2 font-bold">
                      {item.abstract}
                    </p> */}
                    <h4 className="text-lg font-bold text-blue-600 mt-auto pt-3">
                      ${item.price}
                    </h4>
                  </div>
                ))}
              </>
            ) : (
              <h2 className="text-2xl text-red-600 font-bold mt-10">
                No books available !!!!!
              </h2>
            )}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to={"/books"}
              className="px-6 bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition-all"
            >
              Explore more..
            </Link>
          </div>
        </section>

        {/* Featured authors */}
        <section className="my-20 px-5 md:px-40 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-xl text-center md:text-left font-bold text-gray-500">
              FEATURED AUTHORS
            </h1>
            <h1 className="text-3xl text-center md:text-left font-bold mt-2">
              Captivates with every word
            </h1>
            <p className="text-justify mt-5 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              magnam odit tempora dolor quis dicta quod officiis obcaecati quas
              amet facere quidem ratione! Dolores similique debitis temporibus
              eveniet.
            </p>
            <p className="text-justify mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              nihil tempore natus necessitatibus dolore repellat eaque dolorum
              alias, neque ipsum velit ea culpa laborum in minus voluptate
              voluptas perferendis aut!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/buisnessman.jpeg"
              alt="buisnessman_image"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </section>

        {/* Testimonies */}
        <section className="text-center my-20 px-5 md:px-40">
          <h1 className="text-lg font-bold text-gray-500 uppercase tracking-widest">
            Testimonials
          </h1>
          <h1 className="text-3xl font-bold mt-2">See what others are saying</h1>
          <div className="flex flex-col items-center my-5">
            <img
              src="/buisnessman1.png"
              alt="Testimonial user"
              className="rounded-full mt-5 shadow-2xl object-cover border-4 border-white"
              style={{ height: "150px", width: "150px" }}
            />
            <h2 className="mt-4 font-bold text-xl">Adam John</h2>
          </div>
          <p className="text-center max-w-2xl mx-auto italic text-gray-700">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            tenetur enim quae deleniti. Eaque doloribus provident totam,
            deleniti ullam iure explicabo, maiores veniam earum aut, minima quia
            possimus nemo culpa?"
          </p>
        </section>
      </>
      <Footer />
    </>
  );
}

export default Home;