import React from "react";

export const Register = () => {
  return (
    <div className="bg-gray-100 rounded-md w-1/3 h-4/6 top-1/6 left-1/3 absolute justify-center">
      <div className="flex pt-16 pb-5 logo font-bold text-4xl justify-center align-middle items-center">
        <span>Empawar</span>
      </div>
      <div className="flex p-2 font-bold text-lg justify-center align-middle items-center">
        <span>Sign Up</span>
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
          placeholder="Enter New Password"
        />
      </div>
      <div className="flex pr-20 pl-20 mt-4 items-center">
        <input
          className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
          type="text"
          placeholder="Confirm New Password"
        />
      </div>

      <div className="flex text-md items-center justify-center">
        <button
          className="bg-amber-600 pl-8 pr-8 pt-2 pb-2 mt-8 rounded-md text-white cursor-pointer"
          type="submit"
        >
          Sign Up
        </button>
      </div>
      <div className="flex pt-4 text-sm justify-center align-middle items-center">
        <span>
          Already Have an Account?{" "}
          <a className="text-blue-600" href="#">
            Sign In
          </a>
        </span>
      </div>
    </div>
  );
};
