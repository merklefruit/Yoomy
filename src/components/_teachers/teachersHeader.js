import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

// Assets
import { BiBell } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

const TeachersHeader = ({ teacher, logout }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Header>
      <div className="flex">
        <BiBell />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex inner"
          onClick={() => setShowMenu(!showMenu)}
        >
          <RiArrowDropDownLine />
          <h4>
            {teacher.name} {teacher.surname}
          </h4>
        </motion.button>
        {showMenu && (
          <div className="dropdown">
            <div className="item">
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </Header>
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

const Header = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  float: right;

  .flex {
    display: flex;
    align-items: center;
    float: right;

    svg {
      font-size: 1.2rem;
    }

    h4 {
      margin-left: 5px;
      font-size: 1.2rem;
      font-weight: 400;
      font-family: "DM Sans";
    }
  }

  .inner {
    height: 35px;
    margin: 15px 25px 15px 20px;
    padding: 0 25px 0 15px;
    background: ${({ theme }) => theme.secondary};
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    cursor: pointer;
    border: none;

    &:focus {
      outline: none;
    }
  }

  .dropdown {
    z-index: 2;
    position: absolute;
    top: 55px;
    width: 160px;
    right: 25px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    background: ${({ theme }) => theme.white};
    padding: 15px;

    .item {
      a {
        color: ${({ theme }) => theme.text};
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 1.1rem;
        padding: 5px;
      }
      margin-bottom: 13px;
    }
  }
`;
