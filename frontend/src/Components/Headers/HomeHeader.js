import React from 'react';
import './HomeHeader.css';
import Women from '../../Assets/img/women.png';

const HomeHeader = () => {
    return (
        <header id="homeHeader">
            <h1>codher</h1>
            <div id="homeImgContainer">
                <img id="homeImg" src={Women} alt="women"></img>
            </div>
        </header>
    )
};

export default HomeHeader;