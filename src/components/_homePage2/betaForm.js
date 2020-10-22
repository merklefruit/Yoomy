import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled components
import { Container } from "../../styles/globalStyles";

const BetaForm = () => {
  return (
    <Background>
      <Container id="form">
        <div className="cta">
          <h2>
            Aggiungiti alle <b>5245</b> persone che hanno già richiesto
            l'accesso anticipato a Yoomy.
          </h2>
        </div>
        <BForm>
          <form
            name="beta"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="beta" />
            <input
              type="text"
              name="nome"
              placeholder="Il tuo nome:"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="La tua email:"
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
            >
              Richiedi accesso
            </motion.button>
          </form>
        </BForm>
      </Container>
    </Background>
  );
};

export default BetaForm;

const Background = styled.div`
  background: ${(props) => props.theme.background2};
  color: ${(props) => props.theme.text};

  .cta {
    padding-top: 40px;

    h2 {
      text-align: center;
      margin: 0;
      font-family: "DM Sans";
      font-size: 2.4rem;
      font-weight: 500;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;

      @media (max-width: 750px) {
        font-size: 2.2rem;
      }

      @media (max-width: 600px) {
        font-size: 2rem;
      }

      @media (max-width: 400px) {
        font-size: 1.8rem;
      }
    }
  }
`;

const BForm = styled.div`
  color: ${(props) => props.theme.text};
  margin-top: 30px;
  padding-bottom: 50px;

  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  input {
    font-family: "DM Sans";

    font-size: 1.1rem;
    padding: 7px 10px;
    margin: 9px 10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 4px;

    &:focus {
      outline-color: ${(props) => props.theme.primary};
    }
  }
  label {
    font-size: 1.2rem;
  }
  button {
    margin-top: 9px;

    cursor: pointer;
    padding: 11px 0;
    background: ${(props) => props.theme.buttons2};
    border: none;
    border-radius: 12px;
    color: white;
    font-weight: 500;
    font-size: 1.1rem;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.07);
    @media (max-width: 830px) {
      font-size: 1rem;
    }
    &:focus {
      outline: none;
    }

    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
`;
