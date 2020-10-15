import React, { useState, useEffect } from "react";

// Components
import Event from "../Event";

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
                  <Event key={event.id} event={event} />
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
