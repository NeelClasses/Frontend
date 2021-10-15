const validations = (name, value) => {
  switch (name) {
    case "fullName":
      if (value === "") {
        return "Please enter name.";
      } else if (value.length < 3) {
        return "Name must be greater than 3 letters.";
      } else {
        return "";
      }
    case "number":
      if (value === "") {
        return "Please enter number.";
      } else if (value.length !== 10) {
        return "Phone must be of 10 digits.";
      } else {
        return "";
      }
    default:
      return;
  }
};

export default validations;
