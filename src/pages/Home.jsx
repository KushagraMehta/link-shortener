import React from "react";
import { Container, CssBaseline, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "../Component/Head";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "80vh",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
export default function Home({ toggleTheme }) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xl" disableGutters>
      <CssBaseline />
      <Head title="Home" toggleTheme={toggleTheme} />

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
