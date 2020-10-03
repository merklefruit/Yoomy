import React from "react";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

// Styled components
import { Headline } from "../../styles/globalStyles";
import {
  HeaderFlex,
  TeacherHeaderContainer,
  TeacherStatus,
} from "../../styles/_teachers/teachersStyles";

// Icons
import { GoVerified } from "react-icons/go";
import { FaLock } from "react-icons/fa";

const TeachersHeader = ({ user, logout }) => {
  return (
    <TeacherHeaderContainer>
      <Headline>
        <HeaderFlex>
          <div className="flex">
            <span>{user.username.charAt(0)}</span>
            <h2>Buongiorno, {user.username}</h2>
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
      </Headline>
    </TeacherHeaderContainer>
  );
};

TeachersHeader.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(TeachersHeader);
