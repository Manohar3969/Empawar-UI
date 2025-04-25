import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CartItem } from "../components/Cart/CartItem";
import dress1 from "../assets/dress1.jpeg";
import dress2 from "../assets/dress2.jpeg";
import dress3 from "../assets/dress3.jpeg";
import dress4 from "../assets/dress4.jpeg";
import dress5 from "../assets/dress5.jpeg";

export const CartPage = () => {
  return (
    <div>
      <Header></Header>

      <div className="w-full flex float-left">
        <div className="w-2/3 overflow-auto p-10 bg-gray-100 ml-5 mr-3 rounded-lg">
          <div className="flex w-full pb-4 font-bold text-3xl">
            Shopping Cart
          </div>

          <div className="w-full overflow-auto">
            <div className="border-b-2 pb-4 border-gray-300">
              <input type="checkbox" />
              <span className="pl-5">Select all Items</span>
            </div>

            <CartItem productImage={dress1}></CartItem>
            <CartItem productImage={dress2}></CartItem>
            <CartItem productImage={dress3}></CartItem>
            <CartItem productImage={dress4}></CartItem>
            <CartItem productImage={dress5}></CartItem>
          </div>
        </div>

        <div className="w-1/3 overflow-auto p-2 bg-gray-100 h-full ml-2 mr-5 rounded-lg">
          <div className="flex w-full p-4 font-bold text-2xl justify-center">Sub Total</div>

          <div className="w-full overflow-auto">
            <div className="pb-2 border-gray-300">
              <span className="pl-5 font-medium text-md">Total Amount: ₹ 500</span>
            </div>
            <div className="pb-2 border-gray-300">
              <span className="pl-5 text-sm">Total Savings: ₹ 250</span>
            </div>
            <div className="w-full flex justify-center ">
              <button className="flex p-3 mb-4 mt-4 bg-blue-600 text-white rounded-lg cursor-pointer">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
