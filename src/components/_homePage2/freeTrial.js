import React from "react";
import styled from "styled-components";

// Styled components
import { Container } from "../../styles/globalStyles";

// Assets
import HomeYoga from "../../assets/svg/HomeYoga";

const FreeTrial = () => {
  return (
    <Container>
      <TrialSection>
        <div className="pic">
          <HomeYoga />
        </div>
        <div className="text">
          <div>
            <h2>Inizia Gratis</h2>
            <h3>
              Per il periodo di Beta, offriamo lezioni gratis per testare la
              piattaforma.
            </h3>
            <h3>
              Se ti interessa, puoi scriverci a{" "}
              <a href="mailto:beta@yoomy.it">beta@yoomy.it</a> oppure lasciaci
              la tua email nel form <a href="#form">qui sotto</a>.
            </h3>
          </div>
        </div>
      </TrialSection>
    </Container>
  );
};

export default FreeTrial;

const TrialSection = styled.div`
  margin-top: 35px;
  margin-bottom: 35px;
  display: grid;
  grid-template-columns: 55% 45%;
  gap: 1rem;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  color: ${(props) => props.theme.text};
  min-height: 400px;

  .pic {
    @media (max-width: 1000px) {
      text-align: center;
      margin-bottom: 20px;
    }

    svg {
      max-width: 100%;
      @media (max-width: 1000px) {
        width: auto;
      }
    }
  }
  .text {
    display: grid;
    place-items: center;

    margin-left: 35px;
    @media (max-width: 1000px) {
      margin-left: 0;
    }

    h2 {
      margin: 0;
      font-family: "DM Sans";
      font-size: 2rem;
      font-weight: 500;
      @media (max-width: 700px) {
        font-size: 1.7rem;
      }
    }

    h3 {
      margin: 0;
      margin-top: 10px;
      font-size: 1.5rem;
      @media (max-width: 700px) {
        font-size: 1.3rem;
      }
      font-weight: 400;
      line-height: 150%;

      a {
        color: ${(props) => props.theme.primary};
        font-weight: 500;
        &:hover {
          color: black;
        }
      }
    }
    small {
      margin-top: 8px;
      font-size: 0.935rem;
    }
  }
`;
