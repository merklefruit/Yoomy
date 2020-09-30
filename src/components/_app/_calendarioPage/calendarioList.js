import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// DayJS
import DayJS from "react-dayjs";

// Nice dates
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";

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
  Picker,
} from "../../../styles/_app/calendarStyles.js";

// Loading icon
import { AiOutlineLoading } from "react-icons/ai";

const CalendarioList = ({ events, fetchEvents }) => {
  const [date, setDate] = useState();
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <Container>
      <CalendarContainer>
        <Picker>
          <DatePickerCalendar date={date} onDateChange={setDate} locale={it} />
          <p>{date && format(date, "dd MMMM yyyy", { locale: it })}</p>
        </Picker>
        {events ? (
          events.map((event) => (
            <EventCard key={event.id}>
              {/* <div className="card-photo">
                  <img src={event.teacher.picture} />
                </div> */}
              <div className="card-info">
                <h3>{event.course.name} </h3>
                <h4>
                  Con{" "}
                  <Link to={`/app/istruttore/${event.teacher.id}`}>
                    <span>
                      {event.teacher.name} {event.teacher.surname}
                    </span>
                  </Link>
                </h4>
                <p>
                  Quando: il{" "}
                  <DayJS
                    date={event.startDate}
                    element="span"
                    format="D/MM/YYYY"
                  />
                </p>
                <p>
                  Dalle{" "}
                  <DayJS date={event.startDate} element="span" format="HH:mm" />{" "}
                  alle{" "}
                  <DayJS date={event.endDate} element="span" format="HH:mm" />
                </p>
                <p>
                  Durata: <span>{event.duration} </span> minuti
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
        ) : (
          <motion.div
            id="spinner"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.4 }}
            style={{
              fontSize: "2rem",
              color: "black",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiOutlineLoading />
          </motion.div>
        )}
      </CalendarContainer>
    </Container>
  );
};

CalendarioList.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  events: PropTypes.array,
};

const mapStateToProps = (state) => ({
  events: state.api.events,
});

export default connect(mapStateToProps, { fetchEvents })(CalendarioList);
