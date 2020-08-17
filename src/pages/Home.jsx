import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Head from "../Component/Head";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xl" disableGutters>
      <CssBaseline />
      <Head title="Home" />

      <div className={classes.paper}>
        <Box component="span">
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
        </Box>
      </div>
    </Container>
  );
}
