import React from "react";

// Styled components
import { Container } from "../../styles/globalStyles";
import {
  Banner,
  BannerCard,
  InnerBannerSection,
} from "../../styles/homeStyles";

const HomeBanner = () => {
  return (
    <Banner>
      <Container>
        <InnerBannerSection>
          <div className="banner-cards">
            <BannerCard>
              <span></span>
              <h4>Professionale</h4>
              <p>Istruttori professionali con qualifiche in tutto il mondo</p>
            </BannerCard>
            <BannerCard>
              <span></span>
              <h4>Prima qualità</h4>
              <p>
                Gli eventi sono coordinati in modo da assicurarne la qualità
              </p>
            </BannerCard>
          </div>
          <div className="banner-cards">
            <BannerCard>
              <span></span>
              <h4>Flessibile</h4>
              <p>Allenati quando vuoi tu, senza perdere tempo</p>
            </BannerCard>
            <BannerCard>
              <span></span>
              <h4>Social</h4>
              <p>
                Vieni a conoscere di persona i nostri istruttori e stringi
                amicizie
              </p>
            </BannerCard>
          </div>
        </InnerBannerSection>
      </Container>
    </Banner>
  );
};

export default HomeBanner;
