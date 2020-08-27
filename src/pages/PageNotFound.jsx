import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
export default function PageNotFound({ setTitle }) {
  useEffect(() => setTitle("404-Page not found"), [setTitle]);
  return (
    <Container component="main" maxWidth="xl" disableGutters>
      <div>404 page not found</div>
    </Container>
  );
}
