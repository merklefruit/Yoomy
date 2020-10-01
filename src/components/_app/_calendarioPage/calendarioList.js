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
  const [date, setDate] = useState(null);

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
          <h3>
            Scegli un giorno nel calendario a sinistra, visualizza gli eventi
            per quel giorno e iscriviti all'evento che preferisci. <br />
            Per visualizzare tutte le info su un evento, premi "Più info"
          </h3>
        </div>
      </CalendarSection>

      <EventGridSection>
        <h2>
          {dailyEvents && dailyEvents.length !== 0
            ? date &&
              `Eventi di ${format(date, "iiii dd MMMM yyyy", { locale: it })}:`
            : date &&
              `Nessun evento programmato per ${format(
                date,
                "iiii dd MMMM yyyy",
                {
                  locale: it,
                }
              )}.`}

          {/* {date &&
          `Eventi di ${format(date, "iiii dd MMMM yyyy", { locale: it })}:`} */}
        </h2>

        {dailyEvents
          ? dailyEvents.map((event) => (
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
                    <DayJS
                      date={event.startDate}
                      element="span"
                      format="HH:mm"
                    />{" "}
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
          : " "}
      </EventGridSection>
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
