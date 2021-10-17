export const logout = () => (dispatch) => {
  console.log("here");
  localStorage.removeItem("userInfo");
  dispatch({ type: "REMOVE_USER" });
};

export const login = (userInfo) => (dispatch) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  dispatch({
    type: "STORE_USER",
    payload: userInfo,
  });
};
