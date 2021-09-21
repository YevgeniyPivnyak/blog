import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = {
  palette: {
    primary: {
      main: "#c70c0c",
    },
    secondary: {
      main: green[500],
    },
  },
};

export default createTheme(theme);
