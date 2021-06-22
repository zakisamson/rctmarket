import * as types from "../types";

export const loginAction = (data) => {
  console.log("Data masuk action: ", data);
  return {
    type: types.USER_LOGIN,
    payload: data,
  };
};

export const logoutAction = () => {
  return {
    type: types.USER_LOGOUT,
  };
};
