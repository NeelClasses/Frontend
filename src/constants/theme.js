import { constants } from "./index";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: constants.colors.primaryColor,
    },
  },
});
