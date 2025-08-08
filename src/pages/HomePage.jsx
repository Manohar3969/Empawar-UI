import React from 'react'

import {Footer} from "../components/Footer/Footer.jsx";
import {DoubleBanner} from "../components/Banner/DoubleBanner.jsx";
import {ProductTypes} from "../components/ProductsList/ProductTypes.jsx";
import Header2 from "../components/Header/Header2.jsx";
import Footer2 from "../components/Footer/Footer2.jsx";

export const HomePage = () => {
    return (
        <div>
            <Header2></Header2>
            <DoubleBanner></DoubleBanner>
            <Footer2></Footer2>
        </div>
    )
}
