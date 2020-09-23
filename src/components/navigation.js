import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Container, Flex } from "../styles/globalStyles";
import { Nav, NavHeader, CloseNav, NavList } from "../styles/layoutStyles";

function Navigation({ toggleMenu, setToggleMenu }) {
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "100%" }}
            exit={{ x: "100%" }}
            animate={{ x: toggleMenu ? 0 : "100%" }}
            transition={{ duration: 0.75, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <CloseNav onClick={() => setToggleMenu(!toggleMenu)}>
                    <button>
                      <span className="x-1"></span>
                      <span className="x-2"></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  <motion.li>
                    <Link
                      to="/scopri"
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      <motion.div
                        className="link"
                        initial={{ x: -108 }}
                        whileHover={{ x: -40 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.6, 0.05, -0.01, 0.9],
                        }}
                      >
                        <span className="arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 101 57"
                          >
                            <path
                              d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                              fill="#FFF"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        Scopri
                      </motion.div>
                    </Link>
                  </motion.li>

                  <motion.li>
                    <Link
                      to="/ispirazione"
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      <motion.div
                        className="link"
                        initial={{ x: -108 }}
                        whileHover={{ x: -40 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.6, 0.05, -0.01, 0.9],
                        }}
                      >
                        <span className="arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 101 57"
                          >
                            <path
                              d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                              fill="#FFF"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        Ispirazione
                      </motion.div>
                    </Link>
                  </motion.li>

                  <motion.li>
                    <Link
                      to="/contatti"
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      <motion.div
                        className="link"
                        initial={{ x: -108 }}
                        whileHover={{ x: -40 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.6, 0.05, -0.01, 0.9],
                        }}
                      >
                        <span className="arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 101 57"
                          >
                            <path
                              d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                              fill="#FFF"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        Contatti
                      </motion.div>
                    </Link>
                  </motion.li>

                  <motion.li>
                    <Link
                      to="/login"
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      <motion.div
                        className="link"
                        initial={{ x: -108 }}
                        whileHover={{ x: -40 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.6, 0.05, -0.01, 0.9],
                        }}
                      >
                        <span className="arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 101 57"
                          >
                            <path
                              d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                              fill="#FFF"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        Login
                      </motion.div>
                    </Link>
                  </motion.li>

                  <motion.li>
                    <Link
                      to="/registrati"
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      <motion.div
                        className="link"
                        initial={{ x: -108 }}
                        whileHover={{ x: -40 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.6, 0.05, -0.01, 0.9],
                        }}
                      >
                        <span className="arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 101 57"
                          >
                            <path
                              d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                              fill="#FFF"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        Registrati
                      </motion.div>
                    </Link>
                  </motion.li>
                </ul>
              </NavList>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
