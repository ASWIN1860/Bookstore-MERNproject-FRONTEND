import React, { useState, useEffect } from "react";
import Header from "../components/Header";

import { AiTwotoneCloseSquare } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { toast } from "react-toastify";

import Edit from "../components/Edit";
import base_Url from "../../service/baseUrl";

import {
  addbookApi,
  removeUserBooksApi,
  getUserBooksApi,
  getBoughtBooksApi,
} from "../../service/allApis";

function UserProfile() {
  const [sellBookStatus, setSellBookStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseHis, setPurchaseHis] = useState(false);
  const [addedBooks, setAddedBooks] = useState("");
  const [boughtBooks,setBoughtBooks]=useState([])
  const [bio,setBio]=useState("")

  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    noOfPages: "",
    image: "",
    price: "",
    discountPrice: "",
    abstract: "",
    publisher: "",
    language: "",
    isbn: "",
    category: "",
    uploadImg: [],
  });

  const [preview, setPreview] = useState("");
  const [previewList, setPreviewList] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("uname")) {
      setUsername(sessionStorage.getItem("uname"));
      setProfilePic(sessionStorage.getItem("dp"));
      setBio(sessionStorage.getItem("bio"));
    } else {
      setUsername("");
    }
    if(bookStatus){
      getUserBookList();
    }
    if(purchaseHis){
      getBoughtBooks()
    }
  }, [bookStatus,purchaseHis]);

  const handleBookUploadImg = (e) => {
    const imgFile = e.target.files[0];
    const url = URL.createObjectURL(imgFile);
    setPreview(url);
    bookDetails.uploadImg.push(imgFile);
    const bookImgList = previewList;
    bookImgList.push(url);
    setPreviewList(bookImgList);
  };

  const handleAddbookSubmit = async () => {
    console.log(bookDetails);
    const {
      title,
      author,
      noOfPages,
      image,
      price,
      discountPrice,
      abstract,
      publisher,
      language,
      isbn,
      category,
      uploadImg,
    } = bookDetails;
    if (
      !title ||
      !author ||
      !noOfPages ||
      !image ||
      !price ||
      !discountPrice ||
      !abstract ||
      !publisher ||
      !language ||
      !isbn ||
      !category ||
      uploadImg.length <= 0
    ) {
      toast.warning("Enter Valid Inputs");
    } else {
      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("author", author);
      formdata.append("noOfPages", noOfPages);
      formdata.append("image", image);
      formdata.append("price", price);
      formdata.append("discountPrice", discountPrice);
      formdata.append("abstract", abstract);
      formdata.append("publisher", publisher);
      formdata.append("language", language);
      formdata.append("isbn", isbn);
      formdata.append("category", category);
      formdata.append("uploadImg", uploadImg);
      const response = await addbookApi(formdata);
      if (response.status === 200) {
        toast.success("Book Details Uploaded Successfully");
        setBookDetails({
          title: "",
          author: "",
          noOfPages: "",
          image: "",
          price: "",
          discountPrice: "",
          abstract: "",
          publisher: "",
          language: "",
          isbn: "",
          category: "",
          uploadImg: [],
        });
      } else {
        toast.error("Book Details Uploading Failed");
      }
    }
  };

  const getUserBookList = async () => {
    const response = await getUserBooksApi();
    console.log(response);
    if (response.status === 200) {
      setAddedBooks(response.data);
    }
  };

  const handleRemoveBook = async (id) => {
    const response = await removeUserBooksApi(id);
    if (response.status === 200) {
      toast.success("Book Removed Successfully");
      getUserBookList();
    } else {
      toast.error("Book Removal Failed");
    }
  };

  const getBoughtBooks=async()=>{
    const response=await getBoughtBooksApi()
    if(response===200){
      setBoughtBooks(response.data)
    }
    else{
      console.log(response)
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-[60vh]">
        <div className="w-full bg-gray-900 relative h-[20vh]">
            <p className=" text-white text-start  pt-25 ps-62">
            {bio}
          </p>
          <div className="rounded-full border-8 border-white absolute left-10 -bottom-15 shadow-2xl">
            <img
               src={profilePic?profilePic.startsWith("https://lh3.googleusercontent.com")?profilePic:`${base_Url}/uploadImg/${profilePic}`:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"}
              alt="profile"
              className="w-40 h-40 rounded-full"
            />
          </div>
        </div>
        <div className="mt-30 px-5 md:px-20">
          <div className="flex justify-between my-10 text-2xl font-bold">
            {username}
           <Edit/>
          </div>
          
        </div>
        <div className="flex justify-center items-center py-10 ">
          <div
            className={
              sellBookStatus
                ? "border-t border-r border-l p-3 rounded-t-sm border-gray-600 text-blue-600"
                : "border-b p-3 border-gray-600"
            }
            onClick={() => {
              setSellBookStatus(true);
              setBookStatus(false);
              setPurchaseHis(false);
            }}
          >
            Sell Book
          </div>
          <div
            className={
              bookStatus
                ? "border-t border-r border-l p-3 rounded-t-sm border-gray-600 text-blue-600"
                : "border-b p-3 border-gray-600"
            }
            onClick={() => {
              setSellBookStatus(false);
              setBookStatus(true);
              setPurchaseHis(false);
            }}
          >
            Book Status
          </div>
          <div
            className={
              purchaseHis
                ? "border-t border-r border-l p-3 rounded-t-sm border-gray-600 text-blue-600"
                : "border-b p-3 border-gray-600"
            }
            onClick={() => {
              setSellBookStatus(false);
              setBookStatus(false);
              setPurchaseHis(true);
            }}
          >
            Purchase History
          </div>
        </div>
      </div>
      {sellBookStatus && (
        <div className="px-5 md:px-50 mb-10">
          <div className="bg-gray-300 p-3">
            <h1 className="text-center my-5 text-xl">Book Details</h1>
            <div className="md:grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  className="p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full"
                  placeholder="Title"
                  value={bookDetails.title}
                  onChange={(e) => {
                    setBookDetails({ ...bookDetails, title: e.target.value });
                  }}
                />
                <input
                  type="text"
                  className="p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full"
                  placeholder="Author"
                  value={bookDetails.author}
                  onChange={(e) => {
                    setBookDetails({ ...bookDetails, author: e.target.value });
                  }}
                />
                <input
                  type="text"
                  className="p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full"
                  placeholder="No Of Page"
                  value={bookDetails.noOfPages}
                  onChange={(e) => {
                    setBookDetails({
                      ...bookDetails,
                      noOfPages: e.target.value,
                    });
                  }}
                />
                <input
                  type="text"
                  className="p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full"
                  placeholder="Image URL"
                  value={bookDetails.image}
                  onChange={(e) => {
                    setBookDetails({ ...bookDetails, image: e.target.value });
                  }}
                />
                <input
                  type="text"
                  className="p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full"
                  placeholder="Price "
                  value={bookDetails.price}
                  onChange={(e) => {
                    setBookDetails({ ...bookDetails, price: e.target.value });
                  }}
                />
                <input
                  type="text"
                  className="p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full"
                  placeholder="Discount Price"
                  value={bookDetails.discountPrice}
                  onChange={(e) => {
                    setBookDetails({
                      ...bookDetails,
                      discountPrice: e.target.value,
                    });
                  }}
                />
                <textarea
                  name=""
                  className="p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full"
                  rows={"5"}
                  placeholder="Abstract"
                  id=""
                  value={bookDetails.abstract}
                  onChange={(e) => {
                    setBookDetails({
                      ...bookDetails,
                      abstract: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div>
                <input
                  type="text"
                  className="p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full"
                  placeholder="Publisher"
                  value={bookDetails.publisher}
                  onChange={(e) => {
                    setBookDetails({
                      ...bookDetails,
                      publisher: e.target.value,
                    });
                  }}
                />
                <input
                  type="text"
                  className="p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full"
                  placeholder="Language"
                  value={bookDetails.language}
                  onChange={(e) => {
                    setBookDetails({
                      ...bookDetails,
                      language: e.target.value,
                    });
                  }}
                />
                <input
                  type="text"
                  className="p-3 bg-white placeholder-gray-700 rounded-sm mb-3 w-full"
                  placeholder="ISBN"
                  value={bookDetails.isbn}
                  onChange={(e) => {
                    setBookDetails({ ...bookDetails, isbn: e.target.value });
                  }}
                />
                <input
                  type="text"
                  className="p-3 bg-white placeholder-gray-700 rounded-sm mb-5 w-full"
                  placeholder="Category"
                  value={bookDetails.category}
                  onChange={(e) => {
                    setBookDetails({
                      ...bookDetails,
                      category: e.target.value,
                    });
                  }}
                />

                <label htmlFor="imginp" className="flex justify-center">
                  <input
                    type="file"
                    className="hidden"
                    id="imginp"
                    onChange={(e) => {
                      handleBookUploadImg(e);
                    }}
                  />
                  {!preview ? (
                    <img
                      src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"
                      alt=""
                      className="w-[50%]"
                    />
                  ) : (
                    <img src={preview} alt="" className="w-[50%]" />
                  )}
                </label>
                {preview && (
                  <div className="flex justify-around my-2">
                    {previewList?.map((item) => (
                      <img src={item} key={item} alt="img" width={"50px"} />
                    ))}
                    {previewList.length < 3 && (
                      <label htmlFor="imginp" className="flex justify-center">
                        <input
                          type="file"
                          className="hidden"
                          id="imginp"
                          onChange={(e) => {
                            handleBookUploadImg(e);
                          }}
                        />
                        <CiSquarePlus size={"50px"} />
                      </label>
                    )}
                  </div>
                )}

                <div className="flex justify-end gap-3 mt-10">
                  <button className="border-2 p-2 bg-orange-500 border-orange-500 text-white hover:bg-white hover:text-orange-500">
                    Reset
                  </button>
                  <button
                    className="border-2 p-2 bg-green-700 border-green-700 text-white hover:bg-white hover:text-green-700"
                    onClick={handleAddbookSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {bookStatus && (
        <>
          {/* Book Card */}
          {addedBooks.length > 0 ? (
            <>
              <div className="px-5 md:px-30 mb-10 shadow-1g border border-gray-100 p-4 flex flex-col justify">
                {addedBooks.map((item) => (
                  <div className="w-full border shadowbg-white p-10">
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-xl font-bold">{item.title}</h1>

                        <h2 className="font-bold">{item.price}</h2>

                        <p className="text-justify p-3">{item.abstract}</p>

                        <div>
                          {item.status == "pending" ? (
                            <img
                              src="https://png.pngtree.com/png-clipart/20230912/original/pngtree-pending-imminent-rubber-stamp-vector-picture-image_12995902.png"
                              style={{ width: "300px" }}
                            />
                          ) : (
                            <img src="https://www.pngarts.com/files/12/Approved-Green-Stamp-PNG-High-Quality-Image.png" />
                          )}
                        </div>
                      </div>

                      <div>
                        <img
                          src={item.image}
                          style={{ maxHeight: "300px", maxWidth: "300px" }}
                        />

                        <button
                          className="bg-red-700 text-white px-3 py-1 mt-2 rounded-lg"
                          onClick={() => {
                            handleRemoveBook(item._id);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="px-5 md:px-50 mb-10 shadow-lg border border-gray-100 p-4 flex flex-col justify-center items-center">
                <img
                  src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif"
                  className=""
                  width={"300px"}
                  alt="nobooks"
                />
                <h1 className="text-2xl text-red-500">No Books Added Yet</h1>
              </div>
            </>
          )}
        </>
      )}
      {purchaseHis && 
        
        <>
          {
            boughtBooks.length > 0 ?

             <div className="px-5 md:px-30 mb-10 shadow-1g border border-gray-100 p-4 flex flex-col justify">
                {boughtBooks.map((item) => (
                  <div className="w-full border shadowbg-white p-10">
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-xl font-bold">{item.title}</h1>

                        <h2 className="font-bold">{item.price}</h2>

                        <p className="text-justify p-3">{item.abstract}</p>

                      </div>

                      <div>
                        <img
                          src="https://en.pimg.jp/093/641/810/1/93641810.jpg"
                          style={{ maxHeight: "300px", maxWidth: "300px" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              :
          <div className="px-5 md:px-50 mb-10 shadow-lg border border-gray-100 p-4 flex justify-center items-center flex-col gap-5">
          <img
            src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif"
            alt="bookGif"
            width={"300px"}
            className="bg-white"
          />
          <h1 className="text-2xl text-red-600">No Books Purchased Yet</h1>
        </div>

          }
        </>
      }
    </>
  );
}

export default UserProfile;
