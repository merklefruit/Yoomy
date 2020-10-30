import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

// UI Components
import Select from "react-select";
import { formatISO } from "date-fns";
import { it } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import { useDateInput } from "react-nice-dates";
import "react-nice-dates/build/style.css";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createEvent } from "../../../actions";

// Styled components
import { TeacherSection } from "../../../styles/_teachers/teachersHomeStyles";
import { EventForm } from "../../../styles/_teachers/teacherEventStyles";

const NewEvent = ({
  teacher,
  teachers,
  courses,
  createEvent,
  setShowNewEvent,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [selectCourses, setSelectCourses] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [description, setDescription] = useState("");
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const getCourses = () => {
      const courses_options = [];
      teacher.courses.map((course) => {
        courses_options.push({ value: course.id, label: course.name });
        return true;
      });
      setSelectCourses(courses_options);
    };

    if (teacher && teachers && courses) {
      getCourses();
    }
  }, [teachers, courses, teacher]);

  const startTimeInputProps = useDateInput({
    date: startDate,
    format: "HH:mm",
    locale: it,
    onDateChange: setStartDate,
  });

  const endTimeInputProps = useDateInput({
    date: endTime,
    format: "HH:mm",
    locale: it,
    onDateChange: setEndTime,
  });

  const setDate = (date) => {
    setStartDate(date);
    setEndTime(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedCourse) {
      return toast.error("Per favore, specifica il corso");
    }
    if (!startDate || !endTime) {
      return toast.error("Per favore, specifica la data");
    }

    if (credits === null) {
      return toast.error("Per favore, inserisci il prezzo in crediti");
    }

    const new_event = {
      course: selectedCourse.value,
      credits: credits,
      teacher: teacher.id,
      startDate: formatISO(startDate),
      endDate: formatISO(endTime),
      description: description,
    };

    createEvent(new_event);
    setShowNewEvent(false);
  };

  return (
    <TeacherSection>
      <h2>Crea un evento</h2>
      <p>
        Ricordati che le informazioni dell'evento saranno rese pubbliche sul
        sito!
      </p>
      <EventForm>
        {teacher && teachers && courses ? (
          <form>
            <hr />
            <div className="flex">
              <h3>Corso:</h3>
              <div className="wrapper">
                <Select
                  options={selectCourses}
                  placeholder="Seleziona..."
                  isClearable
                  name="course"
                  onChange={setSelectedCourse}
                />
              </div>
            </div>
            <hr />

            <div className="flex">
              <h3>Data e ora:</h3>
              <div className="dataeora">
                <label>Il giorno </label>
                <DatePicker
                  date={startDate}
                  onDateChange={setDate}
                  locale={it}
                  format="dd/MM/yyyy"
                >
                  {({ inputProps, focused }) => (
                    <input
                      required
                      className={"input" + (focused ? " -focused" : "")}
                      {...inputProps}
                    />
                  )}
                </DatePicker>
              </div>
            </div>

            <div className="flex">
              <div className="dataeora">
                <label className="lab1">Dalle </label>
                <div className="flex">
                  <input required className="dalle" {...startTimeInputProps} />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="dataeora">
                <label className="lab2">Alle </label>
                <div className="flex">
                  <input required className="alle" {...endTimeInputProps} />
                </div>
              </div>
            </div>
            <hr />
            <div className="flex">
              <h3 style={{ position: "absolute" }}>Descrizione:</h3>

              <div className="wrapper">
                <textarea
                  name="description"
                  placeholder="Scrivi..."
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <hr />
            <div className="flex" style={{ paddingBottom: "15px" }}>
              <h3 style={{ position: "absolute" }}>Crediti:</h3>

              <div className="wrapper">
                <input
                  style={{ marginTop: "8px" }}
                  name="credits"
                  type="number"
                  placeholder="esempio: 4"
                  onChange={(e) => setCredits(parseInt(e.target.value))}
                />
              </div>
            </div>
            <hr />
            <button type="submit" onClick={handleSubmit}>
              Crea Evento
            </button>
          </form>
        ) : (
          "Caricamento..."
        )}
      </EventForm>
    </TeacherSection>
  );
};

NewEvent.propTypes = {
  teacher: PropTypes.object,
  teachers: PropTypes.array,
  courses: PropTypes.array,
  createEvent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  teacher: state.auth.teacher,
  teachers: state.api.teachers,
  courses: state.api.courses,
});

export default connect(mapStateToProps, { createEvent })(NewEvent);
