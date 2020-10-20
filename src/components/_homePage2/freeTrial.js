import React from "react";
import styled from "styled-components";

// Styled components
import { Container } from "../../styles/globalStyles";

const FreeTrial = () => {
  return (
    <Container>
      <TrialSection>
        <div className="pic">
          <p>Foto di qualcuno che fa yoga col computer davanti</p>
        </div>
        <div className="text">
          <h2>Prova una lezione gratuita</h2>
          <h3>
            <span>12</span> crediti gratis per te!
          </h3>
          <small>(invece di 0,99€ ciascuno)</small>
        </div>
      </TrialSection>
    </Container>
  );
};

export default FreeTrial;

const TrialSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  color: ${(props) => props.theme.text};
  min-height: 400px;

  .pic {
    img {
      max-width: 100%;
    }
  }
  .text {
    h2 {
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
