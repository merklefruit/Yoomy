import React from "react";

// Styled components
import { Container } from "../../../styles/globalStyles";
import {
  Banner,
  BannerCard,
  InnerBannerSection,
} from "../../../styles/_marketing/homeStyles";

// Icons
import {
  IoMdRose,
  IoMdRibbon,
  IoMdVideocam,
  IoIosCloudUpload,
} from "react-icons/io";

const HomeBanner = () => {
  return (
    <Banner>
      <Container>
        <InnerBannerSection>
          <div className="banner-cards">
            <BannerCard>
              <span>
                <IoMdRose />
              </span>
              <h4>Professionale</h4>
              <p>Istruttori con qualifiche internazionali</p>
            </BannerCard>
            <BannerCard>
              <span>
                <IoMdRibbon />
              </span>
              <h4>Prima qualità</h4>
              <p>
                Gli eventi sono coordinati in modo da assicurarne la qualità
              </p>
            </BannerCard>
          </div>
          <div className="banner-cards">
            <BannerCard>
              <span>
                <IoMdVideocam />
              </span>
              <h4>Flessibile</h4>
              <p>Allenati quando vuoi tu, senza perdere tempo</p>
            </BannerCard>
            <BannerCard>
              <span>
                <IoIosCloudUpload />
              </span>
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
