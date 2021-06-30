import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import Loading from "../components/Loading";
import Success from "../components/Success";

import Erros from "../components/Erros";

export default function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useSelector((state) => state.loginReducer);
  const { loading, success, error } = loginState;

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function Login() {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 bg-white rounded ">
          {loading && <Loading />}
          {error && <Erros error="invalid email or password" />}
          {success && <Success success="welcome" />}
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email"
              className="form-control"
              required
            />

            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              className="form-control"
              required
            />

            <button className="btn mt-3 mb-3" onClick={Login}>
              login
            </button>
            <br />

            <a href="/register" style={{ color: "black" }} className="m-2">
              Click here to Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
