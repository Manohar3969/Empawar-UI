import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingBag, faSignOut} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const [productSearch, setProductSearch] = useState("All");
    const navigate = useNavigate();
    const searchProduct = () => {
        try {
            navigate('/productSearch', {state: {productSearch: productSearch}})
        } catch (err) {
            alert('Navigation Failed! : ' + err.message);
        }
    }

    const navigateHomePage = () => {
        try {
            navigate('/home')
        } catch (err) {
            alert('Navigation Failed! : ' + err.message);
        }
    }

    const cartItem = () => {
        try {
            navigate('/cartPage')
        } catch (err) {
            alert('Navigation Failed! : ' + err.message);
        }
    }

    const addProduct = () => {
        try {
            navigate('/addProduct')
        } catch (err) {
            alert('Navigation Failed! : ' + err.message);
        }
    }

    return (
        <div className="w-full flex">
            <div className="logo flex w-1/4 justify-center align-middle font-bold" onClick={navigateHomePage}>
                <span className='text-3xl m-8 p-2 cursor-pointer'>Empawar</span>
            </div>
            <div className="w-1/4 flex justify-center align-middle items-center font-normal">
                <ul className="">
                    <li className="float-left pl-6 pr-6 cursor-pointer" onClick={navigateHomePage}>Home</li>
                    <li className="float-left pl-6 pr-6 cursor-pointer" onClick={searchProduct}>Shop</li>
                    {/*<li className="float-left pl-6 pr-6 cursor-pointer">About Us</li>*/}
                    <li className="float-left pl-6 pr-6 cursor-pointer">Contact Us</li>
                    <li className="float-left pl-6 pr-6 cursor-pointer" onClick={addProduct}>Add Products</li>
                </ul>
            </div>
            <div className="search w-1/4 flex justify-center align-middle items-center font-normal">
                <div className="flex w-full m-8 bg-gray-100 rounded-l">
                    <input type="search" className='w-full pl-5 pr-5 pt-2 pb-2 outline-none'
                           placeholder="Search your Product"
                           onChange={(e) => setProductSearch(e.target.value)}/>
                    <FontAwesomeIcon className='p-4' icon={faSearch} onClick={searchProduct}></FontAwesomeIcon>
                </div>
            </div>
            <div className="w-1/4 flex justify-center items-center font-normal">
                <ul>
                    <li className="float-left pl-5 pr-5">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </li>
                    <li className="float-left pl-5 pr-5">
                        <FontAwesomeIcon icon={faShoppingBag} onClick={cartItem}></FontAwesomeIcon>
                    </li>
                    <li className="float-left pl-5 pr-5">
                        <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
                    </li>
                </ul>
            </div>
        </div>
    )
}
