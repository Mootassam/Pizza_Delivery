import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Erros from "../components/Erros";
import Success from "../components/Success";

import { editPizza, getPizzaById } from "../actions/pizzaActions";
export default function Editpizza({ match }) {
  const [name, setnName] = useState();
  const [smallPrice, setsmallPrice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [largePrice, setlargePrice] = useState();
  const [image, setimage] = useState();
  const [description, setdescription] = useState();
  const [category, setcategory] = useState();

  const dispatch = useDispatch();

  const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza, error, loading } = getpizzabyidstate;

  const editpizzaState = useSelector((state) => state.editPizzaReducer);

  const { editloading, editsuccess, editerror } = editpizzaState;
  useEffect(() => {
    if (pizza) {
      if (pizza._id === match.params.pizzaid) {
        setnName(pizza.name);
        setsmallPrice(pizza.prices[0]["small"]);
        setmediumPrice(pizza.prices[0]["medium"]);
        setlargePrice(pizza.prices[0]["large"]);
        setimage(pizza.image);
        setdescription(pizza.description);
        setcategory(pizza.category);
        setnName(pizza.name);
      } else {
        dispatch(getPizzaById(match.params.pizzaid));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaid));
    }
  }, [pizza, dispatch]);
  function formHandler(e) {
    e.preventDefault();
    const editedpizza = {
      _id: match.params.pizzaid,
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
    dispatch(editPizza(editedpizza));
  }

  return (
    <div>
      <h1>Edit Pizza </h1>
      {loading && <Loading />}
      {error && <Erros error="something went wrong" />}
      {editsuccess && <Success success="Pizza detail edited successful" />}
      {editloading && <Loading />}

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
        <button className="btn mt-3">Edit Pizza</button>
      </form>
    </div>
  );
}
