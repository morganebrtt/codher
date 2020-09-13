import React from 'react';
import {
    useLocation
  } from "react-router-dom";
import './Auth.css';
import ViewWrapper from '../ViewWrapper/ViewWrapper';
import HomeHeader from '../Headers/HomeHeader';
import Register from './Register';
import Login from './Login';


const Auth = () => {
    const location = useLocation();
    const isRegister = location.pathname.includes('register');
    return (
        <ViewWrapper>
        <HomeHeader isAuthHeader />
        {isRegister
            ? <Register />
            : <Login />
        }
        </ViewWrapper>
    )
};

export default Auth;