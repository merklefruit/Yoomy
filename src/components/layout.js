import React, { useState } from "react";
import PropTypes from "prop-types";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import { motion, AnimatePresence } from "framer-motion";

// components
import Header from "./header";
import Navigation from "./navigation";
import Footer from "./footer";

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

const Layout = ({ children }) => {
  const lightTheme = {
    primary: "#264653",
    secondary: "#A9CAD9",
    yellow: "#FBE064",
    orange: "#f4a261",
    red: "#f4a261",
    text: "#3C3838",
    background: "#ffffff",
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />

      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

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

      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
