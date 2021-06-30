import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import { Loading } from "../components/Loading";

export default function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const registerstate = useSelector((state) => state.registerReducer);
  const { loading, success, error } = registerstate;

  const dispatch = useDispatch();

  function register() {
    if (password !== cpassword) {
      alert("passwords not matched");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <form>
        <div className="row justify-content-center mt-5">
          <div className="col-md-5 mt-5 text-left shadow-lg p-3 bg-white rounded ">
            <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
              Register
            </h2>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="name"
                className="form-control"
                required
              />
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
                autoComplete="password1"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="password"
                className="form-control"
                required
              />

              <input
                type="password"
                autoComplete="password2"
                value={cpassword}
                onChange={(e) => {
                  setCpassword(e.target.value);
                }}
                placeholder="confirm password"
                className="form-control"
                required
              />

              <button className="btn mt-3 mb-3" onClick={register}>
                Register
              </button>
              <br />
              <a href="/login" style={{ color: "black" }} className="m-2">
                Click here to Login
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
