import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

// Styled components
import { Container, FlexRow } from "../../styles/globalStyles";
import {
  CustomFooter,
  FooterNav,
  LinkSection,
} from "../../styles/_app/appLayoutStyles";

function AppFooter({ isAuthenticated, logout }) {
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
            <LinkSection footer>
              <Link to="/app/account">
                <p>Account</p>
              </Link>
              <Link to="/" onClick={() => logout()}>
                <p>Logout</p>
              </Link>
            </LinkSection>
          </FlexRow>
        </FooterNav>
      </Container>
    </CustomFooter>
  );
}

AppFooter.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(AppFooter);
