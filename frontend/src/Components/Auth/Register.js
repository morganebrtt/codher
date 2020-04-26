import React, { useState } from "react";
import "./Register.css";
import ContainedButton from "../Buttons/ContainedButton";
import OutlinedButton from "../Buttons/OutlinedButton";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

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
    fetch("http://localhost:3050/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({email, password}),
    })
    .then ((res) => {
      console.log(res);
      if (res.status === 200 && res.ok === true) {
        setMessage("Inscription réussie!");
      } else {
        setMessage("une erreur s'est produite");
      }
      setIsLoading(false);
    })
    .catch((error) => {
      setMessage("une erreur s'est produite");
      console.log(error);
      setIsLoading(false);
    });
  };

  return (
    <div id="loginContent">
      <form onSubmit={handleSumbit}>
        {isLoading && <p>Loading</p>}
        {message && <p>{message}</p>}
        <input 
         required
         type="email"
         name="email" 
         value={email}
         onChange={handleChange}
         placeholder="Votre email" />
        <input
          required
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
