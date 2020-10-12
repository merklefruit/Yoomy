import React from "react";

// Styled components
import { Container } from "../../styles/globalStyles";
import { Banner } from "../../styles/priceStyles";

import Feat1Img from "../../assets/svg/Feat1Img";

const PrezziBanner = () => {
  return (
    <Banner>
      <Container>
        <section className="features">
          <div class="feature">
            <div className="feat-part image">
              <Feat1Img />
            </div>
            <div className="feat-part text">
              <h2>È tutto pronto. Manchi solo tu!</h2>
              <h3>Lesghere</h3>
            </div>
          </div>

          <div class="feature">
            <div className="feat-part text">
              <h2>LOL!</h2>
              <h3>
                Ciao questo è il testo che deve spiegare la prima feature
                interessante della pagina dei prezzi. Ciao questo è il testo che
                deve spiegare la prima feature interessante della pagina dei
                prezzi.
              </h3>
            </div>
            <div className="feat-part image">
              <Feat1Img />
            </div>
          </div>
        </section>
      </Container>
    </Banner>
  );
};

export default PrezziBanner;
