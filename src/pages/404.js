import React from "react";

// Styled components
import { Container } from "../styles/globalStyles";

const NotFound = () => {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>
        Errore 404: Questa pagina non esiste 😅
      </h1>
      <div style={{ marginBottom: "150px" }}></div>
    </Container>
  );
};

export default NotFound;
