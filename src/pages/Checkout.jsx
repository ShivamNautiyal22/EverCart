import React, { useState } from "react";
import { useLocation } from "react-router";

const Checkout = () => {
  const location = useLocation();
  const { totalItems, totalPrice } = location.state || {
    totalItems: 0,
    totalPrice: 0,
  };

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handlePaymentSelect = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
      <div className="mb-8 border-b pb-4">
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl md:text-3xl text-gray-900">
            SHIPPING <span className="text-gray-500">DETAILS</span>
          </h1>
          <div className="w-10 h-[2px] bg-gray-900"></div>
        </div>
      </div>

      <div>
        <form className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Form */}
          <div className="w-full lg:w-3/5 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="transition-all duration-200">
                  <input
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <div className="transition-all duration-200">
                  <input
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="mb-5">
                <input
                  required
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  type="email"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-5">
                <input
                  required
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  type="tel"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Shipping Address
              </h2>
              <div className="space-y-4">
                <div>
                  <input
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    type="text"
                    placeholder="Street address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      required
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                      type="text"
                      placeholder="State"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      required
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                      type="text"
                      placeholder="Zipcode"
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                      type="text"
                      placeholder="Country"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Order Summary & Payment */}
          <div className="w-full lg:w-2/5 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center py-2 border-gray-100">
                  <span className="text-gray-600">Total Items</span>
                  <span className="font-medium text-gray-900">
                    {totalItems}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-gray-300">
                  <span className="font-medium text-gray-900">Total</span>
                  <span className="font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Payment Method
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  onClick={() => handlePaymentSelect("paypal")}
                  className={`px-4 py-3 rounded-lg border-2 flex justify-center items-center transition-all duration-200 hover:bg-blue-50 ${
                    paymentMethod === "paypal"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <span className="font-medium">PayPal</span>
                </button>

                <button
                  onClick={() => handlePaymentSelect("stripe")}
                  className={`px-4 py-3 rounded-lg border-2 flex justify-center items-center transition-all duration-200 hover:bg-blue-50 ${
                    paymentMethod === "stripe"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <span className="font-medium">Stripe</span>
                </button>

                <button
                  onClick={() => handlePaymentSelect("cod")}
                  className={`px-4 py-3 rounded-lg border-2 flex justify-center items-center transition-all duration-200 hover:bg-blue-50 ${
                    paymentMethod === "cod"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <span className="font-medium">Cash on Delivery</span>
                </button>
              </div>
            </div>

            <button onClick={(e) => {
              e.preventDefault()
            }} className="w-full bg-black text-white font-medium py-4 rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] shadow-sm">
              Complete Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
