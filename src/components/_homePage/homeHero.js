import React from "react";
import { Link } from "react-router-dom";

// Styled components
import { Container, Button } from "../../styles/globalStyles";
import { HomeRow, HeroCol1, HeroCol2 } from "../../styles/homeStyles";

// SVG
import HeroImg from "../../assets/svg/HeroImg";

function HomeHero() {
  return (
    <>
      <Container>
        <HomeRow flex>
          <HeroCol1>
            <h1>Pratica lo Yoga ovunque e in qualsiasi momento.</h1>
            <Link to="/scopri">
              <Button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                Prova gratis
              </Button>
            </Link>
          </HeroCol1>
          <HeroCol2>
            <HeroImg />
          </HeroCol2>
        </HomeRow>
      </Container>
    </>
  );
}

export default HomeHero;
