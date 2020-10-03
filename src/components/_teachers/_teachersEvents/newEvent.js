import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { formatISO } from "date-fns";

// UI Components
import Select from "react-select";
import { it } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import { useDateInput } from "react-nice-dates";
import "react-nice-dates/build/style.css";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createEvent } from "../../../actions";

// Styled components
import {
  TeacherSection,
  EventForm,
} from "../../../styles/_teachers/teachersHomeStyles";

const NewEvent = ({ user, teachers, courses, createEvent }) => {
  const [startDate, setStartDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [selectCourses, setSelectCourses] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getCourses = () => {
      const courses_options = [];
      teachers
        .filter((teacher) => user.teacher_id === teacher.id)[0]
        .courses.map((course) => {
          courses_options.push({ value: course.id, label: course.name });
          return 1;
        });
      setSelectCourses(courses_options);
    };

    if (user && teachers && courses) {
      getCourses();
    }
  }, [teachers, courses, user]);

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

    const new_event = {
      course: selectedCourse.value,
      teacher: user.teacher_id,
      startDate: formatISO(startDate),
      endDate: formatISO(endTime),
      description: description,
    };

    createEvent(new_event);
  };

  return (
    <TeacherSection>
      <h2>Crea un evento</h2>
      <EventForm>
        {user && teachers && courses ? (
          <form>
            <h3>Corso:</h3>
            <Select
              options={selectCourses}
              name="course"
              onChange={setSelectedCourse}
            />

            <h3>Data e ora:</h3>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>Il giorno </p>
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
                    style={{ width: 150 }}
                    {...inputProps}
                  />
                )}
              </DatePicker>
              <p>Dalle </p>
              <input
                required
                className="input"
                style={{ marginLeft: 16, width: 80 }}
                {...startTimeInputProps}
              />
              <p>Alle </p>
              <input
                required
                className="input"
                style={{ marginLeft: 16, width: 80 }}
                {...endTimeInputProps}
              />
            </div>
            <div>
              <h3>Descrizione:</h3>
              <textarea
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
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
  user: PropTypes.object,
  teachers: PropTypes.array,
  courses: PropTypes.array,
  createEvent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  teachers: state.api.teachers,
  courses: state.api.courses,
});

export default connect(mapStateToProps, { createEvent })(NewEvent);
