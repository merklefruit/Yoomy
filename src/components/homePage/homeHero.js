import React from "react";

// Styled components
import { Container } from "../../styles/globalStyles";
import { Row, HeroCol1, HeroCol2 } from "../../styles/homeStyles";

function HomeHero() {
  return (
    <>
      <Container>
        <Row flex>
          <HeroCol1>
            <h1>Pratica lo Yoga ovunque e in qualsiasi momento.</h1>
            <button>Prova gratis per 7 giorni</button>
          </HeroCol1>
          <HeroCol2>
            <img
              src={require("../../assets/images/hero-image.jpg")}
              alt="Yooga."
            />
          </HeroCol2>
        </Row>
      </Container>
    </>
  );
}

export default HomeHero;
