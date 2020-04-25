import React from 'react';
import './Auth.css';
import ViewWrapper from '../ViewWrapper/ViewWrapper';
import HomeHeader from '../Headers/HomeHeader';
import Register from './Register';


const Auth = () => {
    return (
        <ViewWrapper>
        <HomeHeader isAuthHeader />
        <Register />
        </ViewWrapper>
    )
};

export default Auth;