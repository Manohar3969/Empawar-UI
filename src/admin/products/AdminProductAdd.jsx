import React from "react";
import { useNavigate } from "react-router-dom";
import AdminProductForm from "./AdminProductForm";
import productsData from "../../data/products";

export default function AdminProductAdd() {
    const navigate = useNavigate();

    function handleAdd(newProduct) {
        productsData.push({
            ...newProduct,
            id: productsData.length + 1,
        });
        navigate("/admin/products");
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <AdminProductForm onSubmit={handleAdd} />
        </div>
    );
}
