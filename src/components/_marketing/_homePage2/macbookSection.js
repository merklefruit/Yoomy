import React from "react";
import styled from "styled-components";

// Styled components
import { Container } from "../../../styles/globalStyles";

const MacbookSection = () => {
  return (
    <MBSection>
      <Container>
        <Heading>
          <div>
            <h2>
              Lo Yoga online
              <br /> che funziona
            </h2>
          </div>
          <div className="macbook">
            <img
              src={require("../../../assets/images/macbookpro.png")}
              alt="macbook"
            />
          </div>
        </Heading>
      </Container>

      <Background>
        <Container>
          <div className="cta">
            <h3>
              Lasciati coinvolgere dalla qualità dei corsi su Yoomy. <br />
              Iscrivendoti adesso risparmi su tutte le lezioni fino al lancio
              ufficiale!
            </h3>
          </div>
        </Container>
      </Background>
    </MBSection>
  );
};

export default MacbookSection;

const MBSection = styled.div`
  overflow-x: hidden;
  margin-top: 30px;
`;

const Heading = styled.div`
  color: ${(props) => props.theme.text};
  display: flex;

  h2 {
    font-family: "DM Sans";
    font-size: 2.9rem;
    font-weight: 600;

    @media (max-width: 900px) {
      font-size: 2.6rem;
    }
    @media (max-width: 600px) {
      font-size: 2rem;
      margin-bottom: 50px;
    }
  }

  .macbook {
    img {
      position: absolute;
      bottom: -300px;
      /* right: -100px; */
      width: 700px;
      @media (max-width: 1100px) {
        width: 600px;
      }
      @media (max-width: 900px) {
        bottom: -250px;
        width: 500px;
      }
      @media (max-width: 800px) {
        max-width: 450px;
        display: block;
      }
    }
  }
`;

const Background = styled.div`
  background: ${(props) => props.theme.background2};
  color: ${(props) => props.theme.text};
  min-height: 450px;
  position: relative;

  .bullets {
    padding-top: 45px;
    @media (max-width: 600px) {
      display: none;
    }

    .bullet {
      margin: 0;
      margin-bottom: 25px;
      display: flex;
      align-items: center;

      .arrow {
        transform: scale(0.7);
      }

      h4 {
        color: rgba(0, 0, 0, 0.9);
        margin-left: 10px;
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 400;
        font-size: 1.6rem;
      }
    }
  }

  .cta {
    padding-top: 300px;
    padding-bottom: 50px;

    @media (max-width: 900px) {
      padding-top: 270px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }

    h3 {
      margin-bottom: 0;
      font-family: "DM Sans";
      font-weight: 300;
      font-size: 2.3rem;

      @media (max-width: 1100px) {
        font-size: 2.1rem;
      }
      @media (max-width: 900px) {
        font-size: 2rem;
      }
      @media (max-width: 700px) {
        font-size: 1.8rem;
      }
      @media (max-width: 500px) {
        font-size: 1.6rem;
      }
    }
  }
`;
