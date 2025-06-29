import React, {useState} from "react";
import {Header} from "../components/Header/Header.jsx";
import {Footer} from "../components/Footer/Footer.jsx";

export const AddProduct = () => {

    const [images, setImages] = useState([]);

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
                        />
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <textarea
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            placeholder="Enter Product Description"
                        />
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Enter Product Price"
                        />
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Enter Product Stock"
                        />
                    </div>
                    <div className="flex pr-20 pl-20 mt-4 items-center">
                        <input
                            className="flex p-4 w-full text-sm outline-none bg-gray-200 rounded-sm"
                            type="text"
                            placeholder="Enter Product Category"
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
                            onChange={handleImageChange}
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
                        <button className="flex pt-3 pb-3 pl-10 pr-10 mb-4 mt-4 bg-blue-600 text-white cursor-pointer">
                            Add Product
                        </button>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}