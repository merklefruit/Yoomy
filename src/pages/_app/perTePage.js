import React from "react";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Styled components
import { Container } from "../../styles/globalStyles";

const PerTePage = ({ user }) => {
  return (
    <Container>
      <h1>Novità per te</h1>
      <h3>Ciao {user.username}!</h3>
      <h3>Ecco cosa abbiamo preparato per te</h3>
    </Container>
  );
};

PerTePage.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(PerTePage);
