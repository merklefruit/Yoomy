import React from "react";
import { Link } from "react-router-dom";

// Dates
import { formatDistance } from "date-fns";
import { it } from "date-fns/locale";

// Styled components
import { Container } from "../../../styles/globalStyles";
import {
  NextEvents,
  NextEventsHeading,
} from "../../../styles/_app/perTeStyles";

// Assets
import Calendar from "../../../assets/svg/Calendar";
import { BsCalendar } from "react-icons/bs";

const PerTeNextEvents = ({ user }) => {
  const nextEvents = [];
  const getNextEvents = () =>
    user.events.map((event) => {
      if (new Date(event.startDate) >= new Date()) {
        nextEvents.push(event);
      }
      return true;
    });
  getNextEvents();

  return (
    <Container>
      {nextEvents && nextEvents.length !== 0 && (
        <>
          <NextEventsHeading>
            <h2>
              <BsCalendar /> Prossima Lezione
            </h2>
          </NextEventsHeading>

          <NextEvents>
            <div className="event-card">
              <div>
                <h3>
                  Buongiorno{" "}
                  <span role="img" aria-label="stars">
                    ✨{" "}
                  </span>
                  <br />
                  La tua prossima lezione è{" "}
                  <span>{nextEvents[0].course.name}</span> con{" "}
                  <span>
                    {nextEvents[0].teacher.name} {nextEvents[0].teacher.surname}
                  </span>
                  . <br />
                  Inizia{" "}
                  <span>
                    {formatDistance(
                      new Date(nextEvents[0].startDate),
                      new Date(),
                      { addSuffix: true, locale: it }
                    )}
                  </span>
                  .
                </h3>
                <button>
                  Vai alla <b>lezione</b>
                </button>
              </div>
              <div className="picture-container">
                <img src={nextEvents[0].teacher.picture} alt="" />
              </div>
            </div>
            <div className="calendar">
              <Calendar />
              <Link to="/app/calendario">
                <button>
                  Vai al <b>calendario</b>
                </button>
              </Link>
            </div>
          </NextEvents>
        </>
      )}
    </Container>
  );
};

export default PerTeNextEvents;
