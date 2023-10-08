import React from 'react';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext';
import { Button } from 'react-bootstrap';

const Welcome = () => {
    const { user, logout } = useUserAuth();
    const nav = useNavigate();

    console.log(user);
    const handleLogOut = async () => {
        try {
            await logout();
            nav("/");
        } catch (err){
            console.log(err.message);
        }
    };
  return (
    <div className="text-center mt-5">
      <h1 className="display-4">Welcome!</h1>
      <p>Thank you for logging in.</p>
      <Button variant="primary" onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
}

export default Welcome;