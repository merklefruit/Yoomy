import React from "react";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
  return (
    <Container>
      {user.events.lentgh !== 0 && (
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
                  Buongiorno {user.username}! <br />
                  La tua prossima lezione è{" "}
                  <span>{user.events[0].course.name}</span> con{" "}
                  <span>
                    {user.events[0].teacher.name}{" "}
                    {user.events[0].teacher.surname}
                  </span>
                  . <br />
                  Inizia{" "}
                  <span>
                    {formatDistance(
                      new Date(user.events[0].startDate),
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
                <img src={user.events[0].teacher.picture} alt="" />
              </div>
            </div>
            <div className="calendar">
              <Calendar />
              <button>
                Vai al <b>calendario</b>
              </button>
            </div>
          </NextEvents>
        </>
      )}
    </Container>
  );
};

PerTeNextEvents.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(PerTeNextEvents);
