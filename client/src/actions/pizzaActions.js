import axios from "axios";
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("http://localhost:8080/api/pizzas/get");

    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};

export const filterPizzas = (searchkey, category) => async (dispatch) => {
  var filteredPizzas;
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("http://localhost:8080/api/pizzas/get");
    filteredPizzas = response.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchkey)
    );
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filteredPizzas });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};
