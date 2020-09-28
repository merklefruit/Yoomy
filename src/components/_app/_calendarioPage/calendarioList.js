import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// DayJS
import DayJS from "react-dayjs";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Api calls
import { fetchEvents } from "../../../actions";

// Styled components
import { Container } from "../../../styles/globalStyles";
import {
  CalendarContainer,
  EventCard,
} from "../../../styles/_app/calendarStyles.js";

const CalendarioList = ({ isLoadingEvents, events, fetchEvents }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <Container>
      <CalendarContainer>
        {events
          ? events.map((event) => (
              <EventCard key={event.id}>
                {/* <div className="card-photo">
                  <img src={event.teacher.picture} />
                </div> */}
                <div className="card-info">
                  <h3>Corso: {event.course.name} </h3>
                  <h4>
                    Con{" "}
                    <span>
                      {event.teacher.name} {event.teacher.surname}
                    </span>
                  </h4>
                  <p>
                    Quando:{" "}
                    <DayJS
                      date={event.startDate}
                      element="span"
                      format="dddd D MMMM YYYY"
                    />
                  </p>
                  <p>
                    Dalle{" "}
                    <DayJS
                      date={event.startDate}
                      element="span"
                      format="HH:mm"
                    />{" "}
                    alle{" "}
                    <DayJS
                      date={event.startDate}
                      element="span"
                      add={{ minutes: event.duration }}
                      format="HH:mm"
                    />
                  </p>
                  <p>
                    Durata: <span>{event.duration}</span> minuti
                  </p>
                </div>
                <div className="card-buttons">
                  <Link to="/app/">
                    <button className="b1">Più info</button>
                  </Link>{" "}
                  <br />
                  <Link to="/app/">
                    <button className="b2">Iscriviti</button>
                  </Link>
                </div>
              </EventCard>
            ))
          : ""}
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
