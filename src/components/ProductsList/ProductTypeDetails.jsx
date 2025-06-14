import React from "react";
import {useNavigate} from "react-router-dom";

export const ProductTypeDetails = (props) => {
    const navigate = useNavigate();
    const productDesc = () => {
        try {
            navigate('/productDesc', {
                state: {
                    price: props.productPrice,
                    name: props.productName,
                    desc: props.productDescription
                }
            })
        } catch (err) {
            alert('Navigation Failed! : ' + err.message);
        }
    }

    return (
        <div className="w-1/6 float-left" onClick={productDesc}>
            <div className="m-1 bg-gray-100 rounded-lg">
                <div className="w-full">
                    <img src={props.dress} alt="" className="w-full h-60 flex p-4"></img>
                </div>
                <div className="w-full flex justify-center">
                    <span className="flex pr-4 pl-4 pt-2">{props.productName}</span>
                </div>
                <div className="w-full flex justify-center">
                    <span className="flex pr-4 pl-4 pt-2 pb-4">₹ {props.productPrice}</span>
                </div>
                <div className="w-full flex justify-center ">
                    <button className="flex p-3 mb-4 bg-blue-600 text-white rounded-lg">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
