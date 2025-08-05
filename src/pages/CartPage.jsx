import React, {useEffect, useState} from "react";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import {CartItem} from "../components/Cart/CartItem";
import dress1 from "../assets/dress1.jpeg";
import dress2 from "../assets/dress2.jpeg";
import dress3 from "../assets/dress3.jpeg";
import dress4 from "../assets/dress4.jpeg";
import dress5 from "../assets/dress5.jpeg";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {ProductTypeDetails} from "../components/ProductsList/ProductTypeDetails.jsx";

export const CartPage = (props) => {

    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [selectedItemIds, setSelectedItemIds] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_BASE_URL + `/cartitems`) // Replace with your API endpoint
            .then(response => {
                setCartItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, [props.productPrice]);

    const checkout = () => {
        try {
            navigate('/checkout')
        } catch (err) {
            alert('Navigation Failed! : ' + err.message);
        }
    }

    // Handle individual checkbox toggle
    const handleItemSelect = (id) => {
        setSelectedItemIds(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    // Handle "Select All" checkbox
    const handleSelectAll = () => {
        if (selectedItemIds.length === cartItems.length) {
            // All are selected, so deselect all
            setSelectedItemIds([]);
        } else {
            // Select all
            setSelectedItemIds(cartItems.map(item => item.cartItemID));
        }
    };

    const total = cartItems
        .filter(item => selectedItemIds.includes(item.cartItemID))
        .reduce((sum, item) => sum + Number(item.cartItemTotalPrice), 0);

    // Determine checkbox "Select All" state
    const isAllSelected = selectedItemIds.length === cartItems.length;
    const isIndeterminate = selectedItemIds.length > 0 && !isAllSelected;

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
                            <input type="checkbox"
                                   className=""
                                   onChange={handleSelectAll}
                                   checked={isAllSelected}
                                   ref={input => {
                                       if (input) {
                                           input.indeterminate = isIndeterminate;
                                       }
                                   }}/>
                            <span className="pl-5">Select all Items</span>
                        </div>

                        {
                            cartItems.map(cartItem => (
                                <CartItem productImage={dress1} productName={cartItem.cartItemName}
                                          cartItemID={cartItem.cartItemID}
                                          cartItemPrice={cartItem.cartItemTotalPrice}
                                          checked={selectedItemIds.includes(cartItem.cartItemID)}
                                          onChange={handleItemSelect}
                                ></CartItem>
                            ))
                        }
                    </div>
                </div>

                <div className="w-1/3 overflow-auto p-2 bg-gray-100 h-full ml-2 mr-5 rounded-lg">
                    <div className="flex w-full p-4 font-bold text-2xl justify-center">Sub Total</div>

                    <div className="w-full overflow-auto">
                        <div className="pb-2 border-gray-300">
                            <span className="pl-5 font-medium text-md">Total Amount: ₹ {total}</span>
                        </div>
                        <div className="pb-2 border-gray-300">
                            <span className="pl-5 text-sm">Total Savings: ₹ 250</span>
                        </div>
                        <div className="w-full flex justify-center ">
                            <button className="flex p-3 mb-4 mt-4 bg-blue-600 text-white rounded-lg cursor-pointer"
                                    onClick={checkout}>
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
