import React, {useState} from "react";
import {Header} from "../components/Header/Header.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import axios from "axios";

export const AddProduct = () => {

    const [images, setImages] = useState([]);
    const [productId, setProductId] = useState("PDT002");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productStock, setProductStock] = useState("");
    const [productImage, setProductImage] = useState([]);

    const addProduct = async () => {
        try {
            const formData = new FormData();
            formData.append("file", productImage[0])

            const productData = {
                productId,
                productName,
                productDescription,
                productPrice,
                productCategory,
                productStock
            }

            formData.append("product", new Blob([JSON.stringify(productData)], {type: "application/json"}));


            const res = await axios.post('https://empawar.onrender.com/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Product Added Successfully!')

        } catch (err) {
            alert('Add Product failed ' + err);
        }
    }


    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imagePreviews = files.map(file => ({
            file,
            url: URL.createObjectURL(file)
        }));
        setImages(imagePreviews);
    };


    return (
        <div>
            <Header></Header>
            <div className="w-full flex float-left">
                <div className="w-full overflow-auto p-10 bg-gray-100 ml-5 mr-3 rounded-lg">
                    <div className="flex w-full pb-4 font-bold text-3xl">
                        Add New Product
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Enter Product Name"
                            onChange={e => setProductName(e.target.value)}
                        />
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <textarea
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            placeholder="Enter Product Description"
                            onChange={e => setProductDescription(e.target.value)}
                        />
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Enter Product Price"
                            onChange={e => setProductPrice(e.target.value)}
                        />
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Enter Product Stock"
                            onChange={e => setProductStock(e.target.value)}
                        />
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Enter Product Category"
                            onChange={e => setProductCategory(e.target.value)}
                        />
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Enter Product Discount"
                        />
                    </div>

                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={e => setProductImage(e.target.files)}
                        />
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <div style={{marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                            {images.map((img, index) => (
                                <div key={index}>
                                    <img
                                        src={img.url}
                                        alt={`Selected ${index}`}
                                        style={{width: '120px', height: 'auto', borderRadius: '8px'}}
                                    />
                                    <p style={{fontSize: '12px', textAlign: 'center'}}>{img.file.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center justify-center ">
                        <button className="flex pt-3 pb-3 pl-10 pr-10 mb-4 mt-4 bg-blue-600 text-white cursor-pointer"
                                onClick={addProduct}>
                            Add Product
                        </button>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}