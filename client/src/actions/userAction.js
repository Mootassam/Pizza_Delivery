import axios from "axios";

export const registerUser = (user) => (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = axios.post(
      "http://localhost:8080/api/users/register",
      user
    );
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:8080/api/users/login",
      user
    );

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};

export const allUser = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const response = await axios.get("http://localhost:8080/api/users/allUser");
    dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USERS_FAILED", payload: error });
  }
};

export const DeleteUser = (user_id) => async (dispatch) => {
  dispatch({ type: "DELETE_USERS_REQUEST" });
  try {
    await axios.post("http://localhost:8080/api/users/deleteUser", { user_id });
    dispatch({ type: "DELETE_USERS_SUCCESS" });
    window.location.reload();
  } catch (error) {
    dispatch({ type: "DELETE_USERS_FAILED", payload: error });
  }
};

export const EditUsersa = (user) => async (dispatch) => {
  dispatch({ type: "EDIT_USER_REQUEST" });
  try {
    await axios.post("http://localhost:8080/api/users/editUser", { user });
    dispatch({ type: "EDIT_USER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "EDIT_USER_FAILED", payload: error });
  }
};

export const UserById = (user_id) => async (dispatch) => {
  dispatch({ type: "FIND_USER_REQUEST" });
  try {
    const respone = await axios.post(
      "http://localhost:8080/api/users/UserById",
      { user_id }
    );
    dispatch({ type: "FIND_USER_SUCCESS", payload: respone.data });
  } catch (error) {
    dispatch({ type: "FIND_USER_ERROR", payload: error });
  }
};
