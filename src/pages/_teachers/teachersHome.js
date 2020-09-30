import React from "react";
import { Link } from "react-router-dom";
import DayJS from "react-dayjs";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

// Nice dates
import { it } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";

// Styled component
import TeachersLayout from "../../components/_teachers/teachersLayout";
import { Container, Headline } from "../../styles/globalStyles";
import {
  TeachersWelcome,
  Picker,
  Buttons,
  Lessons,
} from "../../styles/_teachers/teachersStyles";

const TeachersHome = ({ user, logout }) => {
  return (
    <TeachersLayout>
      <Container>
        <Headline>
          <p>
            {user.username} — {user.email} —{" "}
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </p>
          <h1>Area Istruttore</h1>
        </Headline>
        <TeachersWelcome>
          <h2>Benvenuto {user.username}.</h2>
          <h2>Questa è la tua area privata.</h2>
          <h3>
            Guarda questo <a href="/">breve tutorial</a> per scoprire come
            utilizzare tutte le funzionalità.
          </h3>
        </TeachersWelcome>
        <hr />
        <Buttons>
          <button>Crea un evento</button>
          <button>Modifica un evento</button>
          <button>Rimuovi un evento</button>
        </Buttons>
        <hr />
        <Picker>
          <DatePickerCalendar locale={it} />
        </Picker>
        <Lessons>
          <h2>Tutti tuoi eventi:</h2>
          <ul>
            {user.events.map((event) => (
              <li key={event.id}>
                <p>
                  <span>{event.course.name}</span> del{" "}
                  <DayJS date={event.startDate} format={"DD/MM/YYYY"} /> dalle{" "}
                  <DayJS date={event.startDate} format={"HH:mm"} /> alle{" "}
                  <DayJS date={event.endDate} format={"HH:mm"} />
                </p>
              </li>
            ))}
          </ul>
        </Lessons>
      </Container>
    </TeachersLayout>
  );
};

TeachersHome.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(TeachersHome);
