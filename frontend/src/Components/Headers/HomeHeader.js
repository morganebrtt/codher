import React from 'react';
import './HomeHeader.css';
import Women from '../../Assets/img/women.png';

const HomeHeader = (props) => {
    console.log(props)
    return props.isAuthHeader 
    ? (
        <header className="homeHeader authHeader">
            <h1 className="authTitle">AUTH</h1>
            <div className="homeImgContainer">
                <img className="homeImg authImg" src={Women} alt="women" />
            </div>
        </header>)
    : (
        <header className="homeHeader">
            <h1>LANDING</h1>
            <div className="homeImgContainer">
                <img className="homeImg" src={Women} alt="women" />
            </div>
        </header>
    )

};

export default HomeHeader;