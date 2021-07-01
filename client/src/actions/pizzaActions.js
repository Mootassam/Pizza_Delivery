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
    if (category != "all") {
      filteredPizzas = response.data.filter(
        (pizza) => pizza.category == category
      );
    }
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filteredPizzas });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZA_REQUEST" });
  try {
    const response = await axios.post("/api/post/addpizza", { pizza });
    dispatch({ type: "ADD_PIZZA_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_PIZZA_FAILED", payload: error });
  }
};
