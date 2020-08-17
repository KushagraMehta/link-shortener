import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  center: {
    display: "flex",
    width: "100%",
    height: "1vh",
    justifyContent: "center",
    alignContent: "center",
    borderStyle: "dashed",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Button
          className={classes.margin}
          variant="outlined"
          color="primary"
          href={"/login"}
        >
          Login
        </Button>
        <Button
          className={classes.margin}
          variant="outlined"
          color="secondary"
          href={"/register"}
        >
          Register
        </Button>
      </div>
    </Container>
  );
}
