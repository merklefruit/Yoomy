import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Avatar from "react-avatar";

// Redux
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

function AppHeader({ toggleMenu, setToggleMenu, logout, user }) {
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
                <span className="logo">Yoomy.</span>
              </Link>
            </motion.div>
            <LinkSection></LinkSection>
          </FlexRow>
          <FlexRow>
            <LinkSection>
              <NavLink to="/app/per-te">
                <p>Per Te</p>
              </NavLink>
              <NavLink to="/app/istruttori">
                <p>Istruttori</p>
              </NavLink>
              <NavLink to="/app/calendario">
                <p>Calendario</p>
              </NavLink>
              <div className="avatar">
                <Link to="/app/account">
                  <Avatar name={`${user.name[0]} ${user.surname[0]}`} size="45" color="#BCE0E6" round={true} />
                </Link>
              </div>
            </LinkSection>
            <Menu>
              <Hamburger
                aria-label="hamburger menu"
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
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps, { logout })(AppHeader);
