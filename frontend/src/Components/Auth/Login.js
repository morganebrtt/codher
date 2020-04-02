import React, { useState } from "react";
import "./Login.css";
import ContainedButton from "../Buttons/ContainedButton";
import OutlinedButton from "../Buttons/OutlinedButton";

const Login = () => {
  const [login, setLogin] = useState([]);

  const handleChange = event => {
    setLogin(event.currentTarget.value);
  };

  return (
    <div id="loginContent">
      <form>
        <input 
        type="email"
         name="email" 
         value={login.email}
         onChange={handleChange}
         placeholder="Votre email" />
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          placeholder="Votre mot de passe"
        />
        <ContainedButton colors={{ text: "#FFF", bg: "#D25857" }}>
          Connexion
        </ContainedButton>
        <OutlinedButton
          colors={{ text: "#0C5D7B", bg: "none", border: "1px solid #0C5D7B" }}
        >
          Inscription
        </OutlinedButton>
      </form>
    </div>
  );
};

export default Login;
