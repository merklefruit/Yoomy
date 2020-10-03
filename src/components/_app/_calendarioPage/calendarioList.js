import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// DayJS
import DayJS from "react-dayjs";

// Nice dates
import { format, formatISO } from "date-fns";
import { it } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Api calls
import { fetchDailyEvents } from "../../../actions";

// Styled components
import { Container } from "../../../styles/globalStyles";
import {
  CalendarSection,
  EventCard,
  Picker,
  EventGridSection,
} from "../../../styles/_app/calendarStyles.js";

const CalendarioList = ({ fetchDailyEvents, dailyEvents }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (date !== null) {
      fetchDailyEvents(formatISO(date));
    }
  }, [date, fetchDailyEvents]);

  return (
    <Container>
      <CalendarSection>
        <Picker>
          <DatePickerCalendar date={date} onDateChange={setDate} locale={it} />
        </Picker>
        <div className="horizontal">
          <EventGridSection>
            <h2>
              {dailyEvents && dailyEvents.length !== 0
                ? date &&
                  `Eventi di ${format(date, "iiii d MMMM yyyy", {
                    locale: it,
                  })}:`
                : date &&
                  dailyEvents &&
                  `Nessun evento programmato per ${format(
                    date,
                    "iiii d MMMM yyyy",
                    {
                      locale: it,
                    }
                  )}.`}
              {!date && "Seleziona un giorno sul calendario"}
            </h2>

            {dailyEvents && date
              ? dailyEvents.map((event) => (
                  <EventCard
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    }}
                    key={event.id}
                  >
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
                        <DayJS
                          date={event.startDate}
                          element="span"
                          format="HH:mm"
                        />{" "}
                        alle{" "}
                        <DayJS
                          date={event.endDate}
                          element="span"
                          format="HH:mm"
                        />
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
              : " "}
          </EventGridSection>
        </div>
      </CalendarSection>
    </Container>
  );
};

CalendarioList.propTypes = {
  fetchDailyEvents: PropTypes.func.isRequired,
  dailyevents: PropTypes.array,
};

const mapStateToProps = (state) => ({
  dailyEvents: state.api.dailyEvents,
});

export default connect(mapStateToProps, { fetchDailyEvents })(CalendarioList);
