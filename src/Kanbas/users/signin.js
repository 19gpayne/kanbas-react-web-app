import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const signin = async () => {
    await client.signin(credentials)
    .then((response) => {
      navigate("/Kanbas/Account");
    })
    .catch((err) => {
      setError("Invalid credentials")
    })
  };
  return (
    <div className="p-2">
      <h1>Signin</h1>
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
      <button onClick={signin} className="btn btn-primary"> Signin </button>
    </div>
  );
}
export default Signin;