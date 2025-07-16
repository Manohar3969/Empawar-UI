import React from "react";

export const CartItem = (props) => {
  return (
    <div>
      <div className="w-full flex float-left border-b-2 border-gray-300">
        <div className="w-1/12 flex justify-center">
          <input type="checkbox" name="" id="" />
        </div>

        <div className="w-2/12 flex">
          <img
            src={props.productImage}
            alt=""
            className="w-full h-full flex pt-2 pb-2"
          ></img>
        </div>

        <div className="w-6/12">
          <div className="w-full ">
            <span className="flex pr-4 pl-4 pt-2 font-bold">
              {props.productName}
            </span>
          </div>
          <div className="w-full flex text-sm">
            <span className="flex pr-4 pl-4 pt-2">Color: White</span>
          </div>
          <div className="w-full flex text-sm">
            <span className="flex pr-4 pl-4 pt-2">Size: M</span>
          </div>
          <div className="w-full flex text-sm pl-2">
            <select className="flex pr-6 pl-6 pt-2 pb-2 mt-2 bg-gray-200 rounded-sm outline-none cursor-pointer">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
          </div>
          <div className="w-full flex text-sm">
            <a href="#" className="flex pr-4 pl-4 pt-2 pb-4 text-red-500 cursor-pointer">Delete</a>
          </div>
        </div>

        <div className="w-2/12">
          <div className="w-full flex justify-end">
            <span className="flex pr-4 pl-4 pt-2 font-bold">₹ 599</span>
          </div>
          <div className="w-full flex justify-end">
            <span className="flex pr-4 pl-4 pt-2 line-through text-gray-500">₹ 899</span>
          </div>
        </div>
      </div>
    </div>
  );
};
