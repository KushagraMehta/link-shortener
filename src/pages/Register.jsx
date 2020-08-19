import React, { useState, useEffect } from "react";
import Head from "../Component/Head";
import firebase from "../Component/firebase";
import { useHistory } from "react-router-dom";

import {
  Container,
  CssBaseline,
  Avatar,
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register({ toggleTheme }) {
  const classes = useStyles();

  const [isInValid, setIsInValid] = useState(true);
  const [emailData, setEmailData] = useState({ value: "", error: false });
  const [passwordData, setPasswordData] = useState({ value: "" });
  const [confirmPasswordData, setConfirmPasswordData] = useState({ value: "" });
  const [passwordError, setPasswordError] = useState({
    error: false,
    helperText: "",
  });
  useEffect(() => {
    let error =
      confirmPasswordData.value !== passwordData.value &&
      passwordData.value !== "" &&
      confirmPasswordData.value !== "";
    let HELPER_TEXT = error ? "Password does not match." : "";
    //Password pattern check
    if (!error) {
      if (!new RegExp("(?=.*[0-9])").test(passwordData.value)) {
        error = true;
        HELPER_TEXT = "Require at least 1 digit";
      } else if (!new RegExp("(?=.*[a-z])").test(passwordData.value)) {
        error = true;
        HELPER_TEXT = "Require at least 1 lowercase letter";
      } else if (!new RegExp("(?=.*[A-Z])").test(passwordData.value)) {
        error = true;
        HELPER_TEXT = "Require at least 1 uppercase letter";
      } else if (
        !new RegExp("(?=.*[*.!@$%^&(){}:;<>,.?/~_+-=|])").test(
          passwordData.value
        )
      ) {
        error = true;
        HELPER_TEXT = "Require at least 1 special character";
      } else if (!new RegExp(".{8,32}").test(passwordData.value)) {
        error = true;
        HELPER_TEXT =
          "The password must be at least 8 characters long, but no more than 32";
      }
    }
    setPasswordError({
      error: error,
      helperText: HELPER_TEXT,
    });
    if (
      !error &&
      !emailData.error &&
      passwordData.value !== "" &&
      confirmPasswordData.value !== "" &&
      emailData.value.length !== 0
    )
      setIsInValid(false);
    else setIsInValid(true);
  }, [passwordData, confirmPasswordData, emailData]);

  const inputHandler = (event) => {
    if (event.target.id === "password")
      setPasswordData({ value: event.target.value });
    else if (event.target.id === "confirmpassword")
      setConfirmPasswordData({ value: event.target.value });
    else setEmailData({ value: event.target.value });
  };
  async function AuthButton() {
    let history = useHistory();
    try {
      await firebase.register(emailData, passwordData);
      history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <React.Fragment>
      <Head title="Register" toggleTheme={toggleTheme} />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} action="/signup" method="POST">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  type="text"
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  type="text"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={emailData.error}
                  onChange={inputHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={
                    passwordData.value.length <=
                      confirmPasswordData.value.length &&
                    passwordData.value.length !== 0
                      ? passwordError.error
                      : false
                  }
                  helperText={
                    passwordData.value.length <=
                      confirmPasswordData.value.length &&
                    passwordData.value.length !== 0
                      ? passwordError.helperText
                      : ""
                  }
                  autoComplete="current-password"
                  onChange={inputHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  error={
                    confirmPasswordData.value.length <=
                      passwordData.value.length &&
                    confirmPasswordData.value.length !== 0
                      ? passwordError.error
                      : false
                  }
                  helperText={
                    confirmPasswordData.value.length <=
                      passwordData.value.length &&
                    confirmPasswordData.value.length !== 0
                      ? passwordError.helperText
                      : ""
                  }
                  autoComplete="current-password"
                  onChange={inputHandler}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isInValid}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}
