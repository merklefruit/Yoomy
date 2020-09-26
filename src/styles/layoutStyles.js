import styled, { css } from "styled-components";
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

      &:hover {
        color: black;
      }
    }
  }
`;

export const LinkSection = styled.div`
  margin-left: 20px;
  display: flex;

  @media (max-width: 650px) {
    display: none;
  }

  ${(props) =>
    props.footer &&
    css`
      @media (max-width: 650px) {
        display: flex !important;
      }
    `}
`;

export const Menu = styled.div`
  display: none;

  @media (max-width: 650px) {
    display: block;
  }
`;

// Navigation styles

export const Nav = styled(motion.div)`
  position: fixed;
  top: 88px;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: ${(props) => props.theme.secondary};
  color: #000;
  z-index: 100;
  overflow: hidden;
`;

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: top;
  margin-top: 30px;

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
  margin-top: 75px;
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
