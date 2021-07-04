import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditUsersa, UserById } from "../actions/userAction";
export default function EditUser({ match }) {
  const dispatch = useDispatch();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const userState = useSelector((data) => data.UserFindById);
  const { loading, payload, error } = userState;
  useEffect(() => {
    if (payload) {
      setname(payload.name);
      setemail(payload.email);
      setpassword(payload.password);
    } else {
      dispatch(UserById(match.params.userid));
    }
  }, [payload, dispatch]);

  function EditUsers(e) {
    e.preventDefault();
    const user = {
      _id: match.params.userid,
      name,
      email,
      password,
    };
    dispatch(EditUsersa(user));
  }
  return (
    <div>
      <h2 style={{ fontSize: "25px" }}>Edit User</h2>
      <form onSubmit={EditUsers}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="name"
          className="form-control"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="email"
          className="form-control"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="password"
          className="form-control"
        />

        <button className="btn mt-3">Edit User</button>
      </form>
    </div>
  );
}
