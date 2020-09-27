import React, { useEffect } from "react";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Api calls
import { fetchEvents } from "../../../actions";

// Styled components
import { Container } from "../../../styles/globalStyles";
import { CalendarContainer } from "../../../styles/_app/calendarStyles.js";

const CalendarioList = ({ isLoadingEvents, events, fetchEvents }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <Container>
      <CalendarContainer>
        <ul>
          {events
            ? events.map((event) => (
                <li key={event.id}>
                  <h3>Corso: {event.course.name} </h3>
                  <p>Data di inizio: {event.startDate}</p>
                  <p>Durata: {event.duration} minuti</p>
                </li>
              ))
            : ""}
        </ul>
      </CalendarContainer>
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
