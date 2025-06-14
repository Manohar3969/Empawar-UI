import React from "react";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import {ProductTypes} from "../components/ProductsList/ProductTypes";
import {useLocation} from "react-router-dom";

export const ProductsSearch = () => {

    const location = useLocation(); // 1️⃣ Access the current location object
    const {productSearch} = location.state || {};

    return (
        <div>
            <Header></Header>
            <ProductTypes productSearched={productSearch}></ProductTypes>
            <Footer></Footer>
        </div>
    );
};
