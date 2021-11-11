import { createMuiTheme } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors/";
const orgtheme = createMuiTheme();

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: blue[100]
    },
    type: "light"
  },
  typography: {
    useNextVariants: true,
    fontFamily: "Raleway",
    h1: {
      fontSize: 32,
      fontWeight: 600,
      color: '#000',
      verticalAlign: 'middle',
      alignItems: 'center',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: 20,
      color: 'black',
      letterSpacing: '0.0075em',
      fontWeight: 'bold',
      verticalAlign: 'middle',
      alignItems: 'center',
    },
    subtitle2: {
      fontSize: 16,
      color: 'black',
      letterSpacing: '0.0075em',
      fontWeight: 'bold',
      verticalAlign: 'middle',
      alignItems: 'center',
    },
    h4: {
      fontSize: 14,
      fontWeight: 300,

      color: 'black',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center',
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,

      color: 'black',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center',
    },
    h3: {
      fontSize: 14,
      fontWeight: 600,

      color: 'black',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center',
    },
    overline: {
      fontSize: 20,
      fontWeight: 800,

      color: '#2882F8',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center',
    },
  },

});
