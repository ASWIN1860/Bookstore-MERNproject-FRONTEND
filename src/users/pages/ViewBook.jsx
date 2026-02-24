import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaEye } from "react-icons/fa";


function ViewBook() {
  return (
    <>
      <Header />
      <div className="min-h-[60vh] p-5">
        <div className="border p-2 md:grid grid-cols-4">
          <div className="col-span-1">
            <img
              src="http://www.thrillaura.com/cdn/shop/files/IKIGAI-FRONT-HARD-pdf.jpg?v=1732457900"
              alt="book"
            />
          </div>
          <div className="col-span-3">
            <h1 className="text-center font-bold">
              IKIGAI: The Japanese Secret to a Long and Happy Life
            </h1>
            <p className="text-center text-violet-600">Hector and Francesc</p>
            <div className="flex justify-end">
              <button className="text-xl text-gray-500">
                <FaEye />
              </button>
            </div>

            <div className="">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <span className="font-semibold">Publisher : Penguin</span>
                <span className="font-semibold">Language : English</span>
                <span className="font-semibold">No.Of Pages : 208</span>
              
              
                <span className="font-semibold">
                  Seller Mail : Penguinbooks@gmail.com
                </span>
                <span className="font-semibold">Real Price : 15$</span>
                <span className="font-semibold">ISBN : 9765456446655</span>
              </div>
              <p className="my-5 text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                earum iusto laboriosam odit totam, cum minima sunt dolorum
                laudantium officiis debitis excepturi pariatur voluptate commodi
                corrupti deleniti? Explicabo, expedita suscipit. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Esse voluptate, qui
                porro dolor enim dicta numquam laudantium debitis labore,
                ducimus repellendus illo ab ipsam magni pariatur eum omnis
                tempora facere! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Magni vero fuga quis ipsam, cum vel optio
                tenetur quos nulla, voluptates repellendus aspernatur nobis,
                blanditiis consequatur. Deleniti maiores quaerat voluptatibus
                nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis vero temporibus est esse sequi neque vitae placeat,
                dolorum debitis modi sed quidem dicta consequuntur porro
                expedita quibusdam dignissimos harum maxime. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Corrupti nemo debitis
                optio, perferendis, eaque rem in ducimus facere, perspiciatis
                quas qui ab nostrum dignissimos? Magni error temporibus rem
                eveniet totam. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Nesciunt, numquam. Doloremque distinctio
                asperiores recusandae qui, a fugit soluta voluptatum dicta odit
                sint quis ipsa dolorum nesciunt officia iure unde adipisci!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewBook;