import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, deleteFromCart } from "../actions/cartAction";
export default function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  const dispatch = useDispatch();

  const subtotale = cartItems.reduce((x, y) => x + y.price, 0);

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h2 style={{ fontSize: "30px" }}>My cart</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="m-1">
                  <h1>
                    {item.name} {item.varient}
                  </h1>
                  <h1>
                    Price : {item.quantity} * {item.prices[0][item.varient]} ={" "}
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>quantity :</h1>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addtocart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  ></i>

                  <b>{item.quantity}</b>
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addtocart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  ></i>
                  <hr />
                </div>

                <div className="m-1 w-100">
                  <img src={item.image} style={{ height: "80px" }} />
                </div>

                <div className="m-1 w-100">
                  <i
                    className="fa fa-trash mt-5"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "45px" }}>SubTotale :{subtotale} TND</h2>
          <button className="btn"> CHECK OUT</button>
        </div>
      </div>
    </div>
  );
}
