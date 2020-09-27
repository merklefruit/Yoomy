import React, { useEffect } from "react";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Api calls
import { fetchCourses } from "../../../actions";

// Styled components
import { Container } from "../../../styles/globalStyles";
import { ListContainer } from "../../../styles/_app/istruttoriStyles.js";

const CalendarioList = ({ isLoadingCourses, courses, fetchCourses }) => {
  useEffect(() => {
    fetchCourses();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <ListContainer>
        <ul>
          {courses
            ? courses.map((course) => (
                <li key={course.id}>
                  <h3>{course.name}</h3>
                  <p>Level: {course.level}</p>
                  <p>Intensity: {course.intensity}</p>
                  <p>Description: {course.description}</p>
                </li>
              ))
            : "Caricamento..."}
        </ul>
      </ListContainer>
    </Container>
  );
};

CalendarioList.propTypes = {
  isLoadingCourses: PropTypes.bool,
  fetchCourses: PropTypes.func.isRequired,
  courses: PropTypes.array,
};

const mapStateToProps = (state) => ({
  isLoadingCourses: state.api.isLoadingCourses,
  courses: state.api.courses,
});

export default connect(mapStateToProps, { fetchCourses })(CalendarioList);
