import styled from "styled-components";
import { motion } from "framer-motion";

// Header styles

export const CustomHeader = styled(motion.header)`
  z-index: 1;
  background-color: ${(props) => props.theme.secondary};
`;

export const HeaderNav = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 99;
  margin-left: 0px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.9rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.text};
    letter-spacing: 1px;
    font-weight: 600;
  }

  a {
    p {
      margin-left: 30px;
      font-size: 0.9375rem;
      font-weight: 500;
      color: ${(props) => props.theme.primary};
    }
  }

  @media (max-width: 650px) {
  }
`;

export const LinkSection = styled.div`
  margin-left: 20px;
  display: flex;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: none;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;

    &:focus {
      outline: none;
    }

    span {
      width: 30px;
      height: 2px;
      display: block;
      background: ${(props) => props.theme.text};
      margin-bottom: 6px;

      &.middle-dash {
        width: 22px;
      }
    }
  }

  @media (max-width: 650px) {
    display: block;
  }
`;

// Navigation styles

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: ${(props) => props.theme.secondary};
  color: #000;
  z-index: 100;
  overflow: hidden;
`;

export const NavHeader = styled.div`
  top: 100px;
  position: relative;
  width: 55%;

  h2 {
    font-family: "Roboto";
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 2rem;
    color: ${(props) => props.theme.background};
  }
`;

export const CloseNav = styled.div`
  color: ${(props) => props.theme.background};
  font-size: 1.4rem;
  font-weight: 600;

  button {
    cursor: pointer;
    transform-origin: center;
    border: none;
    margin: 0 20px;
    background: none;
    outline: none;

    span {
      width: 40px;
      height: 6px;
      display: block;
      background: ${(props) => props.theme.background};

      &.x-1 {
        transform: rotate(45deg) translate(5px, 5px);
      }
      &.x-2 {
        transform: rotate(-45deg) translate(-2px, 0px);
      }
    }
  }
`;

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 2.2rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 82px;
      line-height: 82px;
      overflow: hidden;

      .link {
        color: ${(props) => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;

        &:hover {
          background: ${(props) => props.theme.secondary};
        }

        .arrow {
          height: 76px;
          margin-right: 8px;

          svg {
            width: 100px;
            path {
              fill: ${(props) => props.theme.background};
            }
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    ul {
      li {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 420px) {
    ul {
      li {
        font-size: 1.7rem;
      }
    }
  }
  @media (max-width: 400px) {
    ul {
      li {
        .arrow {
          visibility: hidden;
        }
      }
    }
  }
`;

// Footer styles

export const CustomFooter = styled(motion.footer)`
  margin-top: 30px;
`;

export const FooterNav = styled.div`
  width: 100%;
  padding-top: 0px;
  padding-bottom: 25px;
  z-index: 99;
  margin-bottom: 30px;
  margin-left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.9rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.text};
    letter-spacing: 1px;
    font-weight: 600;

    @media (max-width: 650px) {
    }
    @media (max-width: 400px) {
    }
  }

  a {
    p {
      margin-left: 30px;
      font-size: 0.9375rem;
      font-weight: 500;
      color: ${(props) => props.theme.primary};
    }
  }
`;
