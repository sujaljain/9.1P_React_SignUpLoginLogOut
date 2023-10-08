import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css"; // Import the CSS file
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert } from "react-bootstrap";

const Login = ({ onSignUpClick }) => {
  const [contact, setContact] = useState({
    email: "",
    password: "",
  });

  const { email, password } = contact;
  console.log(contact);
  const nav = useNavigate();

  const { login } = useUserAuth();

  const [error, setError] = useState(""); // Defining the 'error' state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clearing any previous error messages

    try {
      await login(email, password);
      nav("/welcome");

      // After successful authentication, you can redirect or handle the user accordingly
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="search-button">
          Login
        </button>
        <br />
      </form>
      <br />
      <p>
        <Link to="/SignUp" onClick={onSignUpClick}>
          No Account! Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
