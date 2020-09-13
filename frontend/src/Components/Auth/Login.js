import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField } from '@material-ui/core';
import ContainedButton from "../Buttons/ContainedButton";
import OutlinedButton from "../Buttons/OutlinedButton";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    if (event.currentTarget.name === "email") {
        setEmail(event.currentTarget.value);
    }

    if (event.currentTarget.name === "password") {
        setPassword(event.currentTarget.value);
    }
  };

  const handleSubmit = (event) => {
    setMessage('')
    event.preventDefault();
    //console.log(event.currentTarget);
    setIsLoading(true);
    fetch("http://localhost:3050/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({email, password}),
    })
    .then ((res) => {
      
      if (res.status === 200 && res.ok === true) {
        res.json().then((res) => {
          if (res.auth===true){
            localStorage.setItem("token", res.token);
            history.push('/registration');
          } else {
            setMessage("Erreur dans la saisie de vos identifiants.");
          }
        })
        setIsLoading(false)
      } else {
        setMessage('Erreur dans la saisie de vos identifiants.');
        setIsLoading(false)
      }
    })
    .catch((error) => {
      setMessage('Une erreur s\'est produite.');
      //console.log(error);
      setIsLoading(false);
    });
  };

  return (
    <div id="loginContent">
        {isLoading && <p>Chargement</p>}
        {message && <p>{message}</p>}
      <form id="loginForm" onSubmit={handleSubmit}>
        <TextField  
         type="email"
         name="email" 
         value={email}
         onChange={handleChange}
         placeholder="Votre email"
         variant="filled"
         fullWidth={true}
         margin={'normal'}
         required
         />
        <TextField
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Votre mot de passe"
          variant="filled"
          fullWidth={true}
          required
         />
        </form>
        <div className="auth-button">
          <ContainedButton form="loginForm" colors={{ text: "#FFF", bg: "#D25857" }}>
            Connexion
          </ContainedButton>
          <OutlinedButton
            linkTo="/auth/register"
            colors={{ text: "#0C5D7B", bg: "none", border: "1px solid #0C5D7B" }}
          >
            Retour à l'inscription
          </OutlinedButton>
        </div>
    </div>
  );
};

export default Login;
