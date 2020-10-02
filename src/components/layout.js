import React, { useState } from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Header from "./header";
import Navigation from "./navigation";

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
  // const lightTheme = {
  //   primary: "#264653",
  //   secondary: "#aed9e0",
  //   yellow: "#FBE064",
  //   orange: "#f4a261",
  //   darkblue: "#1d3557",
  //   blue: "#457b9d",
  //   text: "#3C3838",
  //   background: "#fbfefb",
  //   violet: "#2A265F",
  //   lightgray: "#737373",
  // };

  // const warmTheme = {
  //   primary: "#5e6472",
  //   secondary: "#efe5dc",
  //   yellow: "#FBE064",
  //   orange: "#d69f7e",
  //   darkblue: "#efe5dc",
  //   blue: "#d0b8ac",
  //   text: "#454545",
  //   background: "#fbfefb",
  //   violet: "#2A265F",
  //   lightgray: "#737373",
  // };

  const lightTheme = {
    primary: "#264653",
    primaryDarker: "#1d3557",
    secondary: "#e9ecef",
    banners: "#457b9d",
    buttons: "#FBE064",
    accent: "#2b2d42",
    accent_variant: "#8d99ae",
    background: "#fbfefb",
    text: "#454545",
    lightgray: "#D4D6D5",
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
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
