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
        <h1>Yooga.</h1>
      </Logo>
      <Menu>
        <NavLink to="/teachers/home">
          <AiOutlineHome />
          <p>Home</p>
        </NavLink>
        <NavLink to="/teachers/eventi">
          <MdEventNote />
          <p>Eventi</p>
        </NavLink>
        <NavLink to="/teachers/pagamenti">
          <MdPayment />
          <p>Pagamenti</p>
        </NavLink>
        <hr />
        <NavLink to="/teachers/preferenze">
          <FiSettings />
          <p>Preferenze</p>
        </NavLink>
        <NavLink to="/teachers/supporto">
          <BiSupport />
          <p>Supporto</p>
        </NavLink>
      </Menu>
    </Container>
  );
};

export default TeachersSidebar;
