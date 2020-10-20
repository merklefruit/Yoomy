import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/globalStyles";

// Styled components

const BetaForm = () => {
  return (
    <Background>
      <Container>
        <div className="cta">
          <h2>Ottieni l'accesso anticipato!</h2>
        </div>
        <BForm>
          <form>
            <input
              type="text"
              name="name"
              className="question"
              id="nme"
              required
              autoComplete="off"
            />
            <label htmlFor="nme">
              <span>Il tuo nome:</span>
            </label>
            <input
              type="email"
              name="email"
              className="question email"
              id="email"
              required
              autoComplete="off"
            />
            <label htmlFor="email">
              <span>La tua email:</span>
            </label>

            <input type="submit" value="Richiedi l'accesso" />
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
      margin: 0;
      font-family: "DM Sans";
      font-size: 2.5rem;
      font-weight: 500;

      @media (max-width: 500px) {
        font-size: 2rem;
      }
    }
  }
`;

const BForm = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  input,
  span,
  label,
  textarea {
    font-family: "Ubuntu", sans-serif;
    display: block;
    margin: 10px;
    padding: 5px;
    border: none;
    font-size: 22px;
  }

  textarea:focus,
  input:focus {
    outline: 0;
  }
  /* Question */

  input.question,
  textarea.question {
    font-size: 48px;
    font-weight: 300;
    border-radius: 2px;
    margin: 0;
    border: none;
    width: 80%;
    background: rgba(0, 0, 0, 0);
    transition: padding-top 0.2s ease, margin-top 0.2s ease;
    overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
  }
  /* Underline and Placeholder */

  input.question + label,
  textarea.question + label {
    display: block;
    position: relative;
    white-space: nowrap;
    padding: 0;
    margin: 0;
    width: 10%;
    border-top: 1px solid red;
    -webkit-transition: width 0.4s ease;
    transition: width 0.4s ease;
    height: 0px;
  }

  input.question:focus + label,
  textarea.question:focus + label {
    width: 100%;
  }

  input.question:focus,
  input.question:valid {
    padding-top: 35px;
  }

  textarea.question:valid,
  textarea.question:focus {
    margin-top: 35px;
  }

  input.question:focus + label > span,
  input.question:valid + label > span {
    top: -100px;
    font-size: 22px;
    color: #333;
  }

  textarea.question:focus + label > span,
  textarea.question:valid + label > span {
    top: -150px;
    font-size: 22px;
    color: #333;
  }

  input.question:valid + label,
  textarea.question:valid + label {
    border-color: green;
  }

  input.question:invalid,
  textarea.question:invalid {
    box-shadow: none;
  }

  input.question + label > span,
  textarea.question + label > span {
    font-weight: 300;
    margin: 0;
    position: absolute;
    color: #8f8f8f;
    font-size: 48px;
    top: -66px;
    left: 0px;
    z-index: -1;
    -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
    transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  }

  input[type="submit"] {
    -webkit-transition: opacity 0.2s ease, background 0.2s ease;
    transition: opacity 0.2s ease, background 0.2s ease;
    display: block;
    opacity: 0;
    margin: 10px 0 0 0;
    padding: 10px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background: #eee;
  }

  input[type="submit"]:active {
    background: #999;
  }

  input.question:valid ~ input[type="submit"],
  textarea.question:valid ~ input[type="submit"] {
    -webkit-animation: appear 1s forwards;
    animation: appear 1s forwards;
  }

  input.question:invalid ~ input[type="submit"],
  textarea.question:invalid ~ input[type="submit"] {
    display: none;
  }

  @-webkit-keyframes appear {
    100% {
      opacity: 1;
    }
  }

  @keyframes appear {
    100% {
      opacity: 1;
    }
  }
`;
