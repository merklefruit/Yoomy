import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DayJS from "react-dayjs";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchEvents } from "../../../actions";

// Styled components
import { EventList } from "../../../styles/_teachers/teacherEventStyles";
import { TeacherSection } from "../../../styles/_teachers/teachersHomeStyles";

const AllEvents = ({ user, events, fetchEvents }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <>
      <TeacherSection>
        <h2>Tutti i tuoi eventi</h2>
        <p>
          Premi sul pulsante "Edita" per modificare le informazioni di un evento
        </p>
      </TeacherSection>
      <EventList>
        {events && user ? (
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
                    <td style={{ color: "blue" }}>
                      <Link to={`/teachers/eventi/edit/${event.id}`}>
                        Edita
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          "Caricamento..."
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
