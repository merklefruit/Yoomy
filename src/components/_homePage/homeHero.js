import React from "react";

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
            <Button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              Prova per 7 giorni
            </Button>
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
