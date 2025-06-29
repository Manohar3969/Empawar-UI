import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as fasStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar as farStar} from "@fortawesome/free-regular-svg-icons";
import React from "react";

export const ProductDetails = (props) => {
    const navigate = useNavigate();
    const cartItem = () => {
        try {
            navigate('/cartPage', {state: {price: props.productPrice}})
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
        <div className="w-full flex bg-gray-100">
            <div className="w-3/5 p-5">
                <img className="w-1/2 p-2 float-left cursor-zoom-in" src="src/assets/dress1.jpeg" alt=""/>
                <img className="w-1/2 p-2 float-left cursor-zoom-in" src="src/assets/dress1.jpeg" alt=""/>
                <img className="w-1/2 p-2 float-left cursor-zoom-in" src="src/assets/dress1.jpeg" alt=""/>
                <img className="w-1/2 p-2 float-left cursor-zoom-in" src="src/assets/dress1.jpeg" alt=""/>
            </div>
            <div className="w-2/5">
                <div className="p-5 font-bold text-lg"> {props.productName}</div>
                <div className="pl-5"> MRP: {props.productPrice}</div>
                <div className="pl-5 text-green-500"> inclusive of all taxes</div>
                <div className="p-5">
                    <button className="bg-blue-500 w-1/3 pl-5 pr-5 pb-3 pt-3 ml-5 text-white font-medium"
                            onClick={cartItem}> Add to Cart
                    </button>
                    <button className="bg-red-500 w-1/3 pl-5 pr-5 pb-3 pt-3 ml-5 text-white font-medium"> Wishlist
                    </button>
                </div>
                <div className="pl-5 pt-5"><p className="font-bold">Product Code:</p> 2000155789</div>
                <div className="pl-5 pt-10 font-bold"> Product Description</div>
                <div className="p-5">
                    <p>{props.productDesc}</p>
                </div>
                <div className="pl-5 pt-5">Reviews and Ratings</div>
                <div className="pl-5 pb-10"><span className="text-sm"><StarRating rating={4}/></span></div>
            </div>
        </div>
    )
}