import React from "react";
import { Helmet } from "react-helmet";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
export default function Head({ title }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Helmet title={`${title} | link-shortener`} />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
