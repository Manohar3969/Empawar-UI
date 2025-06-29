import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {DoubleBanner} from "./components/Banner/DoubleBanner";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {ProductTypes} from "./components/ProductsList/ProductTypes";
import {CartPage} from "./pages/CartPage";
import {Login} from "./pages/Login";
import {Orders} from "./pages/Orders";
import {ProductsSearch} from "./pages/ProductsSearch";
import {Register} from "./pages/Register";
import {HomePage} from "./pages/HomePage.jsx";
import {ProductDescription} from "./pages/ProductDescription.jsx";
import {CheckoutPage} from "./pages/CheckoutPage.jsx";
import {AddProduct} from "./pages/AddProduct.jsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/logout" element={<Login/>}/>
                    <Route path="/signup" element={<Register/>}/>
                    <Route path="/signin" element={<Login/>}/>
                    <Route path="/productDesc" element={<ProductDescription/>}/>
                    <Route path="/cartPage" element={<CartPage/>}/>
                    <Route path="/productSearch" element={<ProductsSearch/>}/>
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/addProduct" element={<AddProduct/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
