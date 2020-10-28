import React, { useState, useEffect } from "react";
import axios from "axios";
import { EVENTS_URL } from "../../../helpers/config";

// Dates
import { format } from "date-fns";
import { it } from "date-fns/locale";

// Styled components
import { Container } from "../../../styles/globalStyles";
import { GridSection, GridHeading } from "../../../styles/_app/perTeStyles";

// Assets
import { CgMediaLive } from "react-icons/cg";

const PerTeGridSection = ({ user }) => {
  const [ongoingEvents, setOngoingEvents] = useState(null);
  useEffect(() => {
    try {
      const url = EVENTS_URL + "/ongoing";
      const getOngoingEvents = () => {
        axios
          .get(url)
          .then((events) => {
            if (events.status === 200) setOngoingEvents(events.data);
          })
          .catch((err) => setOngoingEvents(null));
      };

      getOngoingEvents();
    } catch (err) {
      console.log(err.response);
    }
  }, [user]);

  return (
    <Container>
      <GridHeading>
        <h2>
          <CgMediaLive className="live-icon" /> Lezioni Live ora
        </h2>
      </GridHeading>
      <GridSection>
        <div className="live-ora card">
          {ongoingEvents !== null ? (
            ongoingEvents.map((event) => (
              <div className="event" key={event.id}>
                <h4>
                  {event.teacher.name} {event.teacher.surname}:{" "}
                  <b>{event.course.name}</b> dalle{" "}
                  {format(new Date(event.startDate), "HH:mm", {
                    locale: it,
                  })}{" "}
                  alle{" "}
                  {format(new Date(event.endDate), "HH:mm", {
                    locale: it,
                  })}
                </h4>
                <button>Unisciti</button>
              </div>
            ))
          ) : (
              <div>
                <h4>Nessuna lezione live al momento.</h4>
              </div>
            )}
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

export default PerTeGridSection;