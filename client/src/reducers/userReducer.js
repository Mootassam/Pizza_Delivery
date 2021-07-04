export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return { loading: true };

    case "USER_REGISTER_SUCCESS":
      return { loading: false, success: true };

    case "USER_REGISTER_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { loading: true };

    case "USER_LOGIN_SUCCESS":
      return { loading: false, success: true, currentUser: action.payload };

    case "USER_LOGIN_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserListReducer = (state = { User: [] }, action) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return { loading: true, ...state };

    case "GET_USERS_SUCCESS":
      return { loading: false, payload: action.payload };
      break;

    case "GET_USERS_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const EditUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_USER_REQUEST":
      return { loading: true, ...state };
    case "EDIT_USER_SUCCESS":
      return { loading: false, success: true };
    case "EDIT_USER_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const UserFindById = (state = {}, action) => {
  switch (action.type) {
    case "FIND_USER_REQUEST":
      return { loading: true, ...state };
    case "FIND_USER_SUCCESS":
      return { loading: false, payload: action.payload };
    case "FIND_USER_ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
