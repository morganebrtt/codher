import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField } from '@material-ui/core';
import ContainedButton from "../Buttons/ContainedButton";
import OutlinedButton from "../Buttons/OutlinedButton";
import "./Register.css";

const Register = () => {
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
    event.preventDefault();
    //console.log(event.currentTarget);
    setIsLoading(true);
    fetch("http://localhost:3050/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({email, password}),
    })
    .then ((res) => {
      //console.log(res);
      if (res.status === 200 && res.ok === true) {
        setMessage("Inscription réussie!");
        setTimeout(() => {
          history.push('/auth/login')
        }, 1000);
      } else {
        setMessage("Une erreur s'est produite.");
      }
      setIsLoading(false);
    })
    .catch((error) => {
      setMessage("Une erreur s'est produite.");
      //console.log(error);
      setIsLoading(false);
    });
  };

  return (
    <div id="registerContent">
      {isLoading && <p>Chargement</p>}
      {message && <p>{message}</p>}
      <form id="registerForm" onSubmit={handleSubmit}>
        <TextField 
         required
         type="email"
         name="email" 
         value={email}
         onChange={handleChange}
         placeholder="Votre email"
         fullWidth={true}
         margin={'normal'}
         variant="filled"
         />
        <TextField
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Votre mot de passe"
          fullWidth={true}
          variant="filled"
        />
      </form>
      <div className="auth-button">
        <ContainedButton form="registerForm" colors={{ text: "#FFF", bg: "#D25857" }}>
          Inscription
        </ContainedButton>
        <OutlinedButton
          linkTo="/auth/login"
          colors={{ text: "#0C5D7B", bg: "none", border: "1px solid #0C5D7B" }}
        >
          Retour à la connexion
        </OutlinedButton>
      </div>
    </div>
  );
};

export default Register;
