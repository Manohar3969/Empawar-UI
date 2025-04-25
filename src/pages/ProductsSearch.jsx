import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ProductTypes } from "../components/ProductsList/ProductTypes";

export const ProductsSearch = () => {
  return (
    <div>
      <Header></Header>
      <ProductTypes></ProductTypes>
      <Footer></Footer>
    </div>
  );
};
