import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deltePizza, getAllPizzas } from "../actions/pizzaActions";

import Loading from "../components/Loading";
import Erros from "../components/Erros";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";

export default function Pizzaslist() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, loading, error } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {error && <Erros error="Something went wrong" />}
      <table className="table table-striped">
        <thead className="thead-dark">
          <th>Name</th>
          <th>Prices</th>
          <th>Category</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {pizzas &&
            pizzas.map((map) => {
              return (
                <tr>
                  <td>{map.name}</td>
                  <td>
                    Small :{map.prices[0]["small"]} <br />
                    Medium :{map.prices[0]["medium"]}
                    <br />
                    Large :{map.prices[0]["large"]}
                  </td>
                  <td>{map.category}</td>
                  <td>
                    <i
                      className="fa fa-trash m-1"
                      onClick={() => {
                        dispatch(deltePizza(map._id));
                      }}
                    ></i>
                    <Link to={`/admin/editpizza/${map._id}`}>
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
