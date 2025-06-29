import React from 'react'
import {Header} from "../components/Header/Header.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import {CartItem} from "../components/Cart/CartItem.jsx";
import dress1 from "../assets/dress1.jpeg";
import dress2 from "../assets/dress2.jpeg";
import dress3 from "../assets/dress3.jpeg";
import dress4 from "../assets/dress4.jpeg";
import dress5 from "../assets/dress5.jpeg";
import {useNavigate} from "react-router-dom";

export const CheckoutPage = () => {
    const navigate = useNavigate();
    const orders = () => {
        try {
            navigate('/orders')
        } catch (err) {
            alert('Navigation Failed! : ' + err.message);
        }
    }

    return (
        <div>
            <Header></Header>
            <div className="w-full flex float-left">
                <div className="w-2/3 overflow-auto p-10 bg-gray-100 ml-5 mr-3 rounded-lg">
                    <div className="flex w-full pb-4 font-bold text-3xl">
                        Checkout Page
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Enter Email ID"
                        />
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Enter Mobile Number"
                        />
                    </div>

                    <div className="flex w-full font-bold text-xl mt-5">
                        Payment Method
                    </div>

                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Address Line 1"
                        />
                    </div>

                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Address Line 2"
                        />
                    </div>

                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="City"
                        />
                    </div>

                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="State"
                        />
                    </div>

                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Zip Code"
                        />
                    </div>

                    <div className="flex w-full font-bold text-xl mt-5">
                        Payment Method
                    </div>

                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 text-sm outline-none bg-gray-200 rounded-sm"
                            type="radio"
                        />
                        <span className="p-4">Cash on Delivery</span>
                    </div>

                    <div className="flex pr-20 pl-20 items-center">
                        <input
                            className="flex p-4 text-sm outline-none bg-gray-200 rounded-sm"
                            type="radio"
                        />
                        <span className="p-4">UPI</span>
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
                            <button className="flex p-3 mb-4 mt-4 bg-blue-600 text-white cursor-pointer"
                                    onClick={orders}>
                                Place Your Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
