const purchaseCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_COURSE":
      return {
        course: action.payload,
      };
    case "REMOVE_COURSE":
      return {
        course: {},
      };
    default:
      return state;
  }
};

export default purchaseCourseReducer;
