import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2f55ff" }, // main blue
    secondary: { main: "#6C6880" }, // warm yellow for ribbon
    background: {
      default: "#F8FAFEC7",
    },
  },
  typography: {
    fontFamily: "Sofia Pro, sans-serif",
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
  },
});

export default theme;
