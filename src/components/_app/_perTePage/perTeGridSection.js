import React from "react";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Dates
import { format } from "date-fns";
import { it } from "date-fns/locale";

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
          <CgMediaLive className="live-icon" /> Lezioni Live ora
        </h2>
      </GridHeading>
      <GridSection>
        <div className="live-ora card">
          {/* map ongoing events here */}
          <div className="event">
            <h4>
              {user.events[0].teacher.name} {user.events[0].teacher.surname}:{" "}
              <b>{user.events[0].course.name}</b> dalle{" "}
              {format(new Date(user.events[0].startDate), "HH:mm", {
                locale: it,
              })}{" "}
              alle{" "}
              {format(new Date(user.events[0].endDate), "HH:mm", {
                locale: it,
              })}
            </h4>
            <button>Unisciti</button>
          </div>
          <div className="event">
            <h4>
              {user.events[0].teacher.name} {user.events[0].teacher.surname}:{" "}
              <b>{user.events[0].course.name}</b> dalle{" "}
              {format(new Date(user.events[0].startDate), "HH:mm", {
                locale: it,
              })}{" "}
              alle{" "}
              {format(new Date(user.events[0].endDate), "HH:mm", {
                locale: it,
              })}
            </h4>
            <button>Unisciti</button>
          </div>
        </div>
        <div className="crediti card">
          <h3>Crediti residui</h3>
          <div className="inner">
            <h4>{user.credits}</h4>
            <button>Ricarica</button>
          </div>
        </div>
        <div className="obiettivo card">
          <h3>Obiettivo settimanale</h3>
          <div className="inner">
            <h4>1/3h</h4>
            <button>Personalizza</button>
          </div>
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
