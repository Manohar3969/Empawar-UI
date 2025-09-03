import { Routes, Route } from "react-router-dom";
import AdminProductList from "../admin/products/AdminProductList";
import AdminProductAdd from "../admin/products/AdminProductAdd";
import AdminProductEdit from "../admin/products/AdminProductEdit";

export default function AdminProductsPage() {
    return (
        <Routes>
            <Route path="/" element={<AdminProductList />} />
            <Route path="/add" element={<AdminProductAdd />} />
            <Route path="/edit/:id" element={<AdminProductEdit />} />
        </Routes>
    );
}
