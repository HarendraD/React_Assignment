import React from "react";
import {Route, Routes} from "react-router-dom";
import RegistrationPage from "./pages/registration/registration";
import './index.css'
import NavBar from "./component/navBar/navBar";
import DashboardPage from "./pages/dashboard/dashBoard";
import ManageProductsPage from "./pages/manageProducts/manageProducts";
import PlaceOrderPage from "./pages/manageCart/manageCart";
import Login from "./pages/login/login";

function App() {
    return (
        <div className="container">
            <div id='navBarContainer' className="navBarContainer">
                <NavBar/>
            </div>
            <div id="contentContainer" className="content">
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route exact path="/userRegistration" element={<RegistrationPage/>}/>
                    <Route exact path="/dashboard" element={<DashboardPage/>}/>
                    <Route exact path="/manageProducts" element={<ManageProductsPage/>}/>
                    <Route exact path="/placeOrder" element={<PlaceOrderPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
