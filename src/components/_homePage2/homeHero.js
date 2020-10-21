import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Live from "../../assets/svg/Live";

// Styled components
import { Container } from "../../styles/globalStyles";

const HomeHero = () => {
  return (
    <Background>
      <Container>
        <Hero>
          <div className="headline">
            <h1>
              Fai Yoga da casa e interagisci con gli istruttori, con semplicità{" "}
            </h1>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
            >
              Prova Gratis
            </motion.button>
            <Live />
          </div>
          <div className="heroyoga">
            <img src={require("../../assets/images/heroyoga.png")} alt="hero" />
          </div>
        </Hero>
      </Container>
    </Background>
  );
};

export default HomeHero;

const Background = styled.div`
  background-color: ${(props) => props.theme.background2};
`;

const Hero = styled.div`
  display: flex;
  position: relative;
  color: ${(props) => props.theme.text};
  min-height: 500px;
  @media (max-width: 830px) {
    flex-direction: column;
  }

  .headline {
    h1 {
      font-size: 3.1rem;
      margin-top: 70px;
      margin-bottom: 10px;
      font-family: "DM Sans";
      font-weight: 700;
      width: 62%;

      @media (max-width: 1100px) {
        font-size: 3rem;
      }
      @media (max-width: 900px) {
        font-size: 2.8rem;
      }

      @media (max-width: 830px) {
        margin-top: 40px;
        width: 95%;
        font-size: 2.7rem;
      }
      @media (max-width: 500px) {
        width: 100%;
        font-size: 2.2rem;
      }
    }

    button {
      cursor: pointer;
      padding: 11px 45px;
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
    }
  }

  .heroyoga {
    position: absolute;
    top: 10px;
    right: 0;
    height: 0;
    display: grid;
    place-items: center;
    img {
      max-width: 100%;
    }

    @media (max-width: 830px) {
      position: relative;
      height: auto;
      top: 0;
    }
  }
`;
