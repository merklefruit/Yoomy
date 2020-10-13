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
                    <div className="left">
                      <div className="upper">
                        <div className="photo">
                          <img
                            src={event.teacher.picture}
                            alt={event.teacher.name}
                          />
                        </div>
                        <div className="info">
                          <h4>{event.course.name}</h4>
                          <h3>
                            Con {event.teacher.name} {event.teacher.surname}
                          </h3>
                        </div>
                      </div>
                      <div className="lower">
                        <p>Livello {event.course.level}</p>
                        <p>Intensità {event.course.intensity}</p>
                        <p>Durata {event.duration} min</p>
                      </div>
                    </div>
                    <div className="right">
                      <div className="time-square">
                        <DayJS
                          date={event.startDate}
                          element="span"
                          format="HH:mm"
                        />
                      </div>
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
  dailyEvents: PropTypes.array,
};

const mapStateToProps = (state) => ({
  dailyEvents: state.api.dailyEvents,
});

export default connect(mapStateToProps, { fetchDailyEvents })(CalendarioList);
