import React from "react";

// Styled components
import { Container, Headline } from "../../../styles/globalStyles";

const ContactHero = ({ user }) => {
  return (
    <Container>
      <Headline>
        <h1>Il tuo Account</h1>
      </Headline>
      {user && (
        <p>
          Username: {user.username} <br />
          Email: {user.email} <br />
        </p>
      )}
    </Container>
  );
};

export default ContactHero;
