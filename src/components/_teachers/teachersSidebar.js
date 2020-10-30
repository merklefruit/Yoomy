import React from "react";
import { NavLink } from "react-router-dom";

// Styled components
import { Container } from "../../styles/globalStyles";
import { Logo, Menu } from "../../styles/_teachers/teachersStyles";

// Icons
import { AiOutlineHome } from "react-icons/ai";
import { MdPayment, MdEventNote } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";

const TeachersSidebar = () => {
  return (
    <Container>
      <Logo>
        <h1>Yoomy.</h1>
      </Logo>
      <Menu>
        <NavLink to="/teachers/home">
          <span>
            <AiOutlineHome /> <p>Home</p>
          </span>
        </NavLink>
        <NavLink to="/teachers/eventi">
          <span>
            <MdEventNote /> <p>Eventi</p>
          </span>
        </NavLink>
        <NavLink to="/teachers/pagamenti">
          <span>
            <MdPayment /> <p>Pagamenti</p>
          </span>
        </NavLink>
        <hr />
        <NavLink to="/teachers/preferenze">
          <span>
            <FiSettings /> <p>Preferenze</p>
          </span>
        </NavLink>
        <NavLink to="/teachers/supporto">
          <span>
            <BiSupport /> <p>Supporto</p>
          </span>
        </NavLink>
      </Menu>
    </Container>
  );
};

export default TeachersSidebar;

/*

<div>
          <NavLink to="/teachers/home">
            <AiOutlineHome />
            <p>Home</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/teachers/eventi">
            <MdEventNote />
            <p>Eventi</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/teachers/pagamenti">
            <MdPayment />
            <p>Pagamenti</p>
          </NavLink>
        </div>
        <hr />
        <div>
          <NavLink to="/teachers/preferenze">
            <FiSettings />
            <p>Preferenze</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/teachers/supporto">
            <BiSupport />
            <p>Supporto</p>
          </NavLink>
        </div>

*/
