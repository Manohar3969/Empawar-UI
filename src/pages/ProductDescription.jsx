import React from 'react'
import {useLocation} from 'react-router-dom';
import {Header} from "../components/Header/Header.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import {ProductDetails} from "../components/ProductDescription/ProductDetails.jsx";

export const ProductDescription = () => {

    const location = useLocation(); // 1️⃣ Access the current location object
    const {price} = location.state || {};
    const {name} = location.state || {};
    const {desc} = location.state || {};
    const {productId} = location.state || {};


    return (
        <div>
            <Header></Header>
            <ProductDetails productPrice={price} productName={name} productDesc={desc}
                            productId={productId}></ProductDetails>
            <Footer></Footer>
        </div>
    )
}
