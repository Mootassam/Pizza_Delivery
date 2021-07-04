import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userAction";

export default function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Pizza
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex ml-auto">
              {currentUser ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page">
                      {currentUser.name}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/admin">
                      <li>Dashboard</li>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href=""
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      <li>Logout</li>
                    </a>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/login"
                  >
                    Login
                  </a>
                </li>
              )}

              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart {cartState.cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
