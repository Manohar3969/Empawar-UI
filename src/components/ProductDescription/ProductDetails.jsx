import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as fasStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar as farStar} from "@fortawesome/free-regular-svg-icons";
import React, {useState} from "react";
import axios from "axios";

export const ProductDetails = (props) => {
    const navigate = useNavigate();

    const [cartItemID, setCartItemID] = useState("" + props.productId);
    const [cartItemName, setCartItemName] = useState("" + props.productName);
    const [cartID, setCartID] = useState("Cart1");
    const [cartItemQuantity, setCartItemQuantity] = useState("1");
    const [cartItemPrice, setCartItemPrice] = useState("" + props.productPrice);
    const [cartItemDiscount, setCartItemDiscount] = useState("10");
    const [totalItemsPrice, setTotalItemsPrice] = useState("" + props.productPrice);

    const cartItem = async () => {
        try {
            const res = await axios.post(import.meta.env.VITE_API_BASE_URL + '/cartitems', {
                cartItemID,
                cartItemName,
                cartID,
                cartItemQuantity,
                cartItemPrice,
                cartItemDiscount,
                totalItemsPrice
            });
            navigate('/cartPage', {state: {price: props.productPrice}})
        } catch (err) {
            alert('Failed! : ' + err.response?.data);
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
                <div className="pl-5 pt-5"><p className="font-bold">Product Code:</p> {props.productId}</div>
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