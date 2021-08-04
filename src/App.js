import React from "react";
import Main from "./StartupMain/Main";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./MuiTheme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
