import React from "react";
import Container from "@material-ui/core/Container";
import Head from "../Component/Head";
export default function PageNotFound({ toggleTheme }) {
  return (
    <Container component="main" maxWidth="xl" disableGutters>
      <Head title="404-Page not found" toggleTheme={toggleTheme} />
      <div>404 page not found</div>
    </Container>
  );
}
