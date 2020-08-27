import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, CssBaseline, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
export default function Home({ setTitle }) {
  const classes = useStyles();
  useEffect(() => setTitle("Home"), [setTitle]);
  return (
    <Container component="main" maxWidth="xl" disableGutters>
      <CssBaseline />

      <div className={classes.paper}>
        <Box component="span">
          <Button
            component={RouterLink}
            className={classes.margin}
            variant="outlined"
            color="primary"
            to="/login"
          >
            Login
          </Button>
          <Button
            component={RouterLink}
            className={classes.margin}
            variant="outlined"
            color="secondary"
            to="/register"
          >
            Register
          </Button>
        </Box>
      </div>
    </Container>
  );
}
