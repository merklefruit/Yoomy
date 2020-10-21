import React from "react";

// Temporary ::
import styled from "styled-components";

// Components
import Head from "../components/head";

// Styled components :: temporary
import { Container, Headline } from "../styles/globalStyles";

const BetaPage = () => {
  return (
    <>
      <Head title="Beta" desc="Unisciti alla closed beta" />
      <BetaHero>
        <Container>
          <Headline>
            <h1>Partecipa alla Beta</h1>
            <h3>
              Compila il form qui sotto per richiedere l'accesso alla beta
              privata di Yooga.
            </h3>
          </Headline>
        </Container>
      </BetaHero>
      <BetaForm>
        <Container>
          <form name="beta-signup" method="POST" data-netlify="true">
            <p>
              <label>
                Nome: <input type="text" name="nome" />
              </label>
            </p>
            <p>
              <label>
                Cognome: <input type="text" name="cognome" />
              </label>
            </p>
            <p>
              <label>
                Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Telefono:
                <input type="number" name="telefono" />
              </label>
            </p>
            <p>
              <label>
                Come hai scoperto Yooga?
                <input type="text" name="referral" />
              </label>
            </p>
            <p>
              <button type="submit">Invia</button>
            </p>
          </form>
        </Container>
      </BetaForm>
    </>
  );
};

export default BetaPage;

const BetaHero = styled.div``;

const BetaForm = styled.div`
  form {
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
    margin-top: 40px;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid gray;
  }
  p {
    font-size: 0.935rem;
  }
  button {
    width: 100%;
    background-color: ${(props) => props.theme.buttons};
    border: 1px solid gray;
    margin-top: 20px;
    padding-top: 6px;
    padding-bottom: 6px;
    margin-left: 3px;
  }
`;
