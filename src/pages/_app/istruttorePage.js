import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Styled components
import Head from "../../components/head";
import { Container, Headline } from "../../styles/globalStyles";
import { TeacherFirstSection } from "../../styles/_app/istruttoreStyles";

import { AiOutlineHome } from "react-icons/ai";

const IstruttorePage = ({ teachers, match }) => {
  const [teacher, setTeacher] = useState(null);
  useEffect(() => {
    const filterObject = (obj, filter, filterValue) =>
      Object.keys(obj).reduce(
        (acc, val) =>
          obj[val][filter] !== filterValue
            ? acc
            : {
                ...acc,
                [val]: obj[val],
              },
        {}
      );
    if (!!teachers) {
      const teacherObject = filterObject(teachers, "_id", match.params.id);
      setTeacher(teacherObject[Object.keys(teacherObject)[0]]);
    }
  }, [teachers, match.params.id]);

  return (
    <>
      {teacher ? (
        <div>
          <Head title={`${teacher.name} ${teacher.surname}`} />
          <Container>
            <TeacherFirstSection>
              <div className="flex1">
                <Headline withHr>
                  <small>
                    <AiOutlineHome />
                    <Link to="/app/per-te">Home</Link> /{" "}
                    <Link to="/app/istruttori">Istruttori</Link> /{" "}
                    <Link to={`/app/istruttore/${teacher.id}`}>
                      {teacher.name} {teacher.surname}
                    </Link>
                  </small>
                  <h1>
                    {teacher.name} {teacher.surname}
                  </h1>
                  <h3>
                    {teacher.courses.map((course) => (
                      <Link to="/" key={course.id}>
                        {course.name} &middot;{" "}
                      </Link>
                    ))}
                  </h3>
                  <hr />
                </Headline>
                <div className="bio">
                  <p>{teacher.biography}</p>
                </div>
              </div>
              <div className="flex2">
                <div className="photo">
                  <img src={teacher.picture} alt="teacher profile" />
                </div>
                <div className="more"></div>
              </div>
            </TeacherFirstSection>
          </Container>

          <Container></Container>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

IstruttorePage.propTypes = {
  teachers: PropTypes.array,
};

const mapStateToProps = (state) => ({
  teachers: state.api.teachers,
});

export default connect(mapStateToProps)(IstruttorePage);
