import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Head({ title, toggleTheme }) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkmode = () => {
    toggleTheme();
    setDarkMode(!darkMode);
  };
  const classes = useStyles();
  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${title} | link-shortener`}</title>
      </Helmet>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
          <Button onClick={toggleDarkmode}>
            {darkMode ? <NightsStayIcon /> : <WbSunnyIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </HelmetProvider>
  );
}
