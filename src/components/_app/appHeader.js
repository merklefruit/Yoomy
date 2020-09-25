import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

// Styled components
import { Container, FlexRow } from "../../styles/globalStyles";
import {
  CustomHeader,
  HeaderNav,
  LinkSection,
  Menu,
} from "../../styles/_app/appLayoutStyles";

// Hamburger Menu
import { Spiral as Hamburger } from "hamburger-react";

function AppHeader({ toggleMenu, setToggleMenu, logout, isAuthenticated }) {
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
                <span>Yooga.</span>
              </Link>
            </motion.div>
            <LinkSection></LinkSection>
          </FlexRow>
          <FlexRow>
            <LinkSection>
              <Link to="/app/per-te">
                <p>Per Te</p>
              </Link>
              <Link to="/app/istruttori">
                <p>Istruttori</p>
              </Link>
              <Link to="/app/calendario">
                <p>Calendario</p>
              </Link>
              <Link to="/app/account">
                <p>Account</p>
              </Link>
              <Link to="/" onClick={() => logout()}>
                <p>Logout</p>
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

AppHeader.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(AppHeader);