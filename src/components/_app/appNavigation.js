import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Styled components
import { Container } from "../../styles/globalStyles";
import { Nav, NavList } from "../../styles/_app/appLayoutStyles";

function AppNavigation({ toggleMenu, setToggleMenu }) {
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ y: "100%" }}
            exit={{ y: "100%" }}
            animate={{ y: toggleMenu ? 0 : "100%" }}
            transition={{ duration: 0.65, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavList>
                <ul>
                  <motion.li>
                    <Link
                      to="/app/per-te"
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
                        Per te
                      </motion.div>
                    </Link>
                  </motion.li>

                  <motion.li>
                    <Link
                      to="/app/istruttori"
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
                        Istruttori
                      </motion.div>
                    </Link>
                  </motion.li>

                  <motion.li>
                    <Link
                      to="/app/calendario"
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
                        Calendario
                      </motion.div>
                    </Link>
                  </motion.li>

                  <motion.li>
                    <Link
                      to="/app/account"
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
                        Account
                      </motion.div>
                    </Link>
                  </motion.li>

                  <motion.li>
                    <Link to="/" onClick={() => setToggleMenu(!toggleMenu)}>
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
                        Logout
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

export default AppNavigation;
