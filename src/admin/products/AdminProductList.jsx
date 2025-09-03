import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productsData from "../../data/products"; // Use your product mock or context
import DeleteConfirmationModal from "./DeleteConfirmationModal";

export default function AdminProductList() {
    const [products, setProducts] = useState(productsData);
    const [deleteId, setDeleteId] = useState(null);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
        setDeleteId(null);
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <Link
                to="/admin/products/add"
                className="bg-[#6CA0A3] text-white px-4 py-2 rounded mb-6 inline-block"
            >
                + Add Product
            </Link>
            <table className="w-full border mt-4">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map((prod) => (
                    <tr key={prod.id}>
                        <td>
                            <img src={prod.image} alt={prod.name} className="h-16 w-16 object-cover"/>
                        </td>
                        <td>{prod.name}</td>
                        <td>{prod.category}</td>
                        <td>₹{prod.price}</td>
                        <td>{prod.inStock ? "Yes" : "No"}</td>
                        <td>
                            <button
                                className="text-[#6CA0A3] mr-2"
                                onClick={() => navigate(`/admin/products/edit/${prod.id}`)}
                            >
                                Edit
                            </button>
                            <button
                                className="text-red-500"
                                onClick={() => setDeleteId(prod.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {deleteId && (
                <DeleteConfirmationModal
                    onConfirm={() => handleDelete(deleteId)}
                    onCancel={() => setDeleteId(null)}
                />
            )}
        </div>
    );
}
