import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Home() {
  return (
    <>
      <Header />
      <>
        {/* Hero  */}
        <section className="w-full h-[70vh] bg-[url(/LandingImg.jpg)] bg-cover bg-center bg-fixed ">
          <div className="w-full h-[70vh] bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
            <div className="w-[50%] flex flex-col text-white text-center">
              <h1 className="text-4xl font-bold">Wonderful Gifts</h1>
              <p>Give your family and friends a book</p>
              <div className="mt-5 flex justify-center items-center bg-white p-2 rounded-full">
                <input
                  type="text"
                  placeholder="Search books"
                  className="placeholder-gray-700 text-black w-full border-0 outline-none focus:outline-none focus:ring-0 appearance-none "
                />
                <FaMagnifyingGlass className="text-blue-950" />
              </div>
            </div>
          </div>
        </section>

        {/* New arrivals */}
        <section className="my-3 px-3 md:px-40">
          <h1 className="text-center text-2xl font-bold">New Arrivals</h1>
          <h1 className="text-center text-4xl font-bold">Explore our Latest Collection</h1>
          <div className="w-full mt-5 flex md:flex justify-center gap-4 flex-wrap">
            {/* Card */}
            <div className="p-1 w-[70%] md:w-[16rem] shadow-xl text-center ">
              <img src="/HarrypotterBook.jpg" alt="" style={{height:'320px',width:'100%'}}/>
              <h2 className="text-lg">Harry potter</h2>
              <p>Lorem ipsum .....</p>
              <h4 className="text-lg text-blue-600">$40</h4>
            </div>
            {/* Card */}
            <div className="p-1 w-[70%] md:w-[16rem] shadow-xl text-center ">
              <img src="/HarrypotterBook.jpg" alt="" style={{height:'320px',width:'100%'}}/>
              <h2 className="text-lg">Harry potter</h2>
              <p>Lorem ipsum .....</p>
              <h4 className="text-lg text-blue-600">$40</h4>
            </div>
            {/* Card */}
            <div className="p-1 w-[70%] md:w-[16rem] shadow-xl text-center ">
              <img src="/HarrypotterBook.jpg" alt="" style={{height:'320px',width:'100%'}}/>
              <h2 className="text-lg">Harry potter</h2>
              <p>Lorem ipsum .....</p>
              <h4 className="text-lg text-blue-600">$40</h4>
            </div>
            {/* Card */}
            <div className="p-1 w-[70%] md:w-[16rem] shadow-xl text-center ">
              <img src="/HarrypotterBook.jpg" alt="" style={{height:'320px',width:'100%'}}/>
              <h2 className="text-lg">Harry potter</h2>
              <p>Lorem ipsum .....</p>
              <h4 className="text-lg text-blue-600">$40</h4>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <button className="px-3 bg-blue-700 text-white py-2">Explore more..</button>
          </div>

        </section>
        {/* Featured authors */}
        <section className="my-20 px-5 md:px-40 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-xl text-center font-bold">FEATURED AUTHORS</h1>
            <h1 className="text-3 xl text-center font-bold">Captivates with every word</h1>
            <p className="text-justify mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magnam odit tempora dolor quis dicta quod officiis obcaecati quas amet facere quidem ratione! Dolores similique debitis temporibus eveniet. Non, dolorem.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam maxime quo officia quos, qui labore, recusandae alias dolores reprehenderit asperiores veniam natus officiis perferendis reiciendis fuga sit odio? Hic, tempore.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima cupiditate, delectus facere reiciendis tempore pariatur distinctio ad omnis perspiciatis perferendis soluta iste a quae provident molestiae repellendus exercitationem odio.
            </p>
            <p className="text-justify mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium quasi in, ex, nam soluta debitis non voluptas iste at incidunt sint obcaecati quod, eaque laboriosam cupiditate enim optio et.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nihil tempore natus necessitatibus dolore repellat eaque dolorum alias, neque ipsum velit ea culpa laborum in minus voluptate voluptas perferendis aut!
            </p>
          </div>
          <div className="flex items-center">
            <img src="/buisnessman.jpeg" alt="buisnessman_image" className=""/>
          </div>
        </section>
        {/* Testimonies */}
        <section className="text-center my-20 px-5 md:px-40">
          <h1 className="text-lg font-bold">TESTMONIALS</h1>
          <h1 className="text-3xl font-bold">See what others are saying</h1>
          <div className="flex flex-col items-center my-5"> 
            <img src="/buisnessman1.png" alt="" className="rounded-full mt-5 shadow-2xl" style={{height:'200px',width:'200px'}}/>
            <h2 className="mt-2">Adam John</h2>
          </div>
          <p className="test-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur enim quae deleniti. Eaque doloribus provident totam, deleniti ullam iure explicabo, maiores veniam earum aut, minima quia possimus nemo culpa?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur tempora quos sapiente ratione vitae nemo ut! Cumque sed repellendus neque, fuga illo, vitae, rerum sit tempora soluta iste voluptatum.
          </p>
        </section>
      </>    
      <Footer />
    </>
  );
}

export default Home;
