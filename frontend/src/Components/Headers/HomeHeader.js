import React from 'react';
import {
    useLocation
  } from "react-router-dom";
import './HomeHeader.css';
import Women from '../../Assets/img/women.png';

const HomeHeader = (props) => {
    const location = useLocation();
    const isRegister = location.pathname.includes('register');

    return props.isAuthHeader 
    ? (
        <header className="homeHeader authHeader">
            <h1 className="authTitle">{isRegister ? 'inscription' : 'connexion'}</h1>
            <div className="homeImgContainer">
                <img className="homeImg authImg" src={Women} alt="women" />
            </div>
        </header>)
    : (
        <header className="homeHeader">
            <h1>CODHER</h1>
            <div className="homeImgContainer">
                <img className="homeImg" src={Women} alt="women" />
            </div>
        </header>
    )

};

export default HomeHeader;