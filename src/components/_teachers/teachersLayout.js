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
    background: ${(props) => props.theme.background};
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
    secondary: "#A9CAD9",
    yellow: "#FBE064",
    orange: "#f4a261",
    darkblue: "#1d3557",
    blue: "#457b9d",
    text: "#3C3838",
    background: "#fbfefb",
    violet: "#2A265F",
    lightgray: "#737373",
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

        <footer></footer>
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

  grid-template-columns: 280px 1fr;
  grid-template-rows: auto 1fr 50px;

  nav {
    grid-area: side;
    background: ${(props) => props.theme.blue};
  }

  header {
    grid-area: header;
  }

  main {
    grid-area: content;
  }

  footer {
    grid-area: footer;
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
