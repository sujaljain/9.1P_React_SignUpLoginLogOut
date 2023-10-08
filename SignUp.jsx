import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import "./SignUp.css"; // Import the CSS file
import { Alert } from "react-bootstrap";

function SignUp() {
  const nav = useNavigate();

  const [contact, setcontact] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: ""
  });

  const { email, password, confirmPassword, username } = contact;
  console.log(contact);

  const { signup } = useUserAuth();

  const [error, setError] = useState(""); // Defining the 'error' state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clearing any previous error messages
  
    // Checking if password and confirmPassword match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
  
    console.log("Signing up with data:", email, password, username);
  
    try {
      await signup(email, password, username);
      nav("/login");
    } catch (err) {
      setError(err.message); // Set the error message on failure
    }
  };  

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={(v) =>
              setcontact({ ...contact, username: v.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(v) =>
              setcontact({ ...contact, email: v.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(v) =>
              setcontact({ ...contact, password: v.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={(v) =>
              setcontact({ ...contact, confirmPassword: v.target.value })
            }
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <br/>
      <Link to="/login">
        <p>Already have an account? Login here</p>
      </Link>
    </div>
  );
}

export default SignUp;