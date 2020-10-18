import React from "react";

// Styled components
import { Container, Headline } from "../../../styles/globalStyles";

const PerTeHero = ({ user }) => {
  return (
    <Container>
      <Headline>
        <h1>La tua home</h1>
        <h3>
          Ciao <b>{user ? user.username : ""}</b>! <br />
          Dai un'occhiata ai corsi selezionati apposta per te.
        </h3>
      </Headline>
    </Container>
  );
};

export default PerTeHero;
