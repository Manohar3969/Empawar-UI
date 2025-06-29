import React from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as fasStar} from '@fortawesome/free-solid-svg-icons'; // filled
import {faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';     // half
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons'; // empty

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

    const StarRating = ({rating}) => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FontAwesomeIcon key={i} icon={fasStar} color="#E67514"/>);
            } else if (rating >= i - 0.5) {
                stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} color="#E67514"/>);
            } else {
                stars.push(<FontAwesomeIcon key={i} icon={farStar} color="#E67514"/>);
            }
        }

        return <div>{stars}</div>;
    };


    return (
        <div className="w-1/5 float-left" onClick={productDesc}>
            <div className="m-1 rounded-lg">
                <div className="w-full">
                    <img src={props.dress} alt="" className="w-full h-90 flex p-4"></img>
                </div>
                <div className="w-full flex">
                    <span className="flex pr-4 pl-4 pt-1 text-md">{props.productName}</span>
                </div>
                <div className="w-full flex">
                    <span className="pl-4 pr-4 text-sm"><StarRating rating={4}/></span>
                </div>
                <div className="w-full flex">
                    <span className="flex pr-4 pl-4 pt-1 pb-2 text-lg font-bold">₹ {props.productPrice}</span>
                </div>
            </div>
        </div>
    );
};
