import React from "react";
import dress1 from "../../assets/dress1.jpeg";
import dress2 from "../../assets/dress2.jpeg";
import dress3 from "../../assets/dress3.jpeg";
import dress4 from "../../assets/dress4.jpeg";
import dress5 from "../../assets/dress5.jpeg";
import dress6 from "../../assets/dress6.jpeg";
import dress7 from "../../assets/dress7.jpeg";
import dress8 from "../../assets/dress8.jpeg";
import { ProductTypeDetails } from "./ProductTypeDetails";

export const ProductTypes = () => {
  return (
    <div className="w-full overflow-auto p-10">
      <div className="flex w-full p-8 font-bold text-3xl">T Shirts</div>

      <div className="w-full overflow-auto">
        <ProductTypeDetails dress={dress1}></ProductTypeDetails>
        <ProductTypeDetails dress={dress2}></ProductTypeDetails>
        <ProductTypeDetails dress={dress3}></ProductTypeDetails>
        <ProductTypeDetails dress={dress4}></ProductTypeDetails>
        <ProductTypeDetails dress={dress5}></ProductTypeDetails>
        <ProductTypeDetails dress={dress6}></ProductTypeDetails>
        <ProductTypeDetails dress={dress7}></ProductTypeDetails>
        <ProductTypeDetails dress={dress8}></ProductTypeDetails>
      </div>
    </div>
  );
};
