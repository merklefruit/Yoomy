import React from "react";
import Avatar from "react-avatar";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

// Styled components
import {
  HeaderFlex,
  TeacherHeaderContainer,
  TeacherStatus,
} from "../../styles/_teachers/teachersStyles";

// Icons
import { GoVerified } from "react-icons/go";
import { FaLock } from "react-icons/fa";

const TeachersHeader = ({ teacher, logout }) => {
  return (
    <TeacherHeaderContainer>
      <HeaderFlex>
        <div className="flex">
          <Avatar
            name={`${teacher.name[0]} ${teacher.surname[0]}`}
            size="45"
            color="#f4a261"
            className="avatar"
            round={true}
          />
          <h2>
            Buongiorno, {teacher.name} {teacher.surname}
          </h2>
        </div>
        <div className="right">
          <button onClick={logout}>Logout</button>
        </div>
      </HeaderFlex>
      <TeacherStatus>
        <GoVerified />
        <p>Istruttore</p>
        <FaLock />
        <p>Autenticato</p>
      </TeacherStatus>
    </TeacherHeaderContainer>
  );
};

TeachersHeader.propTypes = {
  teacher: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  teacher: state.auth.teacher,
});

export default connect(mapStateToProps, { logout })(TeachersHeader);
