import React, { useState, useEffect ,useContext} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../components/Header";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

import { allBooksApi } from "../../service/allApis";
import { searchContext } from "../../ContextApi/ContextApi";

function AllBooks() {
  const [collapse, setCollapse] = useState(false);
  const [token, setToken] = useState("");
  const [bookList, setBookList] = useState([]);
  const [allCategory,setAllCategory]=useState([]) 
  const [tempBooks,setTempBooks]=useState([])

  //consuming searchcontext.
  const {globalSearchKey,setGlobalSearchKey}=useContext(searchContext)

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      getAllBooks();
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, [globalSearchKey]);

  const getAllBooks = async () => {
    const response = await allBooksApi(globalSearchKey);
    if (response.status === 200) {
      const allBooks=response?.data
      const tempArray=[]
      setBookList(allBooks);
      setTempBooks(allBooks)
      allBooks.forEach(item=>{
        !tempArray.includes(item.category)&& tempArray.push(item.category)
      })
      console.log(tempArray)
      setAllCategory([...tempArray])
    }
  };

  const filterBooks=(category)=>{
    console.log(category)
    if(category=='no-filter'){
      getAllBooks()
    }
    else{
      const filter=tempBooks.filter(item=>item.category.toLowerCase().includes(category.toLowerCase()))
      setBookList(filter)
    }
  }

  return (
    <>
      <Header />
      {token ? (
        <div className="min-h-[60vh] py-10 px-5">
          <h1 className="text-3xl text-center">Collections</h1>
          <div className="flex justify-center items-center mb-4">
            <input
              type="text"
              placeholder="Search By Title "
              className="placeholder-gray-600 border py-2 my-2 w-[50%]"
              onChange={(e)=>{setGlobalSearchKey(e.target.value)}}
            />
            {/* <button className="py-2 px-2 bg-blue-800 text-white border border-blue-800 hover:bg-white hover:text-blue-800">
              Search
            </button> */}
          </div>
          <div className={!collapse && "md:grid grid-cols-5 gap-2"}>
            <div className="col-span-1">
              {!collapse && <h1 className="text-2xl mb-5">Filters</h1>}
              <button
                className="text-2xl"
                onClick={() => setCollapse(!collapse)}
              >
                <GiHamburgerMenu />
              </button>

              {!collapse && (
                <>
                {
                  allCategory.length>0 &&
                  <>
                  {
                    allCategory.map(item=>(
                       <div className="my-4" key={item} >
                    <input
                      type="radio"
                      id={item}
                      value={item}
                      name="filter"
                      onClick={()=>filterBooks(item)}
                    />{" "}
                    <label htmlFor={item}>{item}</label>
                  </div>
                    ))
                  }
                  </>
                }
                
                  <div className="my-4" key={'no-filter'}>
                    <input
                      type="radio"
                      id="no-filter"
                      value={'no-filter'}
                      name="filter"
                      onClick={()=>filterBooks('no-filter')}
                    />{" "}
                    <label htmlFor="no-filter">{'no-filter'}</label>
                  </div>
                </>
              )}
            </div>
            <div className="col-span-4 mt-5">
              <div className=" flex flex-col items-center md:flex-row md:justify-center gap-2 md:flex-wrap">

                {/* Card */}
                {bookList.length > 0 ? (
                  <>
                    {bookList.map((item) => (
                      <div className="p-1 w-[70%] md:w-[16rem] shadow-xl text-center ">
                        <Link to={`/books/${item?._id}/view`}>
                          <img
                            src={item.image}
                            alt=""
                            style={{ height: "320px", width: "100%" }}
                          />
                        </Link>
                        <h2 className="text-lg">{item.title}</h2>

                        <h4 className="text-lg text-blue-600">${item.price}</h4>
                      </div>
                    ))}
                  </>
                ) : (
                  <h2 className="text-center text-red-400 text-2xl">
                    No book available !!!!
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[60vh] py-10 px-5 flex flex-col justify-center items-center">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.PRfU1liK6MJkrVQ8XlhiRAHaEH?pid=Api&P=0&h=180"
            alt="logn_req_img"
            className="w-[30%]"
          />
          <p className="text-xl ">
            Please{" "}
            <Link to={"/login"} className="text-blue-500 underline">
              Login
            </Link>
            To View All Books
          </p>
        </div>
      )}

      <Footer />
    </>
  );
}

export default AllBooks;
