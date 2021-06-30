import React, { useEffect } from "react";
import Pizza from "../components/Pizza";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Erros from "../components/Erros";
import Filter from "../components/Filter";

export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, loading, error } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <Filter />
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Erros error="Something went wrong" />
        ) : (
          pizzas.map((map) => {
            return (
              <div className="col-md-3 m-3" key={map._id}>
                <div>
                  <Pizza pizza={map} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
