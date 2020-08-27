import React, { useState, Suspense, lazy } from "react";

import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { CssBaseline, CircularProgress } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Register = lazy(() => import("./pages/Register"));
const CheckLink = lazy(() => import("./Component/CheckLink"));

const useStyles = makeStyles((theme) => ({
  loading: {
    position: "relative",
    top: "50vh",
    left: "50vw",
  },
}));
function App() {
  const classes = useStyles();
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
        <Suspense
          fallback={
            <div className={classes.loading}>
              <CircularProgress />
            </div>
          }
        >
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
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
