import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Erros from "../components/Erros";
import Success from "../components/Success";

export default function Addpizza() {
  const [name, setnName] = useState();
  const [smallPrice, setsmallPrice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [largePrice, setlargePrice] = useState();
  const [image, setimage] = useState();
  const [description, setdescription] = useState();

  const [category, setcategory] = useState();
  const dispatch = useDispatch();
  const addpizzastate = useSelector((state) => state.addPizzaReducer);

  const { loading, error, success } = addpizzastate;
  function formHandler(e) {
    e.preventDefault();
    const pizza = {
      name,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
      image,
      description,
      category,
    };
    dispatch(addPizza(pizza));
  }
  return (
    <div>
      <h1>Addpizza</h1>
      {loading && <Loading />}
      {error && <Erros error="something went wrong" />}

      {success && <Success success="Pizza added successfull" />}

      <form onSubmit={formHandler}>
        <input
          type="text"
          value={name}
          placeholder="name"
          className="form-control"
          onChange={(e) => {
            setnName(e.target.value);
          }}
        />
        <input
          type="text"
          value={smallPrice}
          placeholder="smallPrice"
          className="form-control"
          onChange={(e) => {
            setsmallPrice(e.target.value);
          }}
        />
        <input
          type="text"
          value={mediumPrice}
          placeholder="mediumPrice"
          className="form-control"
          onChange={(e) => {
            setmediumPrice(e.target.value);
          }}
        />
        <input
          type="text"
          value={largePrice}
          placeholder="LargePrice"
          className="form-control"
          onChange={(e) => {
            setlargePrice(e.target.value);
          }}
        />
        <input
          type="text"
          value={image}
          placeholder="Image Url"
          className="form-control"
          onChange={(e) => {
            setimage(e.target.value);
          }}
        />
        <input
          type="text"
          value={description}
          placeholder="Description"
          className="form-control"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <input
          type="text"
          value={category}
          placeholder="Category"
          className="form-control"
          onChange={(e) => {
            setcategory(e.target.value);
          }}
        />
        <button className="btn mt-3">Add Pizza</button>
      </form>
    </div>
  );
}
