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
          <h2>Prova una lezione gratuita</h2>
          <h3>
            <span>12</span> crediti gratis se ti iscrivi adesso.
          </h3>
          <small>(invece di 0,99€ ciascuno)</small>
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
    margin-left: 35px;
    @media (max-width: 1000px) {
      margin-left: 0;
    }

    h2 {
      font-family: "DM Sans";
      font-size: 2rem;
      margin: 0;
      font-weight: 500;
      @media (max-width: 500px) {
        font-size: 1.8rem;
      }
    }

    h3 {
      margin: 0;
      margin-top: 10px;
      font-size: 1.5rem;
      font-weight: 400;

      span {
        font-size: 2.4rem;
        margin-right: 2px;
      }
    }
    small {
      margin-top: 8px;
      font-size: 0.935rem;
    }
  }
`;
