import React from 'react';
import { Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import './CompleteRegistration.css';
import MultiStep from "./MultiStep";


const CompleteRegistration = () => {
  
  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);
      if(decoded.id) {
        return true;
      }
      return false;
    } else {
      return false;
    }
  }

    return(
        <>
          {isLoggedIn() ? <MultiStep /> : <Redirect to="/auth/login" />}
        </>
    );
};

export default CompleteRegistration; 