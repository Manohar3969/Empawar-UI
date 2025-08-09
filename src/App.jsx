import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {DoubleBanner} from "./components/Banner/DoubleBanner";
import Footer2 from "./components/Footer/Footer2.jsx";
import Header2 from "./components/Header/Header2.jsx"
import {ProductTypes} from "./components/ProductsList/ProductTypes";
import {CartPage} from "./pages/CartPage";
import {Login} from "./pages/Login";
import {Orders} from "./pages/Orders";
import {ProductsSearch} from "./pages/ProductsSearch";
import {Register} from "./pages/Register";

import {ProductDescription} from "./pages/ProductDescription.jsx";
import {CheckoutPage} from "./pages/CheckoutPage.jsx";
import {AddProduct} from "./pages/AddProduct.jsx";
import React from 'react';
import {SearchProvider} from './contexts/SearchContext';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import {CartProvider} from "./contexts/CartContext.jsx";
import CartPage2 from "./pages/CartPage2.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";

// Dummy home, about, contact pages for routing completeness
function AboutPage() {
    return <div className="max-w-7xl mx-auto p-6 text-2xl">About Us</div>;
}

function ContactPage() {
    return <div className="max-w-7xl mx-auto p-6 text-2xl">Contact</div>;
}

function App() {
    return (
        <>
            {/*<Router>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<HomePage/>}/>*/}
            {/*        <Route path="/home" element={<HomePage/>}/>*/}
            {/*        <Route path="/logout" element={<Login/>}/>*/}
            {/*        <Route path="/signup" element={<Register/>}/>*/}
            {/*        <Route path="/signin" element={<Login/>}/>*/}
            {/*        <Route path="/productDesc" element={<ProductDescription/>}/>*/}
            {/*        <Route path="/cartPage" element={<CartPage/>}/>*/}
            {/*        <Route path="/productSearch" element={<ProductsSearch/>}/>*/}
            {/*        <Route path="/checkout" element={<CheckoutPage/>}/>*/}
            {/*        <Route path="/orders" element={<Orders/>}/>*/}
            {/*        <Route path="/addProduct" element={<AddProduct/>}/>*/}
            {/*    </Routes>*/}
            {/*</Router>*/}

            <SearchProvider>
                <CartProvider>
                    <Router>
                        <Header2/>
                        <main>
                            <Routes>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/products" element={<ProductsPage/>}/>
                                <Route path="/products/:id" element={<ProductDetailsPage/>}/>
                                <Route path="/cart" element={<CartPage2/>}/>
                                <Route path="/about" element={<AboutUs />} />
                                <Route path="/contact" element={<ContactUs />} />
                                {/* Add more pages as needed */}
                            </Routes>
                        </main>
                        <Footer2/>
                    </Router>
                </CartProvider>
            </SearchProvider>

        </>
    );
}

export default App;
