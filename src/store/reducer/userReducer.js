export const storeUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_USER":
      return {
        userInfo: action.payload,
      };
    case "REMOVE_USER":
      return { userInfo: {} };
    default:
      return state;
  }
};
