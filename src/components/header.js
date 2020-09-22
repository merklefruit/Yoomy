import React from "react";
import { Link } from "react-router-dom";

// Styled components
import { Container, FlexRow } from "../styles/globalStyles";
import {
  CustomHeader,
  HeaderNav,
  LinkSection,
  Menu,
} from "../styles/layoutStyles";

function Header({ toggleMenu, setToggleMenu }) {
  return (
    <CustomHeader
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <HeaderNav>
          <FlexRow>
            <div>
              <Link to="/">
                <span>Yooga.</span>
              </Link>
            </div>
            <LinkSection>
              <Link to="/">
                <p>Scopri</p>
              </Link>
              <Link to="/">
                <p>Prenota</p>
              </Link>
              <Link to="/">
                <p>Contatti</p>
              </Link>
            </LinkSection>
          </FlexRow>
          <FlexRow>
            <LinkSection>
              <Link to="/">
                <p>Login</p>
              </Link>
              <Link to="/">
                <p>Registrati</p>
              </Link>
            </LinkSection>
            <Menu>
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <span></span>
                <span className="middle-dash"></span>
                <span></span>
              </button>
            </Menu>
          </FlexRow>
        </HeaderNav>
      </Container>
    </CustomHeader>
  );
}

export default Header;
