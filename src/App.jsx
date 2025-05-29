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
                </Routes>
            </Router>
        </>
    );
}

export default App;
