import React from "react";

// Styled components
import { Container } from "../../../styles/globalStyles";

const ContactHero = ({ user }) => {
  return (
    <Container>
      <h1>Il tuo Account</h1>
      <p>
        Username: {user ? user.username : ""} <br />
        Email: {user ? user.email : ""} <br />
      </p>
    </Container>
  );
};

export default ContactHero;
