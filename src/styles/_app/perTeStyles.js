import styled from "styled-components";
import { motion } from "framer-motion";

// PerTe Hero

export const PerTeHeadline = styled.div`
  color: ${(props) => props.theme.text};
  h1 {
    font-size: 3rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    width: 70%;
  }
`;

// PerTe GridSection

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 150px) 150px;

  @media (max-width: 700px) {
    display: block;
  }
`;

export const SideBarSection = styled.div`
  display: block;

  @media (max-width: 700px) {
    display: none;
  }

  color: ${(props) => props.theme.text};

  .sidebar-wrapper {
    float: right;
    text-align: right;
    margin-right: 0px;
    margin-top: 0;
    padding-right: 10px;
    border-right: 1px solid ${(props) => props.theme.text};

    h3 {
      margin-top: 2px;
    }

    p {
      &:hover {
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`;

export const CardsSection = styled.div`
  display: block;

  .course {
    background-color: ${(props) => props.theme.background};
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    max-width: 100%;
    margin: 25px 0;
    overflow: hidden;

    h6 {
      opacity: 0.7;
      margin: 0;
      margin-top: 2px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    h2 {
      letter-spacing: 1px;
      margin-top: 25px;
      margin-left: 0;
      margin-right: 0;
    }

    p {
      margin: 0;
      margin-bottom: 55px;
    }
  }

  .course-preview {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.text};
    padding: 30px;
    width: 180px;

    a {
      color: ${(props) => props.theme.text};
      font-weight: 600;
      display: inline-block;
      font-size: 0.8rem;
      opacity: 0.6;
      margin-top: 55px;
      text-decoration: none;
    }
  }

  .course-info {
    color: ${(props) => props.theme.text};
    padding-right: 30px;
    padding-left: 15px;
    padding-top: 25px;
    padding-bottom: 25px;
    position: relative;
    width: 100%;

    h6 {
      span {
        border-bottom: 1px solid ${(props) => props.theme.text};
        opacity: 0.8;

        &:hover {
          opacity: 1;
          cursor: pointer;
        }
      }
    }
  }

  .progress-container {
    position: absolute;
    top: 30px;
    right: 30px;
    text-align: right;
    width: 120px;
  }

  .progress {
    background-color: #ddd;
    border-radius: 3px;
    height: 5px;
    width: 100%;
  }

  .progress::after {
    border-radius: 3px;
    background-color: ${(props) => props.theme.secondary};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 70%;
  }

  .progress-text {
    font-size: 0.7rem;
    opacity: 0.7;
    letter-spacing: 1px;
  }
`;

export const CardButton = styled(motion.button)`
    background-color: ${(props) => props.theme.blue};
    border: 0;
    opacity: 0.85;
    border-radius: 50px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    color: ${(props) => props.theme.background};
    font-size: 1rem;
    font-weight: 500;
    padding: 12px 25px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    letter-spacing: 1px;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`;
