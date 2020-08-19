import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import CheckLink from "./Component/CheckLink";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login toggleTheme={toggleTheme} />
          </Route>
          <Route exact path="/register">
            <Register toggleTheme={toggleTheme} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard toggleTheme={toggleTheme} />
          </Route>
          <Route exact path="/">
            <Home toggleTheme={toggleTheme} />
          </Route>
          <Route path="/:urlLink">
            <CheckLink toggleTheme={toggleTheme} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
