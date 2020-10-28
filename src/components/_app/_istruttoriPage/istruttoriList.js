import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Styled components
import { Container } from "../../../styles/globalStyles";
import { ListContainer } from "../../../styles/_app/istruttoriStyles.js";

const IstruttoriList = ({ isLoadingTeachers, teachers }) => {
  return (
    <Container>
      <ListContainer>
        {!isLoadingTeachers
          ? teachers
            ? teachers.map((teacher) => (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                key={teacher.id}
                className="card"
              >
                <Link to={`/app/istruttore/${teacher.id}`}>
                  <img src={teacher.picture} alt="profile" />
                </Link>
                <div className="card-content">
                  <Link to={`/app/istruttore/${teacher.id}`}>
                    <h3>
                      {teacher.name} {teacher.surname}
                    </h3>
                  </Link>
                  <div className="courses">
                    {teacher.courses.map((course) => (
                      <Link to="/" key={course.id}>
                        <p key={course.id}>{course.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
            : "Errore nel caricamento ... "
          : "Caricamento Istruttori ... "}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          className="card lastCard"
        >
          <h3>Molti altri in arrivo</h3>
          <h4>Stay Tuned</h4>
        </motion.div>
      </ListContainer>
    </Container>
  );
};

IstruttoriList.propTypes = {
  isLoadingTeachers: PropTypes.bool,
  teachers: PropTypes.array,
};

const mapStateToProps = (state) => ({
  isLoadingTeachers: state.api.isLoadingTeachers,
  teachers: state.api.teachers,
});

export default connect(mapStateToProps)(IstruttoriList);
