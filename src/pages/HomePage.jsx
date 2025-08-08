import React from 'react'

import {Footer} from "../components/Footer/Footer.jsx";
import {DoubleBanner} from "../components/Banner/DoubleBanner.jsx";
import {ProductTypes} from "../components/ProductsList/ProductTypes.jsx";
import Header2 from "../components/Header/Header2.jsx";
import Footer2 from "../components/Footer/Footer2.jsx";
import ProductsPage from "./ProductsPage.jsx";

export const HomePage = () => {
    return (
        <div>
            <ProductsPage></ProductsPage>
        </div>
    )
}
