import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUser, DeleteUser } from "../actions/userAction";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Erros from "../components/Erros";

export default function Userslist() {
  const dispatch = useDispatch();
  const userALlState = useSelector((state) => state.UserListReducer);
  const { loading, payload, error } = userALlState;

  useEffect(() => {
    dispatch(allUser());
  }, []);
  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {loading && <Loading />}
      {error && <Erros error="Something went wrong" />}
      <table className="table table-striped">
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>password</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {payload &&
            payload.map((map) => {
              return (
                <tr>
                  <td>{map.name}</td>
                  <td>{map.email}</td>
                  <td>{map.password}</td>
                  <td>
                    <i
                      className="fa fa-trash"
                      onClick={() => {
                        dispatch(DeleteUser(map._id));
                      }}
                    ></i>
                    <Link to={`/admin/edituser/${map._id}`}>
                      <i className="fa fa-edit m-1"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
