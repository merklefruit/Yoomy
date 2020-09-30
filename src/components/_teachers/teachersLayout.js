import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import { motion, AnimatePresence } from "framer-motion";

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
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />

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
    </ThemeProvider>
  );
};

TeachersLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TeachersLayout;