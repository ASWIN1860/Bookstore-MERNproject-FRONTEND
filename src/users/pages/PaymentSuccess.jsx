import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../../components/Footer";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      {/* Content Section - flex-grow ensures footer stays at bottom */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Header Section */}
          <div className="py-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-gray-800">
              Payment Success!
            </h2>
            <p className="text-gray-500 mt-2 px-4">
              Your order has been confirmed and is being processed.
            </p>
          </div>

          {/* Action Buttons Section */}
          <div className="px-6 pb-8">
            <Link
              to={"/books"}
              className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all active:scale-95 text-center"
            >
              Back to Books
            </Link>

            <button className="w-full mt-3 text-gray-500 font-semibold text-sm hover:text-gray-700">
              Print Receipt
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;