import styled from "styled-components";
import { motion } from "framer-motion";

export const CalendarSection = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 800px) {
    display: block;
  }

  .horizontal {
    border-left: 1px solid ${(props) => props.theme.lightgray};
    padding-left: 15px;
    width: 100%;
    margin-bottom: 50px;
    margin-top: 0;
    margin-left: 15px;

    @media (max-width: 800px) {
      display: block;
      border: none;
      padding: 0;
      margin-left: 0;
    }

    h3 {
      margin: 0;
      font-weight: 400;
      font-size: 1.3rem;
      width: 85%;
      line-height: 125%;
    }
  }
`;

export const Picker = styled.div`
  .nice-dates-day:before {
    background-color: ${(props) => props.theme.secondary};
  }

  width: 500px;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const EventGridSection = styled.div`
  h2 {
    margin-top: 0;
    font-family: "Montserrat";
    font-weight: 500;
  }
`;

export const EventCard = styled(motion.div)`
  margin-bottom: 1.5rem;
  margin-left: 50px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  color: ${(props) => props.theme.text};
  padding: 10px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 550px) {
    display: block;
  }

  .left {
    width: 80%;

    .upper {
      padding-top: 3px;
      display: flex;
      width: 100%;

      .photo {
        padding-left: 5px;
        img {
          border: 2px solid rgba(0, 0, 0, 0.1);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .info {
        width: 80%;
        display: block;
        margin-left: 15px;

        h4 {
          font-family: "Montserrat";
          letter-spacing: 1px;
          font-weight: 400;
          font-size: 1rem;
          margin-top: 2px;
          margin-bottom: 8px;
        }
        h3 {
          font-size: 1.3rem;
          font-weight: 500;
          margin: 0;
        }
      }
    }
    .lower {
      width: 100%;
      display: flex;
      margin-top: 8px;

      p {
        background: ${(props) => props.theme.beige};
        font-size: 0.8rem;
        margin: 0 5px;
        padding: 2px 10px;
        border-radius: 40px;
      }
    }
  }
  .right {
    width: 20%;

    .time-square {
      margin-left: auto;
      margin-right: 10px;
      position: relative;

      width: 80px;
      height: 80px;
      display: block;
      background: ${(props) => props.theme.beige};
      border-radius: 4px;

      span {
        font-size: 1.4rem;
        position: absolute;
        font-weight: 600;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
