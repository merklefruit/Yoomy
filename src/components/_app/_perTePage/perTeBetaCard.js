import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components
import { Container } from "../../../styles/globalStyles";

const PerTeBetaCard = () => {
  return (
    <Container>
      <BetaCard>
        <div className="image">
          <img
            src={require("../../../assets/images/feature-1.jpg")}
            alt="guida"
          />
        </div>
        <div className="text">
          <div className="inner">
            <h3>Guida per Iniziare</h3>
            <p>
              Stai utilizzando la Beta di Yoomy. Abbiamo preparato una veloce
              guida in cui spieghiamo come iniziare. Se riscontri un qualsiasi
              problema, non esitare a contattarci!
            </p>
            <p>#YoomyFamily</p>
            <Link to="/app/guida-per-iniziare">
              <button>Leggi la guida</button>
            </Link>
          </div>
        </div>
      </BetaCard>
    </Container>
  );
};

export default PerTeBetaCard;

const BetaCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  color: ${(props) => props.theme.text};
  border-radius: 4px;

  .image {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 350px;

    @media (max-width: 800px) {
      display: grid;
      place-items: center;
      height: 300px;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: calc(100% - 40px);
      margin-top: 20px;
      width: 110%;
      object-fit: cover;

      @media (max-width: 800px) {
        width: 100%;
      }
    }
  }

  .text {
    position: relative;
    width: 90%;
    display: grid;
    place-items: center;

    @media (max-width: 800px) {
      display: block;
      margin-left: auto;
      margin-right: auto;
      top: -80px;
    }

    .inner {
      background: ${(props) => props.theme.beige};
      padding: 20px;
      border-radius: 2px;
    }

    h3 {
      margin: 0;
      margin-bottom: 1.4rem;
      font-family: "DM Sans";
      font-weight: 400;
      font-size: 2rem;

      @media (max-width: 600px) {
        font-size: 1.8rem;
      }
    }
    p {
      margin: 0;
      margin-top: 10px;
      font-size: 1.1rem;

      @media (max-width: 600px) {
        font-size: 1rem;
      }
    }
    button {
      margin-top: 20px;
      background: ${(props) => props.theme.text};
      color: lightgray;
      font-size: 1.1rem;
      font-weight: 500;
      padding: 9px 30px;
      border-radius: 20px;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }
`;
