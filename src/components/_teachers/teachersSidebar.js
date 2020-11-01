import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

// Styled components
import { Container } from "../../styles/globalStyles";

// Icons
import { AiOutlineHome } from "react-icons/ai";
import { MdPayment, MdEventNote } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiSupport, BiLogOut } from "react-icons/bi";

const TeachersSidebar = ({ logout }) => {
  return (
    <Container>
      <Logo>
        <h1>Yoomy.</h1>
      </Logo>
      <Menu>
        <NavLink to="/teachers/home">
          <div className="inner">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AiOutlineHome /> <p>Home</p>
            </motion.span>
          </div>
        </NavLink>
        <NavLink to="/teachers/eventi">
          <div className="inner">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MdEventNote /> <p>Eventi</p>
            </motion.span>
          </div>
        </NavLink>
        <NavLink to="/teachers/pagamenti">
          <div className="inner">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MdPayment /> <p>Pagamenti</p>
            </motion.span>
          </div>
        </NavLink>
        <hr />
        <NavLink to="/teachers/preferenze">
          <div className="inner">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSettings /> <p>Preferenze</p>
            </motion.span>
          </div>
        </NavLink>
        <NavLink to="/teachers/supporto">
          <div className="inner">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <BiSupport /> <p>Supporto</p>
            </motion.span>
          </div>
        </NavLink>
        <Link to="/">
          <div className="inner">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={logout}
            >
              <BiLogOut /> <p>Logout</p>
            </motion.span>
          </div>
        </Link>
      </Menu>
    </Container>
  );
};

TeachersSidebar.propTypes = {
  teacher: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  teacher: state.auth.teacher,
});

export default connect(mapStateToProps, { logout })(TeachersSidebar);

const Logo = styled.div`
  padding-top: 16px;
  padding-bottom: 13px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.blue};

  h1 {
    margin: 0;
    font-size: 2rem;
  }
`;

const Menu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  padding-top: 15px;

  a {
    span {
      display: flex;
      font-size: 1.1rem;
      align-items: center;
      margin: 0;
      padding: 3px;
      height: 30px;
      padding-left: 15px;
    }
    color: ${({ theme }) => theme.text};

    svg {
      margin-right: 8px;
    }
  }

  .inner {
    height: 45px;
  }

  .active {
    span {
      border-radius: 10px;
      background: ${({ theme }) => theme.secondary};
      box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.05);
      color: ${({ theme }) => theme.text};
    }
  }
`;
