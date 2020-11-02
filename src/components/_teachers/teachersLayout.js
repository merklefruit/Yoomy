import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

// Components
import Header from "./teachersHeader";
import Sidebar from "./teachersSidebar";

// Global style definition
const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    text-decoration: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: "Roboto";
    overscroll-behavior: none;
    overflow-x: hidden;
  }

`;

// Default page transition animation
const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const TeachersLayout = ({ children }) => {
  const lightTheme = {
    primary: "#264653",
    secondary: "#b3def2",
    yellow: "#FBE064",
    orange: "#f4a261",
    darkblue: "#1d3557",
    blue: "#457b9d",
    lightblue: "#8fd5ff",
    green: "#56c248",
    text: "#3C3838",
    background: "#fafafa",
    violet: "#2A265F",
    lightgray: "#f1f1f1",
    verylightgray: "#f5f5f5",
    beige: "#fff7f0",
    white: "#ffffff",
    black: "#000000",
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />

      <Grid>
        <nav>
          <Sidebar />
        </nav>

        <header>
          <Header />
        </header>

        <AnimatePresence>
          <motion.main
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <footer>
          <h3>© 2020, Yoomy Italia - Area Privata Istruttore v 0.2</h3>
        </footer>
      </Grid>
    </ThemeProvider>
  );
};

TeachersLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TeachersLayout;

const Grid = styled.div`
  display: grid;
  height: 100vh;

  grid-template-areas:
    "side header"
    "side content"
    "side footer";

  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr 50px;

  nav {
    grid-area: side;
    /* background: ${({ theme }) => theme.white}; */
    background: rgb(232, 233, 233);
    background: linear-gradient(
      301deg,
      rgba(232, 233, 233, 0) 0%,
      rgba(239, 236, 252, 1) 100%
    );
  }

  header {
    grid-area: header;
    background: ${({ theme }) => theme.white};
  }

  main {
    grid-area: content;
    /* border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
    padding-top: 20px;
  }

  footer {
    grid-area: footer;
    background: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    h3 {
      margin-left: 25px;
      color: ${({ theme }) => theme.text};
      font-family: "DM Sans";
      font-weight: 400;
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-areas:
      "side"
      "header"
      "content"
      "footer";

    grid-template-columns: 1fr;
    grid-template-rows:
      auto
      minmax(75px, auto)
      1fr
      auto;

    nav,
    aside {
      margin: 0;
    }
  }
`;
