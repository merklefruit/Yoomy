import React from "react";

// Styled components
import { Container } from "../../../styles/globalStyles";
import { PerTeHeadline } from "../../../styles/_app/perTeStyles";

const PerTeHero = ({ user }) => {
  return (
    <Container>
      <PerTeHeadline>
        <h1>Per te</h1>
        <h3>
          Ciao {user ? user.username : ""}! <br />
          Dai un'occhiata ai corsi selezionati apposta per te.
        </h3>
      </PerTeHeadline>
    </Container>
  );
};

export default PerTeHero;
