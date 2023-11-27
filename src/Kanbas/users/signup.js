import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/Account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="p-2">
        <h1>Signup</h1>
        {error && <div>{error}</div>}
        <input 
          placeholder="username"
          value={credentials.username} 
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
          className="form-control w-50"
        />
        <br />
        <input 
          placeholder="password"
          value={credentials.password} 
          onChange={(e) => setCredentials({...credentials, password: e.target.value})} 
          type="password"
          className="form-control w-50"
        />
        <br />
        <button onClick={signup} className="btn btn-primary"> Signup </button>
        
    </div>
  );
}
export default Signup;