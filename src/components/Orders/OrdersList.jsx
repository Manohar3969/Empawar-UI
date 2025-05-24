import React from "react";

export const OrdersList = (props) => {
  return (
    <div>
      <div className="w-full flex float-left border-b-2 border-gray-300">
        <div className="w-1/12 flex justify-center">
          <input type="checkbox" name="" id="" />
        </div>

        <div className="w-1/12 flex">
          <img
            src={props.productImage}
            alt=""
            className="w-full h-full flex pt-2 pb-2"
          ></img>
        </div>

        <div className="w-7/12">
          <div className="w-full ">
            <span className="flex pr-4 pl-4 pt-2 font-bold">
              T Shirt with Simba Design
            </span>
          </div>
          <div className="w-full flex text-sm">
            <span className="flex pr-4 pl-4 pt-2">Color: White</span>
          </div>
          <div className="w-full flex text-sm">
            <span className="flex pr-4 pl-4 pt-2">Size: M</span>
          </div>
          <div className="w-full flex text-sm">
            <span className="flex pr-4 pl-4 pt-2">Quantity: 1</span>
          </div>
          <div className="w-full flex text-sm">
            <a
              href="#"
              className="flex pr-4 pl-4 pt-2 pb-4 text-blue-500 cursor-pointer"
            >
              View Order Details
            </a>
          </div>
        </div>

        <div className="w-2/12">
          <div className="w-full flex justify-left">
            <span className="flex pr-4 pl-4 pt-2 font-bold">Order Value:</span>
            <span className="flex pr-4 pl-4 pt-2">₹ 599</span>
          </div>
          <div className="w-full flex justify-left">
            <span className="flex pr-4 pl-4 pt-2 font-bold">Order Date:</span>
            <span className="flex pr-4 pl-4 pt-2">10/12/2024</span>
          </div>
          <div className="w-full flex justify-left">
            <span className="flex pr-4 pl-4 pt-2 font-bold">Order ID:</span>
            <span className="flex pr-4 pl-4 pt-2">10304050022</span>
          </div>
        </div>
      </div>
    </div>
  );
};
