import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Date handling
import { format, addDays } from "date-fns";
import { it } from "date-fns/locale";

const CustomCalendar = ({ onDateChange }) => {
  const today = new Date();
  const formatDay = (offset) =>
    format(addDays(today, offset), "iii dd", { locale: it });
  const handleClick = (offset) => onDateChange(addDays(today, offset));

  const daysToShow = 7;

  return (
    <Wrapper>
      <Calendar>
        {Array.from(Array(daysToShow).keys()).map((i) => (
          <div className="daycard" key={i}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleClick(i)}
            >
              {formatDay(i)}
            </motion.button>
          </div>
        ))}
      </Calendar>
    </Wrapper>
  );
};

export default CustomCalendar;

const Wrapper = styled.div`
  padding-top: 15px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
  position: relative;
  display: grid;
  place-items: center;
`;

const Calendar = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  @media (max-width: 1300px) {
    width: 75%;
  }
  @media (max-width: 1100px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
  border-bottom: 2px solid ${({ theme }) => theme.text};

  .daycard {
    margin-right: 1rem;
    margin-bottom: 25px;
    &:last-child {
      margin-right: 0;
    }
    @media (max-width: 600px) {
      margin-right: 0.5rem;
    }

    button {
      background: ${({ theme }) => theme.beige};
      border: none;
      padding: 7px 12px;
      border-radius: 12px;
      font-size: 1.1rem;

      @media (max-width: 600px) {
        font-size: 0.9rem;
        padding: 7px 8px;
      }

      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;
