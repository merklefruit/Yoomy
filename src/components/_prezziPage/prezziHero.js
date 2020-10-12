import React from "react";

// Styled components
import { Container, Headline } from "../../styles/globalStyles";
import { HeroContent } from "../../styles/priceStyles";

const PrezziHero = () => {
  return (
    <Container>
      <Headline>
        <h1>1 Credito in più gratis col primo acquisto</h1>
      </Headline>
      <HeroContent>
        <p>
          I <b>Crediti</b> sono una valuta virtuale di Yoomy. <br />
          Puoi acquistare i crediti ed usarli per iscriverti agli eventi Live
          che vuoi seguire. Un evento può richiedere un numero arbitrario di
          crediti che dipende dalla durata, dalla popolarità e dall'orario dello
          stesso. <br />
        </p>
      </HeroContent>
    </Container>
  );
};

export default PrezziHero;
