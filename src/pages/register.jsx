import React from "react";
import Head from "../Component/Head";

import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Register() {
  return (
    <React.Fragment>
      <Head title="Register" />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
      </Container>
    </React.Fragment>
  );
}
