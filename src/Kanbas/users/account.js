import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account()
        .catch((err) => {
            console.log(err)
        });
        setAccount(account);
    };
    const save = async () => {
        await client.updateUser(account);
    };
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };
    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/signin");
      };
    

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);

  return (
    <div className="w-50 p-2">
      <h1>Account</h1>
      {account && (
        <div>
            <div>Password</div>
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })} type="password" className="form-control mb-2"/>
              <div>First name</div>
          <input value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}className="form-control mb-2"/>
              <div>Last name</div>
          <input value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}className="form-control mb-2"/>
              <div>Birth date</div>
          <input value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}className="form-control mb-2"/>
              <div>Email</div>
          <input value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}className="form-control mb-2"/>
              <div>Role</div>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })} className="mb-2 btn btn-light dropdown-toggle">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <button onClick={save} className="btn btn-primary w-100 mb-2">
                Save
            </button>

            <Link to="/Kanbas/admin/users" className="btn btn-warning w-100 mb-2">
                Users
            </Link>

            <button onClick={signout} className="btn btn-danger w-100 mb-2">
                Signout
            </button>
        </div>
      )}
      {!account && <div>Please login</div>}
    </div>
  );
}
export default Account;