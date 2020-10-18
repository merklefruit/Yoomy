import React from "react";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Styled components
import { Container } from "../../../styles/globalStyles";
import { GridSection, GridHeading } from "../../../styles/_app/perTeStyles";

// Assets
import { CgMediaLive } from "react-icons/cg";

const PerTeGridSection = ({ user }) => {
  return (
    <Container>
      <GridHeading>
        <h2>
          <CgMediaLive /> Lezioni Live ora
        </h2>
      </GridHeading>
      <GridSection>
        <div className="live-ora">
          <h3>Lista eventi live</h3>
        </div>
        <div className="crediti">
          <h3>Crediti residui</h3>
        </div>
        <div className="obiettivo">
          <h3>Obiettivo settimanale</h3>
        </div>
      </GridSection>
    </Container>
  );
};

PerTeGridSection.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(PerTeGridSection);
