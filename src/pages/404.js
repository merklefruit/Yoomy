import React from "react";

// Styled components
import Head from "../components/head";
import { Container } from "../styles/globalStyles";

const NotFound = () => {
  return (
    <>
      <Head title="404" />
      <Container style={{ marginTop: "60px", textAlign: "center" }}>
        <h1>Errore 404: Questa pagina non esiste</h1>
        <div style={{ marginBottom: "150px" }}></div>
      </Container>
    </>
  );
};

export default NotFound;
