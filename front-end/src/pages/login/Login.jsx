import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [mot_de_passe, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, mot_de_passe }, dispatch);
  };

  return (
    <div className="login">
       
      <form className="loginForm">
      <span className="loginlogo">INFO STOCK</span>
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="mot_de_passe"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Connexion
        </button>
      </form>
    </div>
  );
}