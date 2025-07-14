import dress1 from "../../assets/dress1.jpeg";
import dress2 from "../../assets/dress2.jpeg";
import dress3 from "../../assets/dress3.jpeg";
import dress4 from "../../assets/dress4.jpeg";
import dress5 from "../../assets/dress5.jpeg";
import dress6 from "../../assets/dress6.jpeg";
import dress7 from "../../assets/dress7.jpeg";
import dress8 from "../../assets/dress8.jpeg";
import {ProductTypeDetails} from "./ProductTypeDetails";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const ProductTypes = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://empawar.onrender.com/api/products') // Replace with your API endpoint
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="w-full overflow-auto pl-40 pr-40">
            <div className="flex w-full p-8 font-bold text-3xl"> {props.productSearched}</div>
            <div className="w-full overflow-auto">
                {
                    users.map(user => (
                        <ProductTypeDetails dress={dress2} productName={user.productName}
                                            productPrice={user.productPrice}
                                            productDescription={user.productDescription}
                                            productId={user.productId}></ProductTypeDetails>
                    ))
                }
            </div>
        </div>
    );
}
