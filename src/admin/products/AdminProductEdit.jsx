import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../../data/products";
import AdminProductForm from "./AdminProductForm";

export default function AdminProductEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = productsData.find((p) => p.id === parseInt(id));

    function handleEdit(updatedProduct) {
        const idx = productsData.findIndex((p) => p.id === product.id);
        productsData[idx] = { ...product, ...updatedProduct };
        navigate("/admin/products");
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <AdminProductForm initialData={product} onSubmit={handleEdit} />
        </div>
    );
}
