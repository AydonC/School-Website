import React from "react";
import "../../public/css/HomePage.css";
import logo from "../../public/logo.png";
import AboutPage from "./AboutPage";


const HomePage = () => {
    return (
        <div>
        <div className="home-container">
            <div className="overlay"></div>
        
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </div>
        <AboutPage/>
        </div>
    );
};

export default HomePage;
