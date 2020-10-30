import React from "react";
import { Link } from "react-router-dom";
import DayJS from "react-dayjs";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import Modal from "../modal";

// Styled components
import { EventCard } from "../../styles/_app/calendarStyles";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { subscribeUser } from "../../actions";

const Event = ({ user, event, subscribeUser }) => {
  const handleModal = () => {
    subscribeUser({
      user_id: user.id,
      event_id: event.id,
      teacher_id: event.teacher.id,
    });
  };

  return (
    <EventCard key={event.id}>
      <div className="card-time">
        <div className="time-square">
          <DayJS date={event.startDate} element="span" format="HH:mm" />
        </div>
      </div>
      <div className="card-info">
        <div className="upper">
          <div className="photo">
            <img src={event.teacher.picture} alt={event.teacher.name} />
          </div>
          <div className="info">
            <h4>{event.course.name}</h4>
            <h3>
              Con{" "}
              <Link to={`/app/istruttore/${event.teacher.id}`}>
                {event.teacher.name} {event.teacher.surname}
              </Link>
            </h3>
          </div>
        </div>
        <div className="lower">
          <p>Livello {event.course.level}</p>
          <p>Intensità {event.course.intensity}</p>
          <p>Durata {event.duration} minuti</p>
        </div>
      </div>
      <div className="card-buttons">
        <div className="buttons">
          <Modal
            className="button iscriviti"
            trigger="Iscriviti"
            title="Confermi l'iscrizione?"
            actionText="Conferma iscrizione"
            action={() => handleModal()}
            content={`Sei sicuro di volerti iscrivere a: "${
              event.course.name
            }" del ${format(new Date(event.startDate), "dd MMMM", {
              locale: it,
            })} alle ${format(new Date(event.startDate), "HH:mm", {
              locale: it,
            })}?
            Confermando l'iscrizione, verranno scalati ${
              event.credits
            } crediti dal tuo account.
            30 minuti prima dell'inizio della lezione riceverai il link per partecipare all'evento.
            `}
          />
          <button className="button scopri">Informazioni</button>
        </div>
      </div>
    </EventCard>
  );
};

Event.propTypes = {
  subscribeUser: PropTypes.func.isRequired,
  user: PropTypes.object,
  event: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { subscribeUser })(Event);
