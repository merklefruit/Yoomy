import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Styled components
import { Container, FlexRow } from "../styles/globalStyles";
import {
  CustomHeader,
  HeaderNav,
  LinkSection,
  Menu,
} from "../styles/layoutStyles";

// Hamburger Menu
import { Spiral as Hamburger } from "hamburger-react";

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
            <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
              <Link to="/">
                <span>Yoomy.</span>
              </Link>
            </motion.div>
            <LinkSection>
              {/* <Link to="/manifesto">
                <p>Manifesto</p>
              </Link> */}
              <Link to="/beta">
                <p>Beta</p>
              </Link>
              <Link to="/prezzi">
                <p>Prezzi</p>
              </Link>
              <Link to="/contatti">
                <p>Contatti</p>
              </Link>
            </LinkSection>
          </FlexRow>
          <FlexRow>
            <LinkSection>
              <Link to="/login">
                <p>Login</p>
              </Link>
              <Link to="/registrati">
                <p>Registrati</p>
              </Link>
            </LinkSection>
            <Menu>
              <Hamburger
                direction="right"
                toggled={toggleMenu}
                toggle={setToggleMenu}
              />
            </Menu>
          </FlexRow>
        </HeaderNav>
      </Container>
    </CustomHeader>
  );
}

export default Header;
