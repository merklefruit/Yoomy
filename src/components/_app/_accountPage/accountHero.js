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
          Nome: {user.name} <br />
          Cognome: {user.surname} <br />
          Email: {user.email} <br />
        </p>
      )}
      <p>Aggiungere:</p>
      <ol>
        <li>Modifica username / email / password</li>
        <li>Scegli il tema </li>
        <li>Personalizza i tuoi interessi</li>
        <li>
          Gestisci iscrizione:{" "}
          <ul>
            <li>Livello di abbonamento</li>
            <li>Data prossima fattura</li>
            <li>visualizza / cambia opzioni di pagamento / carta di credito</li>
          </ul>
        </li>
        <li>Scrivi al supporto tecnico</li>
        <li>Rimuovi account</li>
      </ol>
    </Container>
  );
};

export default ContactHero;
