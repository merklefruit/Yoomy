import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/teachers/home">
          <AiOutlineHome />
          <p>Home</p>
        </Link>
        <Link to="/teachers/pagamenti">
          <MdPayment />
          <p>Pagamenti</p>
        </Link>
        <Link to="/teachers/eventi">
          <MdEventNote />
          <p>Eventi</p>
        </Link>
        <hr />
        <Link to="/teachers/preferenze">
          <FiSettings />
          <p>Preferenze</p>
        </Link>
        <Link to="/teachers/supporto">
          <BiSupport />
          <p>Supporto</p>
        </Link>
      </Menu>
    </Container>
  );
};

export default TeachersSidebar;
