import React from "react";
import { Link } from "react-router-dom";

// Styled components
import { Container, FlexRow } from "../styles/globalStyles";
import { CustomFooter, FooterNav, LinkSection } from "../styles/layoutStyles";

function Footer() {
  return (
    <CustomFooter
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <hr />
        <FooterNav>
          <div />
          <FlexRow>
            <div>
              <span style={{ visibility: "hidden" }}>Yooga.</span>
            </div>
            <LinkSection>
              <Link to="/scopri">
                <p>Scopri</p>
              </Link>
              <Link to="/ispirazione">
                <p>Ispirazione</p>
              </Link>
              <Link to="/contatti">
                <p>Contatti</p>
              </Link>
            </LinkSection>
          </FlexRow>
        </FooterNav>
      </Container>
    </CustomFooter>
  );
}

export default Footer;
