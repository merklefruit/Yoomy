import React from "react";
import styled from "styled-components";

// Styled components
import { Container } from "../../styles/globalStyles";

const HomePrices = () => {
  return (
    <Container>
      <Prices>
        <div className="title">
          <h2>Prezzi flessibili dall'inizio</h2>
        </div>
        <div className="wrapper">
          <div className="grid">
            <div className="plan">
              <h2>11€</h2>
              <small>da usare quando vuoi</small>
              <p>
                Include <b>1 classe</b> di qualsiasi tipo di corso
              </p>
            </div>

            <div className="plan">
              <h2>54€</h2>
              <small>da usare quando vuoi</small>
              <p>
                Include <b>5 classi</b> di qualsiasi tipo di corso
              </p>
            </div>

            <div className="plan">
              <h2>99€</h2>
              <small>da usare quando vuoi</small>
              <p>
                Include <b>10 classi</b> di qualsiasi tipo di corso
              </p>
            </div>

            <div className="plan">
              <h2>176€</h2>
              <small>da usare quando vuoi</small>
              <p>
                Include <b>20 classi</b> di qualsiasi tipo di corso
              </p>
            </div>

            <div className="plan">
              <h2>249€</h2>
              <small>da usare quando vuoi</small>
              <p>
                Include <b>30 classi</b> di qualsiasi tipo di corso
              </p>
            </div>

            <div className="plan">
              <h2>290€</h2>
              <small>da usare quando vuoi</small>
              <p>
                Include <b>35 classi</b> di qualsiasi tipo di corso
              </p>
            </div>
          </div>
        </div>
      </Prices>
    </Container>
  );
};

export default HomePrices;

const Prices = styled.div`
  color: ${(props) => props.theme.text};
  margin-top: 30px;
  margin-bottom: 30px;

  .title {
    text-align: center;

    h2 {
      font-family: "DM Sans";
      font-size: 2.3rem;
    }
  }

  .wrapper {
    display: grid;
    place-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .grid {
    display: grid;

    gap: 1rem;
    grid-template-columns: repeat(6, minmax(150px, 1fr));
    @media (max-width: 1250px) {
      column-gap: 2.5rem;
      grid-template-columns: repeat(3, minmax(150px, 250px));
    }
    @media (max-width: 800px) {
      grid-template-columns: repeat(2, minmax(150px, 250px));
    }
    @media (max-width: 400px) {
      grid-template-columns: 1fr;
    }

    .plan {
      text-align: center;
      h2 {
        margin: 0;
        font-size: 2rem;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 800;
      }
      p {
        padding-left: 5px;
        padding-right: 5px;

        @media (max-width: 1000px) {
          padding-left: 15px;
          padding-right: 15px;
        }

        @media (max-width: 400px) {
          padding-left: 35px;
          padding-right: 35px;
        }
      }
    }
  }
`;
