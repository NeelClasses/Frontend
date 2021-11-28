export const logout = () => (dispatch) => {
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

export const setCourse = (course) => (dispatch) => {
  dispatch({
    type: "SET_COURSE",
    payload: course,
  });
};

export const removeCourse = (course) => (dispatch) => {
  dispatch({
    type: "REMOVE_COURSE",
  });
};
