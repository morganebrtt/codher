import React, { useState } from "react";
import "./Register.css";
import ContainedButton from "../Buttons/ContainedButton";
import OutlinedButton from "../Buttons/OutlinedButton";

const Register = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    if (event.currentTarget.name === "email") {
        setEmail(event.currentTarget.value);
    }

    if (event.currentTarget.name === "password") {
        setPassword(event.currentTarget.value);
    }
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <div id="loginContent">
      <form onSubmit={handleSumbit}>
        {isLoading && <p>Loading</p>}
        <input 
        type="email"
         name="email" 
         value={email}
         onChange={handleChange}
         placeholder="Votre email" />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Votre mot de passe"
        />
        <ContainedButton colors={{ text: "#FFF", bg: "#D25857" }}>
          Inscription
        </ContainedButton>
        <OutlinedButton
          colors={{ text: "#0C5D7B", bg: "none", border: "1px solid #0C5D7B" }}
        >
          Connexion
        </OutlinedButton>
      </form>
    </div>
  );
};

export default Register;
