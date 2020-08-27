import React, { useState, Suspense, lazy } from "react";
import Head from "./Component/Head";

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
  const [title, setTitle] = useState("Home");
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
        <Head title={title} darkMode={darkMode} toggleTheme={toggleTheme} />
        <Suspense
          fallback={
            <div className={classes.loading}>
              <CircularProgress />
            </div>
          }
        >
          <Switch>
            <Route exact path="/login">
              <Login setTitle={setTitle} />
            </Route>
            <Route exact path="/register">
              <Register setTitle={setTitle} />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard setTitle={setTitle} />
            </Route>
            <Route exact path="/">
              <Home setTitle={setTitle} />
            </Route>
            <Route path="/:urlLink">
              <CheckLink setTitle={setTitle} />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
