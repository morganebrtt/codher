import React from 'react';
import './Auth.css';
import ViewWrapper from '../ViewWrapper/ViewWrapper';
import HomeHeader from '../Headers/HomeHeader';
import Login from './Login';


const Auth = () => {
    return (
        <ViewWrapper>
        <HomeHeader isAuthHeader />
        <Login />
        </ViewWrapper>
    )
};

export default Auth;