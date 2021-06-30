import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import Pizzaslist from "./Pizzaslist";
import Userslist from "./Userslist";
import Addpizza from "./Addpizza";
import Orderslist from "./Orderslist";

export default function AdminScreen() {
  const userState = useSelector((state) => state.loginReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
          <ul className="adminFunction">
            <li>
              <Link to="/admin/userlist" style={{ color: "white" }}>
                Users List
              </Link>
            </li>
            <li>
              <Link to="/admin/pizzaslist" style={{ color: "white" }}>
                Pizza List
              </Link>
            </li>
            <li>
              <Link to="/admin/addpizza" style={{ color: "white" }}>
                Add New Pizza
              </Link>
            </li>
            <li>
              <Link to="/admin/orderlist" style={{ color: "white" }}>
                Orderes List
              </Link>
            </li>
          </ul>

          <Switch>
            <Route path="/admin" componenet={Userslist} exact />
            <Route path="/admin/userlist" componenet={Userslist} exact />
            <Route path="/admin/pizzaslist" componenet={Pizzaslist} exact />
            <Route path="/admin/addpizza" componenet={Addpizza} exact />
            <Route path="/admin/orderlist" componenet={Orderslist} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
}
