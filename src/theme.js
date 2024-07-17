import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A1D23", // A dark, rich gray color
      contrastText: "#FFFFFF", // White text color
    },
    secondary: {
      main: "#434A54", // A medium gray color
    },
    background: {
      default: "#1d1d1f", // A light gray background color
      header: "#000000",
    },
    text: {
      primary: "#FFFFFF", // Dark gray text color
      secondary: "#434A54", // Medium gray text color
      tan: "#BBB5AB",
      button: "#4573B4",
    },
  },
  typography: {
    fontFamily: "Trebuchet MS, sans-serif",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // Rounded corners
          padding: "10px 20px", // Spacious padding
          fontSize: 16, // Medium font size
          fontWeight: 500, // Medium font weight
          textTransform: "none", // No text transformation
        },
      },
    },
  },
});

export default theme;
