import React from 'react'
import {Header} from "../components/Header/Header.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import {DoubleBanner} from "../components/Banner/DoubleBanner.jsx";
import {ProductTypes} from "../components/ProductsList/ProductTypes.jsx";

export const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <DoubleBanner></DoubleBanner>
      <ProductTypes></ProductTypes>
      <Footer></Footer>
    </div>
  )
}
