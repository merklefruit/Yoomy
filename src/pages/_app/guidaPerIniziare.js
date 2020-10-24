import React from "react";
import styled from "styled-components";
import { Container, Headline } from "../../styles/globalStyles";

const GuidaPerIniziare = () => {
  return (
    <Container>
      <Headline>
        <h1>Iniziare con Yoomy</h1>
      </Headline>
      <Guida>
        <section>
          <h2>Prima di tutto</h2>
          <p>Ciao.</p>
        </section>
        <section>
          <h2>Secondariamente</h2>
          <p>Aggiungere contenuto</p>
        </section>
        <section>
          <h2>FAQ</h2>
        </section>
        <section>
          <h2>Supporto</h2>
        </section>
      </Guida>
    </Container>
  );
};

export default GuidaPerIniziare;

const Guida = styled.div`
  color: ${(props) => props.theme.text};

  section {
    width: 100%;
    margin-bottom: 10px;
  }

  h2 {
    font-family: "DM Sans";
    font-size: 1.5rem;
  }
  p {
    font-size: 1.1rem;
  }
`;
