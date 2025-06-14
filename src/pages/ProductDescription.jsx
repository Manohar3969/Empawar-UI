import React from 'react'
import {useLocation} from 'react-router-dom';
import {Header} from "../components/Header/Header.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import {ProductDetails} from "../components/ProductDescription/ProductDetails.jsx";

export const ProductDescription = () => {

    const location = useLocation(); // 1️⃣ Access the current location object
    const {price} = location.state || {};


    return (
        <div>
            <Header></Header>
            <ProductDetails productPrice={price}></ProductDetails>
            <Footer></Footer>
        </div>
    )
}
