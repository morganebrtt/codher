import React from 'react';
import Women from '../../Assets/img/women.png'
import './Home.css'

const Home = () => {
    return(
        <div id="homeSection">
            <h1>codher</h1>
            <div id="homeImgContainer">
                <img id="homeImg" src={Women} alt="women"></img>
            </div>
            <h2>welcome</h2>
            <div id="homeText">
                <p>Ce petit animal tout mignon est un wombat. 
                    Pendant les terribles incendies en Australie, 
                    il a accueilli de nombreuses autres espèces</p>
            </div>
        </div>
    )
};

export default Home;
