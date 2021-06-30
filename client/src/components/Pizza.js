import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../actions/cartAction";
export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState("1");
  const [varients, setvarients] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  function addTocart() {
    dispatch(addtocart(pizza, quantity, varients));
  }
  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          alt="image"
          src={pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varients}
            onChange={(e) => {
              setvarients(e.target.value);
            }}
          >
            {pizza.varients.map((map) => {
              return <option value={map}>{map}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>

          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price : {pizza.prices[0][varients] * quantity} TND
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addTocart}>
            Add To Cart
          </button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={pizza.image}
            className="img-fluid"
            style={{ height: "400px" }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
