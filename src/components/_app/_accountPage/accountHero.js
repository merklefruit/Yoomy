import React from "react";
import styled from "styled-components";

// Styled components
import { Container, Headline } from "../../../styles/globalStyles";

const ContactHero = ({ user }) => {
  return (
    <Container>
      <Headline>
        <h1>Il tuo Account</h1>
      </Headline>
      <Contact>

        {user && (
          <p>
            Nome: {user.name} <br />
          Cognome: {user.surname} <br />
          Email: {user.email} <br />
          </p>
        )}
        <div className="buttons">
          <button>Personalizza i tuoi interessi</button>
          <button>Gestisci i pagamenti</button>
          <button>Scrivi al supporto tecnico</button>
          <button>Elimina il tuo account</button>
        </div>
      </Contact>

    </Container>
  );
};

export default ContactHero;

const Contact = styled.div`
  .buttons {
    button {
      display: block;
      margin-bottom: 20px;
      border: none;
      border-radius: 4px;
      padding: 9px;
      width: 250px;
      background: ${props => props.theme.secondary};
    }
  }
`
