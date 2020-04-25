import React from 'react';
import './Home.css';
import ViewWrapper from '../ViewWrapper/ViewWrapper';
import HomeHeader from '../Headers/HomeHeader';
import HomeContent from '../Home/HomeContent';

const Home = () => {
    return(
        <ViewWrapper>
            <HomeHeader />
            <HomeContent />       
        </ViewWrapper>
    )
};

export default Home;
