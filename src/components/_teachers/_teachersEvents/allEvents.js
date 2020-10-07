import React, { useEffect } from "react";
import DayJS from "react-dayjs";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchEvents } from "../../../actions";

// Styled components
import { TeacherSection } from "../../../styles/_teachers/teachersHomeStyles";
import { EventList } from "../../../styles/_teachers/teacherEventStyles";

const AllEvents = ({ user, events, fetchEvents, setCurrentlyEditing }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <>
      <TeacherSection>
        <h2>Tutti i tuoi prossimi eventi</h2>
        <p>
          Premi sul pulsante{" "}
          <span role="img" aria-label="lens">
            🔍
          </span>
          per vedere e modificare le informazioni di un evento.
        </p>
      </TeacherSection>
      <EventList>
        {events && user && (
          <table>
            <thead>
              <tr>
                <th>Corso</th>
                <th>Data di inizio</th>
                <th>Durata</th>
                <th>Partecipanti</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {events
                .filter((event) => event.teacher.id === user.teacher_id)
                .reverse()
                .map((event) => (
                  <tr key={event.id}>
                    <td>{event.course.name}</td>

                    <td>
                      <DayJS
                        date={event.startDate}
                        element="span"
                        format="D/MM/YYYY HH:mm"
                      ></DayJS>
                    </td>

                    <td>{event.duration} min</td>

                    <td>{event.participants.length}</td>

                    <td>
                      <button
                        onClick={() => {
                          setCurrentlyEditing(null);
                          setCurrentlyEditing(event);
                        }}
                      >
                        <span role="img" aria-label="lens">
                          🔍
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </EventList>
    </>
  );
};

AllEvents.propTypes = {
  user: PropTypes.object,
  events: PropTypes.array,
  fetchEvents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  events: state.api.events,
});

export default connect(mapStateToProps, { fetchEvents })(AllEvents);
