import * as types from "../types";

const INITIAL_STATE = {
  id: null,
  username: "",
  email: "",
  role: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return { ...state, ...action.payload };
    case types.USER_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
