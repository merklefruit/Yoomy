import React from "react";
import { Link } from "react-router-dom";
import DayJS from "react-dayjs";
import { EventCard } from "../../styles/_app/calendarStyles";

const Event = ({ event }) => {
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
          <button className="button iscriviti">Iscriviti</button>
          <button className="button scopri">Informazioni</button>
        </div>
      </div>
    </EventCard>
  );
};

export default Event;
