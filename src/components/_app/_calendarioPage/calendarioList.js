import React, { useEffect } from "react";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Api calls
import { fetchEvents } from "../../../actions";

// Styled components
import { Container } from "../../../styles/globalStyles";
import { ListContainer } from "../../../styles/_app/istruttoriStyles.js";

const CalendarioList = ({ isLoadingEvents, events, fetchEvents }) => {
  useEffect(() => {
    fetchEvents();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <ListContainer>
        <ul>
          {events
            ? events.map((event) => (
                <li key={event.id}>
                  <h3>Evento ID: {event.id} </h3>
                  <p>Corso ID: {event.course}</p>
                  <p>Partecipanti ID: {event.participants}</p>
                  <p>Data di inizio: {event.startDate}</p>
                  <p>Durata (min): {event.duration}</p>
                </li>
              ))
            : ""}
        </ul>
      </ListContainer>
    </Container>
  );
};

CalendarioList.propTypes = {
  isLoadingEvents: PropTypes.bool,
  fetchEvents: PropTypes.func.isRequired,
  events: PropTypes.array,
};

const mapStateToProps = (state) => ({
  isLoadingEvents: state.api.isLoadingEvents,
  events: state.api.events,
});

export default connect(mapStateToProps, { fetchEvents })(CalendarioList);
